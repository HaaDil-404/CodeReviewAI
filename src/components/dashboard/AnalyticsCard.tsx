import { BarChart3 } from "lucide-react";
interface Props {
    title: string;
    value: number;
    icon?: React.ReactNode;
}

export default function AnalyticsCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl border bg-background/60 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl p-6">
      <BarChart3 className="h-8 w-8 text-primary" />
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <div className="mt-4 text-5xl font-bold">
        {value}
      </div>
    </div>
  );
}