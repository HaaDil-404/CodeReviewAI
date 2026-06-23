import { motion } from "framer-motion";
interface Props {
  severity: string;
}

export default function SeverityBadge({
  severity,
}: Props) {

  const colors = {
    Low: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-red-500",
  };

  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-red-500 p-5"
        >
    <span
      className={`rounded-full px-3 py-1 text-sm text-white ${
        colors[
          severity as keyof typeof colors
        ]
      }`}
    >
      {severity}
    </span>

    </motion.div>
  );
}