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
      promptMode = 'new_project',
      promptDetail = 'balanced',
      agentType = 'generic',
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

    let agentTargetInstruction = '';
    if (agentType === 'codex') {
      agentTargetInstruction = '\n- Target Engine: OpenAI Codex. Format instructions to use straightforward patterns and clean, standard API invocations.';
    } else if (agentType === 'gemini') {
      agentTargetInstruction = '\n- Target Engine: Gemini Code Assist / Vertex AI. Focus on clear architectural descriptions, explicit types, and clean file separation.';
    } else if (agentType === 'claude_code') {
      agentTargetInstruction = '\n- Target Engine: Claude Code (CLI agent). Structure output for command execution, minimal conversational steps, and precise file patches.';
    } else if (agentType === 'cursor') {
      agentTargetInstruction = '\n- Target Engine: Cursor AI Composer. Focus on listing exactly files likely affected, clear directory structure mappings, and precise component edits.';
    } else if (agentType === 'windsurf') {
      agentTargetInstruction = '\n- Target Engine: Windsurf Cascade. Emphasize multi-file command executions, tool calling validations, and precise file tag hierarchies.';
    } else {
      agentTargetInstruction = '\n- Target Engine: Generic AI Coding Agent. Maintain high portability, strict execution rules, and standard markdown specifications.';
    }

    let modeExecutionRules = '';
    if (promptMode === 'new_project') {
      modeExecutionRules = `
## Agent Execution Rules (New Project Scaffolding)
1. Scaffold the initial repository layout. Establish clean configuration files and project defaults.
2. Focus strictly on Phase 1: Foundation & Scaffolding.
3. Establish robust file paths using the folder blueprints.
4. Do not write placeholder features or mock files unless requested.
5. Create components and files only when they provide direct value. Avoid empty files.
      `.trim();
    } else if (promptMode === 'existing_project') {
      modeExecutionRules = `
## Agent Execution Rules (Existing Repository Integration)
1. Inspect the existing repository structure and files before writing code.
2. Understand the active architecture and dependencies first.
3. Search for existing components, services, models, and helper functions before creating new ones.
4. Reuse existing implementations and state mechanisms whenever possible.
5. Do not refactor unrelated working systems or files.
6. Preserve existing behavior and constraints unless explicitly requested.
7. Make the smallest clean set of changes required.
      `.trim();
    } else if (promptMode === 'feature') {
      modeExecutionRules = `
## Agent Execution Rules (Feature Addition)
1. Inspect files that are likely to be affected by this feature.
2. Build within the established architectural layers.
3. Do not modify or refactor unrelated files.
4. Pave clear dependencies and avoid creating duplicate logic or helper utilities.
5. Focus strictly on the CURRENT TASK and treat future roadmap items as OUT OF SCOPE.
      `.trim();
    } else if (promptMode === 'bug_fix') {
      modeExecutionRules = `
## Agent Execution Rules (Troubleshooting & Patching)
1. Reproduce the bug or error log first.
2. Inspect the suspected files to identify the root cause.
3. Apply a targeted, surgical patch to fix the error.
4. Do not touch or modify styles, designs, or unrelated components.
5. Perform regression checks to verify that the fix does not break existing features.
      `.trim();
    } else if (promptMode === 'ui_improvement') {
      modeExecutionRules = `
## Agent Execution Rules (UI/UX Polish)
1. Polish spacing, layouts, design tokens, and colors without changing core business logic.
2. Reuse the existing design system or Tailwind theme definitions.
3. Verify responsive layout behavior on mobile and desktop viewports.
4. Ensure text contrast and tags satisfy accessibility standards.
      `.trim();
    } else if (promptMode === 'refactor') {
      modeExecutionRules = `
## Agent Execution Rules (Refactoring)
1. Refactor defined boundaries to improve code readability, performance, or typing.
2. Do not introduce new features or change application behavior.
3. Add regression testing to verify behavior is preserved.
      `.trim();
    }

    let detailLevelInstruction = '';
    if (promptDetail === 'compact') {
      detailLevelInstruction = `
COMPACT DETAIL LEVEL DIRECTIVES:
You MUST output an extremely token-efficient, concise prompt. Omit verbose explanations, detailed roadmap lists, and complex schemas.
Structure the prompt with ONLY these sections, keeping them brief:
1. Role & Persona
2. Project Context
3. Current Task (Phase 1 / Immediate goal)
4. Tech Stack & Environment
5. Agent Execution Rules & Constraints
6. Acceptance Criteria
7. Executable Verification Commands
      `.trim();
    } else if (promptDetail === 'balanced') {
      detailLevelInstruction = `
BALANCED DETAIL LEVEL DIRECTIVES:
Output the recommended standard developer prompt format. Emphasize task boundaries and token efficiency.
Structure the prompt in exactly this order:
1. Role & Persona
2. Project Context
3. Current Task (Clearly highlight what to implement now. Keep near the top!)
4. Tech Stack
5. Architecture (Folder tree layout appropriate to framework. Do not force empty folder scaffolding rules: specify "Do not create empty files merely to satisfy the schema.")
6. Relevant Data Model (Relational reasoning, one-to-many paths, nested schemas)
7. UI/UX Requirements
8. Agent Execution Rules
9. Constraints / Out of Scope (Explicitly lists future phases here under Out of Scope: "Do not implement yet: ...")
10. Security Requirements (Firebase security rule structures checking resource vs request.resource data)
11. Acceptance Criteria & Completion Criteria
12. Verification (Generate stack-appropriate executable verification commands)
13. Final Response Format
14. Future Roadmap (Include roadmap warning: "Future roadmap items should influence architecture decisions but must not be implemented until their phase is explicitly requested.")
      `.trim();
    } else if (promptDetail === 'detailed') {
      detailLevelInstruction = `
DETAILED DETAIL LEVEL DIRECTIVES:
Output a fully comprehensive, exhaustive engineering blueprint.
Structure the prompt in exactly this order:
1. Role & Persona
2. Project Context
3. Current Task (Phase 1/Immediate goal)
4. Tech Stack & Compatibility Scan (check package and version matching)
5. Comprehensive Architecture (Complete directory structure)
6. Exhaustive Database Schema (Full fields, types, relationships, query models)
7. UI/UX Style Guides & Layout Tree
8. Agent Execution Rules
9. Detailed Constraints & Out of Scope
10. Strict Security Requirements (Deep Firestore rule mappings or RLS rules)
11. Exhaustive Acceptance Criteria & Edge Cases
12. Executable Verification Commands (unit, lint, compile checks)
13. Final Response Contract
14. Exhaustive Future Roadmap (All future phases in detail, with instructions not to implement ahead of schedule)
15. Red Team Threat Modeling & Mitigation (Scan for leaks, memory issues, race conditions)
      `.trim();
    }

    const coreAIGenerationRules = `
CRITICAL COMPILATION ENGINE REQUIREMENTS:
- CURRENT TASK vs ROADMAP: Clearly divide the prompt. The "Current Task" section must reside near the top of the prompt. All future features must be grouped in "Out of Scope" with explicit rules: "Do NOT implement yet: ...". Include the roadmap notice: "Future roadmap items should influence architecture decisions but must not be implemented until their phase is explicitly requested."
- ARCHITECTURE CONSISTENCY: Ensure the generated folder structure and technology blueprints are compatible with the requested setup (e.g. if Clean Architecture + BLoC is used in Flutter, generate features/auth/data, features/auth/domain, features/auth/presentation directories. For Next.js, use app router schemas). Emphasize: "Do not create empty architectural files merely to satisfy the folder structure. Create components only when they provide actual value." Validate compatible libraries.
- DATABASE SCHEMAS & RELATIONSHIPS: Reason about data relationships (one-to-many, nested data, ownership bounds, security scopes) instead of flat collections. (For example, an Exercise Set nested inside an Exercise, which is nested inside a Workout session).
- FIREBASE SECURITY RULES: If Firebase is in the stack, generate precise Firestore rules differentiating between comparison variables: 'resource.data' (for existing database values in read/update/delete rules) and 'request.resource.data' (for incoming values in create/update rules), validating author ownership.
- DO NOT CONSTRAINTS: Add a clear "Do NOT" constraints section:
  - Do NOT rewrite unrelated working code.
  - Do NOT change architecture style without justification.
  - Do NOT add dependencies or packages unnecessarily.
  - Do NOT duplicate existing components or files.
  - Do NOT hardcode secrets, keys, or credentials.
  - Do NOT implement future phases.
  - Do NOT replace working libraries without reason.
  - Do NOT generate placeholder code.
  - Do NOT create unnecessary abstraction layers.
  - Do NOT claim validation passed unless commands were actually executed.
- TOKEN EFFICIENCY RULES: Add token efficiency rules for the building agent:
  - Inspect relevant files first instead of reading the entire repository.
  - Search for existing implementations before opening many files.
  - Avoid repeatedly reading unchanged files.
  - Prefer targeted patches over full-file rewrites.
  - Do not repeat the project specification in the response.
  - Do not explain every line of code.
  - Keep the completion summary concise.
- STACK-SPECIFIC VERIFICATION: Generate executable test and verification commands matching ONLY the selected technologies:
  - If Flutter: "dart format . && flutter analyze && flutter test"
  - If React/Next.js/Node: "npm run lint && npm run build && npm test"
  - If Python: "pytest && ruff check"
  - For others: include standard stack linting/testing commands.
  - Require the agent: "Do not claim a command passed unless it was actually executed. If the environment prevents execution, report that clearly."
- COMPLETION CRITERIA: Generate explicit completion criteria mapping registration, login, data flows, and error handling as relevant.
- FINAL RESPONSE CONTRACT: The compiled prompt must demand a concise response format:
  "After implementation, report only:
  Implemented:
  - ...
  Files created:
  - ...
  Files modified:
  - ...
  Verification:
  - ...
  Manual actions required:
  - ..."
  Do not ask the agent to output the entire source code of unchanged files.
    `.trim();

    let systemInstruction = '';
    let compilePromptLabel = '';

    const combinedRules = `\n\n${agentTargetInstruction}\n${modeExecutionRules}\n${detailLevelInstruction}\n${coreAIGenerationRules}\n\n${techEnforcement}${fileTreeRule}${redTeamRule}`;

    if (intentMode === 'add_feature') {
      compilePromptLabel = 'Code Modification Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Senior Codebase Architect. Your task is to analyze the user requirements interview logs and compile a highly structured, comprehensive Feature Addition & Code Modification Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, or Windsurf) to implement a new feature or change inside an existing codebase.`;
      systemInstruction = `${baseSystemRole} Synthesize a comprehensive Code Modification Prompt Template (formatted in markdown). The prompt should guide a building AI step-by-step to implement the requested feature changes. It must include sections for: Target Feature Specification, Existing Code Context, File Directory Diffs (which files to create, modify, or delete), Implementation Steps (state changes, utility updates, API routing integrations), Regression Concerns, and Automated/Manual Verification Steps. Return only raw structured markdown without conversational filler.${combinedRules}`;
    } else if (intentMode === 'solve_problem') {
      compilePromptLabel = 'Bug Fix & Troubleshooting Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Principal Debugging Engineer. Your task is to analyze the user troubleshooting logs and compile a highly structured, comprehensive Bug Fix & Troubleshooting Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, or ChatGPT) to debug and patch a specific issue or error trace.`;
      systemInstruction = `${baseSystemRole} Synthesize a comprehensive Troubleshooting Prompt Template (formatted in markdown). The prompt should guide a debugging AI step-by-step to find the root cause and patch the error. It must include sections for: Defect Summary & Stack Trace, Code Context & Suspected Files, Step-by-Step Diagnostic Plan, Surgical Patch Placement Instructions, Safety & Performance Checks (to prevent side-effects), and Regression/Unit Testing Verification. Return only raw structured markdown without conversational filler.${combinedRules}`;
    } else if (intentMode === 'refactor_redesign') {
      compilePromptLabel = 'UI Redesign & Refactoring Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Principal Frontend Designer. Your task is to analyze the styling & refactoring logs and compile a highly structured, comprehensive UI Redesign & Refactoring Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, or v0) to redesign the user interface, convert styling layers, or refactor layout structures.`;
      systemInstruction = `${baseSystemRole} Synthesize a comprehensive Refactoring & Design Prompt Template (formatted in markdown). The prompt should guide a styling AI step-by-step to overhaul the UI or clean up components. It must include sections for: Refactoring Goals, Design Theme Tokens (Opal Light vs Obsidian Void color variables), Component Restructuring Plan, CSS Migration Rules (e.g. converting modules to Tailwind), Responsive Layout Checklists, Accessibility Compliance, and Side-by-Side Visual Verification Checks. Return only raw structured markdown without conversational filler.${combinedRules}`;
    } else {
      compilePromptLabel = outputFormat === 'cursorrules' ? '.cursorrules prompt configuration' : 'App Development Prompt Template';
      const baseSystemRole = `You are an expert Prompt Engineer and Senior Product Manager. Your task is to analyze the user requirements interview logs and compile a highly structured, comprehensive App Development Prompt Template.
This prompt template is intended for the user to copy and feed into another AI (like Cursor, Claude, ChatGPT, or v0) to build their application from scratch.`;
      systemInstruction = outputFormat === 'cursorrules'
        ? `${baseSystemRole} Synthesize a Development Prompt Template structured specifically for AI IDEs like Cursor/Windsurf (as a .cursorrules file or System Instruction). The output should enforce strict instructions, file directory layouts, system setup guidelines, and detailed build steps in raw markdown. Do not include conversational filler.${combinedRules}`
        : `${baseSystemRole} Synthesize a comprehensive Development Prompt Template (formatted in markdown). The prompt should guide a building AI step-by-step to implement the app. It must include sections for: Role/Persona, Project Context, Stack & Architecture, Feature Roadmap (Phase-by-Phase), Database/Persistence schema, UI/UX Guidelines, and Verification steps. Return only raw structured markdown without conversational filler.${combinedRules}`;
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