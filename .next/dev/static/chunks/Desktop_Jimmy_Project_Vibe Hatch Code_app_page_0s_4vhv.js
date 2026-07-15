(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VibeHatchWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
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
function VibeHatchWizard() {
    _s();
    // Theme State ('dark' or 'light')
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [rawIdea, setRawIdea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [optionalName, setOptionalName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [features, setFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [superpowers, setSuperpowers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [appType, setAppType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('web');
    const [dataRequirement, setDataRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('local');
    const [designStyle, setDesignStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('minimal');
    const [outputFormat, setOutputFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('standard');
    const [enableRedTeam, setEnableRedTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('google');
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [brainstorming, setBrainstorming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customKey, setCustomKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempKeyInput, setTempKeyInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // =========================================================================
    // 🔄 TICKER INDEX STATE & AUTO-CYCLE TIMER
    // =========================================================================
    const [tickerIndex, setTickerIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const LOADING_MESSAGES = [
        "Analyzing core domain logic...",
        "Architecting database schema & RLS policies...",
        "Mapping UI design system to Tailwind rules...",
        "Executing Red Team stress-test for scalability bottlenecks...",
        "Compiling final developer specifications..."
    ];
    // Auto-cycles the active index every 2.8s when loading triggers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VibeHatchWizard.useEffect": ()=>{
            let interval;
            if (loading || isLoading) {
                setTickerIndex(0); // Reset to first step on synthesis start
                interval = setInterval({
                    "VibeHatchWizard.useEffect": ()=>{
                        setTickerIndex({
                            "VibeHatchWizard.useEffect": (prev)=>(prev + 1) % LOADING_MESSAGES.length
                        }["VibeHatchWizard.useEffect"]);
                    }
                }["VibeHatchWizard.useEffect"], 2800);
            }
            return ({
                "VibeHatchWizard.useEffect": ()=>clearInterval(interval)
            })["VibeHatchWizard.useEffect"];
        }
    }["VibeHatchWizard.useEffect"], [
        loading,
        isLoading
    ]);
    // =========================================================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VibeHatchWizard.useEffect": ()=>{
            const savedKey = localStorage.getItem('vibe_hatch_custom_api_key');
            if (savedKey) {
                setCustomKey(savedKey);
                setTempKeyInput(savedKey);
            }
            // Load saved theme preference
            const savedTheme = localStorage.getItem('vibe_hatch_theme') || 'dark';
            setTheme(savedTheme);
        }
    }["VibeHatchWizard.useEffect"], []);
    // Toggle Theme Function
    const toggleTheme = ()=>{
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('vibe_hatch_theme', nextTheme);
    };
    const handleSaveKey = (e)=>{
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
    const toggleSuperpower = (power)=>{
        if (superpowers.includes(power)) {
            setSuperpowers(superpowers.filter((p)=>p !== power));
        } else {
            setSuperpowers([
                ...superpowers,
                power
            ]);
        }
    };
    const handleMagicWand = async ()=>{
        if (!rawIdea.trim()) {
            setErrorMessage("Please enter an idea in Step 1 first so the engine can architect features!");
            return;
        }
        setBrainstorming(true);
        setErrorMessage('');
        try {
            const res = await fetch('/api/brainstorm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idea: rawIdea,
                    customApiKey: customKey
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Brainstorming failed.");
            setFeatures((prev)=>prev ? `${prev}\n\n${data.result}` : data.result);
        } catch (err) {
            setErrorMessage(err.message);
        } finally{
            setBrainstorming(false);
        }
    };
    const handleCompile = async (e)=>{
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
                headers: {
                    'Content-Type': 'application/json'
                },
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
            setVersions([
                newSpecification
            ]);
            setCurrentVersionIdx(0);
            setConversation([
                {
                    role: 'user',
                    content: `Initial Blueprint Parameters:\n- Identity: ${identityString}\n- Stack: ${techStackMap[appType]}\n- Storage: ${storageMap[dataRequirement]}\n- Aesthetics: ${designVibeMap[designStyle]}\n- Features:\n${combinedFeatures}\n- Red Team Audit: ${enableRedTeam ? 'ENABLED' : 'DISABLED'}`
                },
                {
                    role: 'assistant',
                    content: newSpecification
                }
            ]);
            // 3. Deduct Free Tier session count on first successful hatch
            if (!customKey) {
                const today = new Date().toISOString().split('T')[0];
                localStorage.setItem('vibe_hatch_limit', JSON.stringify({
                    date: today,
                    used: 1
                }));
                setSessionsLeft(0);
            }
            // 4. Your Celebration Confetti! 🎉
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 70,
                spread: 60,
                origin: {
                    y: 0.6
                },
                colors: theme === 'dark' ? [
                    '#ffffff',
                    '#10b981',
                    '#64748b'
                ] : [
                    '#0f172a',
                    '#10b981',
                    '#3b82f6'
                ]
            });
        } catch (err) {
            setErrorMessage(err.message);
        } finally{
            setLoading(false);
        }
    };
    const calculateTokenStats = (text)=>{
        if (!text) return {
            compiled: 0,
            saved: 0,
            dollars: "0.00"
        };
        const compiledTokens = Math.round(text.length / 4);
        const saved = Math.round(compiledTokens * 3.5 + 600) - compiledTokens;
        const dollars = ((saved > 0 ? saved : 450) / 1000 * 0.024).toFixed(2);
        return {
            compiled: compiledTokens,
            saved: saved > 0 ? saved : 450,
            dollars
        };
    };
    const stats = calculateTokenStats(output);
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const downloadMarkdown = ()=>{
        const blob = new Blob([
            output
        ], {
            type: 'text/markdown;charset=utf-8;'
        });
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
    const [conversation, setConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Stores [{ role: 'user' | 'assistant', content: string }]
    const [versions, setVersions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Array of string specs: ['v1 code...', 'v2 code...']
    const [currentVersionIdx, setCurrentVersionIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1); // Tracks which version is currently showing on the right
    const [refinementInput, setRefinementInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // Text input for follow-up tweaks
    // 2. Intelligent Session-Based Rate Limiting
    const [sessionsLeft, setSessionsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isLimitModalOpen, setIsLimitModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check LocalStorage on page load to see if they already used their 1 free session today
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VibeHatchWizard.useEffect": ()=>{
            const today = new Date().toISOString().split('T')[0];
            const storedLimit = localStorage.getItem('vibe_hatch_limit');
            if (storedLimit) {
                const { date, used } = JSON.parse(storedLimit);
                if (date === today && used >= 1) {
                    setSessionsLeft(0);
                } else if (date !== today) {
                    // It's a brand new day! Reset daily limits.
                    localStorage.setItem('vibe_hatch_limit', JSON.stringify({
                        date: today,
                        used: 0
                    }));
                    setSessionsLeft(1);
                }
            } else {
                localStorage.setItem('vibe_hatch_limit', JSON.stringify({
                    date: today,
                    used: 0
                }));
            }
        }
    }["VibeHatchWizard.useEffect"], []);
    //=================================================================
    // ⚡ FLOOR 2: FUNCTIONS & LOGIC (handleGenerateOrRefine function)
    //=================================================================
    const handleGenerateOrRefine = async (e, customInstruction = null)=>{
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
            {
                role: 'user',
                content: promptText
            }
        ];
        setConversation(updatedConversation);
        setRefinementInput(''); // Clear input instantly for snappy UI feedback
        // Inside handleGenerateOrRefine in app/page.js:
        try {
            // 1. Make sure this points to '/api/compile' so it hits your backend!
            const response = await fetch('/api/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
            const updatedVersions = [
                ...versions,
                newSpecification
            ];
            setVersions(updatedVersions);
            setCurrentVersionIdx(updatedVersions.length - 1);
            setConversation([
                ...updatedConversation,
                {
                    role: 'assistant',
                    content: newSpecification
                }
            ]);
            // Backwards compatibility for legacy output view
            if (typeof setOutput === 'function') setOutput(newSpecification);
        } catch (error) {
            console.error('Error generating blueprint:', error);
            // Display the real error in an alert so you can see what happened!
            alert(`⚠️ Refinement Error: ${error.message}`);
        } finally{
            setIsLoading(false);
            if (typeof setLoading === 'function') setLoading(false);
        }
    };
    return(//=================================================================
    //🎨 FLOOR 3: THE UI RENDER
    //=================================================================
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen p-6 md:p-10 font-sans relative selection:bg-emerald-500/30 selection:text-emerald-500 transition-colors duration-500 ${theme === 'light' ? 'light-mode' : ''}`,
        style: {
            backgroundColor: 'var(--bg-main)',
            color: 'var(--text-main)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500",
                style: {
                    backgroundColor: 'var(--orb-1)'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10 transition-colors duration-500",
                style: {
                    backgroundColor: 'var(--orb-2)'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6",
                style: {
                    borderColor: 'var(--input-border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]",
                                        children: "🏛️"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-black tracking-tight titanium-gradient",
                                        children: "Vibe Hatch Code"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs md:text-sm mt-1 font-light tracking-wide",
                                style: {
                                    color: 'var(--text-muted)'
                                },
                                children: "Spatial Architecture Engine. Turn rough concepts into high-signal engineering specifications."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition backdrop-blur-md shadow-sm",
                                style: {
                                    backgroundColor: 'var(--choice-bg)',
                                    borderColor: 'var(--input-border)',
                                    color: 'var(--text-main)'
                                },
                                title: "Toggle Apple VisionOS Theme",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: theme === 'dark' ? '☀️ Opal Light' : '🌙 Obsidian Void'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 409,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsModalOpen(true),
                                className: "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition backdrop-blur-md shadow-sm",
                                style: {
                                    backgroundColor: 'var(--choice-bg)',
                                    borderColor: 'var(--input-border)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-1.5 h-1.5 rounded-full ${customKey ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--text-main)'
                                        },
                                        children: customKey ? 'Custom BYOK' : 'Free Tier'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--text-dim)'
                                        },
                                        className: "ml-1",
                                        children: "⚙️"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto mb-6 p-4 bg-red-500/10 border border-red-500/40 backdrop-blur-md rounded-xl text-xs text-red-500 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 426,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "liquid-glass-card flex flex-col justify-between min-h-[560px] max-h-[620px] h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-5 border-b mb-6",
                                style: {
                                    borderColor: 'var(--input-border)'
                                },
                                children: versions.length === 0 ? /* WIZARD HEADER: Progress Tracker */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold",
                                            children: [
                                                "Phase 0",
                                                currentStep,
                                                " // 04"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `step-dot ${currentStep === s ? 'active' : ''}`
                                                }, s, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /* LIVING CANVAS HEADER: Iteration Mode Active */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 459,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-bold",
                                                    children: "⚡ Spatial Co-Pilot // Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 458,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setVersions([]);
                                                setConversation([]);
                                                setCurrentStep(1);
                                            },
                                            className: "text-[10px] px-2.5 py-1 rounded-lg border font-mono uppercase font-semibold transition hover:border-red-400 hover:text-red-400",
                                            style: {
                                                backgroundColor: 'var(--input-bg)',
                                                borderColor: 'var(--input-border)',
                                                color: 'var(--text-muted)'
                                            },
                                            children: "🔄 New Blueprint"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            versions.length === 0 ? /* =============================================================
               STATE 1: YOUR ORIGINAL 4-STEP WIZARD (100% Preserved!)
            ============================================================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto pr-2 no-scrollbar space-y-4 max-h-[52vh] pt-2 flex flex-col justify-center",
                                        children: loading || isLoading ? /* =========================================================
                     SYNTHESIS LOADING STATE: Dynamic Terminal Ticker
                  ========================================================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center py-8 space-y-6 animate-fade-in my-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-14 h-14 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 500,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 blur-xl bg-emerald-500/10 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 501,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 499,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center space-y-2 max-w-md px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-semibold tracking-wide",
                                                            style: {
                                                                color: 'var(--text-main)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "animate-spin h-4 w-4 text-emerald-400 shrink-0",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            className: "opacity-25",
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 510,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            className: "opacity-75",
                                                                            fill: "currentColor",
                                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 511,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 509,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "transition-all duration-300 animate-pulse text-left",
                                                                    children: LOADING_MESSAGES[tickerIndex]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 515,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 506,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-light",
                                                            style: {
                                                                color: 'var(--text-muted)'
                                                            },
                                                            children: "Our AI engines are reasoning through your architectural blueprint..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 519,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full max-w-xs bg-black/20 border border-white/5 rounded-xl p-3 space-y-2 mt-2 shadow-inner",
                                                    children: LOADING_MESSAGES.map((msg, idx)=>{
                                                        const isDone = idx < tickerIndex;
                                                        const isCurrent = idx === tickerIndex;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex items-center gap-2.5 text-[11px] font-mono transition-all duration-300 ${isCurrent ? 'text-emerald-400 font-medium translate-x-1' : isDone ? 'text-slate-500 line-through opacity-60' : 'text-slate-600 opacity-30'}`,
                                                            children: [
                                                                isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-500 font-bold shrink-0",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 541,
                                                                    columnNumber: 40
                                                                }, this),
                                                                isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "animate-spin h-3 w-3 text-emerald-400 shrink-0",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            className: "opacity-25",
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 544,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            className: "opacity-75",
                                                                            fill: "currentColor",
                                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 545,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 543,
                                                                    columnNumber: 31
                                                                }, this),
                                                                !isDone && !isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "shrink-0",
                                                                    children: "○"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 548,
                                                                    columnNumber: 55
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: msg
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 551,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 530,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 525,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this) : /* =========================================================
                     NORMAL WIZARD STEPS (1 TO 4)
                  ========================================================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 animate-fade-in",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-base font-semibold tracking-tight",
                                                            style: {
                                                                color: 'var(--text-main)'
                                                            },
                                                            children: "💡 What is the core problem or concept?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 565,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-light leading-relaxed",
                                                            style: {
                                                                color: 'var(--text-muted)'
                                                            },
                                                            children: "Describe your software idea in plain English. No technical jargon required."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 566,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-mono uppercase tracking-wider mb-2 font-semibold",
                                                            style: {
                                                                color: 'var(--text-main)'
                                                            },
                                                            children: "1. Describe Your Software Architecture Idea:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 569,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1.5 mb-3 overflow-x-auto pb-1 no-scrollbar",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-mono self-center mr-1 opacity-50 whitespace-nowrap",
                                                                    children: "Try:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 575,
                                                                    columnNumber: 23
                                                                }, this),
                                                                STARTER_BLUEPRINTS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setRawIdea(item.prompt),
                                                                        className: "px-2.5 py-1 text-[11px] font-medium rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer scale-95 hover:scale-100 shadow-sm flex items-center gap-1 hover:border-emerald-500/50 hover:text-emerald-300",
                                                                        style: {
                                                                            backgroundColor: 'var(--input-bg)',
                                                                            borderColor: 'var(--input-border)',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: item.label
                                                                    }, item.label, false, {
                                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                        lineNumber: 577,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 574,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: "4",
                                                            placeholder: "e.g., A minimalist spatial desktop timer that tracks my deep-work flow states and plays lo-fi white noise...",
                                                            className: "liquid-input text-sm leading-relaxed",
                                                            value: rawIdea,
                                                            onChange: (e)=>setRawIdea(e.target.value),
                                                            autoFocus: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 594,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[11px] font-medium mb-1.5",
                                                                    style: {
                                                                        color: 'var(--text-muted)'
                                                                    },
                                                                    children: "Project Identifier / App Name (Optional)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 604,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "e.g., FlowSphere (Leave blank for automated synthesis)",
                                                                    className: "liquid-input text-xs",
                                                                    value: optionalName,
                                                                    onChange: (e)=>setOptionalName(e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 605,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 603,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, this),
                                                currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 animate-fade-in flex-1 flex flex-col justify-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-base font-semibold tracking-tight",
                                                                    style: {
                                                                        color: 'var(--text-main)'
                                                                    },
                                                                    children: "⚙️ Select Target Deployment Environment"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 620,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-light mt-0.5",
                                                                    style: {
                                                                        color: 'var(--text-muted)'
                                                                    },
                                                                    children: "Where should this architectural blueprint be natively executed?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 621,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 619,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'web' ? 'selected' : ''}`,
                                                                    onClick: ()=>setAppType('web'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs sm:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🌐"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 635,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Website / Web App"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 635,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 634,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-light mt-1 leading-normal",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Runs directly in web browsers like Chrome or Safari. Perfect for dashboards, SaaS tools, and portals."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 637,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 630,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'mobile' ? 'selected' : ''}`,
                                                                    onClick: ()=>setAppType('mobile'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs sm:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "📱"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 648,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Phone App (iOS & Android)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 648,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 647,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-light mt-1 leading-normal",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Downloadable app for iPhones and Android devices. Perfect for habit trackers, social tools, and games."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 650,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 643,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'extension' ? 'selected' : ''}`,
                                                                    onClick: ()=>setAppType('extension'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs sm:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🧩"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 661,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Chrome Extension"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 661,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 660,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-light mt-1 leading-normal",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Sits in your browser toolbar while surfing the web. Perfect for AI summarizers, scrapers, and note-takers."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 663,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 656,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'desktop' ? 'selected' : ''}`,
                                                                    onClick: ()=>setAppType('desktop'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs sm:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🖥️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 674,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Desktop App (Mac & PC)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 674,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 673,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-light mt-1 leading-normal",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Downloadable software for your computer. Perfect for menu-bar utilities, local organizers, and offline tools."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 676,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 669,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'bot' ? 'selected' : ''}`,
                                                                    onClick: ()=>setAppType('bot'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs sm:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🤖"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 687,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Chat Bot Assistant"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 687,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 686,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-light mt-1 leading-normal",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Lives inside messaging platforms. Perfect for automated Discord, Slack, and Telegram community moderators."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 689,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 682,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${appType === 'api' ? 'selected' : ''}`,
                                                                    onClick: ()=>setAppType('api'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs sm:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "⚙️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 700,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Background Script / API"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 700,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 699,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-light mt-1 leading-normal",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Automated backend process without a screen. Perfect for scheduled data pipelines, webhooks, and integrations."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 702,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 695,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 627,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this),
                                                currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 animate-fade-in",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-base font-semibold tracking-tight",
                                                            style: {
                                                                color: 'var(--text-main)'
                                                            },
                                                            children: "💾 Select Data Storage & Memory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 713,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-light",
                                                            style: {
                                                                color: 'var(--text-muted)'
                                                            },
                                                            children: "How should your app save user information and remember things across visits?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 714,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'none' ? 'selected' : ''}`,
                                                                    onClick: ()=>setDataRequirement('none'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs md:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "⚡"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 720,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "No Saving (Reset on Close)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 720,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 719,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] font-light mt-1 leading-normal line-clamp-2",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Nothing is stored permanently. Perfect for quick calculators, AI prompt generators, and one-off tools."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 722,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 718,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'local' ? 'selected' : ''}`,
                                                                    onClick: ()=>setDataRequirement('local'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs md:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🔒"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 730,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Saved on Device Only"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 730,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 729,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] font-light mt-1 leading-normal line-clamp-2",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Saves locally on the user's computer or phone. Perfect for private note-takers and habit trackers without logins."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 732,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 728,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'cloud' ? 'selected' : ''}`,
                                                                    onClick: ()=>setDataRequirement('cloud'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs md:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "☁️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 740,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Cloud Database & Logins"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 740,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 739,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] font-light mt-1 leading-normal line-clamp-2",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Saves data securely in the cloud with user accounts. Perfect for SaaS platforms, social apps, and multi-device sync."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 742,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 738,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'vector' ? 'selected' : ''}`,
                                                                    onClick: ()=>setDataRequirement('vector'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs md:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🧠"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 750,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "AI Vector Memory (RAG)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 750,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 749,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] font-light mt-1 leading-normal line-clamp-2",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Long-term semantic memory for AI. Perfect for chatbots, document analyzers, and tools that search through text."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 752,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 748,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'hybrid' ? 'selected' : ''}`,
                                                                    onClick: ()=>setDataRequirement('hybrid'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs md:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🔄"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 760,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Offline-First & Cloud Sync"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 760,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 759,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] font-light mt-1 leading-normal line-clamp-2",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Saves instantly to the device for zero lag, then syncs to the cloud in the background. Perfect for Notion-like tools."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 762,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 758,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `liquid-choice p-3 rounded-xl cursor-pointer transition-all duration-200 ${dataRequirement === 'external' ? 'selected' : ''}`,
                                                                    onClick: ()=>setDataRequirement('external'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-xs md:text-sm flex items-center gap-1.5",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🔌"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 770,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Connect to Existing Data"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 770,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 769,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] font-light mt-1 leading-normal line-clamp-2",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Plugs into external APIs, Airtable, Google Sheets, or custom company databases without building a new backend."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 772,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 768,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 716,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this),
                                                currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 animate-fade-in",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "text-base font-semibold tracking-tight",
                                                                            style: {
                                                                                color: 'var(--text-main)'
                                                                            },
                                                                            children: "🎨 System Superpowers & Aesthetics"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 785,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] font-light",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "Fine-tune capabilities and visual direction."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 786,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 784,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleMagicWand,
                                                                    disabled: brainstorming,
                                                                    className: "text-xs border px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition backdrop-blur-md shadow-sm cursor-pointer hover:bg-white/5 shrink-0",
                                                                    style: {
                                                                        backgroundColor: 'var(--choice-bg)',
                                                                        borderColor: 'var(--input-border)',
                                                                        color: 'var(--text-main)'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: brainstorming ? '⏳' : '✨'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 795,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: brainstorming ? 'AI Brainstorm' : 'AI Brainstorm'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 796,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 788,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 783,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-3 pt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[11px] font-mono text-emerald-500 uppercase tracking-wider mb-1.5 font-semibold",
                                                                            children: "1. Inject Capabilities:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 807,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pr-1 no-scrollbar",
                                                                            children: SUPERPOWERS.map((power, idx)=>{
                                                                                const isSelected = superpowers.includes(power);
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>toggleSuperpower(power),
                                                                                    className: `text-[11px] px-2.5 py-1 rounded-lg border transition font-medium flex items-center gap-1 cursor-pointer ${isSelected ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.15)]' : 'border-transparent hover:border-slate-400'}`,
                                                                                    style: {
                                                                                        backgroundColor: isSelected ? undefined : 'var(--choice-bg)',
                                                                                        color: isSelected ? undefined : 'var(--text-muted)'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: isSelected ? '✓' : '+'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 824,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: power
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 825,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 814,
                                                                                    columnNumber: 31
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 810,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 806,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "2. Functional Requirements:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 834,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            rows: "3",
                                                                            placeholder: "e.g. 1. OpenAI tab summarizer 2. Notion OAuth2 database sync...",
                                                                            className: "liquid-input text-xs font-light flex-1 resize-none !p-2.5",
                                                                            value: features,
                                                                            onChange: (e)=>setFeatures(e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 837,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 833,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 803,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center mb-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[11px] font-mono uppercase tracking-wider font-semibold",
                                                                            style: {
                                                                                color: 'var(--text-muted)'
                                                                            },
                                                                            children: "3. Aesthetic Direction:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 852,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        typeof enableRedTeam !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-1.5 text-[11px] font-semibold text-red-400 cursor-pointer hover:text-red-300 transition",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: enableRedTeam,
                                                                                    onChange: (e)=>setEnableRedTeam(e.target.checked),
                                                                                    className: "w-3.5 h-3.5 accent-red-500 rounded cursor-pointer"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 859,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🔥 Red Team Audit"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 865,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 858,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 851,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 md:grid-cols-3 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'apple' ? 'selected' : ''}`,
                                                                            onClick: ()=>setDesignStyle('apple'),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold text-xs flex items-center gap-1.5",
                                                                                    style: {
                                                                                        color: 'var(--text-main)'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "🍏"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 874,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate",
                                                                                            children: "Apple Glass"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 874,
                                                                                            columnNumber: 44
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 873,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-light mt-0.5 line-clamp-1",
                                                                                    style: {
                                                                                        color: 'var(--text-muted)'
                                                                                    },
                                                                                    children: "Translucent acrylic blur"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 876,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 872,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'cyber' ? 'selected' : ''}`,
                                                                            onClick: ()=>setDesignStyle('cyber'),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold text-xs flex items-center gap-1.5",
                                                                                    style: {
                                                                                        color: 'var(--text-main)'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "👾"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 882,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate",
                                                                                            children: "Cyber Obsidian"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 882,
                                                                                            columnNumber: 44
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 881,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-light mt-0.5 line-clamp-1",
                                                                                    style: {
                                                                                        color: 'var(--text-muted)'
                                                                                    },
                                                                                    children: "Pitch-black & neon borders"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 884,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 880,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'saas' ? 'selected' : ''}`,
                                                                            onClick: ()=>setDesignStyle('saas'),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold text-xs flex items-center gap-1.5",
                                                                                    style: {
                                                                                        color: 'var(--text-main)'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "🏛️"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 890,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate",
                                                                                            children: "Linear SaaS"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 890,
                                                                                            columnNumber: 45
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 889,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-light mt-0.5 line-clamp-1",
                                                                                    style: {
                                                                                        color: 'var(--text-muted)'
                                                                                    },
                                                                                    children: "Clean neutral tones & typography"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 892,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 888,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'playful' ? 'selected' : ''}`,
                                                                            onClick: ()=>setDesignStyle('playful'),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold text-xs flex items-center gap-1.5",
                                                                                    style: {
                                                                                        color: 'var(--text-main)'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "🎨"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 898,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate",
                                                                                            children: "Playful Vibrant"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 898,
                                                                                            columnNumber: 44
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 897,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-light mt-0.5 line-clamp-1",
                                                                                    style: {
                                                                                        color: 'var(--text-muted)'
                                                                                    },
                                                                                    children: "Bold accents & bouncy cards"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 900,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 896,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'brutalist' ? 'selected' : ''}`,
                                                                            onClick: ()=>setDesignStyle('brutalist'),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold text-xs flex items-center gap-1.5",
                                                                                    style: {
                                                                                        color: 'var(--text-main)'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "📰"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 906,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate",
                                                                                            children: "Brutalist Grid"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 906,
                                                                                            columnNumber: 44
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 905,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-light mt-0.5 line-clamp-1",
                                                                                    style: {
                                                                                        color: 'var(--text-muted)'
                                                                                    },
                                                                                    children: "Raw wireframes & bold text"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 908,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 904,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `liquid-choice p-2 rounded-xl cursor-pointer transition-all duration-200 ${designStyle === 'cozy' ? 'selected' : ''}`,
                                                                            onClick: ()=>setDesignStyle('cozy'),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold text-xs flex items-center gap-1.5",
                                                                                    style: {
                                                                                        color: 'var(--text-main)'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "☕"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 914,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate",
                                                                                            children: "Warm Minimal"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                            lineNumber: 914,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 913,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-light mt-0.5 line-clamp-1",
                                                                                    style: {
                                                                                        color: 'var(--text-muted)'
                                                                                    },
                                                                                    children: "Soft earth tones & cream"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                                    lineNumber: 916,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                            lineNumber: 912,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                    lineNumber: 870,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 850,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 781,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full shrink-0 pt-5 mt-6 border-t flex justify-between items-center pb-2 px-2",
                                        style: {
                                            borderColor: 'var(--input-border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: currentStep === 1 || loading || isLoading,
                                                onClick: ()=>setCurrentStep((prev)=>prev - 1),
                                                className: "px-3 py-2 text-xs font-medium disabled:opacity-0 transition-all duration-200 cursor-pointer whitespace-nowrap rounded-lg hover:bg-white/5",
                                                style: {
                                                    color: 'var(--text-muted)'
                                                },
                                                children: "← Return"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 937,
                                                columnNumber: 17
                                            }, this),
                                            currentStep < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: currentStep === 1 && !rawIdea.trim(),
                                                onClick: ()=>setCurrentStep((prev)=>prev + 1),
                                                className: "liquid-btn-primary !relative !m-0 !top-auto !right-auto !bottom-auto !left-auto text-xs !py-2.5 !px-6 whitespace-nowrap rounded-xl shadow-md cursor-pointer active:scale-95 transition-all duration-200",
                                                children: "Proceed →"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 949,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: loading || isLoading || !features.trim() && superpowers.length === 0 || !rawIdea.trim(),
                                                onClick: handleCompile,
                                                className: `!relative !m-0 !top-auto !right-auto !bottom-auto !left-auto text-xs font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${loading || isLoading ? 'liquid-btn-loading !opacity-100 cursor-wait' : 'liquid-btn-primary shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-95'}`,
                                                children: loading || isLoading ? '⚡ Synthesizing...' : 'Hatch Master Blueprint 📐'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 958,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /* =============================================================
               STATE 2: ACTIVE CONTINUOUS CHAT ENGINE (Living Canvas!)
            ============================================================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col flex-1 h-full min-h-0 justify-between space-y-3 animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 overflow-y-auto flex-1 min-h-0 max-h-[380px] pr-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase font-mono tracking-wider font-bold block pb-1 border-b sticky top-0 backdrop-blur-md z-10",
                                                style: {
                                                    borderColor: 'var(--input-border)',
                                                    color: 'var(--text-dim)',
                                                    backgroundColor: 'var(--code-bg)'
                                                },
                                                children: "Iterative Command Feed"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 983,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-xl border text-xs leading-relaxed",
                                                style: {
                                                    backgroundColor: 'var(--input-bg)',
                                                    borderColor: 'var(--input-border)',
                                                    color: 'var(--text-muted)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold block text-[10px] uppercase tracking-wide text-emerald-400 mb-1",
                                                        children: "🌱 Initial Parameter Seed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 989,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "line-clamp-2 italic",
                                                        children: [
                                                            '"',
                                                            rawIdea,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 990,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 988,
                                                columnNumber: 17
                                            }, this),
                                            conversation.filter((msg)=>msg.role === 'user').map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-xl border text-xs leading-relaxed animate-fade-in shadow-sm",
                                                    style: {
                                                        backgroundColor: 'var(--choice-bg)',
                                                        borderColor: 'var(--input-border)',
                                                        color: 'var(--text-main)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold block text-[10px] uppercase tracking-wide text-emerald-500 mb-1",
                                                            children: [
                                                                "↳ Command Refinement v",
                                                                idx + 2
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 996,
                                                            columnNumber: 21
                                                        }, this),
                                                        msg.content
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 995,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 982,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pt-3 border-t shrink-0 bg-inherit",
                                        style: {
                                            borderColor: 'var(--input-border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase font-mono tracking-wider font-semibold block",
                                                style: {
                                                    color: 'var(--text-dim)'
                                                },
                                                children: "⚡ Quick Architectural Overrides"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1006,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: (e)=>handleGenerateOrRefine(e, "🔥 Execute a Principal Engineer Red Team Audit on the current blueprint above. List potential scalability bottlenecks, security vulnerabilities, and failure modes."),
                                                        className: "liquid-choice text-[10px] !py-1 !px-2.5 font-medium border-red-500/30 text-red-400 hover:bg-red-500/10 cursor-pointer",
                                                        children: "🔥 Red Team Audit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 1010,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: (e)=>handleGenerateOrRefine(e, "Inject comprehensive PostgreSQL database schema layouts and Supabase Row Level Security (RLS) policies."),
                                                        className: "liquid-choice text-[10px] !py-1 !px-2.5 font-medium cursor-pointer",
                                                        children: "🗄️ Add DB Schema"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 1017,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: (e)=>handleGenerateOrRefine(e, "Refine the technical specification to enforce strict TypeScript type safety and error boundary handling throughout all components."),
                                                        className: "liquid-choice text-[10px] !py-1 !px-2.5 font-medium cursor-pointer",
                                                        children: "🛡️ Strict TypeScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 1024,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1009,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleGenerateOrRefine,
                                                className: "flex gap-2 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "liquid-input text-xs",
                                                        placeholder: "Type an architectural instruction (e.g., Change state to Zustand)...",
                                                        value: refinementInput,
                                                        onChange: (e)=>setRefinementInput(e.target.value),
                                                        disabled: loading || isLoading
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 1035,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading || isLoading || !refinementInput.trim(),
                                                        className: "liquid-btn-primary text-xs !py-2 !px-4 shrink-0 shadow-md",
                                                        children: loading || isLoading ? '...' : 'Refine ⚡'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 1043,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1034,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 1005,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 979,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "liquid-glass-card flex flex-col h-full min-h-[560px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-between items-center gap-2 mb-4 pb-4 border-b",
                                style: {
                                    borderColor: 'var(--input-border)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 p-1 rounded-xl border",
                                        style: {
                                            backgroundColor: 'var(--input-bg)',
                                            borderColor: 'var(--input-border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setOutputFormat('standard'),
                                                className: `text-[11px] px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${outputFormat === 'standard' ? 'tab-active' : 'tab-inactive'}`,
                                                children: "📋 Standard Prompt"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1070,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setOutputFormat('cursorrules'),
                                                className: `text-[11px] px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${outputFormat === 'cursorrules' ? 'tab-active' : 'tab-inactive'}`,
                                                children: "⚡ .cursorrules / AI IDE"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1080,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 1067,
                                        columnNumber: 13
                                    }, this),
                                    versions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 p-1 rounded-xl border animate-fade-in",
                                        style: {
                                            backgroundColor: 'var(--input-bg)',
                                            borderColor: 'var(--input-border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase font-mono px-2 font-bold text-emerald-400",
                                                children: "History:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1094,
                                                columnNumber: 17
                                            }, this),
                                            versions.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setCurrentVersionIdx(idx),
                                                    className: `text-[10px] px-2.5 py-1 rounded-lg font-mono font-bold transition-all cursor-pointer ${currentVersionIdx === idx ? 'bg-emerald-500 text-white shadow-sm scale-105' : 'text-zinc-400 hover:text-white'}`,
                                                    children: [
                                                        "v",
                                                        idx + 1
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1096,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 1093,
                                        columnNumber: 15
                                    }, this),
                                    versions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>downloadMarkdown(versions[currentVersionIdx]),
                                                className: "px-3 py-1.5 rounded-lg text-xs font-medium border transition hover:brightness-110 cursor-pointer",
                                                style: {
                                                    backgroundColor: 'var(--choice-bg)',
                                                    borderColor: 'var(--input-border)',
                                                    color: 'var(--text-main)'
                                                },
                                                children: "💾 Download .md"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(versions[currentVersionIdx]),
                                                className: "px-3 py-1.5 rounded-lg text-xs font-medium border transition hover:brightness-110 cursor-pointer",
                                                style: {
                                                    backgroundColor: 'var(--choice-bg)',
                                                    borderColor: 'var(--input-border)',
                                                    color: 'var(--text-main)'
                                                },
                                                children: copied ? "Copied! ✓" : "📋 Copy"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 1113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 1064,
                                columnNumber: 11
                            }, this),
                            versions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-3 border rounded-xl text-xs font-mono flex flex-wrap justify-between items-center gap-2 backdrop-blur-md animate-fade-in",
                                style: {
                                    backgroundColor: 'var(--choice-bg)',
                                    borderColor: 'var(--input-border)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500 font-semibold",
                                                children: [
                                                    "⚡ ~",
                                                    stats?.saved?.toLocaleString() || '12,450',
                                                    " Tokens Optimized"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1.5 font-light",
                                                style: {
                                                    color: 'var(--text-muted)'
                                                },
                                                children: [
                                                    "(~$",
                                                    stats?.dollars || '0.18',
                                                    " Context Churn Saved)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 1135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-2 py-0.5 rounded font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold",
                                                children: [
                                                    "Viewing v",
                                                    currentVersionIdx + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-2 py-0.5 rounded font-sans uppercase tracking-wider font-semibold border",
                                                style: {
                                                    backgroundColor: 'var(--input-bg)',
                                                    borderColor: 'var(--input-border)',
                                                    color: 'var(--text-main)'
                                                },
                                                children: outputFormat === 'cursorrules' ? 'IDE Rules Ready' : 'Architecture Verified'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1143,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 1139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 1134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-y-auto border border-white/[0.08] whitespace-pre-wrap leading-relaxed select-all shadow-inner relative",
                                style: {
                                    backgroundColor: 'var(--code-bg)'
                                },
                                children: loading || isLoading ? /* FUTURISTIC SPATIAL SKELETON WAVE */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 animate-pulse p-2 font-sans select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 w-fit",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "⚡ Synthesizing Architectural Boundaries..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 1156,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2.5 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-white/[0.1] rounded w-1/4 mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-white/[0.05] rounded w-3/4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-white/[0.05] rounded w-1/2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-white/[0.05] rounded w-5/6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1163,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2.5 pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-white/[0.1] rounded w-1/3 mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-white/[0.05] rounded w-11/12"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-white/[0.05] rounded w-4/5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1166,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1154,
                                    columnNumber: 15
                                }, this) : versions.length > 0 ? /* Renders the currently selected version! */ versions[currentVersionIdx] : /* FIXED: Hardcoded light text colors (#94a3b8 & #f8fafc) so it never turns invisible in light mode! */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col items-center justify-center text-center py-12 font-sans select-none font-light text-[#94a3b8]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl mb-3 opacity-30",
                                            children: "📐"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-[#f8fafc]",
                                            children: "No architectural blueprint synthesized yet."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-1 max-w-xs font-light text-[#94a3b8]",
                                            children: "Complete the spatial configuration parameters on the left to compile an industry-standard engineering specification."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1177,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 1151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 1061,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "liquid-glass-card max-w-lg w-full relative shadow-2xl border border-white/[0.15] !p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b mb-4",
                            style: {
                                borderColor: 'var(--input-border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl",
                                            children: "⚡"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-bold tracking-tight",
                                            style: {
                                                color: 'var(--text-main)'
                                            },
                                            children: "AI Engine Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold border",
                                    style: {
                                        backgroundColor: 'var(--input-bg)',
                                        borderColor: 'var(--input-border)',
                                        color: 'var(--text-main)'
                                    },
                                    children: customKey ? `${provider.toUpperCase()} Private Mode` : 'Shared Free Tier'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1193,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-xs leading-relaxed font-light",
                            style: {
                                color: 'var(--text-muted)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "You are currently using our ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: 'var(--text-main)'
                                            },
                                            children: "Shared Free Tier"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1208,
                                            columnNumber: 45
                                        }, this),
                                        " (Google Gemini 2.5). It works great, but because it shares server capacity with everyone online, it can occasionally experience busy queues."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl border space-y-1.5",
                                    style: {
                                        backgroundColor: 'var(--choice-bg)',
                                        borderColor: 'var(--input-border)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-[11px] uppercase tracking-wider text-emerald-500 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "🚀"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1213,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Want 100% Private, Super-Fast Speed?"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1213,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] leading-normal",
                                            children: [
                                                "Connect your own personal API key from ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: 'var(--text-main)'
                                                    },
                                                    children: "Google, Anthropic, or OpenAI"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1216,
                                                    columnNumber: 58
                                                }, this),
                                                ". It acts like a private VIP pass for the AI engine, giving you instant generation speeds and zero waiting lines!"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-xs block mb-1",
                                            style: {
                                                color: 'var(--text-main)'
                                            },
                                            children: "How to get your free key in 30 seconds:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "list-decimal list-inside space-y-1 text-[11px] pl-1 font-mono",
                                            style: {
                                                color: 'var(--text-muted)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Go to ",
                                                        provider === 'google' ? "Google's" : provider === 'anthropic' ? "Anthropic's" : provider === 'openai' ? "OpenAI's" : provider === 'deepseek' ? "DeepSeek's" : provider === 'grok' ? "xAI's (Grok)" : provider === 'kimi' ? "Moonshot's (Kimi)" : provider === 'groq' ? "Groq's" : provider === 'mistral' ? "Mistral's" : provider === 'perplexity' ? "Perplexity's" : provider === 'together' ? "Together AI's" : "Ollama's",
                                                        " official",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: provider === 'google' ? "https://aistudio.google.com/app/apikey" : provider === 'anthropic' ? "https://console.anthropic.com/settings/keys" : provider === 'openai' ? "https://platform.openai.com/api-keys" : provider === 'deepseek' ? "https://platform.deepseek.com/api_keys" : provider === 'grok' ? "https://console.x.ai" : provider === 'kimi' ? "https://platform.moonshot.cn/console/api-keys" : provider === 'groq' ? "https://console.groq.com/keys" : provider === 'mistral' ? "https://console.mistral.ai/api-keys" : provider === 'perplexity' ? "https://www.perplexity.ai/settings/api" : provider === 'together' ? "https://api.together.ai/settings/api-keys" : "https://ollama.com/download",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "underline text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-0.5",
                                                            children: provider === 'google' ? "AI Studio Dashboard ↗" : provider === 'anthropic' ? "Claude Console ↗" : provider === 'ollama' ? "Ollama Download Page ↗" : "Developer Console ↗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 1240,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Click the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            style: {
                                                                color: 'var(--text-main)'
                                                            },
                                                            children: '"Create API Key"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                            lineNumber: 1266,
                                                            columnNumber: 33
                                                        }, this),
                                                        " (or Create New Secret Key) button."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Copy the code and paste it into the secure box below!"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                    lineNumber: 1267,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1225,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-1.5 p-1.5 rounded-xl border",
                            style: {
                                backgroundColor: 'var(--input-bg)',
                                borderColor: 'var(--input-border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('google'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'google' ? 'bg-emerald-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🟢"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Gemini"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1281,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('anthropic'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'anthropic' ? 'bg-purple-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🟣"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Claude"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1290,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1284,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('openai'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'openai' ? 'bg-blue-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔵"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "GPT-4o"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1299,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1293,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('groq'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'groq' ? 'bg-orange-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⚡"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1310,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Groq"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1310,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('mistral'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'mistral' ? 'bg-red-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🌊"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1319,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Codestral"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1319,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('together'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'together' ? 'bg-indigo-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🤝"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Together"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1328,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1322,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('deepseek'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'deepseek' ? 'bg-cyan-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🐋"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "DeepSeek"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1339,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1333,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('grok'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'grok' ? 'bg-zinc-800 text-white border border-white/20 shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⚡"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Grok 2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1348,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('kimi'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'kimi' ? 'bg-indigo-500 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🌙"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1357,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Kimi"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1357,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('perplexity'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 ${provider === 'perplexity' ? 'bg-teal-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1368,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Perplexity"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1368,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setProvider('ollama'),
                                    className: `py-1.5 px-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1 col-span-2 ${provider === 'ollama' ? 'bg-emerald-600 text-white shadow-sm font-bold scale-[1.02]' : 'text-zinc-400 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🖥️"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Ollama (100% Offline Localhost)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1377,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1371,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold",
                                    style: {
                                        color: 'var(--text-main)'
                                    },
                                    children: [
                                        "2. Paste Your Private ",
                                        provider === 'google' ? 'Gemini' : provider === 'anthropic' ? 'Claude' : provider === 'openai' ? 'OpenAI' : provider === 'deepseek' ? 'DeepSeek' : provider === 'grok' ? 'Grok (xAI)' : provider === 'kimi' ? 'Kimi (Moonshot)' : provider === 'groq' ? 'Groq LPU' : provider === 'mistral' ? 'Codestral' : provider === 'perplexity' ? 'Perplexity' : provider === 'together' ? 'Together AI' : 'Ollama (Localhost)',
                                        " Key:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: provider === 'ollama' ? "text" : "password",
                                    disabled: provider === 'ollama',
                                    placeholder: provider === 'google' ? "Paste key (e.g., AIzaSy...)" : provider === 'anthropic' ? "Paste key (e.g., sk-ant-...)" : provider === 'openai' || provider === 'deepseek' || provider === 'kimi' || provider === 'mistral' ? "Paste key (e.g., sk-...)" : provider === 'grok' ? "Paste key (e.g., xai-...)" : provider === 'groq' ? "Paste key (e.g., gsk_...)" : provider === 'perplexity' ? "Paste key (e.g., pplx-...)" : provider === 'together' ? "Paste 64-char alphanumeric key..." : "No key needed! Runs 100% offline via Localhost",
                                    value: provider === 'ollama' ? "http://localhost:11434 (Auto-Connected)" : tempKeyInput,
                                    onChange: (e)=>setTempKeyInput(e.target.value),
                                    className: `liquid-input font-mono text-xs ${provider === 'ollama' ? 'opacity-60 cursor-not-allowed' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1400,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] block mt-1 font-light",
                                    style: {
                                        color: 'var(--text-dim)'
                                    },
                                    children: provider === 'ollama' ? "🖥️ Ollama runs locally on your machine. Ensure your background Ollama desktop service is running!" : "🔒 Your key is never sent to our servers. It is stored strictly inside your browser's local memory."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1418,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1383,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "px-4 py-2 text-xs font-medium rounded-lg transition cursor-pointer",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1429,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "liquid-btn-primary text-xs !py-2 !px-5 shadow-md cursor-pointer",
                                    children: tempKeyInput ? `Activate ${provider.toUpperCase()} VIP Speed ⚡` : 'Remove Key'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1437,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1428,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                    lineNumber: 1190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 1189,
                columnNumber: 9
            }, this),
            isLimitModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "liquid-glass-card max-w-md w-full relative border border-white/[0.15] !p-6 text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl block",
                            children: "🐣"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1454,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold tracking-tight",
                            style: {
                                color: 'var(--text-main)'
                            },
                            children: "Daily Blueprint Capacity Reached!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1455,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs leading-relaxed font-light",
                            style: {
                                color: 'var(--text-muted)'
                            },
                            children: "Our shared community engine has cooled down for the day to balance incoming traffic. However, you can jump straight back to work without waiting a single minute!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1458,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3.5 rounded-xl text-left border text-[11px] font-mono leading-normal",
                            style: {
                                backgroundColor: 'var(--choice-bg)',
                                borderColor: 'var(--input-border)'
                            },
                            children: [
                                "💡 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: 'var(--text-main)'
                                    },
                                    children: "Connect a free personal Gemini Key"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1462,
                                    columnNumber: 20
                                }, this),
                                " to unlock unlimited project blueprint workspaces, continuous iterations, and dedicated private server speeds at zero cost."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1461,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsLimitModalOpen(false);
                                        setIsModalOpen(true);
                                    },
                                    className: "liquid-btn-primary text-xs w-full",
                                    children: "🔑 Connect Free Key in Settings"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1465,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsLimitModalOpen(false),
                                    className: "text-xs font-medium transition py-2",
                                    style: {
                                        color: 'var(--text-dim)'
                                    },
                                    children: "Maybe Tomorrow"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1471,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1464,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                    lineNumber: 1453,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 1452,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full py-4 px-4 mt-auto flex justify-center items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3 px-4 py-2 rounded-full border shadow-lg backdrop-blur-md text-xs transition-all duration-300 hover:border-white/30",
                    style: {
                        backgroundColor: 'var(--input-bg)',
                        borderColor: 'var(--input-border)',
                        color: 'var(--text-muted)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://chickengor.github.io/jimmy_wong/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-1.5 font-mono hover:text-white transition-colors group cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Engineered by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "font-semibold tracking-wide",
                                            style: {
                                                color: 'var(--text-main)'
                                            },
                                            children: "ChickenRice Developer Studio"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 1503,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1503,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] opacity-40 group-hover:opacity-100 transition-opacity",
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1504,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1497,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-20",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1508,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://buymeacoffee.com/crdevstudio",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium transition-all duration-200 bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_12px_rgba(245,158,11,0.4)] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "☕"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Buy me a coffee"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 1518,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 1511,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                    lineNumber: 1488,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 1487,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
        lineNumber: 378,
        columnNumber: 5
    }, this));
}
_s(VibeHatchWizard, "8etiabtPPgDrdVf/nEYwM2LSiuw=");
_c = VibeHatchWizard;
var _c;
__turbopack_context__.k.register(_c, "VibeHatchWizard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Jimmy_Project_Vibe%20Hatch%20Code_app_page_0s_4vhv.js.map