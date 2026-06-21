import { GoogleGenAI } from "@google/genai";

import { CODE_REVIEW_PROMPT } from "@/constants/prompts";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function analyzeCode(code: string, language: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    contents: `
${CODE_REVIEW_PROMPT}

Language:
${language}

Code:
${code}
`,
  });

  const text = response.text || "";

  console.log("========== GEMINI RESPONSE ==========");

  console.log(text);

  console.log("====================================");

  return text;
}
