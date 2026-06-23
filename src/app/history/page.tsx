"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import ReportCard from "@/components/history/ReportCard";

export default function HistoryPage() {

    const [reports, setReports] =
        useState([]);

    useEffect(() => {

        async function fetchReports() {

            const response =
                await axios.get(
                    "/api/reports"
                );

            setReports(
                response.data.reports
            );
        }

        fetchReports();

    }, []);

    return (

        <div className="space-y-8 p-10">

            <h1 className="text-4xl font-bold">

                Analysis History

            </h1>

            {
                reports.length === 0 && (

                    <div className="rounded-3xl border p-12 text-center">

                        <h2 className="text-2xl font-bold">

                            No Reports Yet

                        </h2>

                        <p className="mt-3 text-muted-foreground">

                            Analyze your first code snippet to get started.

                        </p>

                    </div>

                )
            }

            <div className="grid gap-6 md:grid-cols-2">

                {reports.map(
                    (report: any) => (

                        <ReportCard
                            key={report._id}

                            id={report._id}

                            language={
                                report.language
                            }

                            qualityScore={
                                report.qualityScore
                            }

                            securityScore={
                                report.securityScore
                            }

                            createdAt={
                                report.createdAt
                            }
                        />

                    )
                )}

            </div>

        </div>

    );
}