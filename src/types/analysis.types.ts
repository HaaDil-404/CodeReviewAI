export interface Bug {
  title: string;
  description: string;
}

export interface InterviewQuestions {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
}

interface Suggestion {
  title: string;
  description: string;
}

export interface AnalysisResult {
  qualityScore: number;
  securityScore: number;
  performanceScore: number;
  maintainabilityScore: number;

  bugs: Bug[];

  suggestions: Suggestion[];

  improvedCode: string;

  interviewQuestions: InterviewQuestions;
}
