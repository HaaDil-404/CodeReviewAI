"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
    id: string;

    language: string;

    qualityScore: number;

    securityScore: number;

    createdAt: string;
}

export default function ReportCard({
    id,
    language,
    qualityScore,
    securityScore,
    createdAt,
}: Props) {


    const router = useRouter();

    async function handleDelete() {

        try {

            await axios.delete(
                `/api/reports/${id}`
            );

            window.location.reload();

        } catch (error) {

            console.error(error);

        }
    }
    return (
        <div className="rounded-3xl border bg-background/60 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl p-6">

            <h2 className="text-xl font-bold">
                {language}
            </h2>

            <div className="mt-4 space-y-2">

                <p>
                    Quality:
                    {" "}
                    {qualityScore}
                </p>

                <p>
                    Security:
                    {" "}
                    {securityScore}
                </p>

                <p className="text-sm text-muted-foreground">
                    {new Date(
                        createdAt
                    ).toLocaleString()}
                </p>

            </div>

            <Link
                href={`/report/${id}`}
                className="mt-6 inline-block text-blue-500"
            >
                View Report →
            </Link>

            <button
                onClick={handleDelete}
                className="mt-4 text-red-500"
            >
                Delete Report
            </button>

        </div>
    );
}