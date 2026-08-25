"use client";
import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const STARTER_BLUEPRINTS = {
  new_app: [
    { label: "⚡ Web SaaS App", prompt: "I want to build a modern Web SaaS dashboard app with Stripe payments and authentication." },
    { label: "🧩 Chrome Extension", prompt: "I want to create a lightweight Chrome Extension that summarizes web page text using AI." },
    { label: "📱 Habit Tracker", prompt: "I want to develop a mobile-friendly habit tracking app with offline local persistence." },
    { label: "🤖 PDF Chatbot", prompt: "I want to build a custom PDF Chatbot where users upload documents and ask questions." }
  ],
  add_feature: [
    { label: "🔑 Add OAuth Login", prompt: "I want to add NextAuth Google OAuth login support to my existing React project." },
    { label: "💳 Integrate Stripe", prompt: "I want to implement Stripe Checkout billing redirect sessions inside my payment router." },
    { label: "📝 Markdown Editor", prompt: "I want to add a rich markdown text editor component with code preview highlighting." },
    { label: "📊 Export to CSV", prompt: "I want to implement a data export utility that converts tables to CSV/Excel reports." }
  ],
  solve_problem: [
    { label: "🚫 API Error 500", prompt: "My Next.js API route returns an internal server 500 error when receiving database requests. Help me debug it." },
    { label: "🧩 Hydration Mismatch", prompt: "I am getting a React Hydration Mismatch error inside my Next.js client component layout. How do I fix it?" },
    { label: "⏳ Memory Leak", prompt: "My long-running Node background server keeps increasing in memory consumption. Help me trace the leak." },
    { label: "🔁 Infinite Loop", prompt: "My React useEffect hook is causing an infinite state update loop when fetching remote datasets." }
  ],
  refactor_redesign: [
    { label: "🎨 Obsidian Void Theme", prompt: "Help me refactor my app styles to implement an Obsidian Void deep space layout theme with thin glass borders." },
    { label: "💨 Convert to Tailwind", prompt: "I want to migrate my old CSS modules style layout sheets to modern utility Tailwind classes." },
    { label: "📱 Mobile UX Audit", prompt: "My layout shifts and overflows on mobile viewports. Help me audit and optimize it for clean mobile grids." },
    { label: "🧹 Clean UI Layout", prompt: "Help me refactor my dense sidebar components to use clean hover groups and lucide SVG icons." }
  ]
};

const PROVIDER_MODELS = {
  google: [
    { id: 'gemini-3.6-flash', name: 'Gemini 3.6 Flash' },
    { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash' },
    { id: 'gemini-3.1-flash-lite', name: 'Gemini 3.1 Flash Lite' }
  ],
  anthropic: [
    { id: 'claude-3-5-sonnet-latest', name: 'Claude 3.5 Sonnet' },
    { id: 'claude-3-5-haiku-latest', name: 'Claude 3.5 Haiku' }
  ],
  openai: [
    { id: 'gpt-4o', name: 'GPT-4o' },
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini' }
  ],
  groq: [
    { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B' },
    { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B' }
  ],
  deepseek: [
    { id: 'deepseek-chat', name: 'DeepSeek V3' },
    { id: 'deepseek-reasoner', name: 'DeepSeek R1 (Reasoner)' }
  ],
  grok: [
    { id: 'grok-2-latest', name: 'Grok 2' }
  ],
  kimi: [
    { id: 'kimi-k2.5', name: 'Kimi K2.5' }
  ],
  mistral: [
    { id: 'codestral-latest', name: 'Codestral' },
    { id: 'mistral-large-latest', name: 'Mistral Large' }
  ],
  together: [
    { id: 'Qwen/Qwen2.5-72B-Instruct-Turbo', name: 'Qwen 2.5 72B' },
    { id: 'meta-llama/Llama-3.3-70B-Instruct-Turbo', name: 'Llama 3.3 70B' }
  ],
  perplexity: [
    { id: 'llama-3.1-sonar-large-128k-online', name: 'Sonar Large Online' }
  ],
  ollama: [
    { id: 'qwen2.5-coder:32b', name: 'Qwen 2.5 Coder 32b' },
    { id: 'llama3.2', name: 'Llama 3.2' }
  ]
};

import { 
  parseCodebaseFiles, 
  cleanMarkdownForDisplay, 
  buildFileTree, 
  validateFileTags 
} from '../lib/prompt-helpers';
const FileNode = ({ node, onSelectFile, selectedFile, openFolders, toggleFolder }) => {
  const isFolder = node.isFolder;
  const isOpen = !!openFolders[node.path];

  if (isFolder) {
    return (
      <div className="pl-2.5">
        <button
          onClick={() => toggleFolder(node.path)}
          className="flex items-center gap-1.5 py-1 text-xs text-zinc-400 hover:text-white transition w-full text-left font-mono cursor-pointer"
        >
          <span className="text-[9px] text-zinc-500">{isOpen ? '▼' : '▶'}</span>
          <span>📁 {node.name}</span>
        </button>
        {isOpen && (
          <div className="border-l border-zinc-800 ml-1.5 pl-1.5 space-y-0.5">
            {Object.values(node.children).map((child) => (
              <FileNode
                key={child.path}
                node={child}
                onSelectFile={onSelectFile}
                selectedFile={selectedFile}
                openFolders={openFolders}
                toggleFolder={toggleFolder}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const active = selectedFile === node.path;
  return (
    <button
      onClick={() => onSelectFile(node.path)}
      className={`flex items-center gap-1.5 py-1 pl-4 text-xs font-mono transition w-full text-left rounded-lg truncate cursor-pointer ${
        active 
          ? 'bg-emerald-500/10 text-emerald-400 font-semibold' 
          : 'text-zinc-500 hover:text-zinc-300'
      }`}
    >
      <span>📄 {node.name}</span>
    </button>
  );
};


const TECH_OPTIONS = [
  { id: 'nextjs', label: 'Next.js App Router', desc: 'React framework using App Router, Server Components, and Server Actions.' },
  { id: 'vite', label: 'Vite React SPA', desc: 'Fast client-side React single-page application setup.' },
  { id: 'supabase', label: 'Supabase Backend', desc: 'PostgreSQL database, real-time sync, auth, and Row Level Security (RLS).' },
  { id: 'prisma', label: 'Prisma ORM', desc: 'Type-safe database client and auto-generated migration schema.' },
  { id: 'postgres', label: 'PostgreSQL Database', desc: 'Robust relational database design with indexes and relational constraints.' },
  { id: 'sqlite', label: 'SQLite DB File', desc: 'Simple local file-based database, perfect for offline or low-traffic sites.' },
  { id: 'tailwind', label: 'Tailwind CSS', desc: 'Utility-first styling utility with full layout responsive constraints.' },
  { id: 'shadcn', label: 'shadcn/ui Components', desc: 'Accessible Radix-based Tailwind primitives for modern layout structures.' }
];


export default function VibeHatchWizard() {
  // Theme state
  const [theme, setTheme] = useState('dark');
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

  // Conversational chatbot states
  const [conversation, setConversation] = useState([
    { role: 'assistant', content: "Hi! I'm the Vibe Hatch Chatbot. I will interview you about your app idea, collect your requirements, and compile them into a highly optimized prompt template. What kind of application are we building?" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Prompt compilation states
  const [isCompiling, setIsCompiling] = useState(false);
  const [versions, setVersions] = useState([]);
  const [currentVersionIdx, setCurrentVersionIdx] = useState(-1);
  const [refinementInput, setRefinementInput] = useState('');

  // Settings & Rate Limiting states
  const [provider, setProvider] = useState('google');
  const [modelId, setModelId] = useState('gemini-3.6-flash');
  const [customKeys, setCustomKeys] = useState({});
  const [tempKeyInput, setTempKeyInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionsLeft, setSessionsLeft] = useState(1);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [outputFormat, setOutputFormat] = useState('standard');

  // Multi-Workspace states
  const [workspaces, setWorkspaces] = useState(["Main Workspace", "Client Spec Sheets", "Personal Sandbox"]);
  const [activeWorkspace, setActiveWorkspace] = useState("Main Workspace");
  const [isWorkspaceDropdownOpen, setIsWorkspaceDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Multi-Folder states
  const [folders, setFolders] = useState(["Web SaaS Specs", "Chrome Utilities", "Productivity Bots"]);
  const [activeFolder, setActiveFolder] = useState("Web SaaS Specs");
  const [folderChats, setFolderChats] = useState({
    "Web SaaS Specs": [
      { role: 'assistant', content: "Hi! Let's outline your Web SaaS app specifications. Tell me about your core concept!" }
    ],
    "Chrome Utilities": [
      { role: 'assistant', content: "Hi! Let's build your Chrome Extension blueprint. Tell me what utility you want to build!" }
    ],
    "Productivity Bots": [
      { role: 'assistant', content: "Hi! Ready to outline a custom productivity bot? What platform is it for (Discord, Slack, Telegram)?" }
    ]
  });
  const [folderVersions, setFolderVersions] = useState({
    "Web SaaS Specs": [],
    "Chrome Utilities": [],
    "Productivity Bots": []
  });
  const [folderVersionIdx, setFolderVersionIdx] = useState({
    "Web SaaS Specs": -1,
    "Chrome Utilities": -1,
    "Productivity Bots": -1
  });

  // Multi-Intent states
  const [intentMode, setIntentMode] = useState('new_app');
  const [intentChats, setIntentChats] = useState({
    new_app: [
      { role: 'assistant', content: "Hi! I'm the Vibe Hatch Chatbot. I will interview you about your app idea, collect your requirements, and compile them into a highly optimized prompt template. What kind of application are we building?" }
    ],
    add_feature: [
      { role: 'assistant', content: "Hi! Let's outline feature changes for your codebase. What tech stack are you using, and what changes are we making?" }
    ],
    solve_problem: [
      { role: 'assistant', content: "Hi! Let's troubleshoot code errors. Describe the problem, paste the error logs or trace, and mention your stack." }
    ],
    refactor_redesign: [
      { role: 'assistant', content: "Hi! Let's refactor your app structure or redesign its theme layout. What styling guidelines or cleanup goals do you have?" }
    ]
  });
  const [intentVersions, setIntentVersions] = useState({
    new_app: [],
    add_feature: [],
    solve_problem: [],
    refactor_redesign: []
  });
  const [intentVersionIdx, setIntentVersionIdx] = useState({
    new_app: -1,
    add_feature: -1,
    solve_problem: -1,
    refactor_redesign: -1
  });

  const [selectedStack, setSelectedStack] = useState([]);
  const [runRedTeam, setRunRedTeam] = useState(false);
  const [isStackDrawerOpen, setIsStackDrawerOpen] = useState(false);

  // Prompt execution parameter states
  const [temperature, setTemperature] = useState(0.2);
  const [maxTokens, setMaxTokens] = useState(4000);
  const [systemNudge, setSystemNudge] = useState("");
  const [isParamsOpen, setIsParamsOpen] = useState(false);
  const [byokRequestsToday, setByokRequestsToday] = useState(0);
  const [byokSafetyBudget, setByokSafetyBudget] = useState(50);

  // UI state: Collapsible Prompt Preview Panel
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);
  const [activePreviewTab, setActivePreviewTab] = useState('spec');
  const [selectedFile, setSelectedFile] = useState(null);
  const [openFolders, setOpenFolders] = useState({});

  // Time-of-day greeting
  const [greeting, setGreeting] = useState("Good morning");

  const messagesEndRef = useRef(null);

  // Determine local greeting
  useEffect(() => {
    const hr = new Date().getHours();
    if (hr < 12) setGreeting("Good morning");
    else if (hr < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const toggleFolder = (folderPath) => {
    setOpenFolders(prev => ({ ...prev, [folderPath]: !prev[folderPath] }));
  };

  const switchIntent = (targetMode) => {
    // Save current active state
    setIntentChats(prev => ({ ...prev, [intentMode]: conversation }));
    setIntentVersions(prev => ({ ...prev, [intentMode]: versions }));
    setIntentVersionIdx(prev => ({ ...prev, [intentMode]: currentVersionIdx }));
    
    // Switch active mode
    setIntentMode(targetMode);
    
    // Load active mode state
    setConversation(intentChats[targetMode] || []);
    setVersions(intentVersions[targetMode] || []);
    setCurrentVersionIdx(intentVersionIdx[targetMode] ?? -1);
  };

  // Theme & API key sync
  useEffect(() => {
    const loadedKeys = {};
    const providersList = ['google', 'anthropic', 'openai', 'groq', 'deepseek', 'grok', 'kimi', 'mistral', 'together', 'perplexity', 'ollama'];
    providersList.forEach(p => {
      const key = localStorage.getItem(`vibe_hatch_key_${p}`);
      if (key) loadedKeys[p] = key;
    });

    // Migrate old single custom api key to google if present
    const legacyKey = localStorage.getItem('vibe_hatch_custom_api_key');
    if (legacyKey && !loadedKeys.google) {
      loadedKeys.google = legacyKey;
      localStorage.setItem('vibe_hatch_key_google', legacyKey);
    }

    setCustomKeys(loadedKeys);
    
    const savedProvider = localStorage.getItem('vibe_hatch_provider') || 'google';
    setProvider(savedProvider);
    
    const savedModelId = localStorage.getItem('vibe_hatch_model_id') || 'gemini-3.6-flash';
    setModelId(savedModelId);

    if (loadedKeys[savedProvider]) {
      setTempKeyInput(loadedKeys[savedProvider]);
    } else {
      setTempKeyInput('');
    }

    const savedTheme = localStorage.getItem('vibe_hatch_theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  // Check rate limit and safety budgets on load
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const storedLimit = localStorage.getItem('vibe_hatch_limit');
    if (storedLimit) {
      const { date, used } = JSON.parse(storedLimit);
      if (date === today && used >= 1) {
        setSessionsLeft(0);
      } else if (date !== today) {
        localStorage.setItem('vibe_hatch_limit', JSON.stringify({ date: today, used: 0 }));
        setSessionsLeft(1);
      }
    } else {
      localStorage.setItem('vibe_hatch_limit', JSON.stringify({ date: today, used: 0 }));
    }

    // BYOK safety budgets check
    const savedBudget = localStorage.getItem('vibe_hatch_byok_budget');
    if (savedBudget) {
      setByokSafetyBudget(parseInt(savedBudget));
    }

    const storedUsage = localStorage.getItem('vibe_hatch_byok_usage');
    if (storedUsage) {
      const { date, count } = JSON.parse(storedUsage);
      if (date === today) {
        setByokRequestsToday(count);
      } else {
        localStorage.setItem('vibe_hatch_byok_usage', JSON.stringify({ date: today, count: 0 }));
        setByokRequestsToday(0);
      }
    } else {
      localStorage.setItem('vibe_hatch_byok_usage', JSON.stringify({ date: today, count: 0 }));
    }
  }, []);

  // Auto-scroll chat window
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, isLoading]);

  const switchFolder = (targetFolder) => {
    // Save current active state
    setFolderChats(prev => ({ ...prev, [activeFolder]: conversation }));
    setFolderVersions(prev => ({ ...prev, [activeFolder]: versions }));
    setFolderVersionIdx(prev => ({ ...prev, [activeFolder]: currentVersionIdx }));

    // Load selected folder
    setActiveFolder(targetFolder);
    setConversation(folderChats[targetFolder] || [
      { role: 'assistant', content: `Welcome to the folder: ${targetFolder}! Let's start the requirements gathering. Describe your app concept.` }
    ]);
    setVersions(folderVersions[targetFolder] || []);
    setCurrentVersionIdx(folderVersionIdx[targetFolder] ?? -1);
  };

  const handleAddFolder = () => {
    const name = prompt("Enter new folder name:");
    if (name && name.trim()) {
      const folderName = name.trim();
      if (!folders.includes(folderName)) {
        setFolders(prev => [...prev, folderName]);
        setFolderChats(prev => ({
          ...prev,
          [folderName]: [
            { role: 'assistant', content: `Welcome to your new folder: ${folderName}! Let's start the requirements gathering. Describe your app concept.` }
          ]
        }));
        setFolderVersions(prev => ({
          ...prev,
          [folderName]: []
        }));
        setFolderVersionIdx(prev => ({
          ...prev,
          [folderName]: -1
        }));
      }
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('vibe_hatch_theme', nextTheme);
  };

  const handleSaveKey = (e) => {
    e.preventDefault();
    const trimmedInput = tempKeyInput.trim();
    const updatedKeys = { ...customKeys };

    if (trimmedInput === '') {
      delete updatedKeys[provider];
      localStorage.removeItem(`vibe_hatch_key_${provider}`);
    } else {
      updatedKeys[provider] = trimmedInput;
      localStorage.setItem(`vibe_hatch_key_${provider}`, trimmedInput);
    }

    localStorage.setItem('vibe_hatch_provider', provider);
    localStorage.setItem('vibe_hatch_model_id', modelId);

    setCustomKeys(updatedKeys);
    setIsModalOpen(false);
  };

  // Heuristic tracker status
  const getRequirementStatus = () => {
    const allText = conversation.map(m => m.content.toLowerCase()).join(' ');
    const userMessages = conversation.filter(m => m.role === 'user');
    return {
      idea: userMessages.length >= 1,
      platform: /\b(web|mobile|extension|desktop|bot|api|platform|ios|android|chrome|discord|slack|telegram)\b/i.test(allText),
      features: userMessages.length >= 2 || /\b(feature|features|requirement|requirements|function|functionality|logic|do|action|stripe|auth|login)\b/i.test(allText),
      tech: /\b(next|react|native|expo|tailwind|css|typescript|rust|tauri|python|node|fastapi|express|js|ts|html)\b/i.test(allText),
      storage: /\b(db|database|supabase|postgres|sql|sqlite|localstorage|indexeddb|persist|storage|vector|rag|cloud|save|memory)\b/i.test(allText)
    };
  };

  const reqStatus = getRequirementStatus();
  const readyToHatch = reqStatus.idea && reqStatus.platform;
  const isAiReady = conversation.length > 1 && conversation[conversation.length - 1].content.includes('[READY_TO_HATCH]');

  const handleSendMessage = async (e, directText = null) => {
    if (e) e.preventDefault();
    const promptText = directText || chatInput;
    if (!promptText.trim() || isLoading) return;

    setErrorMessage('');
    const updatedConversation = [...conversation, { role: 'user', content: promptText }];
    setConversation(updatedConversation);
    setChatInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: updatedConversation,
          provider,
          modelId,
          customApiKey: customKeys[provider] || null,
          temperature,
          maxTokens,
          systemNudge,
          intentMode,
          selectedStack,
          runRedTeam
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to get chat response.');

      setConversation(prev => [...prev, { role: 'assistant', content: data.result }]);
      if (customKeys[provider]) {
        const today = new Date().toISOString().split('T')[0];
        const nextCount = byokRequestsToday + 1;
        setByokRequestsToday(nextCount);
        localStorage.setItem('vibe_hatch_byok_usage', JSON.stringify({ date: today, count: nextCount }));
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHatchPrompt = async () => {
    if (conversation.filter(m => m.role === 'user').length === 0) {
      setErrorMessage("Please type some ideas to get started first!");
      return;
    }

    if (!customKeys[provider] && sessionsLeft <= 0) {
      setIsLimitModalOpen(true);
      return;
    }

    setIsCompiling(true);
    setErrorMessage('');
    setIsPreviewOpen(true); // Open compiler preview panel automatically

    try {
      const res = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation,
          outputFormat,
          provider,
          modelId,
          customApiKey: customKeys[provider] || null,
          temperature,
          maxTokens,
          systemNudge,
          intentMode,
          selectedStack,
          runRedTeam
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to compile prompt template.');

      const newSpec = data.result;
      const newVersions = [...versions, newSpec];
      setVersions(newVersions);
      setCurrentVersionIdx(newVersions.length - 1);

      if (!customKeys[provider]) {
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('vibe_hatch_limit', JSON.stringify({ date: today, used: 1 }));
        setSessionsLeft(0);
      } else {
        const today = new Date().toISOString().split('T')[0];
        const nextCount = byokRequestsToday + 1;
        setByokRequestsToday(nextCount);
        localStorage.setItem('vibe_hatch_byok_usage', JSON.stringify({ date: today, count: nextCount }));
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: theme === 'dark' ? ['#ffffff', '#afea93', '#64748b'] : ['#0f172a', '#afea93', '#3b82f6']
      });
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsCompiling(false);
    }
  };

  const handleRefinePrompt = async (e) => {
    if (e) e.preventDefault();
    if (!refinementInput.trim() || isCompiling) return;

    setIsCompiling(true);
    setErrorMessage('');

    const refinementInstruction = `Refine the compiled prompt: ${refinementInput}`;
    const updatedConversation = [...conversation, { role: 'user', content: refinementInstruction }];
    setConversation(updatedConversation);
    setRefinementInput('');

    try {
      const res = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: updatedConversation,
          outputFormat,
          provider,
          modelId,
          customApiKey: customKeys[provider] || null,
          temperature,
          maxTokens,
          systemNudge,
          intentMode,
          selectedStack,
          runRedTeam
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to refine prompt.');

      const newSpec = data.result;
      const newVersions = [...versions, newSpec];
      setVersions(newVersions);
      setCurrentVersionIdx(newVersions.length - 1);
      if (customKeys[provider]) {
        const today = new Date().toISOString().split('T')[0];
        const nextCount = byokRequestsToday + 1;
        setByokRequestsToday(nextCount);
        localStorage.setItem('vibe_hatch_byok_usage', JSON.stringify({ date: today, count: nextCount }));
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsCompiling(false);
    }
  };

  const calculateTokenStats = (text) => {
    if (!text) return { compiled: 0, saved: 0, dollars: "0.00" };
    const compiledTokens = Math.round(text.length / 4);
    const saved = Math.round(compiledTokens * 2.8 + 300);
    const dollars = (saved / 1000 * 0.015).toFixed(2);
    return { compiled: compiledTokens, saved, dollars };
  };

  const getActiveModelLabel = () => {
    const list = PROVIDER_MODELS[provider] || [];
    const match = list.find(m => m.id === modelId);
    if (match) return match.name;
    for (const key in PROVIDER_MODELS) {
      const found = PROVIDER_MODELS[key].find(m => m.id === modelId);
      if (found) return found.name;
    }
    return modelId;
  };

  const getApiKeyLink = () => {
    const links = {
      google: "https://aistudio.google.com/app/apikey",
      anthropic: "https://console.anthropic.com/settings/keys",
      openai: "https://platform.openai.com/api-keys",
      groq: "https://console.groq.com/keys",
      deepseek: "https://platform.deepseek.com/api_keys",
      grok: "https://console.x.ai",
      kimi: "https://platform.moonshot.cn/console/api-keys",
      mistral: "https://console.mistral.ai/api-keys",
      together: "https://api.together.ai/settings/api-keys",
      perplexity: "https://www.perplexity.ai/settings/api",
      ollama: "https://ollama.com"
    };
    return links[provider] || "#";
  };

  const currentPromptContent = versions[currentVersionIdx] || '';
  const stats = calculateTokenStats(currentPromptContent);

  const copyToClipboard = () => {
    if (!currentPromptContent) return;
    navigator.clipboard.writeText(currentPromptContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    if (!currentPromptContent) return;
    const blob = new Blob([currentPromptContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vibe-hatch-${outputFormat === 'cursorrules' ? 'rules' : 'prompt'}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Check if chat is fresh/empty (only assistant greeting)
  const isChatFresh = conversation.length <= 1;

  return (
    <div
      className={`min-h-screen flex relative transition-colors duration-500 selection:bg-emerald-500/30 selection:text-emerald-500 ${
        theme === 'light' ? 'light-mode bg-white text-slate-900' : 'bg-[#121214] text-zinc-100'
      }`}
    >
      {/* 1. LEFT SIDEBAR */}
      <aside
        className={`border-r flex flex-col justify-between shrink-0 transition-all duration-300 ease-in-out hidden md:flex relative ${
          isSidebarOpen ? 'w-60 p-4 opacity-100' : 'w-0 p-0 opacity-0 overflow-hidden border-r-0'
        }`}
        style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
      >
        <div>
          {/* Sidebar Top: Project Switcher */}
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <button 
                onClick={() => setIsWorkspaceDropdownOpen(prev => !prev)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border text-left cursor-pointer hover:brightness-110 transition" 
                style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0"><path d="M12 2C7 2 3 7 3 14c0 4.4 4 8 9 8s9-3.6 9-8c0-7-4-12-9-12z"/></svg>
                  <span className="text-xs font-black tracking-tight truncate">{activeWorkspace}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 shrink-0 transition-transform duration-200" style={{ transform: isWorkspaceDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}><path d="m6 9 6 6 6-6"/></svg>
              </button>
              
              {isWorkspaceDropdownOpen && (
                <div 
                  className="absolute left-0 right-0 mt-1.5 rounded-xl border shadow-xl z-20 overflow-hidden text-xs py-1"
                  style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
                >
                  {workspaces.map((ws) => (
                    <button
                      key={ws}
                      onClick={() => {
                        setActiveWorkspace(ws);
                        setIsWorkspaceDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-[var(--choice-hover)] transition-all flex items-center justify-between cursor-pointer ${
                        activeWorkspace === ws ? 'text-emerald-400 font-semibold' : 'text-zinc-400'
                      }`}
                    >
                      <span>{ws}</span>
                      {activeWorkspace === ws && <span className="text-[10px]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2.5 rounded-xl border flex items-center justify-center text-zinc-400 hover:text-white transition cursor-pointer hover:bg-[var(--choice-hover)] shrink-0"
              style={{ borderColor: 'var(--input-border)', backgroundColor: 'var(--choice-bg)' }}
              title="Collapse Sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer" style={{ backgroundColor: 'var(--choice-hover)', color: 'var(--text-main)', borderLeft: '2px solid #afea93' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span>Chat Assistant</span>
            </button>
            <button onClick={() => setIsModalOpen(true)} className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-zinc-400 hover:text-white transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>API Configuration</span>
            </button>
          </nav>

          {/* Folder Groups */}
          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-between px-2">
              <span className="text-[9px] uppercase font-mono tracking-wider font-bold block" style={{ color: 'var(--text-dim)' }}>Saved Folders</span>
              <button 
                onClick={handleAddFolder} 
                className="text-xs text-zinc-500 hover:text-emerald-500 hover:scale-110 transition cursor-pointer font-bold" 
                title="Create Folder"
              >
                +
              </button>
            </div>
            <div className="space-y-1 pl-2">
              {folders.map((folder) => (
                <button 
                  key={folder} 
                  onClick={() => switchFolder(folder)}
                  className={`w-full text-left text-xs py-1.5 px-2 rounded-lg cursor-pointer truncate flex items-center gap-2 transition-all ${
                    activeFolder === folder 
                      ? 'bg-[var(--choice-hover)] text-emerald-400 font-bold border-l-2 border-emerald-500 pl-1.5' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={activeFolder === folder ? "text-emerald-400" : "text-zinc-500"}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/></svg>
                  <span className="truncate">{folder}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Bottom */}
        <div className="space-y-3 pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
          {customKeys[provider] ? (
            <div className="p-3 rounded-xl border text-[11px] font-mono leading-relaxed text-left" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}>
              <div className="flex items-center justify-between mb-1">
                <span>Key Daily Usage</span>
                <span className={`font-bold ${
                  byokRequestsToday >= byokSafetyBudget ? 'text-rose-500 font-black' :
                  byokRequestsToday >= byokSafetyBudget * 0.8 ? 'text-amber-500' :
                  'text-emerald-500'
                }`}>{byokRequestsToday}/{byokSafetyBudget} req</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1">
                <div 
                  className={`h-1 rounded-full transition-all duration-300 ${
                    byokRequestsToday >= byokSafetyBudget ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)] animate-pulse' :
                    byokRequestsToday >= byokSafetyBudget * 0.8 ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]' :
                    'bg-emerald-500'
                  }`} 
                  style={{ width: `${Math.min(100, (byokRequestsToday / byokSafetyBudget) * 100)}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-xl border text-[11px] font-mono leading-relaxed text-left" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}>
              <div className="flex items-center justify-between mb-1">
                <span>Free Tier Quota</span>
                <span className="text-emerald-500 font-bold">{sessionsLeft}/1</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1">
                <div className="bg-emerald-500 h-1 rounded-full animate-pulse" style={{ width: sessionsLeft > 0 ? '100%' : '0%' }}></div>
              </div>
            </div>
          )}

          {/* Theme toggler */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium border hover:brightness-110 transition cursor-pointer"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
          >
            <span>Appearance</span>
            <span className="text-[10px]">{theme === 'dark' ? '☀️ Opal' : '🌙 Void'}</span>
          </button>

          {/* Creator Portfolio & Buy Me a Coffee Links */}
          <div className="space-y-2 pt-2.5 border-t text-[10px]" style={{ borderColor: 'var(--glass-border)' }}>
            <a
              href="https://chickengor.github.io/jimmy_wong/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between font-mono hover:text-emerald-400 transition-colors group cursor-pointer"
              style={{ color: 'var(--text-muted)' }}
            >
              <span className="truncate">By <strong className="font-semibold" style={{ color: 'var(--text-main)' }}>ChickenRice Studio</strong></span>
              <span className="text-[9px] opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
            </a>

            <a
              href="https://buymeacoffee.com/crdevstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all duration-200 bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_12px_rgba(245,158,11,0.4)] cursor-pointer w-full justify-center text-[10px]"
            >
              <span>☕</span>
              <span>Buy me a coffee</span>
            </a>
          </div>

          <span className="text-[9px] block text-center mt-1" style={{ color: 'var(--text-dim)' }}>
            © 2026 ChickenRice Studio
          </span>
        </div>
      </aside>

      {/* 2. MAIN CENTERED CHAT COLUMN */}
      <main className="flex-1 flex flex-col justify-between min-w-0 bg-[var(--bg-main)] relative">
        
        {/* Sidebar Expand trigger (shows floating when sidebar is collapsed) */}
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-4 left-4 p-2.5 rounded-xl border flex items-center justify-center text-zinc-400 hover:text-white transition cursor-pointer hover:bg-[var(--choice-hover)] shadow-md z-30"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
            title="Expand Sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        )}
        
        {/* Warning banner, tabs and controls wrapper */}
        <div className="pt-4 px-4 flex flex-col items-center gap-3 shrink-0">
          {/* Warning banner centered at top */}
          {isBannerVisible && (
            <div className={`px-4 py-1 rounded-full text-[10px] font-sans flex items-center justify-between gap-3 shadow-sm max-w-lg shrink-0 border select-none transition-all ${
              theme === 'dark' 
                ? 'bg-[#afea93] text-black border-transparent font-medium shadow-emerald-500/5' 
                : 'bg-[#e2f4da] text-[#1f2d1a] border-[#afea93]/40 font-medium'
            }`}>
              <div className="flex items-center gap-1.5 py-0.5">
                <span className="text-[12px] font-bold">ⓘ</span>
                <span className="truncate">Vibe Hatch AI can make mistakes. Check important info.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`text-[10px] ${theme === 'dark' ? 'text-black/35' : 'text-[#1f2d1a]/30'}`}>|</span>
                <button 
                  onClick={() => setIsBannerVisible(false)}
                  className="hover:scale-110 active:scale-95 transition cursor-pointer text-[10px] p-0.5"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Dynamic Intent Selector Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl border text-[10px] shadow-sm max-w-md w-full justify-between" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
            {[
              { id: 'new_app', name: 'Build App', desc: 'Create app specifications from scratch' },
              { id: 'add_feature', name: 'Add Feature', desc: 'Iterate or insert new code patterns' },
              { id: 'solve_problem', name: 'Solve Bug', desc: 'Troubleshoot and write code fixes' },
              { id: 'refactor_redesign', name: 'Redesign UI', desc: 'Refactor layout style sheets' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchIntent(tab.id)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-semibold transition-all cursor-pointer text-center ${
                  intentMode === tab.id 
                    ? 'bg-emerald-500 text-black font-black shadow-md scale-[1.01]' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title={tab.desc}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Advanced Settings trigger row */}
          <div className="max-w-md w-full flex items-center justify-between text-[10px] px-1.5 shrink-0 select-none">
            <button 
              onClick={() => setIsStackDrawerOpen(true)}
              className="flex items-center gap-1.5 hover:text-emerald-400 text-zinc-400 font-semibold cursor-pointer select-none py-1.5"
            >
              <span>⚙️ Advanced Settings</span>
              {(selectedStack.length > 0 || runRedTeam) && (
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold ml-1">
                  {selectedStack.length > 0 ? `${selectedStack.length} stack` : ''}
                  {selectedStack.length > 0 && runRedTeam ? ' + ' : ''}
                  {runRedTeam ? 'audit' : ''}
                </span>
              )}
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-500" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {(selectedStack.length > 0 || runRedTeam) && (
              <button
                onClick={() => {
                  setSelectedStack([]);
                  setRunRedTeam(false);
                }}
                className="text-zinc-500 hover:text-rose-400 transition cursor-pointer select-none font-medium flex items-center gap-1 py-1.5"
                title="Reset all settings to default"
              >
                <span>↺ Reset All</span>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic center workspace */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 flex flex-col justify-center">
          
          {isChatFresh ? (
            /* FRESH STATE: Elegant Centered Greeting (Viper layout style) */
            <div className="max-w-2xl w-full mx-auto text-center space-y-8 my-auto animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-3xl font-light tracking-tight text-[var(--text-main)]">
                  {greeting}, Creator.
                </h2>
                <h3 className="text-lg font-light" style={{ color: 'var(--text-muted)' }}>
                  {intentMode === 'new_app' ? 'What should we build today?' :
                   intentMode === 'add_feature' ? 'What features or changes are we planning?' :
                   intentMode === 'solve_problem' ? 'What bug or error trace should we solve?' :
                   'What layouts or visual refinements are we refactoring?'}
                </h3>
              </div>

              {/* Centered chat bar */}
              <div 
                className="w-full border rounded-2xl p-3 shadow-md focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/30 transition-all text-left"
                style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}
              >
                <textarea
                  className="w-full bg-transparent border-none outline-none text-xs text-[var(--text-main)] resize-none h-16 placeholder-zinc-400 pr-8"
                  placeholder="Describe your app idea (e.g. A lo-fi desktop timer)..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  disabled={isLoading}
                  autoFocus
                />
                <div 
                  className="flex items-center justify-between pt-2 border-t mt-2"
                  style={{ borderColor: 'var(--glass-border)' }}
                >
                  <div className="flex items-center gap-2">
                    <button 
                      type="button" 
                      onClick={() => setIsModalOpen(true)} 
                      className="p-1 rounded text-zinc-400 transition hover:bg-[var(--choice-hover)] flex items-center justify-center" 
                      title="API Configuration"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setIsParamsOpen(true)}
                      className="p-1 rounded text-zinc-400 transition hover:bg-[var(--choice-hover)] flex items-center justify-center" 
                      title="Prompt Parameters"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z"/><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z"/></svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                        className="text-[9px] font-mono text-zinc-500 hover:text-zinc-300 uppercase font-semibold flex items-center gap-1 transition select-none cursor-pointer"
                        title="Change LLM Model"
                      >
                        <span>{getActiveModelLabel()}</span>
                        <span className="text-[7px] text-zinc-500/80">▼</span>
                      </button>

                      {isModelDropdownOpen && (
                        <>
                          {/* Invisible Click Backdrop */}
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsModelDropdownOpen(false)}
                          />
                          {/* Dropdown Options Container */}
                          <div 
                            className="absolute bottom-full right-0 mb-2 w-48 rounded-xl border shadow-xl z-50 py-1.5 animate-slide-in text-[10px] text-left"
                            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
                          >
                            <div className="px-3 py-1 text-[8px] uppercase tracking-wider font-mono text-zinc-500 font-bold border-b mb-1" style={{ borderColor: 'var(--input-border)' }}>
                              Select Engine
                            </div>
                            {(PROVIDER_MODELS[provider] || []).map((m) => (
                              <button
                                key={m.id}
                                type="button"
                                onClick={() => {
                                  setModelId(m.id);
                                  localStorage.setItem('vibe_hatch_model_id', m.id);
                                  setIsModelDropdownOpen(false);
                                }}
                                className={`w-full px-3 py-1.5 text-left font-mono transition cursor-pointer flex items-center justify-between hover:bg-[var(--choice-hover)] ${
                                  modelId === m.id 
                                    ? 'text-emerald-500 font-bold bg-emerald-500/5' 
                                    : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                              >
                                <span>{m.name}</span>
                                {modelId === m.id && <span>✓</span>}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      disabled={isLoading || !chatInput.trim()}
                      onClick={handleSendMessage}
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold hover:opacity-85 active:scale-95 transition ${
                        theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
                      }`}
                    >
                      ↑
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Suggestion Pills */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {(STARTER_BLUEPRINTS[intentMode] || []).map((bp) => (
                  <button
                    key={bp.label}
                    onClick={() => handleSendMessage(null, bp.prompt)}
                    className="px-3 py-1.5 rounded-lg border text-[10px] transition cursor-pointer hover:border-emerald-500/50 hover:text-emerald-500"
                    style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}
                  >
                    {bp.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* CONVERSATION ACTIVE STATE: Scrollable Chatroom */
            <div className="max-w-2xl w-full mx-auto flex flex-col h-full justify-between">
              
              {/* Requirements Checklist Progress */}
              <div className="grid grid-cols-5 gap-1.5 p-2 rounded-xl mb-4 text-[9px] font-mono border shrink-0" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                {Object.keys(reqStatus).map((key) => {
                  const val = reqStatus[key];
                  return (
                    <div key={key} className={`flex items-center gap-1 justify-center py-1 rounded transition-colors ${
                      val 
                        ? (theme === 'dark' ? 'text-emerald-400 bg-emerald-500/5' : 'text-emerald-700 bg-emerald-500/10')
                        : 'text-zinc-500'
                    }`}>
                      <span>{val ? '✓' : '○'}</span> <span className="truncate capitalize">{key}</span>
                    </div>
                  );
                })}
              </div>

              {/* Messages container */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-4 mb-4 scroll-smooth no-scrollbar">
                {conversation.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-2.5 max-w-[85%] animate-fade-in ${
                      msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 text-zinc-300' 
                        : 'bg-slate-200 border-slate-300 text-slate-800'
                    }`}>
                      {msg.role === 'user' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-2xl text-xs leading-relaxed border ${
                        msg.role === 'user'
                          ? (theme === 'dark'
                              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                              : 'bg-emerald-100/80 text-emerald-950 border-emerald-300')
                          : (theme === 'dark'
                              ? 'bg-white/[0.03] text-zinc-300 border-white/[0.05]'
                              : 'bg-slate-100/90 text-slate-900 border-slate-300')
                      }`}
                    >
                      {msg.content.replace('[READY_TO_HATCH]', '')}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2.5 max-w-[80%] animate-pulse">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                      theme === 'dark' ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-slate-200 border-slate-300 text-slate-800'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                    </div>
                    <div className={`p-3 rounded-2xl text-xs border flex items-center gap-1 ${
                      theme === 'dark'
                        ? 'bg-white/[0.03] text-zinc-500 border-white/[0.05]'
                        : 'bg-slate-100/90 text-slate-500 border-slate-300'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Area (Conversation Mode) */}
              <div className="space-y-3 pt-3 border-t shrink-0" style={{ borderColor: 'var(--input-border)' }}>
                <div 
                  className="w-full border rounded-2xl p-2.5 shadow focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/30 transition-all text-left flex gap-2 items-center"
                  style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}
                >
                  <input
                    type="text"
                    className="w-full bg-transparent border-none outline-none text-xs text-[var(--text-main)] placeholder-zinc-400 px-1 py-1"
                    placeholder="Ask standard follow-up questions..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    disabled={isLoading}
                  />
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                        className="text-[9px] font-mono text-zinc-500 hover:text-zinc-300 uppercase font-semibold flex items-center gap-1 transition select-none cursor-pointer"
                        title="Change LLM Model"
                      >
                        <span>{getActiveModelLabel()}</span>
                        <span className="text-[7px] text-zinc-500/80">▼</span>
                      </button>

                      {isModelDropdownOpen && (
                        <>
                          {/* Invisible Click Backdrop */}
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsModelDropdownOpen(false)}
                          />
                          {/* Dropdown Options Container */}
                          <div 
                            className="absolute bottom-full right-0 mb-2 w-48 rounded-xl border shadow-xl z-50 py-1.5 animate-slide-in text-[10px] text-left"
                            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
                          >
                            <div className="px-3 py-1 text-[8px] uppercase tracking-wider font-mono text-zinc-500 font-bold border-b mb-1" style={{ borderColor: 'var(--input-border)' }}>
                              Select Engine
                            </div>
                            {(PROVIDER_MODELS[provider] || []).map((m) => (
                              <button
                                key={m.id}
                                type="button"
                                onClick={() => {
                                  setModelId(m.id);
                                  localStorage.setItem('vibe_hatch_model_id', m.id);
                                  setIsModelDropdownOpen(false);
                                }}
                                className={`w-full px-3 py-1.5 text-left font-mono transition cursor-pointer flex items-center justify-between hover:bg-[var(--choice-hover)] ${
                                  modelId === m.id 
                                    ? 'text-emerald-500 font-bold bg-emerald-500/5' 
                                    : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                              >
                                <span>{m.name}</span>
                                {modelId === m.id && <span>✓</span>}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      disabled={isLoading || !chatInput.trim()}
                      onClick={handleSendMessage}
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold hover:opacity-85 active:scale-95 transition shrink-0 ${
                        theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
                      }`}
                    >
                      ↑
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleHatchPrompt}
                    disabled={isCompiling}
                    className={`flex-1 py-2.5 rounded-xl font-bold transition text-xs cursor-pointer flex items-center justify-center ${
                      readyToHatch || isAiReady
                        ? 'bg-emerald-500 text-black border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:brightness-105'
                        : 'bg-zinc-800 border border-zinc-700 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    {isCompiling ? (
                      <span className="flex items-center justify-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10c0 2-3 3-3 3"/></svg>
                        Gathering constraints...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.82 2.82 0 0 1 0 4c-1 1-2.5 1-3.5 0L2.3 3.8a2.82 2.82 0 0 1 0-4c1-1 2.5-1 3.5 0Z"/><path d="m5.6 7.2 1.4-1.4"/><path d="m7.2 10.4 1.4-1.4"/><path d="m10.4 12 1.4-1.4"/><path d="m12 15.2 1.4-1.4"/><path d="m15.2 16.8 1.4-1.4"/></svg>
                        Hatch Developer Prompt
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => setIsPreviewOpen(prev => !prev)}
                    className="px-3 rounded-xl border text-xs font-semibold hover:bg-zinc-800 transition cursor-pointer"
                    style={{ borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
                  >
                    {isPreviewOpen ? 'Hide Preview' : 'Show Preview'}
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* 3. COLLAPSIBLE RIGHT PREVIEW PANEL */}
      <section
        className={`border-l flex flex-col transition-all duration-300 ease-in-out fixed lg:static inset-y-0 right-0 z-30 h-full lg:h-screen shrink-0 relative ${
          isPreviewOpen 
            ? 'w-full sm:w-[400px] lg:w-[420px] opacity-100 translate-x-0' 
            : 'w-0 opacity-0 overflow-hidden border-l-0 translate-x-full lg:translate-x-0'
        }`}
        style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
      >
        <div className="p-4 flex flex-col h-full justify-between overflow-y-auto">
          {/* Header Close button for Mobile/Tablet */}
          <div className="flex justify-end mb-2 shrink-0">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="p-1 rounded text-zinc-400 hover:text-white transition cursor-pointer hover:bg-[var(--choice-hover)] flex items-center justify-center gap-1 text-[10px]"
              title="Close Panel"
            >
              <span>Close Output</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          {versions.length === 0 && !isCompiling ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6 my-auto select-none">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border relative"
                style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-black tracking-tight text-emerald-500">Prompt Output Chamber</h4>
                <p className="text-[11px] max-w-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Your compiled developer instructions, directory blueprints, and tech stack constraints will manifest here.
                </p>
              </div>
              <div className="text-[10px] font-mono p-3 rounded-lg border border-dashed text-zinc-500" style={{ borderColor: 'var(--input-border)', backgroundColor: 'var(--choice-bg)' }}>
                💡 Click "Hatch Developer Prompt" once requirements gathering is complete!
              </div>
            </div>
          ) : (
            <>
              {/* Controls bar */}
              <div>
                <div className="flex flex-col gap-2 pb-3 border-b mb-3" style={{ borderColor: 'var(--glass-border)' }}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {/* View mode tabs */}
                    <div className="flex items-center gap-1 p-1 rounded-xl border text-[10px]" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                      <button
                        onClick={() => setActivePreviewTab('spec')}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer select-none ${activePreviewTab === 'spec' ? 'tab-active' : 'tab-inactive'}`}
                      >
                        📝 Spec Sheet
                      </button>
                      <button
                        onClick={() => {
                          setActivePreviewTab('workspace');
                          setSelectedFile(null);
                        }}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer select-none ${activePreviewTab === 'workspace' ? 'tab-active' : 'tab-inactive'}`}
                      >
                        📁 File Explorer
                      </button>
                    </div>

                    {/* Output format selectors (Only visible in Spec tab) */}
                    {activePreviewTab === 'spec' && (
                      <div className="flex items-center gap-1 p-1 rounded-xl border text-[10px]" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                        <button
                          onClick={() => setOutputFormat('standard')}
                          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer select-none ${outputFormat === 'standard' ? 'tab-active' : 'tab-inactive'}`}
                        >
                          Standard
                        </button>
                        <button
                          onClick={() => setOutputFormat('cursorrules')}
                          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer select-none ${outputFormat === 'cursorrules' ? 'tab-active' : 'tab-inactive'}`}
                        >
                          .cursorrules
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Checkpoints */}
                  {versions.length > 1 && (
                    <div className="flex items-center gap-1.5 p-1 rounded-xl border text-[9px] w-fit" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                      <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-tight px-1">Checkpoints:</span>
                      {versions.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentVersionIdx(idx);
                            setSelectedFile(null);
                          }}
                          className={`px-1.5 py-0.5 rounded font-mono font-bold transition cursor-pointer ${currentVersionIdx === idx ? 'bg-emerald-500 text-white' : 'text-zinc-400'}`}
                        >
                          v{idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions: Copy & Download (Only visible in Spec tab) */}
                {activePreviewTab === 'spec' && (
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">Compiled Output</span>
                    <div className="flex items-center gap-1.5">
                      <button onClick={downloadMarkdown} className="px-2 py-1 rounded border text-[9px] font-medium hover:bg-zinc-800 transition cursor-pointer" style={{ borderColor: 'var(--input-border)', color: 'var(--text-main)' }}>
                        Download
                      </button>
                      <button onClick={copyToClipboard} className="px-2 py-1 rounded border text-[9px] font-medium hover:bg-zinc-800 transition cursor-pointer" style={{ borderColor: 'var(--input-border)', color: 'var(--text-main)' }}>
                        {copied ? "Copied! ✓" : "Copy"}
                      </button>
                    </div>
                  </div>
                )}

                {/* Token savings statistics (Only visible in Spec tab) */}
                {activePreviewTab === 'spec' && (
                  <div className="mb-3 p-2.5 border rounded-xl text-[9px] font-mono flex flex-wrap justify-between items-center gap-2" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
                    <div>
                      <span className="text-emerald-500 font-semibold inline-flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="fill-emerald-500 stroke-none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        ~{stats?.saved?.toLocaleString()} Tokens Optimized
                      </span>
                      <span className="ml-1 font-light" style={{ color: 'var(--text-muted)' }}>(~${stats?.dollars} Context saved)</span>
                    </div>
                    <span className="px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      v{currentVersionIdx + 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Compiled Output Viewbox */}
              <div className="flex-1 rounded-xl p-3 overflow-y-auto border border-white/[0.08] leading-relaxed shadow-inner relative flex flex-col justify-between" style={{ backgroundColor: 'var(--code-bg)' }}>
                {isCompiling ? (
                  <div className="space-y-4 animate-pulse p-2 font-sans select-none flex-1">
                    <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 w-fit">
                      <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10c0 2-3 3-3 3"/></svg>
                        Archiving & generating prompt template...
                      </span>
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="h-2 bg-white/[0.1] rounded w-1/4 mb-3"></div>
                      <div className="h-1.5 bg-white/[0.05] rounded w-3/4"></div>
                      <div className="h-1.5 bg-white/[0.05] rounded w-1/2"></div>
                    </div>
                  </div>
                ) : activePreviewTab === 'spec' ? (
                  /* TAB A: SPEC SHEET VIEW */
                  <div className="font-mono text-[10px] text-emerald-400 select-all whitespace-pre-wrap flex-1">
                    {cleanMarkdownForDisplay(currentPromptContent)}
                  </div>
                ) : (
                  /* TAB B: WORKSPACE FILE EXPLORER VIEW */
                  (() => {
                    const validation = validateFileTags(currentPromptContent);
                    const parsedFiles = parseCodebaseFiles(currentPromptContent);
                    const fileList = Object.keys(parsedFiles);

                    if (fileList.length === 0) {
                      if (!validation.isValid) {
                        return (
                          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto select-none font-sans">
                            <span className="text-2xl text-rose-500">⚠️</span>
                            <h5 className="text-[11px] font-bold text-zinc-350">Workspace Construction Failed</h5>
                            <p className="text-[10px] max-w-xs text-zinc-500 leading-normal">
                              We detected malformed codebase tags in the generated prompt, making it impossible to render the file tree:
                            </p>
                            <div className="w-full text-left p-3 bg-rose-500/10 border border-rose-500/25 rounded-lg text-[9px] text-rose-400 font-mono space-y-1 overflow-x-auto max-h-[150px]">
                              {validation.errors.map((err, idx) => (
                                <div key={idx}>• {err}</div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto select-none font-sans">
                          <span className="text-2xl">📁</span>
                          <h5 className="text-[11px] font-bold text-zinc-300">Workspace is Ephemeral</h5>
                          <p className="text-[10px] max-w-xs text-zinc-500 leading-normal">
                            No codebase components or files were structured in this checkpoint. Switch tab back to Spec Sheet or request a code feature.
                          </p>
                        </div>
                      );
                    }

                    if (selectedFile) {
                      const activeCode = parsedFiles[selectedFile] || '';
                      return (
                        <div className="flex-1 flex flex-col h-full text-left font-sans animate-fade-in">
                          {/* File editor controls */}
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 shrink-0">
                            <button
                              onClick={() => setSelectedFile(null)}
                              className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[10px] text-zinc-300 transition cursor-pointer font-bold inline-flex items-center gap-1"
                            >
                              ← Tree
                            </button>
                            <span className="text-[10px] font-mono text-zinc-400 font-bold truncate max-w-[150px]">{selectedFile}</span>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(activeCode);
                                alert(`Copied code for ${selectedFile}`);
                              }}
                              className="px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-[9px] text-emerald-400 border border-emerald-500/20 transition cursor-pointer font-bold"
                            >
                              Copy File
                            </button>
                          </div>
                          {/* Code viewport container */}
                          <pre className="flex-1 p-3 rounded-lg bg-zinc-950/80 border border-zinc-850 font-mono text-[10px] text-zinc-300 overflow-auto whitespace-pre select-all max-h-[420px]">
                            <code>{activeCode}</code>
                          </pre>
                        </div>
                      );
                    }

                    // Render File Explorer directory tree list
                    const tree = buildFileTree(parsedFiles);
                    return (
                      <div className="flex-1 flex flex-col h-full text-left font-sans select-none animate-fade-in">
                        {!validation.isValid && (
                          <div className="mb-3 p-2.5 bg-amber-500/10 border border-amber-500/25 rounded-lg text-[9px] text-amber-400 font-sans leading-normal">
                            <div className="font-bold flex items-center gap-1 mb-1">
                              <span>⚠️ Codebase Parsing Issues Detected</span>
                            </div>
                            <ul className="list-disc list-inside font-mono text-[8px] space-y-0.5 opacity-90">
                              {validation.errors.map((err, idx) => (
                                <li key={idx} className="truncate" title={err}>{err}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <span className="text-[9px] uppercase font-mono tracking-wider font-bold block mb-2 text-zinc-500">Root Directory</span>
                        <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                          {Object.values(tree).map((node) => (
                            <FileNode
                              key={node.path}
                              node={node}
                              onSelectFile={(path) => setSelectedFile(path)}
                              selectedFile={selectedFile}
                              openFolders={openFolders}
                              toggleFolder={toggleFolder}
                            />
                          ))}
                        </div>
                        <div className="mt-3 p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40 text-[9px] text-zinc-500 leading-normal">
                          💡 Click on directories to expand folders, or files to inspect/copy codebase segments.
                        </div>
                      </div>
                    );
                  })()
                )}
              </div>

              {/* Continuous Prompt Refinements input */}
              <div className="space-y-2 pt-3 border-t shrink-0" style={{ borderColor: 'var(--glass-border)' }}>
                <span className="text-[8px] uppercase font-mono tracking-wider font-semibold flex items-center gap-1" style={{ color: 'var(--text-dim)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  Adjust Prompt Constraints
                </span>
                <form onSubmit={handleRefinePrompt} className="flex gap-1.5">
                  <input
                    type="text"
                    className="liquid-input text-[11px] !p-1.5"
                    placeholder="Request prompt edits (e.g. Add Zod schemas)..."
                    value={refinementInput}
                    onChange={(e) => setRefinementInput(e.target.value)}
                    disabled={isCompiling}
                  />
                  <button
                    type="submit"
                    disabled={isCompiling || !refinementInput.trim()}
                    className="liquid-btn-primary text-xs !py-1.5 !px-3 shrink-0 shadow-md"
                  >
                    {isCompiling ? '...' : 'Refine'}
                  </button>
                </form>
              </div>
            </>
          )}

        </div>
      </section>

      {/* Model settings configuration modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="liquid-glass-card max-w-lg w-full relative shadow-2xl border border-white/[0.15] !p-6">
            <div className="flex items-center justify-between pb-3 border-b mb-4" style={{ borderColor: 'var(--input-border)' }}>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <h3 className="text-base font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
                  AI Engine Settings
                </h3>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}>
                {customKeys[provider] ? `${provider.toUpperCase()} Private Mode` : 'Shared Free Tier'}
              </span>
            </div>

            <div className="space-y-3 text-xs leading-relaxed font-light mb-4" style={{ color: 'var(--text-muted)' }}>
              <p>
                Choose your provider and set your private key for unlimited fast generation.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 p-1.5 rounded-xl border mb-4" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
              {[
                { id: 'google', name: 'Gemini' },
                { id: 'anthropic', name: 'Claude' },
                { id: 'openai', name: 'GPT-4o' },
                { id: 'groq', name: 'Groq' },
                { id: 'deepseek', name: 'DeepSeek' },
                { id: 'grok', name: 'Grok 2' },
                { id: 'kimi', name: 'Kimi' },
                { id: 'mistral', name: 'Mistral' },
                { id: 'together', name: 'Together' },
                { id: 'perplexity', name: 'Perplexity' },
                { id: 'ollama', name: 'Ollama' }
              ].map((prov) => (
                <button
                  key={prov.id}
                  type="button"
                  onClick={() => {
                    setProvider(prov.id);
                    setTempKeyInput(customKeys[prov.id] || '');
                    const models = PROVIDER_MODELS[prov.id] || [];
                    if (models.length > 0) {
                      setModelId(models[0].id);
                    }
                  }}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition cursor-pointer flex items-center justify-center gap-1 ${
                    provider === prov.id 
                      ? 'bg-emerald-500 text-white shadow-sm font-bold scale-[1.01]' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {prov.name}
                </button>
              ))}
            </div>


            <form onSubmit={handleSaveKey} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold">
                  Paste API Key:
                </label>
                <input
                  type={provider === 'ollama' ? "text" : "password"}
                  disabled={provider === 'ollama'}
                  placeholder={
                    provider === 'google' ? "Paste key (e.g., AIzaSy...)" :
                      provider === 'anthropic' ? "Paste key (e.g., sk-ant-...)" :
                        provider === 'ollama' ? "No key needed (Localhost)" :
                          "Paste key (e.g., sk-...)"
                  }
                  value={provider === 'ollama' ? "" : tempKeyInput}
                  onChange={(e) => setTempKeyInput(e.target.value)}
                  className="liquid-input font-mono text-xs"
                />
                
                {provider !== 'ollama' && (
                  <>
                    <div className="text-[10px] pt-1.5 pl-0.5">
                      <a 
                        href={getApiKeyLink()} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-emerald-500 hover:text-emerald-400 font-semibold underline inline-flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3M17 6l3 3"/></svg>
                        Get your {getActiveModelLabel()} API Key ↗
                      </a>
                    </div>

                    <div className="space-y-1.5 mt-4 text-left border-t pt-3" style={{ borderColor: 'var(--glass-border)' }}>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold">
                        Daily Safety Request Limit:
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="5"
                          max="1000"
                          value={byokSafetyBudget}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 50;
                            setByokSafetyBudget(val);
                            localStorage.setItem('vibe_hatch_byok_budget', val.toString());
                          }}
                          className="liquid-input font-mono text-xs w-20 !p-1.5"
                        />
                        <span className="text-[10px] text-zinc-500">
                          requests. Warns you as usage approaches this limit.
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium rounded-lg transition cursor-pointer"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Cancel
                </button>
                <button type="submit" className="liquid-btn-primary text-xs !py-2 !px-5 shadow-md cursor-pointer flex items-center gap-1.5 justify-center">
                  Activate Settings
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Prompt Parameters Configuration modal */}
      {isParamsOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="liquid-glass-card max-w-md w-full relative shadow-2xl border border-white/[0.15] !p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'var(--input-border)' }}>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                <h3 className="text-base font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
                  Prompt Parameters
                </h3>
              </div>
              <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded font-semibold border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}>
                Fine-tuning
              </span>
            </div>

            <div className="space-y-4 text-xs">
              {/* Temperature Slider */}
              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-300">Generation Temperature</span>
                  <span className="font-mono text-emerald-400 font-bold">{temperature}</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="1.0" 
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1 bg-zinc-800 rounded-lg appearance-none"
                />
                <p className="text-[10px] leading-relaxed text-zinc-500">
                  Lower settings generate structured, precise prompt formats. Higher values suggest more creative layout ideas.
                </p>
              </div>

              {/* Max Output Tokens Selector */}
              <div className="space-y-1.5 text-left">
                <span className="font-semibold text-zinc-300 block">Max Target Output Tokens</span>
                <select
                  value={maxTokens}
                  onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                  className="liquid-input text-xs font-mono w-full cursor-pointer py-2 px-3 rounded-lg border focus:ring-2 focus:ring-emerald-500/20 outline-none"
                  style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
                >
                  <option value="2000" className="bg-zinc-900 text-white">2,000 Tokens (~1,500 words)</option>
                  <option value="4000" className="bg-zinc-900 text-white">4,000 Tokens (~3,000 words)</option>
                  <option value="8000" className="bg-zinc-900 text-white">8,000 Tokens (~6,000 words)</option>
                </select>
              </div>

              {/* System nudge override */}
              <div className="space-y-1.5 text-left">
                <span className="font-semibold text-zinc-300 block">Custom Prompt Constraints Nudge</span>
                <textarea
                  value={systemNudge}
                  onChange={(e) => setSystemNudge(e.target.value)}
                  className="liquid-input w-full h-16 text-xs resize-none"
                  placeholder="e.g. Focus on clean code layout. Instruct the AI to structure standard unit tests for components."
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsParamsOpen(false)}
                className="liquid-btn-primary text-xs !py-2 !px-5 shadow-md cursor-pointer"
              >
                Apply Parameters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Limit exhaustion modal */}
      {isLimitModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="liquid-glass-card max-w-md w-full relative border border-white/[0.15] !p-6 text-center space-y-4">
            <div className="flex justify-center text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 3 7 3 14c0 4.4 4 8 9 8s9-3.6 9-8c0-7-4-12-9-12z"/></svg>
            </div>
            <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
              Daily Capacity Reached!
            </h3>
            <p className="text-xs leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
              Our shared community server has hit its capacity. Please connect your personal API key to continue generating prompts instantly at zero cost!
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => { setIsLimitModalOpen(false); setIsModalOpen(true); }}
                className="liquid-btn-primary text-xs w-full flex items-center justify-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3M17 6l3 3"/></svg>
                Connect Free Key in Settings
              </button>
              <button
                onClick={() => setIsLimitModalOpen(false)}
                className="text-xs font-medium transition py-2"
                style={{ color: 'var(--text-dim)' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile/Tablet Drawer Backdrop overlays */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-35 md:hidden animate-fade-in"
        />
      )}
      {isPreviewOpen && (
        <div 
          onClick={() => setIsPreviewOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-25 lg:hidden animate-fade-in"
        />
      )}
      {/* Advanced Settings Drawer Overlay */}
      {isStackDrawerOpen && (
        <>
          {/* Backdrop */}
          <div 
            onClick={() => setIsStackDrawerOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity animate-fade-in"
          />
          {/* Drawer Panel */}
          <div 
            className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-zinc-900 border-l border-zinc-800 z-50 flex flex-col shadow-2xl transition-transform ease-out duration-300 translate-x-0 animate-slide-in"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between" style={{ borderColor: 'var(--input-border)' }}>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[var(--text-main)]">⚙️ Advanced Settings</span>
              </div>
              <button 
                onClick={() => setIsStackDrawerOpen(false)}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs text-left">
              {/* Tech Stack Matchmaker */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-zinc-200">🛠️ Tech Matchmaker</span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 font-bold">
                    {selectedStack.length} selected
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400 leading-normal">
                  Select technologies to automatically customize prompt templates and inject framework-specific configurations:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {TECH_OPTIONS.map(tech => {
                    const active = selectedStack.includes(tech.id);
                    return (
                      <button
                        key={tech.id}
                        title={tech.desc}
                        onClick={() => {
                          setSelectedStack(prev => 
                            prev.includes(tech.id) 
                              ? prev.filter(t => t !== tech.id) 
                              : [...prev, tech.id]
                          );
                        }}
                        className={`p-2 rounded-lg text-[9px] font-semibold text-left transition-all cursor-pointer border select-none flex flex-col gap-1 ${
                          active 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-bold' 
                            : 'bg-zinc-800/40 text-zinc-400 border-zinc-700/60 hover:border-zinc-500'
                        }`}
                      >
                        <span className="font-bold">{tech.label}</span>
                        <span className="text-[8px] text-zinc-500 leading-tight line-clamp-2 font-normal">{tech.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <hr className="border-zinc-800/80" style={{ borderColor: 'var(--glass-border)' }} />

              {/* Red Team Audit */}
              <div className="space-y-2.5">
                <span className="font-bold text-zinc-200 block">🔒 Security & Performance</span>
                <p className="text-[10px] text-zinc-400 leading-normal">
                  Toggle on-demand security auditing to scan code templates for vulnerabilities, database race conditions, and performance bottlenecks:
                </p>
                <label className="flex items-center gap-2.5 cursor-pointer text-zinc-300 hover:text-white select-none w-fit pt-1">
                  <input 
                    type="checkbox" 
                    checked={runRedTeam} 
                    onChange={(e) => setRunRedTeam(e.target.checked)} 
                    className="accent-emerald-500 rounded cursor-pointer w-4 h-4"
                  />
                  <span className="font-bold text-xs">Run Red-Team Security Audit</span>
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zinc-800 flex gap-2" style={{ borderColor: 'var(--input-border)' }}>
              <button
                onClick={() => {
                  setSelectedStack([]);
                  setRunRedTeam(false);
                }}
                className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 transition cursor-pointer font-bold text-[10px]"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsStackDrawerOpen(false)}
                className="flex-1 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black transition cursor-pointer font-bold text-[10px]"
              >
                Apply Settings
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}