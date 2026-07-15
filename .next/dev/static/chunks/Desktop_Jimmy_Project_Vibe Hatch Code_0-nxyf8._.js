(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VibeHatchWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Available Superpower Checkbox Add-ons
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
    // Wizard Setup State
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // User Responses
    const [rawIdea, setRawIdea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // Changed from appName to rawIdea!
    const [optionalName, setOptionalName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [features, setFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [superpowers, setSuperpowers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Array of selected superpower checkboxes
    const [appType, setAppType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('web');
    const [dataRequirement, setDataRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('local');
    const [designStyle, setDesignStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('minimal');
    // UI Engine State
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [brainstorming, setBrainstorming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New loading state for magic wand
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customKey, setCustomKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempKeyInput, setTempKeyInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VibeHatchWizard.useEffect": ()=>{
            const savedKey = localStorage.getItem('vibe_hatch_custom_api_key');
            if (savedKey) {
                setCustomKey(savedKey);
                setTempKeyInput(savedKey);
            }
        }
    }["VibeHatchWizard.useEffect"], []);
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
    // Toggle superpower checkboxes
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
    // 🪄 Magic Wand: Call Gemini 3.5 Flash Lite to auto-suggest features!
    const handleMagicWand = async ()=>{
        if (!rawIdea.trim()) {
            setErrorMessage("Please type an idea in Step 1 first so the AI knows what to brainstorm!");
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
            // Append generated ideas to textarea
            setFeatures((prev)=>prev ? `${prev}\n\n${data.result}` : data.result);
        } catch (err) {
            setErrorMessage(err.message);
        } finally{
            setBrainstorming(false);
        }
    };
    // Compile prompt by automatically transforming human choices into engineering specifications
    const handleCompile = async (e)=>{
        if (e) e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        const techStackMap = {
            web: "Next.js (React App Router) + Tailwind CSS",
            mobile: "React Native + Expo Framework + Tailwind Native",
            extension: "Vanilla HTML/CSS/JavaScript (Chrome Manifest V3 Web Extension API)"
        };
        const designVibeMap = {
            minimal: "Sleek, minimalist dark mode heavily inspired by Apple and Linear. Clean grid system, sub-pixel border elements, high contrast.",
            cyber: "High-density retro cyberpunk terminal layout. Dark pitch black background, monospace layout elements, glowing neon green/purple accents.",
            saas: "Clean corporate tech SaaS aesthetic. Slate dark backgrounds, deep green/emerald functional alert statuses, heavy use of dashboard grid layouts."
        };
        const storageMap = {
            none: "No active database required. Run purely ephemeral client-side rendering state logic.",
            local: "Client-side browser persistence using standard LocalStorage state snapshots.",
            cloud: "Production cloud relational architecture. Require PostgreSQL database powered by Supabase infrastructure with integrated Clerk/NextAuth credentials middleware."
        };
        // Combine custom typed features with selected Superpower checkboxes!
        const combinedFeatures = [
            features,
            superpowers.length > 0 ? `\nMandatory Integrated Superpowers:\n- ${superpowers.join('\n- ')}` : ''
        ].join('\n');
        // Clever Trick: Send the raw idea + optional name into the appName slot so we don't need to change our existing backend!
        const identityString = optionalName ? `${optionalName} (Idea: ${rawIdea})` : `Invent a professional app name for this idea: "${rawIdea}"`;
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
                    customApiKey: customKey
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Compilation failure.");
            setOutput(data.result);
        } catch (err) {
            setErrorMessage(err.message);
        } finally{
            setLoading(false);
        }
    };
    // Helper: Calculate Token Stats
    const calculateTokenStats = (text)=>{
        if (!text) return {
            compiled: 0,
            saved: 0
        };
        const compiledTokens = Math.round(text.length / 4);
        return {
            compiled: compiledTokens,
            saved: Math.round(compiledTokens * 3.5 + 600) - compiledTokens
        };
    };
    const stats = calculateTokenStats(output);
    // Clipboard Copy Helper
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 md:p-10 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🐣"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-extrabold tracking-tight title-gradient",
                                        children: "Vibe Hatch Code"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mt-1",
                                children: "Interactive guided project creator for builders of all skill levels."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsModalOpen(true),
                        className: "flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-xs font-semibold",
                        children: [
                            "⚙️ ",
                            customKey ? 'Custom Key Active' : 'Community Shared Tier'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto mb-6 p-4 bg-red-950/40 border border-red-500/50 rounded-lg text-sm text-red-200",
                children: [
                    "⚠️ ",
                    errorMessage
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "custom-card flex flex-col min-h-[520px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-widest text-emerald-400",
                                        children: [
                                            "Step ",
                                            currentStep,
                                            " of 4"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `step-dot ${currentStep === s ? 'active' : ''}`
                                            }, s, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-white",
                                                children: "💡 What problem or idea do you want to build?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 leading-relaxed",
                                                children: "Don't worry about fancy names or tech terms yet. Just describe the concept in plain English."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: "3",
                                                placeholder: "e.g., An app that reminds me to water my house plants based on sunlight and weather forecasts...",
                                                className: "custom-input text-sm leading-relaxed",
                                                value: rawIdea,
                                                onChange: (e)=>setRawIdea(e.target.value),
                                                autoFocus: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[11px] font-semibold text-slate-400 mb-1",
                                                        children: "Already have a project name? (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g., PlantZen (Leave blank and AI will invent one!)",
                                                        className: "custom-input text-xs",
                                                        value: optionalName,
                                                        onChange: (e)=>setOptionalName(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-white",
                                                children: "⚙️ What environment are we building for?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Where should this application actually run?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `choice-card ${appType === 'web' ? 'selected' : ''}`,
                                                        onClick: ()=>setAppType('web'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-slate-200",
                                                                children: "🌐 Website or SaaS App"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 232,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: "Runs directly inside desktop/mobile web browsers. (Highly recommended for beginners)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 233,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `choice-card ${appType === 'mobile' ? 'selected' : ''}`,
                                                        onClick: ()=>setAppType('mobile'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-slate-200",
                                                                children: "📱 Mobile App Store Application"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 236,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: "Runs natively on smartphones via iOS App Store or Android Google Play."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `choice-card ${appType === 'extension' ? 'selected' : ''}`,
                                                        onClick: ()=>setAppType('extension'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-slate-200",
                                                                children: "🧩 Chrome Browser Extension"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: "A lightweight tool injected into your Chrome toolbar to read active browser tabs."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-white",
                                                children: "💾 How should this application handle data?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Select how complex your project's memory needs to be."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `choice-card ${dataRequirement === 'none' ? 'selected' : ''}`,
                                                        onClick: ()=>setDataRequirement('none'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-slate-200",
                                                                children: "⚡ Ephemeral State (No Saving)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 253,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: "Data disappears immediately when the user refreshes their tab (e.g., basic unit converters)."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 254,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `choice-card ${dataRequirement === 'local' ? 'selected' : ''}`,
                                                        onClick: ()=>setDataRequirement('local'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-slate-200",
                                                                children: "🔒 Basic Device Storage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 257,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: "Saves information directly inside the user's specific computer memory using local state keys."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 258,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `choice-card ${dataRequirement === 'cloud' ? 'selected' : ''}`,
                                                        onClick: ()=>setDataRequirement('cloud'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-slate-200",
                                                                children: "☁️ Secure Multi-User Cloud Accounts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 261,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: "Requires centralized databases, user account creation logins, and cloud server syncing."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 262,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-base font-bold text-white",
                                                        children: "🎨 Features & Superpowers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleMagicWand,
                                                        disabled: brainstorming,
                                                        className: "text-xs bg-gradient-to-r from-purple-900/60 to-indigo-900/60 hover:from-purple-800 hover:to-indigo-800 text-purple-200 border border-purple-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 transition shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: brainstorming ? '⏳' : '✨'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: brainstorming ? 'Brainstorming...' : 'AI Brainstorm Features'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 272,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2",
                                                        children: "1. Click to add common superpowers:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1.5",
                                                        children: SUPERPOWERS.map((power, idx)=>{
                                                            const isSelected = superpowers.includes(power);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>toggleSuperpower(power),
                                                                className: `text-xs px-3 py-1.5 rounded-lg border transition font-medium flex items-center gap-1.5 ${isSelected ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-sm' : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: isSelected ? '✓' : '+'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                        lineNumber: 300,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: power
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                        lineNumber: 301,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 290,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1",
                                                        children: "2. Custom specific actions (or use magic wand above):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        rows: "3",
                                                        placeholder: "e.g. 1. Custom sunlight slider 2. Notifications when soil is dry...",
                                                        className: "custom-input text-xs",
                                                        value: features,
                                                        onChange: (e)=>setFeatures(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5",
                                                        children: "3. Design Vibe:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: `btn-preset text-[11px] justify-center ${designStyle === 'minimal' ? 'border-emerald-500 bg-emerald-950/30' : ''}`,
                                                                onClick: ()=>setDesignStyle('minimal'),
                                                                children: "🍏 Minimalist"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 324,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: `btn-preset text-[11px] justify-center ${designStyle === 'cyber' ? 'border-emerald-500 bg-emerald-950/30' : ''}`,
                                                                onClick: ()=>setDesignStyle('cyber'),
                                                                children: "👾 Terminal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 325,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: `btn-preset text-[11px] justify-center ${designStyle === 'saas' ? 'border-emerald-500 bg-emerald-950/30' : ''}`,
                                                                onClick: ()=>setDesignStyle('saas'),
                                                                children: "📈 Pro Dashboard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                                lineNumber: 326,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center pt-6 border-t border-slate-800/80 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: currentStep === 1 || loading,
                                        onClick: ()=>setCurrentStep((prev)=>prev - 1),
                                        className: "btn-preset disabled:opacity-30",
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this),
                                    currentStep < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: currentStep === 1 && !rawIdea.trim(),
                                        onClick: ()=>setCurrentStep((prev)=>prev + 1),
                                        className: "btn-primary !w-auto px-6",
                                        children: "Continue →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: loading || !features.trim() && superpowers.length === 0 || !rawIdea.trim(),
                                        onClick: handleCompile,
                                        className: "btn-primary !w-auto px-6 bg-gradient-to-r from-emerald-600 to-teal-600",
                                        children: loading ? 'Hatching Engine...' : 'Hatch Architecture Spec 🚀'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "custom-card flex flex-col h-full min-h-[520px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-3 pb-3 border-b border-slate-800/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-300 uppercase tracking-wider",
                                        children: "Generated Architecture Specification"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this),
                                    output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copyToClipboard,
                                        className: "btn-preset text-xs",
                                        children: copied ? "Copied! ✓" : "📋 Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 p-2.5 bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-lg text-xs font-mono flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-400 font-bold",
                                        children: [
                                            "⚡ ~",
                                            stats.saved.toLocaleString(),
                                            " Architectural Tokens Generated"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded font-sans uppercase font-bold",
                                        children: "Signal Verified"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 378,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950 flex-1 rounded-lg p-4 font-mono text-xs text-emerald-400/90 overflow-y-auto border border-slate-800/80 whitespace-pre-wrap leading-relaxed select-all",
                                children: output || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col items-center justify-center text-slate-600 text-center py-12 font-sans select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl mb-3 opacity-30",
                                            children: "🐣"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            children: "No master blueprint generated yet."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-1 max-w-xs text-slate-500",
                                            children: "Complete the simple steps on the left to automatically construct a professional engineering master specification."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-md w-full relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-white flex items-center gap-2",
                            children: "🔑 Bring Your Own Key"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveKey,
                            className: "mt-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "AQ.Ab8...",
                                    value: tempKeyInput,
                                    onChange: (e)=>setTempKeyInput(e.target.value),
                                    className: "custom-input font-mono"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "px-4 py-2 text-xs text-slate-400 hover:bg-slate-800 rounded-lg",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold",
                                            children: "Save to Browser"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                    lineNumber: 399,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
                lineNumber: 398,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Jimmy/Project/Vibe Hatch Code/app/page.js",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(VibeHatchWizard, "7xYAL9eQaZQoHb2JB3L0+pNocxs=");
_c = VibeHatchWizard;
var _c;
__turbopack_context__.k.register(_c, "VibeHatchWizard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_Jimmy_Project_Vibe%20Hatch%20Code_0-nxyf8._.js.map