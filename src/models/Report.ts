import mongoose, {
  Schema,
  Document,
} from "mongoose";

interface Bug {
  title: string;
  description: string;
  severity: string;
}

interface Suggestion {
  title: string;
  description: string;
}

interface InterviewQuestions {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
}

interface Complexity {
  timeComplexity: string;
  spaceComplexity: string;
}

export interface IReport extends Document {
  userId: string;

  code: string;

  language: string;

  qualityScore: number;

  securityScore: number;

  performanceScore: number;

  maintainabilityScore: number;

  confidence: number;

  complexity: Complexity;

  bugs: Bug[];

  suggestions: Suggestion[];

  improvedCode: string;

  interviewQuestions: InterviewQuestions;

  createdAt: Date;
}

const ReportSchema = new Schema<IReport>(
  {
    userId: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    qualityScore: Number,

    securityScore: Number,

    performanceScore: Number,

    maintainabilityScore: Number,

    confidence: Number,

    complexity: {
      timeComplexity: String,

      spaceComplexity: String,
    },

    bugs: [
      {
        title: String,

        description: String,

        severity: String,
      },
    ],

    suggestions: [
      {
        title: String,

        description: String,
      },
    ],

    improvedCode: String,

    interviewQuestions: {
      beginner: [String],

      intermediate: [String],

      advanced: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Report =
  mongoose.models.Report ||
  mongoose.model<IReport>(
    "Report",
    ReportSchema
  );

export default Report;