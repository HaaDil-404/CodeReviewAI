import { Progress } from "@/components/ui/progress";

interface Props {
    title: string;
    score: number;
}

export default function ScoreCard({
    title,
    score,
}: Props) {

    return (

        <div className="rounded-2xl border bg-card p-6">

            <h2 className="mb-3 text-lg font-semibold">
                {title}
            </h2>

            <div className="mb-3 text-4xl font-bold">
                {score}
            </div>

            <Progress value={score} />

        </div>

    );
}