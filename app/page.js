"use client";
import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const STARTER_BLUEPRINTS = [
  { label: "⚡ Web SaaS App", prompt: "I want to build a modern Web SaaS dashboard app with Stripe payments and authentication." },
  { label: "🧩 Chrome Extension", prompt: "I want to create a lightweight Chrome Extension that summarizes web page text using AI." },
  { label: "📱 Habit Tracker", prompt: "I want to develop a mobile-friendly habit tracking app with offline local persistence." },
  { label: "🤖 PDF Chatbot", prompt: "I want to build a custom PDF Chatbot where users upload documents and ask questions." }
];

export default function VibeHatchWizard() {
  // Theme state
  const [theme, setTheme] = useState('dark');

  // Conversational chatbot states
  const [conversation, setConversation] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Prompt compilation states
  const [isCompiling, setIsCompiling] = useState(false);
  const [versions, setVersions] = useState([]);
  const [currentVersionIdx, setCurrentVersionIdx] = useState(-1);
  const [refinementInput, setRefinementInput] = useState('');

  // Settings & Rate Limiting states
  const [provider, setProvider] = useState('google');
  const [customKeys, setCustomKeys] = useState({});
  const [tempKeyInput, setTempKeyInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionsLeft, setSessionsLeft] = useState(1);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [outputFormat, setOutputFormat] = useState('standard');

  // UI state: Collapsible Prompt Preview Panel
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);

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

  // Initial greeting message in chat
  useEffect(() => {
    setConversation([
      {
        role: 'assistant',
        content: "Hi! I'm the Vibe Hatch Chatbot. I will interview you about your app idea, collect your requirements, and compile them into a highly optimized prompt template that you can feed into code-generation AIs (like Cursor, Claude, or ChatGPT) to build your project. Let's start with your raw idea! What kind of application are we building?"
      }
    ]);
  }, []);

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
    if (loadedKeys.google) {
      setTempKeyInput(loadedKeys.google);
    }

    const savedTheme = localStorage.getItem('vibe_hatch_theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  // Check rate limit on load
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
  }, []);

  // Auto-scroll chat window
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, isLoading]);

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
          customApiKey: customKeys[provider] || null
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to get chat response.');

      setConversation(prev => [...prev, { role: 'assistant', content: data.result }]);
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
          customApiKey: customKeys[provider] || null
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
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: theme === 'dark' ? ['#ffffff', '#10b981', '#64748b'] : ['#0f172a', '#10b981', '#3b82f6']
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
          customApiKey: customKeys[provider] || null
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to refine prompt.');

      const newSpec = data.result;
      const newVersions = [...versions, newSpec];
      setVersions(newVersions);
      setCurrentVersionIdx(newVersions.length - 1);
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
    const modelLabels = {
      google: "Gemini 3.6 Flash",
      anthropic: "Claude 3.5 Sonnet",
      openai: "GPT-4o",
      groq: "Llama 3.3 (Groq)",
      deepseek: "DeepSeek Chat",
      grok: "Grok 2 (xAI)",
      kimi: "Kimi k2.5",
      mistral: "Codestral (Mistral)",
      together: "Qwen 2.5 (Together)",
      perplexity: "Sonar (Perplexity)",
      ollama: "Ollama (Local)"
    };
    return modelLabels[provider] || "AI Assistant";
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
        className="w-60 border-r flex flex-col justify-between p-4 shrink-0 transition-all duration-300 hidden md:flex"
        style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
      >
        <div>
          {/* Sidebar Top: Project Switcher */}
          <div className="flex items-center justify-between p-2.5 rounded-xl border mb-6" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-lg">🐣</span>
              <span className="text-xs font-black tracking-tight">Vibe Hatch AI</span>
            </div>
            <span className="text-[10px] text-zinc-400">▾</span>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold rounded-lg transition-all" style={{ backgroundColor: 'var(--choice-hover)', color: 'var(--text-main)', borderLeft: '2px solid #10b981' }}>
              <span>💬</span>
              <span>Chat Assistant</span>
            </button>
            <button onClick={() => setIsModalOpen(true)} className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-zinc-400 hover:text-white transition-all">
              <span>⚙️</span>
              <span>API Configuration</span>
            </button>
          </nav>

          {/* Folder Groups */}
          <div className="mt-8 space-y-2">
            <span className="text-[9px] uppercase font-mono tracking-wider font-bold block px-2" style={{ color: 'var(--text-dim)' }}>Saved Folders</span>
            <div className="space-y-1 pl-2">
              {["Web SaaS Specs", "Chrome Utilities", "Productivity Bots"].map((folder) => (
                <div key={folder} className="text-xs py-1 hover:text-emerald-500 cursor-pointer truncate flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                  <span>📂</span>
                  <span className="truncate">{folder}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Bottom */}
        <div className="space-y-3 pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="p-3 rounded-xl border text-[11px] font-mono leading-relaxed" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}>
            <div className="flex items-center justify-between mb-1">
              <span>Free Tier Quota</span>
              <span className="text-emerald-500 font-bold">{sessionsLeft}/1</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1">
              <div className="bg-emerald-500 h-1 rounded-full" style={{ width: sessionsLeft > 0 ? '100%' : '0%' }}></div>
            </div>
          </div>

          {/* Theme toggler */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium border hover:brightness-110 transition cursor-pointer"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
          >
            <span>Appearance</span>
            <span className="text-[10px]">{theme === 'dark' ? '☀️ Opal' : '🌙 Void'}</span>
          </button>

          <span className="text-[9px] block text-center" style={{ color: 'var(--text-dim)' }}>
            © 2026 ChickenRice Studio
          </span>
        </div>
      </aside>

      {/* 2. MAIN CENTERED CHAT COLUMN */}
      <main className="flex-1 flex flex-col justify-between min-w-0 bg-[var(--bg-main)]">
        
        {/* Warning banner centered at top */}
        <div className="pt-4 px-4 flex justify-center shrink-0">
          <div className={`bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-[10px] font-mono flex items-center gap-2 shadow-sm max-w-lg shrink-0 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-800'
          }`}>
            <span>💚</span>
            <span className="truncate">Vibe Hatch AI can make mistakes. Verify important prompt outputs.</span>
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
                  What should we build today?
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
                      className="p-1 rounded text-zinc-400 transition hover:bg-[var(--choice-hover)]" 
                      title="API Configuration"
                    >
                      ⚙️
                    </button>
                    <button 
                      type="button" 
                      className="p-1 rounded text-zinc-400 transition hover:bg-[var(--choice-hover)]" 
                      title="Prompt Parameters"
                    >
                      ✨
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">{getActiveModelLabel()}</span>
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
                {STARTER_BLUEPRINTS.map((bp) => (
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
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs border ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 text-zinc-300' 
                        : 'bg-slate-200 border-slate-300 text-slate-800'
                    }`}>
                      {msg.role === 'user' ? '👤' : '🤖'}
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
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs border ${
                      theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-200 border-slate-300'
                    }`}>
                      🤖
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
                  className="w-full border rounded-2xl p-2.5 shadow focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/30 transition-all text-left flex gap-2"
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
                  <button
                    type="button"
                    disabled={isLoading || !chatInput.trim()}
                    onClick={handleSendMessage}
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold hover:opacity-85 active:scale-95 transition shrink-0 self-center ${
                      theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
                    }`}
                  >
                    ↑
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleHatchPrompt}
                    disabled={isCompiling}
                    className={`flex-1 py-2.5 rounded-xl font-bold transition text-xs cursor-pointer ${
                      readyToHatch || isAiReady
                        ? 'bg-emerald-500 text-black border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:brightness-105'
                        : 'bg-zinc-800 border border-zinc-700 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    {isCompiling ? '⚡ Gathering constraints...' : 'Hatch Developer Prompt 📐'}
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
        className={`border-l flex flex-col h-screen shrink-0 transition-all duration-300 ease-in-out relative ${
          isPreviewOpen && versions.length > 0 ? 'w-[450px] opacity-100' : 'w-0 opacity-0 overflow-hidden border-l-0'
        }`}
        style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
      >
        <div className="p-4 flex flex-col h-full justify-between">
          
          {/* Controls bar */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b mb-3" style={{ borderColor: 'var(--glass-border)' }}>
              {/* Output format selectors */}
              <div className="flex items-center gap-1 p-1 rounded-xl border text-[10px]" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                <button
                  onClick={() => setOutputFormat('standard')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${outputFormat === 'standard' ? 'tab-active' : 'tab-inactive'}`}
                >
                  📋 Standard
                </button>
                <button
                  onClick={() => setOutputFormat('cursorrules')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${outputFormat === 'cursorrules' ? 'tab-active' : 'tab-inactive'}`}
                >
                  ⚡ .cursorrules
                </button>
              </div>

              {/* Checkpoints */}
              {versions.length > 1 && (
                <div className="flex items-center gap-1 p-1 rounded-xl border text-[9px]" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                  {versions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentVersionIdx(idx)}
                      className={`px-1.5 py-0.5 rounded font-mono font-bold transition ${currentVersionIdx === idx ? 'bg-emerald-500 text-white' : 'text-zinc-400'}`}
                    >
                      v{idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Actions: Copy & Download */}
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

            {/* Token savings statistics */}
            <div className="mb-3 p-2.5 border rounded-xl text-[9px] font-mono flex flex-wrap justify-between items-center gap-2" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
              <div>
                <span className="text-emerald-500 font-semibold">⚡ ~{stats?.saved?.toLocaleString()} Tokens Optimized</span>
                <span className="ml-1 font-light" style={{ color: 'var(--text-muted)' }}>(~${stats?.dollars} Context saved)</span>
              </div>
              <span className="px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                v{currentVersionIdx + 1}
              </span>
            </div>
          </div>

          {/* Compiled Output Viewbox */}
          <div className="flex-1 rounded-xl p-3 font-mono text-[10px] text-emerald-400 overflow-y-auto border border-white/[0.08] whitespace-pre-wrap leading-relaxed select-all shadow-inner relative" style={{ backgroundColor: 'var(--code-bg)' }}>
            {isCompiling ? (
              <div className="space-y-4 animate-pulse p-2 font-sans select-none">
                <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 w-fit">
                  <span>⚡ Archiving & generating prompt template...</span>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-2 bg-white/[0.1] rounded w-1/4 mb-3"></div>
                  <div className="h-1.5 bg-white/[0.05] rounded w-3/4"></div>
                  <div className="h-1.5 bg-white/[0.05] rounded w-1/2"></div>
                </div>
              </div>
            ) : (
              currentPromptContent
            )}
          </div>

          {/* Continuous Prompt Refinements input */}
          <div className="space-y-2 pt-3 border-t shrink-0" style={{ borderColor: 'var(--glass-border)' }}>
            <span className="text-[8px] uppercase font-mono tracking-wider font-semibold block" style={{ color: 'var(--text-dim)' }}>
              ⚡ Adjust Prompt Constraints
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

        </div>
      </section>

      {/* Model settings configuration modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="liquid-glass-card max-w-lg w-full relative shadow-2xl border border-white/[0.15] !p-6">
            <div className="flex items-center justify-between pb-3 border-b mb-4" style={{ borderColor: 'var(--input-border)' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
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
                  <div className="text-[10px] pt-1.5 pl-0.5">
                    <a 
                      href={getApiKeyLink()} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-500 hover:text-emerald-400 font-semibold underline inline-flex items-center gap-1"
                    >
                      🔑 Get your {getActiveModelLabel()} API Key ↗
                    </a>
                  </div>
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
                <button type="submit" className="liquid-btn-primary text-xs !py-2 !px-5 shadow-md cursor-pointer">
                  Activate Settings ⚡
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Limit exhaustion modal */}
      {isLimitModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="liquid-glass-card max-w-md w-full relative border border-white/[0.15] !p-6 text-center space-y-4">
            <span className="text-4xl block">🐣</span>
            <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
              Daily Capacity Reached!
            </h3>
            <p className="text-xs leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
              Our shared community server has hit its capacity. Please connect your personal API key to continue generating prompts instantly at zero cost!
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => { setIsLimitModalOpen(false); setIsModalOpen(true); }}
                className="liquid-btn-primary text-xs w-full"
              >
                🔑 Connect Free Key in Settings
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
    </div>
  );
}