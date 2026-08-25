"use client";
import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const STARTER_BLUEPRINTS = [
  {
    label: "⚡ Web SaaS App",
    prompt: "I want to build a modern Web SaaS dashboard app with Stripe payments and authentication."
  },
  {
    label: "🧩 Chrome Extension",
    prompt: "I want to create a lightweight Chrome Extension that summarizes web page text using AI."
  },
  {
    label: "📱 Habit Tracker",
    prompt: "I want to develop a mobile-friendly habit tracking app with offline local persistence."
  },
  {
    label: "🤖 PDF Chatbot",
    prompt: "I want to build a custom PDF Chatbot where users upload documents and ask questions."
  }
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
  const [customKey, setCustomKey] = useState('');
  const [tempKeyInput, setTempKeyInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionsLeft, setSessionsLeft] = useState(1);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [outputFormat, setOutputFormat] = useState('standard');

  const messagesEndRef = useRef(null);

  // Initial greeting
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
    const savedKey = localStorage.getItem('vibe_hatch_custom_api_key');
    if (savedKey) {
      setCustomKey(savedKey);
      setTempKeyInput(savedKey);
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
    if (tempKeyInput.trim() === '') {
      localStorage.removeItem('vibe_hatch_custom_api_key');
      setCustomKey('');
    } else {
      localStorage.setItem('vibe_hatch_custom_api_key', tempKeyInput.trim());
      setCustomKey(tempKeyInput.trim());
    }
    setIsModalOpen(false);
  };

  // Requirements Extractor Heuristics (Token Efficient, runs locally!)
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
  const readyToHatch = reqStatus.idea && reqStatus.platform; // Dynamic trigger

  // Check if AI output flagged ready to compile
  const isAiReady = conversation.length > 1 && 
    conversation[conversation.length - 1].content.includes('[READY_TO_HATCH]');

  const currentStatusString = isAiReady || (reqStatus.idea && reqStatus.platform && reqStatus.features)
    ? "Requirements Gathered! Ready to Hatch." 
    : "Collecting App Blueprint Parameters...";

  // Chat message submission
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
          customApiKey: customKey || null
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

  // Final Prompt compilation execution
  const handleHatchPrompt = async () => {
    if (conversation.filter(m => m.role === 'user').length === 0) {
      setErrorMessage("Please write some app ideas to get started first!");
      return;
    }

    if (!customKey && sessionsLeft <= 0) {
      setIsLimitModalOpen(true);
      return;
    }

    setIsCompiling(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation,
          outputFormat,
          provider,
          customApiKey: customKey || null
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to compile prompt template.');

      const newSpec = data.result;
      const newVersions = [...versions, newSpec];
      setVersions(newVersions);
      setCurrentVersionIdx(newVersions.length - 1);

      if (!customKey) {
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

  // Compiled Prompt Refinement / Tuning
  const handleRefinePrompt = async (e) => {
    if (e) e.preventDefault();
    if (!refinementInput.trim() || isCompiling) return;

    setIsCompiling(true);
    setErrorMessage('');

    // Append refinement request to conversation for contextual compilation
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
          customApiKey: customKey || null
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

  // Dynamic Token Savings Metrics based on prompt size
  const calculateTokenStats = (text) => {
    if (!text) return { compiled: 0, saved: 0, dollars: "0.00" };
    const compiledTokens = Math.round(text.length / 4);
    const saved = Math.round(compiledTokens * 2.8 + 300);
    const dollars = (saved / 1000 * 0.015).toFixed(2);
    return { compiled: compiledTokens, saved, dollars };
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

  return (
    <div
      className={`min-h-screen p-4 md:p-8 font-sans relative selection:bg-emerald-500/30 selection:text-emerald-500 transition-colors duration-500 ${theme === 'light' ? 'light-mode' : ''}`}
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      {/* Ambient background blur orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500" style={{ backgroundColor: 'var(--orb-1)' }} />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none -z-10 transition-colors duration-500" style={{ backgroundColor: 'var(--orb-2)' }} />

      {/* Header */}
      <header className="max-w-7xl mx-auto mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--input-border)' }}>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">🐣</span>
            <h1 className="text-2xl font-black tracking-tight titanium-gradient">Vibe Hatch</h1>
          </div>
          <p className="text-xs mt-1 font-light tracking-wide" style={{ color: 'var(--text-muted)' }}>
            AI Requirements Chatbot & Prompt Architect. Interview with AI to build the perfect code blueprint.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition backdrop-blur-md shadow-sm cursor-pointer"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
          >
            <span>{theme === 'dark' ? '☀️ Opal Light' : '🌙 Obsidian Void'}</span>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition backdrop-blur-md shadow-sm cursor-pointer"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${customKey ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-400'}`} />
            <span style={{ color: 'var(--text-main)' }}>{customKey ? 'Custom BYOK' : 'Free Tier'}</span>
            <span style={{ color: 'var(--text-dim)' }} className="ml-1">⚙️</span>
          </button>
        </div>
      </header>

      {errorMessage && (
        <div className="max-w-7xl mx-auto mb-4 p-3.5 bg-red-500/10 border border-red-500/30 backdrop-blur-md rounded-xl text-xs text-red-500 flex items-center gap-2">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Main Grid Workspace */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN: INTERVIEW CHATBOT ROOM */}
        <div className="liquid-glass-card flex flex-col justify-between h-[680px]">
          {/* Card Header & Dynamic Checklist */}
          <div>
            <div className="flex justify-between items-center pb-3 border-b mb-3" style={{ borderColor: 'var(--input-border)' }}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-500 font-bold">
                💬 Interview Assistant // {currentStatusString}
              </span>
            </div>

            {/* Heuristics requirements checks progress bar */}
            <div className="grid grid-cols-5 gap-1.5 p-2 rounded-xl mb-4 text-[10px] font-mono border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
              <div className={`flex items-center gap-1 justify-center py-1 rounded transition-colors ${
                reqStatus.idea 
                  ? (theme === 'dark' ? 'text-emerald-400 bg-emerald-500/5' : 'text-emerald-700 bg-emerald-500/10')
                  : 'text-zinc-500'
              }`}>
                <span>{reqStatus.idea ? '✓' : '○'}</span> <span className="truncate">Idea</span>
              </div>
              <div className={`flex items-center gap-1 justify-center py-1 rounded transition-colors ${
                reqStatus.platform 
                  ? (theme === 'dark' ? 'text-emerald-400 bg-emerald-500/5' : 'text-emerald-700 bg-emerald-500/10')
                  : 'text-zinc-500'
              }`}>
                <span>{reqStatus.platform ? '✓' : '○'}</span> <span className="truncate">Platform</span>
              </div>
              <div className={`flex items-center gap-1 justify-center py-1 rounded transition-colors ${
                reqStatus.features 
                  ? (theme === 'dark' ? 'text-emerald-400 bg-emerald-500/5' : 'text-emerald-700 bg-emerald-500/10')
                  : 'text-zinc-500'
              }`}>
                <span>{reqStatus.features ? '✓' : '○'}</span> <span className="truncate">Features</span>
              </div>
              <div className={`flex items-center gap-1 justify-center py-1 rounded transition-colors ${
                reqStatus.tech 
                  ? (theme === 'dark' ? 'text-emerald-400 bg-emerald-500/5' : 'text-emerald-700 bg-emerald-500/10')
                  : 'text-zinc-500'
              }`}>
                <span>{reqStatus.tech ? '✓' : '○'}</span> <span className="truncate">Tech</span>
              </div>
              <div className={`flex items-center gap-1 justify-center py-1 rounded transition-colors ${
                reqStatus.storage 
                  ? (theme === 'dark' ? 'text-emerald-400 bg-emerald-500/5' : 'text-emerald-700 bg-emerald-500/10')
                  : 'text-zinc-500'
              }`}>
                <span>{reqStatus.storage ? '✓' : '○'}</span> <span className="truncate">Storage</span>
              </div>
            </div>
          </div>

          {/* Chat log body */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-3 mb-3 scroll-smooth no-scrollbar">
            {conversation.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 max-w-[85%] animate-fade-in ${
                  msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm border ${
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
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-slate-200 border-slate-300'
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

          {/* User inputs, actions & suggestion pills */}
          <div className="space-y-3 pt-3 border-t shrink-0" style={{ borderColor: 'var(--input-border)' }}>
            
            {/* Quick Starter Blueprints (Shows up at start) */}
            {conversation.length === 1 && (
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {STARTER_BLUEPRINTS.map((bp) => (
                  <button
                    key={bp.label}
                    onClick={() => handleSendMessage(null, bp.prompt)}
                    className="px-2.5 py-1 text-[10px] font-medium rounded-full border transition cursor-pointer scale-95 hover:scale-100 whitespace-nowrap shadow-sm hover:border-emerald-500/50 hover:text-emerald-300"
                    style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}
                  >
                    {bp.label}
                  </button>
                ))}
              </div>
            )}

            {/* Main Chat Input Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                className="liquid-input text-xs"
                placeholder="Talk to the requirements collector..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !chatInput.trim()}
                className="liquid-btn-primary text-xs !py-2 !px-4 shrink-0 shadow-md"
              >
                Send
              </button>
            </form>

            {/* Hatch Action CTA */}
            <button
              onClick={handleHatchPrompt}
              disabled={isCompiling || conversation.filter(m => m.role === 'user').length === 0}
              className={`w-full py-2.5 rounded-xl font-bold transition-all text-xs cursor-pointer ${
                readyToHatch || isAiReady
                  ? 'bg-emerald-500 text-black border border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-[0.99]'
                  : 'bg-zinc-800 border border-zinc-700 text-zinc-400 cursor-not-allowed'
              }`}
            >
              {isCompiling ? '⚡ Archiving requirements...' : 'Hatch Developer Prompt 📐'}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: GENERATED PROMPT PREVIEW */}
        <div className="liquid-glass-card flex flex-col h-[680px]">
          {/* Controls & Switchers */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b mb-3" style={{ borderColor: 'var(--input-border)' }}>
            {/* Format Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl border text-[10px]" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
              <button
                onClick={() => setOutputFormat('standard')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${outputFormat === 'standard' ? 'tab-active' : 'tab-inactive'}`}
              >
                📋 Standard Prompt
              </button>
              <button
                onClick={() => setOutputFormat('cursorrules')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${outputFormat === 'cursorrules' ? 'tab-active' : 'tab-inactive'}`}
              >
                ⚡ .cursorrules / IDE Rules
              </button>
            </div>

            {/* Version Switcher */}
            {versions.length > 0 && (
              <div className="flex items-center gap-1 p-1 rounded-xl border text-[9px]" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                <span className="font-mono px-1 font-bold text-emerald-400">History:</span>
                {versions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVersionIdx(idx)}
                    className={`px-2 py-0.5 rounded font-mono font-bold transition ${currentVersionIdx === idx ? 'bg-emerald-500 text-white shadow-sm scale-105' : 'text-zinc-400 hover:text-white'}`}
                  >
                    v{idx + 1}
                  </button>
                ))}
              </div>
            )}

            {/* Download/Copy actions */}
            {versions.length > 0 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={downloadMarkdown}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-medium border transition cursor-pointer"
                  style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
                >
                  Download .md
                </button>
                <button
                  onClick={copyToClipboard}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-medium border transition cursor-pointer"
                  style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            )}
          </div>

          {/* Token usage optimizer stats */}
          {versions.length > 0 && (
            <div className="mb-3 p-2.5 border rounded-xl text-[10px] font-mono flex flex-wrap justify-between items-center gap-2 backdrop-blur-md animate-fade-in" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
              <div>
                <span className="text-emerald-500 font-semibold">⚡ ~{stats?.saved?.toLocaleString()} Tokens Optimized</span>
                <span className="ml-1 font-light" style={{ color: 'var(--text-muted)' }}>(~${stats?.dollars} Context saved)</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                Viewing v{currentVersionIdx + 1}
              </span>
            </div>
          )}

          {/* Compiled Output View */}
          <div className="flex-1 rounded-xl p-4 font-mono text-[11px] text-emerald-400 overflow-y-auto border border-white/[0.08] whitespace-pre-wrap leading-relaxed select-all shadow-inner relative" style={{ backgroundColor: 'var(--code-bg)' }}>
            {isCompiling ? (
              <div className="space-y-4 animate-pulse p-2 font-sans select-none">
                <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 w-fit">
                  <span>⚡ Archiving & generating prompt template...</span>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-3 bg-white/[0.1] rounded w-1/4 mb-3"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-3/4"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-1/2"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-5/6"></div>
                </div>
              </div>
            ) : versions.length > 0 ? (
              currentPromptContent
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 font-sans select-none font-light text-zinc-500">
                <span className="text-4xl mb-3 opacity-30">📐</span>
                <p className="text-xs font-semibold text-zinc-300">Prompt Template Preview Panel</p>
                <p className="text-[10px] mt-1 max-w-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Once requirements have been collected from the interview, click the "Hatch Developer Prompt" button on the left to compile your engineering prompt template.
                </p>
              </div>
            )}
          </div>

          {/* Continuous refinement section for generated prompt */}
          {versions.length > 0 && (
            <div className="space-y-2 pt-3 border-t shrink-0 bg-inherit" style={{ borderColor: 'var(--input-border)' }}>
              <span className="text-[9px] uppercase font-mono tracking-wider font-semibold block" style={{ color: 'var(--text-dim)' }}>
                ⚡ Adjust Prompt Output Constraints
              </span>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-mono">
                <button
                  onClick={() => { setRefinementInput("Make the implementation plan extremely modular, split into 5 structured stages."); }}
                  className="liquid-choice !py-1 !px-2 font-medium cursor-pointer"
                >
                  🧱 More Modular Build Phases
                </button>
                <button
                  onClick={() => { setRefinementInput("Add detailed TypeScript types and interfaces for the database schema."); }}
                  className="liquid-choice !py-1 !px-2 font-medium cursor-pointer"
                >
                  🛡️ Strict TypeScript Safety
                </button>
                <button
                  onClick={() => { setRefinementInput("Enforce strict Tailwind styling constraints and VisionOS Frosted Glass theme cues."); }}
                  className="liquid-choice !py-1 !px-2 font-medium cursor-pointer"
                >
                  🎨 Frosted Glass Styling
                </button>
              </div>

              <form onSubmit={handleRefinePrompt} className="flex gap-2">
                <input
                  type="text"
                  className="liquid-input text-xs"
                  placeholder="Request edits (e.g. Add Zod schemas)..."
                  value={refinementInput}
                  onChange={(e) => setRefinementInput(e.target.value)}
                  disabled={isCompiling}
                />
                <button
                  type="submit"
                  disabled={isCompiling || !refinementInput.trim()}
                  className="liquid-btn-primary text-xs !py-2 !px-4 shrink-0 shadow-md"
                >
                  {isCompiling ? '...' : 'Refine'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

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
                {customKey ? `${provider.toUpperCase()} Private Mode` : 'Shared Free Tier'}
              </span>
            </div>

            <div className="space-y-3 text-xs leading-relaxed font-light mb-4" style={{ color: 'var(--text-muted)' }}>
              <p>
                Choose your provider and set your private key for unlimited fast generation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-xl border mb-4" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
              <button
                type="button"
                onClick={() => setProvider('google')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'google' ? 'bg-emerald-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`}
              >
                <span>🟢</span><span>Gemini</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('anthropic')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'anthropic' ? 'bg-purple-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`}
              >
                <span>🟣</span><span>Claude</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('openai')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'openai' ? 'bg-blue-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`}
              >
                <span>🔵</span><span>GPT-4o</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('groq')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'groq' ? 'bg-orange-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`}
              >
                <span>⚡</span><span>Groq</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('deepseek')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'deepseek' ? 'bg-cyan-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`}
              >
                <span>🐋</span><span>DeepSeek</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('ollama')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'ollama' ? 'bg-emerald-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`}
              >
                <span>🖥️</span><span>Ollama</span>
              </button>
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
                        "Paste key (e.g., sk-...)"
                  }
                  value={provider === 'ollama' ? "http://localhost:11434 (Auto-Connected)" : tempKeyInput}
                  onChange={(e) => setTempKeyInput(e.target.value)}
                  className="liquid-input font-mono text-xs"
                />
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

      {/* Footer */}
      <footer className="w-full py-6 mt-8 flex justify-center items-center">
        <div
          className="flex flex-wrap items-center gap-3 px-4 py-2 rounded-full border shadow-lg backdrop-blur-md text-xs"
          style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}
        >
          <a
            href="https://chickengor.github.io/jimmy_wong/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono hover:text-white transition-colors cursor-pointer"
          >
            <span>Engineered by <strong className="font-semibold tracking-wide" style={{ color: 'var(--text-main)' }}>ChickenRice Dev Studio</strong></span>
          </a>
        </div>
      </footer>
    </div>
  );
}