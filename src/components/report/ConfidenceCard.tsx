import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Props {
    confidence: number;
}

export default function ConfidenceCard({
    confidence,
}: Props) {

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border bg-background/60 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl p-6"
        >
            <div className="rounded-2xl border p-6">

                <h2 className="mb-4 text-xl font-bold">

                    AI Confidence

                </h2>

                <div className="mb-4 text-5xl font-bold">

                    {confidence}%

                </div>

                <Progress
                    value={confidence}
                />

            </div>

        </motion.div>

    );
}