"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import ScoreCard from "@/components/report/ScoreCard";
import BugCard from "@/components/report/BugCard";
import SuggestionCard from "@/components/report/SuggestionCard";
import ImprovedCodeCard from "@/components/report/ImprovedCodeCard";
import InterviewSection from "@/components/report/InterviewSection";
import ConfidenceCard from "@/components/report/ConfidenceCard";
import ComplexityCard from "@/components/report/ComplexityCard";

export default function ReportPage({
    params,
}: {
    params: Promise<{
        id: string;
    }>;
}) {

    const [report, setReport] =
        useState<any>(null);

    useEffect(() => {

        async function fetchReport() {

            const { id } =
                await params;

            const response =
                await axios.get(
                    `/api/reports/${id}`
                );

            setReport(
                response.data.report
            );
        }

        fetchReport();

    }, [params]);

    if (!report) {

        return (
            <div className="p-10">
                Loading...
            </div>
        );

    }

    return (

        <div className="space-y-10 p-10">

            <div className="grid gap-6 md:grid-cols-2">

                <ScoreCard
                    title="Quality Score"
                    score={report.qualityScore}
                />

                <ScoreCard
                    title="Security Score"
                    score={report.securityScore}
                />

                <ScoreCard
                    title="Performance Score"
                    score={report.performanceScore}
                />

                <ScoreCard
                    title="Maintainability Score"
                    score={report.maintainabilityScore}
                />

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                <ConfidenceCard
                    confidence={report.confidence}
                />

                <ComplexityCard
                    timeComplexity={
                        report.complexity.timeComplexity
                    }
                    spaceComplexity={
                        report.complexity.spaceComplexity
                    }
                />

            </div>

            <div className="space-y-4">

                <h2 className="text-2xl font-bold">
                    Bugs
                </h2>

                {report.bugs.map(
                    (
                        bug: any,
                        index: number
                    ) => (

                        <BugCard
                            key={`${bug.title}-${index}`}
                            title={bug.title}
                            description={bug.description}
                            severity={bug.severity}
                        />

                    )
                )}

            </div>

            <div className="space-y-4">

                <h2 className="text-2xl font-bold">
                    Suggestions
                </h2>

                {report.suggestions.map(
                    (
                        suggestion: any,
                        index: number
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

            </div>

            <ImprovedCodeCard
                code={report.improvedCode}
            />

            <InterviewSection
                title="Beginner Questions"
                questions={
                    report.interviewQuestions
                        .beginner
                }
            />

            <InterviewSection
                title="Intermediate Questions"
                questions={
                    report.interviewQuestions
                        .intermediate
                }
            />

            <InterviewSection
                title="Advanced Questions"
                questions={
                    report.interviewQuestions
                        .advanced
                }
            />

        </div>

    );
}