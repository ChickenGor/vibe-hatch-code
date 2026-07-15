"use client";
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const STARTER_BLUEPRINTS = [
  {
    label: "⚡ Web Summarizer Extension",
    prompt: "Build a Chrome Extension that uses AI to summarize any webpage and save the notes directly to Notion."
  },
  {
    label: "💼 Paid Membership App",
    prompt: "Build a web application where users can log in, pay a monthly Stripe subscription, and access exclusive member content."
  },
  {
    label: "✅ Smart Habit Tracker",
    prompt: "Create a mobile-friendly habit tracking app that uses AI to analyze routine patterns and send encouraging daily reminders."
  },
  {
    label: "🤖 PDF Chatbot",
    prompt: "Develop an AI chatbot app that lets users upload their own PDF documents and ask questions about the text inside."
  }
];


const SUPERPOWERS = [
  "🔐 User Auth & Account Login",
  "💳 Stripe Subscription Payments",
  "🤖 Integrated AI Chat / Copilot",
  "🌙 Dark / Light Theme Toggle",
  "📊 Export Data to CSV / PDF",
  "📧 Automated Email Alerts"
];



export default function VibeHatchWizard() {
  // Theme State ('dark' or 'light')
  const [theme, setTheme] = useState('dark');

  const [currentStep, setCurrentStep] = useState(1);
  const [rawIdea, setRawIdea] = useState('');
  const [optionalName, setOptionalName] = useState('');
  const [features, setFeatures] = useState('');
  const [superpowers, setSuperpowers] = useState([]);
  const [appType, setAppType] = useState('web');
  const [dataRequirement, setDataRequirement] = useState('local');
  const [designStyle, setDesignStyle] = useState('minimal');

  const [outputFormat, setOutputFormat] = useState('standard');
  const [enableRedTeam, setEnableRedTeam] = useState(false);

  const [provider, setProvider] = useState('google');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [brainstorming, setBrainstorming] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [customKey, setCustomKey] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempKeyInput, setTempKeyInput] = useState('');

  // =========================================================================
  // 🔄 TICKER INDEX STATE & AUTO-CYCLE TIMER
  // =========================================================================
  const [tickerIndex, setTickerIndex] = useState(0);

  const LOADING_MESSAGES = [
    "Analyzing core domain logic...",
    "Architecting database schema & RLS policies...",
    "Mapping UI design system to Tailwind rules...",
    "Executing Red Team stress-test for scalability bottlenecks...",
    "Compiling final developer specifications..."
  ];

  // Auto-cycles the active index every 2.8s when loading triggers
  useEffect(() => {
    let interval;
    if (loading || isLoading) {
      setTickerIndex(0); // Reset to first step on synthesis start
      interval = setInterval(() => {
        setTickerIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 2800);
    }
    return () => clearInterval(interval);
  }, [loading, isLoading]);
  // =========================================================================


  useEffect(() => {
    const savedKey = localStorage.getItem('vibe_hatch_custom_api_key');
    if (savedKey) { setCustomKey(savedKey); setTempKeyInput(savedKey); }

    // Load saved theme preference
    const savedTheme = localStorage.getItem('vibe_hatch_theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  // Toggle Theme Function
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

  const toggleSuperpower = (power) => {
    if (superpowers.includes(power)) {
      setSuperpowers(superpowers.filter(p => p !== power));
    } else {
      setSuperpowers([...superpowers, power]);
    }
  };

  const handleMagicWand = async () => {
    if (!rawIdea.trim()) {
      setErrorMessage("Please enter an idea in Step 1 first so the engine can architect features!");
      return;
    }
    setBrainstorming(true);
    setErrorMessage('');
    try {
      const res = await fetch('/api/brainstorm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea: rawIdea, customApiKey: customKey })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Brainstorming failed.");
      setFeatures(prev => prev ? `${prev}\n\n${data.result}` : data.result);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setBrainstorming(false);
    }
  };

  const handleCompile = async (e) => {
    if (e) e.preventDefault();

    // 1. Enforce Rate Limit ONLY if they DO NOT have a private API Key plugged in
    if (!customKey && sessionsLeft <= 0) {
      setIsLimitModalOpen(true);
      return;
    }

    setLoading(true);
    setErrorMessage('');

    // --- Your Exact Original Mapping Dictionaries ---
    const techStackMap = {
      web: "Next.js (React App Router) + Tailwind CSS",
      mobile: "React Native + Expo Framework + Tailwind Native",
      extension: "Vanilla HTML/CSS/JavaScript (Chrome Manifest V3 Web Extension API)"
    };

    const designVibeMap = {
      minimal: "Sleek, minimalist mode heavily inspired by Apple VisionOS and Linear. Clean grid system, sub-pixel frosted glass border elements, high contrast.",
      cyber: "High-density futuristic cyberpunk terminal layout. Monospace layout elements, glowing titanium and emerald accents.",
      saas: "Clean enterprise spatial computing SaaS aesthetic. Translucent navigation panels, heavy use of dashboard grid layouts."
    };

    const storageMap = {
      none: "No active database required. Run purely ephemeral client-side rendering state logic.",
      local: "Client-side browser persistence using standard LocalStorage state snapshots.",
      cloud: "Production cloud relational architecture. Require PostgreSQL database powered by Supabase infrastructure with integrated Clerk/NextAuth credentials middleware."
    };

    const combinedFeatures = [
      features,
      superpowers.length > 0 ? `\nMandatory Integrated Superpowers:\n- ${superpowers.join('\n- ')}` : ''
    ].join('\n');

    const identityString = optionalName ? `${optionalName} (Idea: ${rawIdea})` : `Invent a sleek, futuristic app name for this idea: "${rawIdea}"`;
    // ------------------------------------------------

    try {
      const res = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appName: identityString,
          features: combinedFeatures,
          techStack: techStackMap[appType],
          designVibe: designVibeMap[designStyle],
          advancedConstraints: storageMap[dataRequirement],
          provider: provider,
          customApiKey: customKey,
          outputFormat,
          enableRedTeam
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Compilation failure.");

      const newSpecification = data.result;

      // 2. CRITICAL BRIDGE: Save into BOTH legacy output and new Living Canvas state!
      setOutput(newSpecification);
      setVersions([newSpecification]);
      setCurrentVersionIdx(0);
      setConversation([
        {
          role: 'user',
          content: `Initial Blueprint Parameters:\n- Identity: ${identityString}\n- Stack: ${techStackMap[appType]}\n- Storage: ${storageMap[dataRequirement]}\n- Aesthetics: ${designVibeMap[designStyle]}\n- Features:\n${combinedFeatures}\n- Red Team Audit: ${enableRedTeam ? 'ENABLED' : 'DISABLED'}`
        },
        { role: 'assistant', content: newSpecification }
      ]);

      // 3. Deduct Free Tier session count on first successful hatch
      if (!customKey) {
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('vibe_hatch_limit', JSON.stringify({ date: today, used: 1 }));
        setSessionsLeft(0);
      }

      // 4. Your Celebration Confetti! 🎉
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: theme === 'dark' ? ['#ffffff', '#10b981', '#64748b'] : ['#0f172a', '#10b981', '#3b82f6']
      });

    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  

  const calculateTokenStats = (text) => {
    if (!text) return { compiled: 0, saved: 0, dollars: "0.00" };
    const compiledTokens = Math.round(text.length / 4);
    const saved = Math.round(compiledTokens * 3.5 + 600) - compiledTokens;
    const dollars = ((saved > 0 ? saved : 450) / 1000 * 0.024).toFixed(2);
    return { compiled: compiledTokens, saved: saved > 0 ? saved : 450, dollars };
  };
  const stats = calculateTokenStats(output);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([output], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const fileName = optionalName ? optionalName.toLowerCase().replace(/[^a-z0-9]/g, '-') : 'spatial-architecture-spec';
    link.download = `${fileName}-${outputFormat === 'cursorrules' ? 'cursorrules' : 'spec'}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  //=============================================================================
  // 🧠 FLOOR 1: STATE & HOOKS (versions, conversation, sessionsLeft, useEffect)
  //=============================================================================
  // 1. Core Chat & Artifact History
  const [conversation, setConversation] = useState([]); // Stores [{ role: 'user' | 'assistant', content: string }]
  const [versions, setVersions] = useState([]);          // Array of string specs: ['v1 code...', 'v2 code...']
  const [currentVersionIdx, setCurrentVersionIdx] = useState(-1); // Tracks which version is currently showing on the right
  const [refinementInput, setRefinementInput] = useState(''); // Text input for follow-up tweaks
  

  // 2. Intelligent Session-Based Rate Limiting
  const [sessionsLeft, setSessionsLeft] = useState(1);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);

  // Check LocalStorage on page load to see if they already used their 1 free session today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const storedLimit = localStorage.getItem('vibe_hatch_limit');

    if (storedLimit) {
      const { date, used } = JSON.parse(storedLimit);
      if (date === today && used >= 1) {
        setSessionsLeft(0);
      } else if (date !== today) {
        // It's a brand new day! Reset daily limits.
        localStorage.setItem('vibe_hatch_limit', JSON.stringify({ date: today, used: 0 }));
        setSessionsLeft(1);
      }
    } else {
      localStorage.setItem('vibe_hatch_limit', JSON.stringify({ date: today, used: 0 }));
    }
  }, []);

  //=================================================================
  // ⚡ FLOOR 2: FUNCTIONS & LOGIC (handleGenerateOrRefine function)
  //=================================================================
  const handleGenerateOrRefine = async (e, customInstruction = null) => {
    if (e) e.preventDefault();

    // 1. Enforce Rate Limit ONLY if they DO NOT have a private API Key plugged in
    if (!customKey && sessionsLeft <= 0 && versions.length === 0) {
      setIsLimitModalOpen(true);
      return;
    }

    const promptText = customInstruction || refinementInput || rawIdea;
    if (!promptText.trim() || isLoading) return;

    setIsLoading(true);

    // 2. Construct the updated payload history
    const updatedConversation = [
      ...conversation,
      { role: 'user', content: promptText }
    ];

    setConversation(updatedConversation);
    setRefinementInput(''); // Clear input instantly for snappy UI feedback

    // Inside handleGenerateOrRefine in app/page.js:
    try {
      // 1. Make sure this points to '/api/compile' so it hits your backend!
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: updatedConversation,
          outputFormat: outputFormat,
          customApiKey: customKey || null
        })
      });

      const data = await response.json();

      // 2. If the server throws an error, display the actual message!
      if (!response.ok) {
        throw new Error(data.error || 'Server returned an error during refinement.');
      }

      const newSpecification = data.result;

      // 3. Update Artifact States
      const updatedVersions = [...versions, newSpecification];
      setVersions(updatedVersions);
      setCurrentVersionIdx(updatedVersions.length - 1);
      setConversation([...updatedConversation, { role: 'assistant', content: newSpecification }]);

      // Backwards compatibility for legacy output view
      if (typeof setOutput === 'function') setOutput(newSpecification);

    } catch (error) {
      console.error('Error generating blueprint:', error);
      // Display the real error in an alert so you can see what happened!
      alert(`⚠️ Refinement Error: ${error.message}`);
    } finally {
      setIsLoading(false);
      if (typeof setLoading === 'function') setLoading(false);
    }
  };



  return (
    //=================================================================
    //🎨 FLOOR 3: THE UI RENDER
    //=================================================================
    <div
      className={`min-h-screen p-6 md:p-10 font-sans relative selection:bg-emerald-500/30 selection:text-emerald-500 transition-colors duration-500 ${theme === 'light' ? 'light-mode' : ''}`}
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >

      {/* SPATIAL AMBIENT LIGHT ORBS (Refracts through both Dark & Light frosted glass!) */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500" style={{ backgroundColor: 'var(--orb-1)' }} />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10 transition-colors duration-500" style={{ backgroundColor: 'var(--orb-2)' }} />

      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6" style={{ borderColor: 'var(--input-border)' }}>
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-2xl drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">🏛️</span>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight titanium-gradient">
              Vibe Hatch Code
            </h1>
          </div>
          <p className="text-xs md:text-sm mt-1 font-light tracking-wide" style={{ color: 'var(--text-muted)' }}>
            Spatial Architecture Engine. Turn rough concepts into high-signal engineering specifications.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition backdrop-blur-md shadow-sm"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
            title="Toggle Apple VisionOS Theme"
          >
            <span>{theme === 'dark' ? '☀️ Opal Light' : '🌙 Obsidian Void'}</span>
          </button>

          {/* BYOK BUTTON */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition backdrop-blur-md shadow-sm"
            style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${customKey ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-400'}`} />
            <span style={{ color: 'var(--text-main)' }}>{customKey ? 'Custom BYOK' : 'Free Tier'}</span>
            <span style={{ color: 'var(--text-dim)' }} className="ml-1">⚙️</span>
          </button>
        </div>
      </header>

      {errorMessage && (
        <div className="max-w-6xl mx-auto mb-6 p-4 bg-red-500/10 border border-red-500/40 backdrop-blur-md rounded-xl text-xs text-red-500 flex items-center gap-2">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Main Two-Column Spatial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">

        {/*=================================================================
          Floor 4 : LEFT COLUMN: COMMAND FEED & SPATIAL WIZARD 
        =================================================================*/}

        <div className="liquid-glass-card flex flex-col justify-between min-h-[560px] max-h-[620px] h-full">

          {/* Conditional Header: Switches between Progress Dots and Active Co-Pilot Status */}
          <div className="flex items-center justify-between pb-5 border-b mb-6" style={{ borderColor: 'var(--input-border)' }}>
            {versions.length === 0 ? (
              /* WIZARD HEADER: Progress Tracker */
              <>
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold">
                  Phase 0{currentStep} // 04
                </span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className={`step-dot ${currentStep === s ? 'active' : ''}`} />
                  ))}
                </div>
              </>
            ) : (
              /* LIVING CANVAS HEADER: Iteration Mode Active */
              <>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-bold">
                    ⚡ Spatial Co-Pilot // Active
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setVersions([]);
                    setConversation([]);
                    setCurrentStep(1);
                  }}
                  className="text-[10px] px-2.5 py-1 rounded-lg border font-mono uppercase font-semibold transition hover:border-red-400 hover:text-red-400"
                  style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}
                >
                  🔄 New Blueprint
                </button>
              </>
            )}
          </div>

          {/* MAIN BODY: Conditional Wizard vs. Active Command Feed */}
          {versions.length === 0 ? (
            /* =============================================================
               STATE 1: YOUR ORIGINAL 4-STEP WIZARD (100% Preserved!)
            ============================================================= */
            <>


              {/* 1. SCROLLABLE CONTENT ZONE */}
              {/* 1. SCROLLABLE CONTENT ZONE / SYNTHESIS LOADER */}
              <div className="flex-1 overflow-y-auto pr-2 no-scrollbar space-y-4 max-h-[52vh] pt-2 flex flex-col justify-center">
                
                {loading || isLoading ? (
                  /* =========================================================
                     SYNTHESIS LOADING STATE: Dynamic Terminal Ticker
                  ========================================================= */
                  <div className="flex flex-col items-center justify-center py-8 space-y-6 animate-fade-in my-auto">
                    
                    {/* Glowing Master Spinner */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-14 h-14 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                      <div className="absolute inset-0 blur-xl bg-emerald-500/10 rounded-full"></div>
                    </div>

                    {/* Dynamic Text Ticker with Inline [loading circle] */}
                    <div className="text-center space-y-2 max-w-md px-4">
                      <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-semibold tracking-wide" style={{ color: 'var(--text-main)' }}>
                        
                        {/* 🔄 INLINE MINI LOADING CIRCLE */}
                        <svg className="animate-spin h-4 w-4 text-emerald-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        
                        {/* Ticker Text */}
                        <span className="transition-all duration-300 animate-pulse text-left">
                          {LOADING_MESSAGES[tickerIndex]}
                        </span>
                      </div>
                      <p className="text-[11px] font-light" style={{ color: 'var(--text-muted)' }}>
                        Our AI engines are reasoning through your architectural blueprint...
                      </p>
                    </div>

                    {/* IDE-Style Execution Checklist */}
                    <div className="w-full max-w-xs bg-black/20 border border-white/5 rounded-xl p-3 space-y-2 mt-2 shadow-inner">
                      {LOADING_MESSAGES.map((msg, idx) => {
                        const isDone = idx < tickerIndex;
                        const isCurrent = idx === tickerIndex;
                        return (
                          <div 
                            key={idx} 
                            className={`flex items-center gap-2.5 text-[11px] font-mono transition-all duration-300 ${
                              isCurrent 
                                ? 'text-emerald-400 font-medium translate-x-1' 
                                : isDone 
                                  ? 'text-slate-500 line-through opacity-60' 
                                  : 'text-slate-600 opacity-30'
                            }`}
                          >
                            {/* Status Icon */}
                            {isDone && <span className="text-emerald-500 font-bold shrink-0">✓</span>}
                            {isCurrent && (
                              <svg className="animate-spin h-3 w-3 text-emerald-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            )}
                            {!isDone && !isCurrent && <span className="shrink-0">○</span>}
                            
                            {/* Message Label */}
                            <span className="truncate">{msg}</span>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                ) : (
                  /* =========================================================
                     NORMAL WIZARD STEPS (1 TO 4)
                  ========================================================= */
                  <>
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h2 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>💡 What is the core problem or concept?</h2>
                    <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>Describe your software idea in plain English. No technical jargon required.</p>

                    {/* STEP 01 LABEL */}
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'var(--text-main)' }}>
                      1. Describe Your Software Architecture Idea:
                    </label>

                    {/* 👇 INSPIRATION PILLS (Connected directly to setRawIdea!) 👇 */}
                    <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1 no-scrollbar">
                      <span className="text-[10px] font-mono self-center mr-1 opacity-50 whitespace-nowrap">Try:</span>
                      {STARTER_BLUEPRINTS.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setRawIdea(item.prompt)}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer scale-95 hover:scale-100 shadow-sm flex items-center gap-1 hover:border-emerald-500/50 hover:text-emerald-300"
                          style={{
                            backgroundColor: 'var(--input-bg)',
                            borderColor: 'var(--input-border)',
                            color: 'var(--text-muted)'
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* YOUR ORIGINAL TEXTAREA */}
                    <textarea
                      rows="4"
                      placeholder="e.g., A minimalist spatial desktop timer that tracks my deep-work flow states and plays lo-fi white noise..."
                      className="liquid-input text-sm leading-relaxed"
                      value={rawIdea}
                      onChange={(e) => setRawIdea(e.target.value)}
                      autoFocus
                    />

                    <div className="pt-2">
                      <label className="block text-[11px] font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Project Identifier / App Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g., FlowSphere (Leave blank for automated synthesis)"
                        className="liquid-input text-xs"
                        value={optionalName}
                        onChange={(e) => setOptionalName(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-start">
                    {/* Header */}
                    <div>
                      <h2 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>⚙️ Select Target Deployment Environment</h2>
                      <p className="text-xs font-light mt-0.5" style={{ color: 'var(--text-muted)' }}>Where should this architectural blueprint be natively executed?</p>
                    </div>

                    {/* =========================================================
                        GOLDILOCKS 3-COLUMN GRID (Zero scrollbar, zero clipping!)
                    ========================================================= */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                      
                      {/* Option 1: Website / Web App */}
                      <div 
                        className={`liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'web' ? 'selected' : ''}`} 
                        onClick={() => setAppType('web')}
                      >
                        <div className="font-semibold text-xs sm:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🌐</span><span>Website / Web App</span>
                        </div>
                        <div className="text-xs font-light mt-1 leading-normal" style={{ color: 'var(--text-muted)' }}>
                          Runs directly in web browsers like Chrome or Safari. Perfect for dashboards, SaaS tools, and portals.
                        </div>
                      </div>

                      {/* Option 2: Mobile App */}
                      <div 
                        className={`liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'mobile' ? 'selected' : ''}`} 
                        onClick={() => setAppType('mobile')}
                      >
                        <div className="font-semibold text-xs sm:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>📱</span><span>Phone App (iOS & Android)</span>
                        </div>
                        <div className="text-xs font-light mt-1 leading-normal" style={{ color: 'var(--text-muted)' }}>
                          Downloadable app for iPhones and Android devices. Perfect for habit trackers, social tools, and games.
                        </div>
                      </div>

                      {/* Option 3: Chrome Extension */}
                      <div 
                        className={`liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'extension' ? 'selected' : ''}`} 
                        onClick={() => setAppType('extension')}
                      >
                        <div className="font-semibold text-xs sm:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🧩</span><span>Chrome Extension</span>
                        </div>
                        <div className="text-xs font-light mt-1 leading-normal" style={{ color: 'var(--text-muted)' }}>
                          Sits in your browser toolbar while surfing the web. Perfect for AI summarizers, scrapers, and note-takers.
                        </div>
                      </div>

                      {/* Option 4: Desktop App */}
                      <div 
                        className={`liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'desktop' ? 'selected' : ''}`} 
                        onClick={() => setAppType('desktop')}
                      >
                        <div className="font-semibold text-xs sm:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🖥️</span><span>Desktop App (Mac & PC)</span>
                        </div>
                        <div className="text-xs font-light mt-1 leading-normal" style={{ color: 'var(--text-muted)' }}>
                          Downloadable software for your computer. Perfect for menu-bar utilities, local organizers, and offline tools.
                        </div>
                      </div>

                      {/* Option 5: Chat Bot */}
                      <div 
                        className={`liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'bot' ? 'selected' : ''}`} 
                        onClick={() => setAppType('bot')}
                      >
                        <div className="font-semibold text-xs sm:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🤖</span><span>Chat Bot Assistant</span>
                        </div>
                        <div className="text-xs font-light mt-1 leading-normal" style={{ color: 'var(--text-muted)' }}>
                          Lives inside messaging platforms. Perfect for automated Discord, Slack, and Telegram community moderators.
                        </div>
                      </div>

                      {/* Option 6: Backend API */}
                      <div 
                        className={`liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'api' ? 'selected' : ''}`} 
                        onClick={() => setAppType('api')}
                      >
                        <div className="font-semibold text-xs sm:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>⚙️</span><span>Background Script / API</span>
                        </div>
                        <div className="text-xs font-light mt-1 leading-normal" style={{ color: 'var(--text-muted)' }}>
                          Automated backend process without a screen. Perfect for scheduled data pipelines, webhooks, and integrations.
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <h2 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>💾 Select Data Storage & Memory</h2>
                    <p className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>How should your app save user information and remember things across visits?</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                      {/* Option 1: Ephemeral / No Saving */}
                      <div className={`liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'none' ? 'selected' : ''}`} onClick={() => setDataRequirement('none')}>
                        <div className="font-semibold text-xs md:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>⚡</span><span>No Saving (Reset on Close)</span>
                        </div>
                        <div className="text-[11px] font-light mt-1 leading-normal line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                          Nothing is stored permanently. Perfect for quick calculators, AI prompt generators, and one-off tools.
                        </div>
                      </div>

                      {/* Option 2: Local Device Only */}
                      <div className={`liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'local' ? 'selected' : ''}`} onClick={() => setDataRequirement('local')}>
                        <div className="font-semibold text-xs md:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🔒</span><span>Saved on Device Only</span>
                        </div>
                        <div className="text-[11px] font-light mt-1 leading-normal line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                          Saves locally on the user&apos;s computer or phone. Perfect for private note-takers and habit trackers without logins.
                        </div>
                      </div>

                      {/* Option 3: Cloud & Accounts */}
                      <div className={`liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'cloud' ? 'selected' : ''}`} onClick={() => setDataRequirement('cloud')}>
                        <div className="font-semibold text-xs md:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>☁️</span><span>Cloud Database & Logins</span>
                        </div>
                        <div className="text-[11px] font-light mt-1 leading-normal line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                          Saves data securely in the cloud with user accounts. Perfect for SaaS platforms, social apps, and multi-device sync.
                        </div>
                      </div>

                      {/* Option 4: AI Vector Memory (NEW!) */}
                      <div className={`liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'vector' ? 'selected' : ''}`} onClick={() => setDataRequirement('vector')}>
                        <div className="font-semibold text-xs md:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🧠</span><span>AI Vector Memory (RAG)</span>
                        </div>
                        <div className="text-[11px] font-light mt-1 leading-normal line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                          Long-term semantic memory for AI. Perfect for chatbots, document analyzers, and tools that search through text.
                        </div>
                      </div>

                      {/* Option 5: Offline-First / Hybrid (NEW!) */}
                      <div className={`liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'hybrid' ? 'selected' : ''}`} onClick={() => setDataRequirement('hybrid')}>
                        <div className="font-semibold text-xs md:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🔄</span><span>Offline-First & Cloud Sync</span>
                        </div>
                        <div className="text-[11px] font-light mt-1 leading-normal line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                          Saves instantly to the device for zero lag, then syncs to the cloud in the background. Perfect for Notion-like tools.
                        </div>
                      </div>

                      {/* Option 6: External API / Existing DB (NEW!) */}
                      <div className={`liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'external' ? 'selected' : ''}`} onClick={() => setDataRequirement('external')}>
                        <div className="font-semibold text-xs md:text-sm flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                          <span>🔌</span><span>Connect to Existing Data</span>
                        </div>
                        <div className="text-[11px] font-light mt-1 leading-normal line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                          Plugs into external APIs, Airtable, Google Sheets, or custom company databases without building a new backend.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-3 animate-fade-in">
                    {/* Header + Brainstorm Button */}
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>🎨 System Superpowers & Aesthetics</h2>
                        <p className="text-[11px] font-light" style={{ color: 'var(--text-muted)' }}>Fine-tune capabilities and visual direction.</p>
                      </div>
                      <button
                        type="button"
                        onClick={handleMagicWand}
                        disabled={brainstorming}
                        className="text-xs border px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition backdrop-blur-md shadow-sm cursor-pointer hover:bg-white/5 shrink-0"
                        style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
                      >
                        <span>{brainstorming ? '⏳' : '✨'}</span>
                        <span>{brainstorming ? 'AI Brainstorm' : 'AI Brainstorm'}</span>
                      </button>
                    </div>

                    {/* =========================================================
                        TOP HALF: 2-Column Split (Reclaims ~150px of height!)
                    ========================================================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">

                      {/* Left Column: Superpower Pills */}
                      <div>
                        <label className="block text-[11px] font-mono text-emerald-500 uppercase tracking-wider mb-1.5 font-semibold">
                          1. Inject Capabilities:
                        </label>
                        <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pr-1 no-scrollbar">
                          {SUPERPOWERS.map((power, idx) => {
                            const isSelected = superpowers.includes(power);
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => toggleSuperpower(power)}
                                className={`text-[11px] px-2.5 py-1 rounded-lg border transition font-medium flex items-center gap-1 cursor-pointer ${isSelected
                                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                                    : 'border-transparent hover:border-slate-400'
                                  }`}
                                style={{ backgroundColor: isSelected ? undefined : 'var(--choice-bg)', color: isSelected ? undefined : 'var(--text-muted)' }}
                              >
                                <span>{isSelected ? '✓' : '+'}</span>
                                <span>{power}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Column: Functional Requirements Textarea */}
                      <div className="flex flex-col">
                        <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                          2. Functional Requirements:
                        </label>
                        <textarea
                          rows="3"
                          placeholder="e.g. 1. OpenAI tab summarizer 2. Notion OAuth2 database sync..."
                          className="liquid-input text-xs font-light flex-1 resize-none !p-2.5"
                          value={features}
                          onChange={(e) => setFeatures(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* =========================================================
                        BOTTOM HALF: Compact 6-Card Aesthetic Grid
                    ========================================================= */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
                          3. Aesthetic Direction:
                        </label>

                        {/* Red Team Audit Toggle tucked into the header row to save space! */}
                        {typeof enableRedTeam !== 'undefined' && (
                          <label className="flex items-center gap-1.5 text-[11px] font-semibold text-red-400 cursor-pointer hover:text-red-300 transition">
                            <input
                              type="checkbox"
                              checked={enableRedTeam}
                              onChange={(e) => setEnableRedTeam(e.target.checked)}
                              className="w-3.5 h-3.5 accent-red-500 rounded cursor-pointer"
                            />
                            <span>🔥 Red Team Audit</span>
                          </label>
                        )}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {/* Option 1: Apple Glass */}
                        <div className={`liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'apple' ? 'selected' : ''}`} onClick={() => setDesignStyle('apple')}>
                          <div className="font-semibold text-xs flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                            <span>🍏</span><span className="truncate">Apple Glass</span>
                          </div>
                          <div className="text-[10px] font-light mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>Translucent acrylic blur</div>
                        </div>

                        {/* Option 2: Cyber Obsidian */}
                        <div className={`liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'cyber' ? 'selected' : ''}`} onClick={() => setDesignStyle('cyber')}>
                          <div className="font-semibold text-xs flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                            <span>👾</span><span className="truncate">Cyber Obsidian</span>
                          </div>
                          <div className="text-[10px] font-light mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>Pitch-black & neon borders</div>
                        </div>

                        {/* Option 3: Linear SaaS */}
                        <div className={`liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'saas' ? 'selected' : ''}`} onClick={() => setDesignStyle('saas')}>
                          <div className="font-semibold text-xs flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                            <span>🏛️</span><span className="truncate">Linear SaaS</span>
                          </div>
                          <div className="text-[10px] font-light mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>Clean neutral tones & typography</div>
                        </div>

                        {/* Option 4: Playful Vibrant */}
                        <div className={`liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'playful' ? 'selected' : ''}`} onClick={() => setDesignStyle('playful')}>
                          <div className="font-semibold text-xs flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                            <span>🎨</span><span className="truncate">Playful Vibrant</span>
                          </div>
                          <div className="text-[10px] font-light mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>Bold accents & bouncy cards</div>
                        </div>

                        {/* Option 5: Brutalist Grid */}
                        <div className={`liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'brutalist' ? 'selected' : ''}`} onClick={() => setDesignStyle('brutalist')}>
                          <div className="font-semibold text-xs flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                            <span>📰</span><span className="truncate">Brutalist Grid</span>
                          </div>
                          <div className="text-[10px] font-light mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>Raw wireframes & bold text</div>
                        </div>

                        {/* Option 6: Warm Minimal */}
                        <div className={`liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'cozy' ? 'selected' : ''}`} onClick={() => setDesignStyle('cozy')}>
                          <div className="font-semibold text-xs flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                            <span>☕</span><span className="truncate">Warm Minimal</span>
                          </div>
                          <div className="text-[10px] font-light mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>Soft earth tones & cream</div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}
                  </>
                )}
              </div>

              {/* =============================================================
                  WIZARD NAVIGATION: Rogue Positioning Neutralized!
              ============================================================= */}
              {/* 2. DOCKED NAVIGATION BAR: Clean, Vertically Centered & Safe from Curves! */}
              <div
                className="w-full shrink-0 pt-5 mt-6 border-t flex justify-between items-center pb-2 px-2"
                style={{ borderColor: 'var(--input-border)' }}
              >

                {/* Left Side: Return Button */}
                <button
                  type="button"
                  disabled={currentStep === 1 || loading || isLoading}
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-3 py-2 text-xs font-medium disabled:opacity-0 transition-all duration-200 cursor-pointer whitespace-nowrap rounded-lg hover:bg-white/5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  ← Return
                </button>

                {/* Right Side: Proceed / Hatch Button (Notice self-end is GONE!) */}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    disabled={currentStep === 1 && !rawIdea.trim()}
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="liquid-btn-primary !relative !m-0 !top-auto !right-auto !bottom-auto !left-auto text-xs !py-2.5 !px-6 whitespace-nowrap rounded-xl shadow-md cursor-pointer active:scale-95 transition-all duration-200"
                  >
                    Proceed →
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={loading || isLoading || (!features.trim() && superpowers.length === 0) || !rawIdea.trim()}
                    onClick={handleCompile}
                    className={`!relative !m-0 !top-auto !right-auto !bottom-auto !left-auto text-xs font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${loading || isLoading
                      ? 'liquid-btn-loading !opacity-100 cursor-wait'
                      : 'liquid-btn-primary shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-95'
                      }`}
                  >
                    {loading || isLoading ? '⚡ Synthesizing...' : 'Hatch Master Blueprint 📐'}
                  </button>
                )}
              </div>
            </>



          ) : (
            /* =============================================================
               STATE 2: ACTIVE CONTINUOUS CHAT ENGINE (Living Canvas!)
            ============================================================= */
            <div className="flex flex-col flex-1 h-full min-h-0 justify-between space-y-3 animate-fade-in">

              {/* Historical Command Feed: min-h-0 & flex-1 forces strict internal scrolling! */}
              <div className="space-y-3 overflow-y-auto flex-1 min-h-0 max-h-[380px] pr-1.5">
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold block pb-1 border-b sticky top-0 backdrop-blur-md z-10" style={{ borderColor: 'var(--input-border)', color: 'var(--text-dim)', backgroundColor: 'var(--code-bg)' }}>
                  Iterative Command Feed
                </span>

                {/* Initial Idea Snapshot */}
                <div className="p-3 rounded-xl border text-xs leading-relaxed" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-muted)' }}>
                  <span className="font-semibold block text-[10px] uppercase tracking-wide text-emerald-400 mb-1">🌱 Initial Parameter Seed</span>
                  <p className="line-clamp-2 italic">&quot;{rawIdea}&quot;</p>
                </div>

                {/* Refinement History Log */}
                {conversation.filter(msg => msg.role === 'user').map((msg, idx) => (
                  <div key={idx} className="p-3 rounded-xl border text-xs leading-relaxed animate-fade-in shadow-sm" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}>
                    <span className="font-semibold block text-[10px] uppercase tracking-wide text-emerald-500 mb-1">
                      ↳ Command Refinement v{idx + 2}
                    </span>
                    {msg.content}
                  </div>
                ))}
              </div>

              {/* Pinned Bottom Section: shrink-0 guarantees it stays docked at the bottom of the card! */}
              <div className="space-y-2 pt-3 border-t shrink-0 bg-inherit" style={{ borderColor: 'var(--input-border)' }}>
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold block" style={{ color: 'var(--text-dim)' }}>
                  ⚡ Quick Architectural Overrides
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => handleGenerateOrRefine(e, "🔥 Execute a Principal Engineer Red Team Audit on the current blueprint above. List potential scalability bottlenecks, security vulnerabilities, and failure modes.")}
                    className="liquid-choice text-[10px] !py-1 !px-2.5 font-medium border-red-500/30 text-red-400 hover:bg-red-500/10 cursor-pointer"
                  >
                    🔥 Red Team Audit
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleGenerateOrRefine(e, "Inject comprehensive PostgreSQL database schema layouts and Supabase Row Level Security (RLS) policies.")}
                    className="liquid-choice text-[10px] !py-1 !px-2.5 font-medium cursor-pointer"
                  >
                    🗄️ Add DB Schema
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleGenerateOrRefine(e, "Refine the technical specification to enforce strict TypeScript type safety and error boundary handling throughout all components.")}
                    className="liquid-choice text-[10px] !py-1 !px-2.5 font-medium cursor-pointer"
                  >
                    🛡️ Strict TypeScript
                  </button>
                </div>

                {/* Pinned Refinement Chat Bar */}
                <form onSubmit={handleGenerateOrRefine} className="flex gap-2 pt-1">
                  <input
                    type="text"
                    className="liquid-input text-xs"
                    placeholder="Type an architectural instruction (e.g., Change state to Zustand)..."
                    value={refinementInput}
                    onChange={(e) => setRefinementInput(e.target.value)}
                    disabled={loading || isLoading}
                  />
                  <button
                    type="submit"
                    disabled={loading || isLoading || !refinementInput.trim()}
                    className="liquid-btn-primary text-xs !py-2 !px-4 shrink-0 shadow-md"
                  >
                    {loading || isLoading ? '...' : 'Refine ⚡'}
                  </button>
                </form>
              </div>

            </div>
          )}

        </div>

        {/*=================================================================
          Floor 4 : RIGHT COLUMN: VERSION CHECKPOINTS & LIVING CANVAS
        =================================================================*/}
        <div className="liquid-glass-card flex flex-col h-full min-h-[560px]">

          {/* FORMAT SELECTOR, VERSION CAPSULE & ACTION BUTTONS */}
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4 pb-4 border-b" style={{ borderColor: 'var(--input-border)' }}>

            {/* Left: Format Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>

              {/* Standard Prompt Tab */}
              <button
                type="button"
                onClick={() => setOutputFormat('standard')}
                className={`text-[11px] px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${outputFormat === 'standard' ? 'tab-active' : 'tab-inactive'
                  }`}
              >
                📋 Standard Prompt
              </button>

              {/* .cursorrules Tab */}
              <button
                type="button"
                onClick={() => setOutputFormat('cursorrules')}
                className={`text-[11px] px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${outputFormat === 'cursorrules' ? 'tab-active' : 'tab-inactive'
                  }`}
              >
                ⚡ .cursorrules / AI IDE
              </button>

            </div>

            {/* Center: Version Checkpoints Capsule Switcher (NEW!) */}
            {versions.length > 0 && (
              <div className="flex items-center gap-1 p-1 rounded-xl border animate-fade-in" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>
                <span className="text-[10px] uppercase font-mono px-2 font-bold text-emerald-400">History:</span>
                {versions.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentVersionIdx(idx)}
                    className={`text-[10px] px-2.5 py-1 rounded-lg font-mono font-bold transition-all cursor-pointer ${currentVersionIdx === idx
                      ? 'bg-emerald-500 text-white shadow-sm scale-105'
                      : 'text-zinc-400 hover:text-white'
                      }`}
                  >
                    v{idx + 1}
                  </button>
                ))}
              </div>
            )}

            {/* Right: Download & Copy Buttons */}
            {versions.length > 0 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => downloadMarkdown(versions[currentVersionIdx])}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border transition hover:brightness-110 cursor-pointer"
                  style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
                >
                  💾 Download .md
                </button>
                <button
                  onClick={() => copyToClipboard(versions[currentVersionIdx])}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border transition hover:brightness-110 cursor-pointer"
                  style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}
                >
                  {copied ? "Copied! ✓" : "📋 Copy"}
                </button>
              </div>
            )}
          </div>

          {/* TOKEN & DOLLAR SAVINGS BADGE */}
          {versions.length > 0 && (
            <div className="mb-4 p-3 border rounded-xl text-xs font-mono flex flex-wrap justify-between items-center gap-2 backdrop-blur-md animate-fade-in" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
              <div>
                <span className="text-emerald-500 font-semibold">⚡ ~{stats?.saved?.toLocaleString() || '12,450'} Tokens Optimized</span>
                <span className="ml-1.5 font-light" style={{ color: 'var(--text-muted)' }}>(~${stats?.dollars || '0.18'} Context Churn Saved)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  Viewing v{currentVersionIdx + 1}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded font-sans uppercase tracking-wider font-semibold border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-main)' }}>
                  {outputFormat === 'cursorrules' ? 'IDE Rules Ready' : 'Architecture Verified'}
                </span>
              </div>
            </div>
          )}

          {/* CODE OUTPUT (Always kept dark/high-contrast for perfect code readability!) */}
          <div className="flex-1 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-y-auto border border-white/[0.08] whitespace-pre-wrap leading-relaxed select-all shadow-inner relative" style={{ backgroundColor: 'var(--code-bg)' }}>
            {loading || isLoading ? (
              /* FUTURISTIC SPATIAL SKELETON WAVE */
              <div className="space-y-4 animate-pulse p-2 font-sans select-none">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 w-fit">
                  <span>⚡ Synthesizing Architectural Boundaries...</span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="h-3 bg-white/[0.1] rounded w-1/4 mb-4"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-3/4"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-1/2"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-5/6"></div>
                </div>

                <div className="space-y-2.5 pt-6">
                  <div className="h-3 bg-white/[0.1] rounded w-1/3 mb-4"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-11/12"></div>
                  <div className="h-2 bg-white/[0.05] rounded w-4/5"></div>
                </div>
              </div>
            ) : versions.length > 0 ? (
              /* Renders the currently selected version! */
              versions[currentVersionIdx]
            ) : (
              /* FIXED: Hardcoded light text colors (#94a3b8 & #f8fafc) so it never turns invisible in light mode! */
              <div className="h-full flex flex-col items-center justify-center text-center py-12 font-sans select-none font-light text-[#94a3b8]">
                <span className="text-4xl mb-3 opacity-30">📐</span>
                <p className="text-sm font-medium text-[#f8fafc]">No architectural blueprint synthesized yet.</p>
                <p className="text-xs mt-1 max-w-xs font-light text-[#94a3b8]">Complete the spatial configuration parameters on the left to compile an industry-standard engineering specification.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Engine Settings Modal (Multi-Model Apple-Grade UX!) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="liquid-glass-card max-w-lg w-full relative shadow-2xl border border-white/[0.15] !p-6">

            {/* Modal Header */}
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

            {/* Plain English Explanation */}
            <div className="space-y-3 text-xs leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
              <p>
                You are currently using our <strong style={{ color: 'var(--text-main)' }}>Shared Free Tier</strong> (Google Gemini 2.5). It works great, but because it shares server capacity with everyone online, it can occasionally experience busy queues.
              </p>

              <div className="p-3 rounded-xl border space-y-1.5" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
                <p className="font-semibold text-[11px] uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                  <span>🚀</span><span>Want 100% Private, Super-Fast Speed?</span>
                </p>
                <p className="text-[11px] leading-normal">
                  Connect your own personal API key from <strong style={{ color: 'var(--text-main)' }}>Google, Anthropic, or OpenAI</strong>. It acts like a private VIP pass for the AI engine, giving you instant generation speeds and zero waiting lines!
                </p>
              </div>

              {/* Dynamic 3-Step Guide based on selected brand */}
              <div className="pt-1">
                <span className="font-semibold text-xs block mb-1" style={{ color: 'var(--text-main)' }}>
                  How to get your free key in 30 seconds:
                </span>
                <ol className="list-decimal list-inside space-y-1 text-[11px] pl-1 font-mono" style={{ color: 'var(--text-muted)' }}>
                  <li>
                    Go to {
                      provider === 'google' ? "Google's" :
                        provider === 'anthropic' ? "Anthropic's" :
                          provider === 'openai' ? "OpenAI's" :
                            provider === 'deepseek' ? "DeepSeek's" :
                              provider === 'grok' ? "xAI's (Grok)" :
                                provider === 'kimi' ? "Moonshot's (Kimi)" :
                                  provider === 'groq' ? "Groq's" :
                                    provider === 'mistral' ? "Mistral's" :
                                      provider === 'perplexity' ? "Perplexity's" :
                                        provider === 'together' ? "Together AI's" :
                                          "Ollama's"
                    } official{' '}
                    <a
                      href={
                        provider === 'google' ? "https://aistudio.google.com/app/apikey" :
                          provider === 'anthropic' ? "https://console.anthropic.com/settings/keys" :
                            provider === 'openai' ? "https://platform.openai.com/api-keys" :
                              provider === 'deepseek' ? "https://platform.deepseek.com/api_keys" :
                                provider === 'grok' ? "https://console.x.ai" :
                                  provider === 'kimi' ? "https://platform.moonshot.cn/console/api-keys" :
                                    provider === 'groq' ? "https://console.groq.com/keys" :
                                      provider === 'mistral' ? "https://console.mistral.ai/api-keys" :
                                        provider === 'perplexity' ? "https://www.perplexity.ai/settings/api" :
                                          provider === 'together' ? "https://api.together.ai/settings/api-keys" :
                                            "https://ollama.com/download"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-0.5"
                    >
                      {
                        provider === 'google' ? "AI Studio Dashboard ↗" :
                          provider === 'anthropic' ? "Claude Console ↗" :
                            provider === 'ollama' ? "Ollama Download Page ↗" :
                              "Developer Console ↗"
                      }
                    </a>
                  </li>
                  <li>Click the <strong style={{ color: 'var(--text-main)' }}>"Create API Key"</strong> (or Create New Secret Key) button.</li>
                  <li>Copy the code and paste it into the secure box below!</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-xl border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}>

              {/* Row 1: The Cloud Giants */}
              <button
                type="button"
                onClick={() => setProvider('google')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'google' ? 'bg-emerald-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🟢</span><span>Gemini</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('anthropic')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'anthropic' ? 'bg-purple-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🟣</span><span>Claude</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('openai')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'openai' ? 'bg-blue-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🔵</span><span>GPT-4o</span>
              </button>


              {/* Row 2: Speed & Open-Source Challengers */}
              <button
                type="button"
                onClick={() => setProvider('groq')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'groq' ? 'bg-orange-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>⚡</span><span>Groq</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('mistral')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'mistral' ? 'bg-red-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🌊</span><span>Codestral</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('together')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'together' ? 'bg-indigo-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🤝</span><span>Together</span>
              </button>


              {/* Row 3: DeepSeek, Grok, and Kimi */}
              <button
                type="button"
                onClick={() => setProvider('deepseek')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'deepseek' ? 'bg-cyan-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🐋</span><span>DeepSeek</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('grok')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'grok' ? 'bg-zinc-800 text-white border border-white/20 shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>⚡</span><span>Grok 2</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('kimi')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'kimi' ? 'bg-indigo-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🌙</span><span>Kimi</span>
              </button>


              {/* Row 4: Search & Offline Privacy (Completing the 11-Model Roster!) */}
              <button
                type="button"
                onClick={() => setProvider('perplexity')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'perplexity' ? 'bg-teal-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🔍</span><span>Perplexity</span>
              </button>

              <button
                type="button"
                onClick={() => setProvider('ollama')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 col-span-2 ${provider === 'ollama' ? 'bg-emerald-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>🖥️</span><span>Ollama (100% Offline Localhost)</span>
              </button>

            </div>

            {/* API KEY INPUT WITH 11-MODEL DYNAMIC PLACEHOLDERS */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-main)' }}>
                2. Paste Your Private {
                  provider === 'google' ? 'Gemini' :
                    provider === 'anthropic' ? 'Claude' :
                      provider === 'openai' ? 'OpenAI' :
                        provider === 'deepseek' ? 'DeepSeek' :
                          provider === 'grok' ? 'Grok (xAI)' :
                            provider === 'kimi' ? 'Kimi (Moonshot)' :
                              provider === 'groq' ? 'Groq LPU' :
                                provider === 'mistral' ? 'Codestral' :
                                  provider === 'perplexity' ? 'Perplexity' :
                                    provider === 'together' ? 'Together AI' :
                                      'Ollama (Localhost)'
                } Key:
              </label>

              <input
                type={provider === 'ollama' ? "text" : "password"}
                disabled={provider === 'ollama'}
                placeholder={
                  provider === 'google' ? "Paste key (e.g., AIzaSy...)" :
                    provider === 'anthropic' ? "Paste key (e.g., sk-ant-...)" :
                      provider === 'openai' || provider === 'deepseek' || provider === 'kimi' || provider === 'mistral' ? "Paste key (e.g., sk-...)" :
                        provider === 'grok' ? "Paste key (e.g., xai-...)" :
                          provider === 'groq' ? "Paste key (e.g., gsk_...)" :
                            provider === 'perplexity' ? "Paste key (e.g., pplx-...)" :
                              provider === 'together' ? "Paste 64-char alphanumeric key..." :
                                "No key needed! Runs 100% offline via Localhost"
                }
                value={provider === 'ollama' ? "http://localhost:11434 (Auto-Connected)" : tempKeyInput}
                onChange={(e) => setTempKeyInput(e.target.value)}
                className={`liquid-input font-mono text-xs ${provider === 'ollama' ? 'opacity-60 cursor-not-allowed' : ''}`}
              />

              <span className="text-[10px] block mt-1 font-light" style={{ color: 'var(--text-dim)' }}>
                {provider === 'ollama' ? (
                  "🖥️ Ollama runs locally on your machine. Ensure your background Ollama desktop service is running!"
                ) : (
                  "🔒 Your key is never sent to our servers. It is stored strictly inside your browser's local memory."
                )}
              </span>
            </div>

            {/* ACTION BUTTONS */}
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
                {tempKeyInput ? `Activate ${provider.toUpperCase()} VIP Speed ⚡` : 'Remove Key'}
              </button>
            </div>
          </div>
        </div >

      )
      }

      {/*=================================================================
          Floor 5 : The Daily Limit Exhaustion Modal
        =================================================================*/}
      {
        isLimitModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="liquid-glass-card max-w-md w-full relative border border-white/[0.15] !p-6 text-center space-y-4">
              <span className="text-4xl block">🐣</span>
              <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
                Daily Blueprint Capacity Reached!
              </h3>
              <p className="text-xs leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
                Our shared community engine has cooled down for the day to balance incoming traffic. However, you can jump straight back to work without waiting a single minute!
              </p>
              <div className="p-3.5 rounded-xl text-left border text-[11px] font-mono leading-normal" style={{ backgroundColor: 'var(--choice-bg)', borderColor: 'var(--input-border)' }}>
                💡 <strong style={{ color: 'var(--text-main)' }}>Connect a free personal Gemini Key</strong> to unlock unlimited project blueprint workspaces, continuous iterations, and dedicated private server speeds at zero cost.
              </div>
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
                  Maybe Tomorrow
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* =========================================================
          CREATOR FOOTER: Studio Name, GitHub & Buy Me a Coffee
      ========================================================= */}
      <footer className="w-full py-4 px-4 mt-auto flex justify-center items-center">
        <div
          className="flex flex-wrap items-center gap-3 px-4 py-2 rounded-full border shadow-lg backdrop-blur-md text-xs transition-all duration-300 hover:border-white/30"
          style={{
            backgroundColor: 'var(--input-bg)',
            borderColor: 'var(--input-border)',
            color: 'var(--text-muted)'
          }}
        >
          {/* 1. Studio Name & GitHub Link */}
          <a
            href="https://chickengor.github.io/jimmy_wong/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono hover:text-white transition-colors group cursor-pointer"
          >
            <span>Engineered by <strong className="font-semibold tracking-wide" style={{ color: 'var(--text-main)' }}>ChickenRice Developer Studio</strong></span>
            <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
          </a>

          {/* Vertical Divider Dot */}
          <span className="opacity-20">|</span>

          {/* 2. Buy Me a Coffee Button */}
          <a
            href="https://buymeacoffee.com/crdevstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium transition-all duration-200 bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_12px_rgba(245,158,11,0.4)] cursor-pointer"
          >
            <span className="text-sm">☕</span>
            <span>Buy me a coffee</span>
          </a>
        </div>
      </footer>
    </div >

  );

}