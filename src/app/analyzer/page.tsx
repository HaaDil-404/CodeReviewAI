"use client";

import { useState } from "react";
import axios from "axios";

import CodeEditor from "@/components/code-editor/CodeEditor";
import LanguageSelector from "@/components/analyzer/LanguageSelector";

import ScoreCard from "@/components/report/ScoreCard";
import BugCard from "@/components/report/BugCard";
import SuggestionCard from "@/components/report/SuggestionCard";
import ImprovedCodeCard from "@/components/report/ImprovedCodeCard";
import InterviewSection from "@/components/report/InterviewSection";

import { Button } from "@/components/ui/button";

import type { AnalysisResult } from "@/schemas/analysis.schema";

export default function AnalyzerPage() {
    const [code, setCode] = useState("");

    const [language, setLanguage] = useState("javascript");

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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

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

                </div>
            )}

            {/* Bugs */}
            {result?.bugs.length !== 0 && (
                <div className="space-y-4">

                    <h2 className="text-2xl font-bold">
                        Bugs
                    </h2>

                    {result?.bugs.map((bug) => (
                        <BugCard
                            key={bug.title}
                            title={bug.title}
                            description={bug.description}
                        />
                    ))}

                </div>
            )}

            {/* Suggestions */}
            {result && (
                <div className="space-y-4">

                    <h2 className="text-2xl font-bold">
                        Suggestions
                    </h2>

                    {result.suggestions.map(
                        (suggestion) => (
                            <SuggestionCard
                                key={suggestion.title}
                                title={suggestion.title}
                                description={suggestion.description}
                            />
                        )
                    )}

                </div>
            )}

            {/* Improved Code */}
            {result && (
                <ImprovedCodeCard
                    code={result.improvedCode}
                />
            )}

            {/* Interview Questions */}
            {result && (
                <div className="grid gap-6">

                    <InterviewSection
                        title="Beginner Questions"
                        questions={
                            result.interviewQuestions
                                .beginner
                        }
                    />

                    <InterviewSection
                        title="Intermediate Questions"
                        questions={
                            result.interviewQuestions
                                .intermediate
                        }
                    />

                    <InterviewSection
                        title="Advanced Questions"
                        questions={
                            result.interviewQuestions
                                .advanced
                        }
                    />

                </div>
            )}

        </div>
    );
}