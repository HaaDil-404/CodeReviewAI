

"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import InterviewTabs from "@/components/report/InterviewTabs";

import CodeEditor from "@/components/code-editor/CodeEditor";
import LanguageSelector from "@/components/analyzer/LanguageSelector";

import ScoreCard from "@/components/report/ScoreCard";
import BugCard from "@/components/report/BugCard";
import SuggestionCard from "@/components/report/SuggestionCard";
import ImprovedCodeCard from "@/components/report/ImprovedCodeCard";
import InterviewSection from "@/components/report/InterviewSection";
import ConfidenceCard from "@/components/report/ConfidenceCard";
import ComplexityCard from "@/components/report/ComplexityCard";

import { Button } from "@/components/ui/button";

import type { AnalysisResult } from "@/schemas/analysis.schema";

export default function AnalyzerPage() {
    const [code, setCode] = useState("");

    const [language, setLanguage] =
        useState("javascript");

    const [result, setResult] =
        useState<AnalysisResult | null>(null);

    const [loading, setLoading] =
        useState(false);

    async function handleAnalyze() {
        try {
            setLoading(true);

            const response = await axios.post(
                "/api/analyze",
                {
                    code,
                    language,
                }
            );

            setResult(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-10 p-10">

            {/* Language Selector */}
            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />

            {/* Code Editor */}
            <CodeEditor
                code={code}
                setCode={setCode}
                language={language}
            />

            {/* Analyze Button */}
            <Button
                onClick={handleAnalyze}
                disabled={loading}
            >
                {loading
                    ? "Analyzing..."
                    : "Analyze Code"}
            </Button>

            {/* Score Cards */}
            {result && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    <ScoreCard
                        title="Quality Score"
                        score={result.qualityScore}
                    />

                    <ScoreCard
                        title="Security Score"
                        score={result.securityScore}
                    />

                    <ScoreCard
                        title="Performance Score"
                        score={result.performanceScore}
                    />

                    <ScoreCard
                        title="Maintainability Score"
                        score={result.maintainabilityScore}
                    />
                </motion.div>
            )}

            {/* Confidence & Complexity */}
            {result && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    <ConfidenceCard
                        confidence={result.confidence}
                    />

                    <ComplexityCard
                        timeComplexity={
                            result.complexity.timeComplexity
                        }
                        spaceComplexity={
                            result.complexity.spaceComplexity
                        }
                    />
                </motion.div>
            )}

            {/* Bugs */}
            {result?.bugs.length !== 0 && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-bold">
                        Bugs
                    </h2>

                    {result?.bugs.map(
                        (bug, index) => (
                            <BugCard
                                key={`${bug.title}-${index}`}
                                title={bug.title}
                                description={
                                    bug.description
                                }
                                severity={bug.severity}
                            />
                        )
                    )}
                </motion.div>
            )}

            {/* Suggestions */}
            {result && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-bold">
                        Suggestions
                    </h2>

                    {result.suggestions.map(
                        (
                            suggestion,
                            index
                        ) => (
                            <SuggestionCard
                                key={`${suggestion.title}-${index}`}
                                title={suggestion.title}
                                description={
                                    suggestion.description
                                }
                            />
                        )
                    )}
                </motion.div>
            )}

            {/* Improved Code */}
            {result && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.75,
                    }}
                >
                    <ImprovedCodeCard
                        code={result.improvedCode}
                    />
                </motion.div>
            )}

            {/* Interview Questions */}
            {result && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="grid gap-6"
                >

                            <InterviewTabs

                                beginner={
                                    result.interviewQuestions.beginner
                                }

                                intermediate={
                                    result.interviewQuestions.intermediate
                                }

                                advanced={
                                    result.interviewQuestions.advanced
                                }

                            />
                </motion.div>
            )}
        </div>
    );
}