import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { createXai } from '@ai-sdk/xai';
import { createOpenAI } from '@ai-sdk/openai';
import { createGroq } from '@ai-sdk/groq';
import { createMistral } from '@ai-sdk/mistral';
import { togetherai } from '@ai-sdk/togetherai';
import { createMoonshotAI } from '@ai-sdk/moonshotai';

function getModelInstance(provider, apiKey, modelId) {
  switch (provider) {
    case 'deepseek':
      const deepseek = createDeepSeek({ apiKey });
      return deepseek(modelId || 'deepseek-chat'); // Token efficient and fast for chat

    case 'grok':
      const xai = createXai({ apiKey });
      return xai(modelId || 'grok-2-latest');

    case 'kimi':
      const moonshot = createMoonshotAI({ apiKey });
      return moonshot(modelId || 'kimi-k2.5');

    case 'groq':
      const groq = createGroq({ apiKey });
      return groq(modelId || 'llama-3.3-70b-versatile');

    case 'mistral':
      const mistral = createMistral({ apiKey });
      return mistral(modelId || 'codestral-latest');

    case 'perplexity':
      const perplexity = createOpenAI({
        name: 'perplexity',
        baseURL: 'https://api.perplexity.ai',
        apiKey
      });
      return perplexity(modelId || 'llama-3.1-sonar-large-128k-online');

    case 'together':
      const together = togetherai({ apiKey });
      return together(modelId || 'Qwen/Qwen2.5-72B-Instruct-Turbo');

    case 'ollama':
      const ollama = createOpenAI({
        name: 'ollama',
        baseURL: 'http://localhost:11434/v1',
        apiKey: 'ollama'
      });
      return ollama(modelId || 'qwen2.5-coder:32b');

    case 'anthropic':
      const anthropic = createAnthropic({ apiKey });
      return anthropic(modelId || 'claude-3-5-sonnet-latest');

    case 'openai':
      const openai = createOpenAI({ apiKey });
      return openai(modelId || 'gpt-4o-mini'); // Token efficient / fast for chat!

    case 'google':
    default:
      const google = createGoogleGenerativeAI({ apiKey });
      return google(modelId || 'gemini-3.6-flash'); // Highly efficient for chat
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      conversation = [],
      customApiKey,
      userApiKey,
      provider = 'google',
      modelId,
      temperature = 0.7,
      maxTokens,
      systemNudge
    } = body;

    // Resolve API key
    let activeApiKey = customApiKey || userApiKey;
    if (!activeApiKey) {
      const envKeyMap = {
        google: process.env.GEMINI_API_KEY,
        openai: process.env.OPENAI_API_KEY,
        anthropic: process.env.ANTHROPIC_API_KEY,
        deepseek: process.env.DEEPSEEK_API_KEY,
        xai: process.env.XAI_API_KEY,
        groq: process.env.GROQ_API_KEY,
        mistral: process.env.MISTRAL_API_KEY,
        together: process.env.TOGETHER_API_KEY,
        perplexity: process.env.PERPLEXITY_API_KEY,
        kimi: process.env.KIMI_API_KEY,
      };
      activeApiKey = envKeyMap[provider];
    }

    if (!activeApiKey && provider !== 'ollama') {
      return NextResponse.json({
        error: `No API Key found for ${provider.toUpperCase()}. Please add your BYOK key in settings!`
      }, { status: 401 });
    }

    const model = getModelInstance(provider, activeApiKey, modelId);

    const systemInstruction = `You are the Vibe Hatch Chatbot, a friendly requirements-gathering PM and prompt engineer.
Your goal is to interview the user and collect details to generate a developer prompt template for their app.
Ask exactly ONE clear, friendly question at a time to discover:
1. Core App Idea & Purpose
2. Target Platform/Environment (Web, Mobile, Extension, Desktop, Bot, API)
3. Main Features & Requirements
4. Preferred Tech Stack & Styling (e.g. Tailwind, Frosted Glass)
5. Data Storage / Persistence (e.g. LocalStorage, Supabase, Cloud DB, Vector Memory)

CRITICAL FOR TOKEN EFFICIENCY: Keep your responses extremely short (max 2 sentences, under 40 words total). Get straight to the point.
Once you have collected the user's needs, or if they ask to build/hatch the prompt directly, summarize what is collected and append the exact tag "[READY_TO_HATCH]" at the very end of your response.` + (systemNudge ? `\n\nCustom instruction override: ${systemNudge}` : '');

    // Token efficiency: send only the last 8 messages (4 turns) of the conversation to keep input context small
    const prunedConversation = conversation.slice(-8).map(msg => ({
      role: msg.role === 'model' || msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content
    }));

    const { text } = await generateText({
      model: model,
      system: systemInstruction,
      messages: prunedConversation,
      temperature,
      maxTokens: maxTokens ? parseInt(maxTokens) : undefined,
    });

    return NextResponse.json({ result: text || 'Could not retrieve chatbot response.' });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({
      error: error.message || 'Failed to generate chatbot response.'
    }, { status: 500 });
  }
}
