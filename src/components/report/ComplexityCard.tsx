import { motion } from "framer-motion";
interface Props {

    timeComplexity: string;

    spaceComplexity: string;
}

export default function ComplexityCard({
    timeComplexity,
    spaceComplexity,
}: Props) {

    return (

       <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border bg-background/60 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl p-6"
        >

            <h2 className="mb-6 text-xl font-bold">

                Complexity Analysis

            </h2>

            <div className="space-y-4">

                <div>

                    <p className="text-muted-foreground">
                        Time Complexity
                    </p>

                    <h3 className="text-3xl font-bold">
                        {timeComplexity}
                    </h3>

                </div>

                <div>

                    <p className="text-muted-foreground">
                        Space Complexity
                    </p>

                    <h3 className="text-3xl font-bold">
                        {spaceComplexity}
                    </h3>

                </div>

            </div>

        </motion.div>

    );
}