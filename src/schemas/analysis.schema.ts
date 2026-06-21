import { z } from "zod";

export const analysisSchema = z.object({
  qualityScore: z.number(),

  securityScore: z.number(),

  performanceScore: z.number(),

  maintainabilityScore: z.number(),

  bugs: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    }),
  ),

  suggestions: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    }),
  ),

  improvedCode: z.string(),

  interviewQuestions: z.object({
    beginner: z.array(z.string()),

    intermediate: z.array(z.string()),

    advanced: z.array(z.string()),
  }),
});

export type AnalysisResult = z.infer<typeof analysisSchema>;
