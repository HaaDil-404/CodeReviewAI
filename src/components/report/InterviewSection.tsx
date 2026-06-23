import { motion } from "framer-motion";
interface Props {
    title: string;
    questions: string[];
}

export default function InterviewSection({
    title,
    questions,
}: Props) {

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border  p-5"
        >

            <h2 className="mb-4 text-xl font-bold">

                {title}

            </h2>

            <ul className="space-y-3">

                {questions.map((question) => (

                    <li key={question}>

                        • {question}

                    </li>

                ))}

            </ul>

        </motion.div>

    );
}