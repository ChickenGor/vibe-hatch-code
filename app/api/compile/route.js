import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { createXai } from '@ai-sdk/xai';
import { createOpenAI } from '@ai-sdk/openai'; // Used for Kimi & OpenAI
import { createGroq } from '@ai-sdk/groq';
import { createMistral } from '@ai-sdk/mistral';
import { togetherai } from '@ai-sdk/togetherai';
import { createMoonshotAI } from '@ai-sdk/moonshotai';

// Helper function to dynamically initialize the chosen AI provider
function getModelInstance(provider, apiKey, modelId) {
  switch (provider) {


    case 'deepseek':
      const deepseek = createDeepSeek({ apiKey });
      return deepseek(modelId || 'deepseek-reasoner'); // Their god-tier coding & reasoning model!

    case 'grok':
      const xai = createXai({ apiKey });
      return xai(modelId || 'grok-2-latest');

    case 'kimi':
      const moonshot = createMoonshotAI({ apiKey });
      return moonshot(modelId || 'kimi-k2.5'); // Or 'moonshot-v1-128k'

    case 'groq':
      const groq = createGroq({ apiKey });
      return groq(modelId || 'llama-3.3-70b-versatile'); // Blazing 500+ tokens/sec speed!

    case 'mistral':
      const mistral = createMistral({ apiKey });
      return mistral(modelId || 'codestral-latest'); // 80+ programming languages!

    case 'perplexity':
      const perplexity = createOpenAI({
        name: 'perplexity',
        baseURL: 'https://api.perplexity.ai',
        apiKey
      });
      return perplexity(modelId || 'llama-3.1-sonar-large-128k-online'); // Live web browsing!

    case 'together':
      const together = createTogetherAI({ apiKey });
      return together(modelId || 'Qwen/Qwen2.5-72B-Instruct-Turbo'); // Top open-source coding benchmark winner

    case 'ollama':
      // 100% Free, Offline, and Local! (No API key needed)
      const ollama = createOpenAI({
        name: 'ollama',
        baseURL: 'http://localhost:11434/v1',
        apiKey: 'ollama' // Ollama doesn't need a real key, just a dummy string
      });
      return ollama(modelId || 'qwen2.5-coder:32b')

    //=======================================
    //  EXISTING BIG 3 
    //=======================================

    case 'anthropic':
      const anthropic = createAnthropic({ apiKey });
      return anthropic(modelId || 'claude-3-5-sonnet-latest');

    case 'openai':
      const openai = createOpenAI({ apiKey });
      return openai(modelId || 'gpt-4o');

    case 'google':
    default:
      const google = createGoogleGenerativeAI({ apiKey });
      return google(modelId || 'gemini-3.6-flash');
  }
}

// ============================================================================
// SPATIAL ARCHITECTURE DICTIONARY: Maps beginner UI choices to Senior Tech Stacks
// ============================================================================
const ENVIRONMENT_SPECS = {
  web: `
    - Target Environment: Cloud Web Application / SaaS
    - Core Framework: Next.js (App Router) with React and TypeScript
    - Styling & UI: Tailwind CSS, Lucide Icons, and Framer Motion / Liquid Glass aesthetic
    - Database & Auth: Supabase (PostgreSQL, Row Level Security, Supabase Auth)
    - Architecture Focus: Server Components (RSC), API Routes, responsive layouts, SEO optimization.
  `,
  mobile: `
    - Target Environment: Native Mobile Ecosystem (iOS & Android)
    - Core Framework: React Native with Expo (Managed Workflow) and TypeScript
    - Styling & UI: NativeWind (Tailwind CSS for React Native) or React Native Paper
    - Database & State: React Query, Zustand, and SQLite (local offline-first storage)
    - Architecture Focus: Touch gestures, native haptics, push notifications, App Store / Play Store deployment readiness.
  `,
  extension: `
    - Target Environment: Browser Toolbar Add-on (Chrome / Edge / Brave)
    - Core Framework: Chrome Extension Manifest V3 Architecture
    - Components: Background Service Worker, Content Scripts, and React + Tailwind for Popup/Sidebar UI
    - Storage & Communication: chrome.storage.local, chrome.runtime messaging, and browser tab permissions
    - Architecture Focus: Lightweight memory footprint, DOM manipulation, secure cross-origin API requests.
  `,
  desktop: `
    - Target Environment: Native Desktop Application (macOS, Windows & Linux)
    - Core Framework: Tauri (Rust backend + Next.js/React frontend) or Electron
    - Styling & UI: Tailwind CSS with native OS styling cues (macOS vibrancy / Windows Mica)
    - System Access: Native file system access, system tray menus, OS notifications, and global keyboard shortcuts
    - Architecture Focus: Low resource consumption, offline-first execution, auto-updater pipelines.
  `,
  bot: `
    - Target Environment: Automated Community / Chat Bot (Discord, Slack, or Telegram)
    - Core Framework: Node.js / TypeScript runtime using Discord.js, Slack Bolt API, or Telegraf
    - Architecture & Routing: Webhook event listeners, slash command registers, and interactive UI buttons/modals
    - Hosting & Data: Docker containerization, Redis for session caching, and PostgreSQL for persistent user data
    - Architecture Focus: Rate-limiting resilience, asynchronous queue handling, clean event-driven architecture.
  `,
  api: `
    - Target Environment: Headless Backend Service / Background Data Pipeline
    - Core Framework: Node.js with Fastify/Express or Python with FastAPI
    - Data Processing: BullMQ (Redis-based background job queues), cron scheduled tasks, and automated data scrapers
    - API Design: RESTful endpoints or GraphQL schema, Swagger/OpenAPI documentation, and JWT API key authentication
    - Architecture Focus: High throughput, zero visual UI, robust error logging (Sentry), automated testing pipelines.
  `
};

// ============================================================================
// 2. SPATIAL PERSISTENCE DICTIONARY (Maps UI memory choices to DB Architectures)
// ============================================================================
const PERSISTENCE_SPECS = {
  none: `
    - Target Persistence: Ephemeral Client State (Zero Database Footprint)
    - State Management: React State (useState/useReducer), Zustand, or Jotai for transient UI state.
    - Memory Bounds: Explicit cleanup on component unmount; zero persistence across browser page reloads or session termination.
    - Architecture Focus: Maximum execution speed, zero latency, strict memory leak prevention, lightweight browser footprint.
  `,
  local: `
    - Target Persistence: Local Device Storage (Offline & Isolated)
    - Core Storage: IndexedDB (via Dexie.js) for structured data, or LocalStorage / SessionStorage for lightweight user preferences.
    - Security & Quota: AES encryption at rest for sensitive local payloads; proactive storage quota error handling.
    - Architecture Focus: Zero server costs, 100% user data privacy, instantaneous read/write speeds, zero network dependency.
  `,
  cloud: `
    - Target Persistence: Relational Cloud Infrastructure & Multi-User Auth
    - Core Database: PostgreSQL hosted on Supabase (or AWS RDS / Neon), utilizing structured relational schemas and foreign key constraints.
    - Security & Auth: Row Level Security (RLS) policies enforced at the database layer; Supabase Auth (OAuth / JWT / Email Magic Links).
    - Architecture Focus: Data integrity, ACID compliance, real-time WebSocket subscriptions, scalable cloud migrations.
  `,
  vector: `
    - Target Persistence: AI Semantic Memory & Vector Database (RAG Architecture)
    - Core Database: PostgreSQL with pgvector extension (or dedicated engines like Pinecone, Weaviate, or Qdrant).
    - AI Data Pipeline: Text chunking strategies, semantic embedding generation (OpenAI text-embedding-3-small or local BAAI/bge-m3), and cosine similarity indexing (HNSW/IVFFlat).
    - Architecture Focus: Retrieval-Augmented Generation (RAG), hybrid keyword + semantic search, context-window optimization, token cost reduction.
  `,
  hybrid: `
    - Target Persistence: Offline-First Local Storage with Background Cloud Sync
    - Core Engine: Local SQLite (via WatermelonDB, RxDB, or ElectricSQL) paired with a remote relational database (PostgreSQL).
    - Sync & Conflict Resolution: Conflict-Free Replicated Data Types (CRDTs) or event sourcing; optimistic UI updates for instant local interactivity.
    - Architecture Focus: Zero perceived latency, offline read/write resilience, automated background synchronization queues, seamless reconnection handling.
  `,
  external: `
    - Target Persistence: Headless API Integration & External Data Pipeline
    - Core Integration: Zero custom database. Direct connection to third-party APIs, Airtable, Google Sheets, Notion API, or existing enterprise ERPs.
    - Security & Transport: RESTful / GraphQL client architecture, API key vaulting, OAuth2 token refreshing, and server-side webhook ingestion.
    - Architecture Focus: Robust error handling, rate-limit exponential backoff, payload schema validation (Zod), caching layers (Redis/SWR) to prevent API throttling.
  `
};

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      conversation,
      appName,
      features,
      techStack,
      designVibe,
      advancedConstraints,
      customApiKey,
      userApiKey,
      provider = 'google', // Default to Google Gemini if none specified
      outputFormat,
      enableRedTeam,
      appType = 'web' ,
      dataRequirement = 'cloud',
      modelId,
      temperature = 0.2,
      maxTokens,
      systemNudge,
      intentMode = 'new_app',
      selectedStack = [],
      runRedTeam = false
    } = body;

    const ALLOWED_STACK_IDS = ['nextjs', 'vite', 'supabase', 'prisma', 'postgres', 'sqlite', 'tailwind', 'shadcn'];
    const validatedStack = Array.isArray(selectedStack)
      ? selectedStack.filter(id => ALLOWED_STACK_IDS.includes(id))
      : [];

    // 1. Resolve the API Key (BYOK overrides server environment variables)
    let activeApiKey = customApiKey || userApiKey;

    // Fallback to server .env keys if the user is on the Free Tier (Google only by default)
    // Fallback to server .env keys if the user doesn't provide a BYOK key
    if (!activeApiKey) {
      const envKeyMap = {
        google: process.env.GEMINI_API_KEY,      // Standard for Gemini
        openai: process.env.OPENAI_API_KEY,      // Standard for OpenAI
        anthropic: process.env.ANTHROPIC_API_KEY,// Standard for Claude
        deepseek: process.env.DEEPSEEK_API_KEY,  // DeepSeek R1 / V3
        xai: process.env.XAI_API_KEY,            // xAI Grok
        groq: process.env.GROQ_API_KEY,          // Groq LPU speed engine
        mistral: process.env.MISTRAL_API_KEY,    // Mistral Large
        together: process.env.TOGETHER_API_KEY,  // Together AI
        perplexity: process.env.PERPLEXITY_API_KEY,// Perplexity Online Search
        kimi: process.env.KIMI_API_KEY,          // Moonshot Kimi
      };

      // Automatically grabs the key matching your active 'provider' string
      activeApiKey = envKeyMap[provider];
    }

    // Only throw an error if a key is truly missing AND it's a paid cloud model
    if (!activeApiKey && provider !== 'ollama') {
      return NextResponse.json({
        error: `No API Key found for ${provider.toUpperCase()}. Please add your BYOK key in settings!`
      }, { status: 401 });
    }

    // 2. Look up the specific engineering architecture based on appType
    const selectedEnvSpec = ENVIRONMENT_SPECS[appType] || ENVIRONMENT_SPECS.web;
    const selectedPersistenceSpec = PERSISTENCE_SPECS[dataRequirement] || PERSISTENCE_SPECS.cloud; 

    // 3. Initialize the dynamic AI model
    const model = getModelInstance(provider, activeApiKey, modelId);

    // 4. Configure the System Prompt to generate a prompt template
    const STACK_BLUEPRINTS = {
      nextjs: `Next.js 15: Use App Router (/app), React Server Components (RSC) by default, and Server Actions for data fetching.`,
      vite: `Vite: Standard React SPA client architecture with client-side routing (React Router V6).`,
      supabase: `Supabase: Relational postgres DB integration, RLS enabled on all tables, and client auth keys loaded via env.`,
      prisma: `Prisma: Node ORM. Always output a clean schema.prisma model file with correct relation fields.`,
      postgres: `PostgreSQL: Ingest relations, design clean transactional schemas, index foreign keys, and keep names snake_case.`,
      sqlite: `SQLite: Lightweight local offline data file structure. Handle concurrent write limits gracefully.`,
      tailwind: `Tailwind CSS: Use standard Tailwind design classes, flex/grid layouts, responsive sm/md/lg prefixes, and avoid custom CSS styles.`,
      shadcn: `shadcn/ui: Premium tailwind components. Direct imports from @components/ui/button. Use clean Radix primitives.`
    };

    let injectedStackBlueprints = '';
    if (validatedStack.length > 0) {
      injectedStackBlueprints = `\n\n[USER-SELECTED STACK SPECS]\n` + validatedStack.map(s => STACK_BLUEPRINTS[s] || '').filter(Boolean).join('\n') + `\n`;
    }

    const techEnforcement = `\n\nTECHNICAL REFERENCE SPECIFICATIONS:\nUse these standard blueprints if the user chose or implied these technologies:\n\n[EXECUTION ENVIRONMENT]\n${selectedEnvSpec}\n\n[DATA & PERSISTENCE TOPOLOGY]\n${selectedPersistenceSpec}\n${injectedStackBlueprints}`;

    const fileTreeRule = `\n\nCRITICAL SPECIFICATION DIRECTIVE:\nFor any file structure, configuration file, database schema, stylesheet, or code component you write, you MUST wrap it inside a custom <file path="path/to/file.ext">...code...</file> block, detailing the absolute relative workspace path in the path attribute. Do not omit the file tag. This will allow the prompt rendering workspace to build an interactive file tree.`;

    const redTeamRule = runRedTeam 
      ? `\n\nRED TEAM SECURITY & PERFORMANCE AUDIT FORCE:\nSince the user enabled Red Team Audits, you MUST include a dedicated section at the end of the compiled specifications detailing:
1. Threat Modeling: What are the security risks in the selected stack (e.g., SQLite write locks under high load, data leaks via Supabase RLS bypass, CSRF on NextJS Server Actions)?
2. Mitigation Blueprints: Write precise configuration setups to lock down these security vulnerabilities.
3. Performance Benchmarks: List memory usage patterns, caching strategies, and database indexing recommendations to keep operations optimized.`
      : '';

    let systemInstruction = '';
    let compilePromptLabel = '';

    if (intentMode === 'add_feature') {
      compilePromptLabel = 'Code Modification Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Senior Codebase Architect. Your task is to analyze the user requirements interview logs and compile a highly structured, comprehensive Feature Addition & Code Modification Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, or Windsurf) to implement a new feature or change inside an existing codebase.`;
      systemInstruction = `${baseSystemRole} Synthesize a comprehensive Code Modification Prompt Template (formatted in markdown). The prompt should guide a building AI step-by-step to implement the requested feature changes. It must include sections for: Target Feature Specification, Existing Code Context, File Directory Diffs (which files to create, modify, or delete), Implementation Steps (state changes, utility updates, API routing integrations), Regression Concerns, and Automated/Manual Verification Steps. Return only raw structured markdown without conversational filler.${techEnforcement}${fileTreeRule}${redTeamRule}`;
    } else if (intentMode === 'solve_problem') {
      compilePromptLabel = 'Bug Fix & Troubleshooting Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Principal Debugging Engineer. Your task is to analyze the user troubleshooting logs and compile a highly structured, comprehensive Bug Fix & Troubleshooting Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, or ChatGPT) to debug and patch a specific issue or error trace.`;
      systemInstruction = `${baseSystemRole} Synthesize a comprehensive Troubleshooting Prompt Template (formatted in markdown). The prompt should guide a debugging AI step-by-step to find the root cause and patch the error. It must include sections for: Defect Summary & Stack Trace, Code Context & Suspected Files, Step-by-Step Diagnostic Plan, Surgical Patch Placement Instructions, Safety & Performance Checks (to prevent side-effects), and Regression/Unit Testing Verification. Return only raw structured markdown without conversational filler.${techEnforcement}${fileTreeRule}${redTeamRule}`;
    } else if (intentMode === 'refactor_redesign') {
      compilePromptLabel = 'UI Redesign & Refactoring Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Principal Frontend Designer. Your task is to analyze the styling & refactoring logs and compile a highly structured, comprehensive UI Redesign & Refactoring Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, or v0) to redesign the user interface, convert styling layers, or refactor layout structures.`;
      systemInstruction = `${baseSystemRole} Synthesize a comprehensive Refactoring & Design Prompt Template (formatted in markdown). The prompt should guide a styling AI step-by-step to overhaul the UI or clean up components. It must include sections for: Refactoring Goals, Design Theme Tokens (Opal Light vs Obsidian Void color variables), Component Restructuring Plan, CSS Migration Rules (e.g. converting modules to Tailwind), Responsive Layout Checklists, Accessibility Compliance, and Side-by-Side Visual Verification Checks. Return only raw structured markdown without conversational filler.${techEnforcement}${fileTreeRule}${redTeamRule}`;
    } else {
      compilePromptLabel = outputFormat === 'cursorrules' ? '.cursorrules prompt configuration' : 'App Development Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Senior Product Manager. Your task is to analyze the user requirements interview logs and compile a highly structured, comprehensive App Development Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, ChatGPT, or v0) to build their application from scratch.`;
      systemInstruction = outputFormat === 'cursorrules'
        ? `${baseSystemRole} Synthesize a Development Prompt Template structured specifically for AI IDEs like Cursor/Windsurf (as a .cursorrules file or System Instruction). The output should enforce strict instructions, file directory layouts, system setup guidelines, and detailed build steps in raw markdown. Do not include conversational filler.${techEnforcement}${fileTreeRule}${redTeamRule}`
        : `${baseSystemRole} Synthesize a comprehensive Development Prompt Template (formatted in markdown). The prompt should guide a building AI step-by-step to implement the app. It must include sections for: Role/Persona, Project Context, Stack & Architecture, Feature Roadmap (Phase-by-Phase), Database/Persistence schema, UI/UX Guidelines, and Verification steps. Return only raw structured markdown without conversational filler.${techEnforcement}${fileTreeRule}${redTeamRule}`;
    }

    // 5. Format Messages for the Vercel AI SDK
    let messages = [];

    if (conversation && Array.isArray(conversation) && conversation.length > 0) {
      messages = conversation.map(msg => ({
        role: msg.role === 'model' || msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      }));
      // Append a final system instructions nudge as a user message at the end
      messages.push({
        role: 'user',
        content: `Based on our entire interview above, compile the final highly optimized ${compilePromptLabel} now. Output only the prompt template itself, formatted in Markdown.`
      });
    } else {
      const initialPrompt = `
        COMPILE DEVELOPMENT PROMPT TEMPLATE FOR:
        - Project Identity: ${appName || 'Spatial App Concept'}
        - Target Execution Ecosystem: ${appType.toUpperCase()} (${selectedEnvSpec.split('\n')[1].trim()})
        - Target Tech Stack: ${techStack || 'Use standard best practices for this target environment'}
        - State & Persistence: ${advancedConstraints || 'Standard Cloud Architecture'}
        - Aesthetic Direction: ${designVibe || 'Apple VisionOS Frosted Glass'}
        - Specific Requirements & Superpowers:
        ${features || 'Best-practice modern architecture'}
      `.trim();

      messages = [{ role: 'user', content: initialPrompt }];
    }

    // 6. Trigger Universal Synthesis
    const { text, usage } = await generateText({
      model: model,
      system: systemInstruction + (systemNudge ? `\n\nCustom parameter instruction: ${systemNudge}` : ''),
      messages: messages,
      temperature,
      maxTokens: maxTokens ? parseInt(maxTokens) : undefined,
    });

    return NextResponse.json({ 
      result: text || '// Specification rendering engine returned an empty string.',
      usage: usage
    });

  } catch (error) {
    console.error('Multi-Model Backend Failure:', error);
    return NextResponse.json({
      error: error.message || 'Failed to process AI architectural synthesis.'
    }, { status: 500 });
  }
}