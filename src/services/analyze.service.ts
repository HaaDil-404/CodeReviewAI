import { analyzeCode } from "./gemini.service";

import { extractJson } from "@/utils/extractJson";

import { analysisSchema } from "@/schemas/analysis.schema";

export async function runAnalysis(code: string, language: string) {
  const response = await analyzeCode(code, language);

  const parsed = extractJson(response);

  console.log(JSON.stringify(parsed, null, 2));

  return analysisSchema.parse(parsed);
}
