import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req) {
  try {
    const { conversation, outputFormat, userApiKey } = await req.json();

    // Determine which key to use (User's private key takes precedence)
    const activeApiKey = userApiKey || process.env.GEMINI_API_KEY;

    if (!activeApiKey) {
      return NextResponse.json({ error: 'API Key not provided.' }, { status: 400 });
    }

    // Initialize the official Google Gen AI Client
    const ai = new GoogleGenAI({ apiKey: activeApiKey });

    // Format the system configuration prompt based on output choice
    const systemPrompt = outputFormat === 'cursorrules'
      ? `You are an expert Spatial Software Architect. Output a hyper-structured, fully complete software specification tailored perfectly as a .cursorrules configuration file for AI IDEs. Use clean markdown codeblocks inside your text. Do not write chat conversational fluff or introductions. Start directly with the technical specification code syntax using JetBrains Mono layout aesthetics.`
      : `You are an expert Software Architect. Synthesize a comprehensive structural development blueprint spanning technical specifications, step-by-step implementation phases, and database layout architectures. Output only raw structured markdown without conversational introductory text.`;

    // Map conversation array to the Google Content format schema
    // (Translating 'user'/'assistant' roles directly into standard model schemas)
    const formattedContents = conversation.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Trigger Gemini synthesis
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Blazing fast response speeds perfect for chat iteration
      contents: formattedContents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2, // Kept low for high-accuracy engineering structures
      }
    });

    const finalResult = response.text || '// Specification rendering engine encountered an error.';

    return NextResponse.json({ result: finalResult });

  } catch (error) {
    console.error('Gemini Backend Processing Failure:', error);
    return NextResponse.json({ error: 'Failed to process AI context' }, { status: 500 });
  }
}