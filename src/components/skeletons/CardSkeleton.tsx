import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
    return (
        <div className="space-y-4 rounded-3xl border p-6">

            <Skeleton className="h-6 w-1/2" />

            <Skeleton className="h-12 w-1/3" />

            <Skeleton className="h-4 w-full" />

        </div>
    );
}