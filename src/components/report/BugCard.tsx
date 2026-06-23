import { motion } from "framer-motion";
import SeverityBadge from "./SeverityBadge";

interface Props {
    title: string;
    description: string;
    severity: string;
}

export default function BugCard({
    title,
    description,
    severity,
}: Props) {

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border bg-background/60 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl p-6"
        >

            <div className="flex items-center justify-between">

                <h2 className="font-bold text-red-400">
                    {title}
                </h2>

                <SeverityBadge
                    severity={severity}
                />

            </div>

            <p className="mt-3 text-sm text-muted-foreground">
                {description}
            </p>

        </motion.div>

    );
}