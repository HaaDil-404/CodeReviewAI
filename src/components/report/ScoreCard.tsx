import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Props {
    title: string;
    score: number;
}

export default function ScoreCard({
    title,
    score,
}: Props) {

    function getStatus() {

        if (score >= 80)
            return "Excellent";

        if (score >= 60)
            return "Good";

        return "Poor";
    }

    return (

        <motion.div
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: .3
            }}
            className="rounded-3xl border bg-background/60 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl p-6"
        >

            <h2 className="text-lg font-semibold">

                {title}

            </h2>

            <div className="mt-4 text-5xl font-bold">

                {score}%

            </div>

            <Progress
                className="mt-5"
                value={score}
            />

            <p className="mt-4 text-muted-foreground">

                {getStatus()}

            </p>

        </motion.div>

    );
}