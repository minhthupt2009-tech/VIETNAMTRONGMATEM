import { GoogleGenAI } from '@google/genai';

async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'hello'
    });
  } catch (e: any) {
    console.log("ERROR MESSAGE:", e.message);
    console.log("ERROR STATUS:", e.status);
  }
}
test();
