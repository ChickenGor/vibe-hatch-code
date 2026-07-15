import { GoogleGenAI } from '@google/genai';

export async function POST(req) {
  try {
    const { idea, customApiKey } = await req.json();

    if (!idea) {
      return Response.json({ error: "Please enter an idea first!" }, { status: 400 });
    }

    // Use custom BYOK key if provided, otherwise fall back to shared .env.local key
    const apiKey = customApiKey || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "No API key found." }, { status: 401 });
    }

    const ai = new GoogleGenAI({ apiKey });

    // 1. Define your prompt cleanly in one place
    const prompt = `You are a startup product architect. Given this rough app idea: "${idea}", write exactly 3 clear, concise, actionable MVP feature bullet points for a developer to build first. Do not include introductory text or fluff. Just print the 3 numbered features.`;

    // 2. Execute with Auto-Fallback Protection
    let response;
    try {
      // 🥇 Attempt 1: Try the newest lightweight model first
      response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: { temperature: 0.7 }
      });
    } catch (error) {
      console.warn('⚠️ Primary model busy! Silently falling back to 2.5 Flash...', error.message);
      
      // 🥈 Attempt 2: Instantly fall back to the high-capacity workhorse!
      response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { temperature: 0.7 }
      });
    }

    // Now you can safely use your response!
    console.log(response.text);

    return Response.json({ result: response.text });
  } catch (error) {
    console.error("Brainstorming API Error:", error);
    return Response.json({ error: error.message || "Brainstorming failed." }, { status: 500 });
  }
}