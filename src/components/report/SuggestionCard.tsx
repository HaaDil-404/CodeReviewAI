import { motion } from "framer-motion";
interface Props {
    title: string;
    description: string;
}

export default function SuggestionCard({
    title,
    description,
}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border bg-background/60 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl p-6"
        >

            <h2 className="font-bold">
                {title}
            </h2>

            <p className="mt-2 text-muted-foreground">
                {description}
            </p>

        </motion.div>
    );
}