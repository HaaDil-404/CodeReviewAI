interface Props {
    title: string;
    description: string;
}

export default function SuggestionCard({
    title,
    description,
}: Props) {
    return (
        <div className="rounded-2xl border p-5">

            <h2 className="font-bold">
                {title}
            </h2>

            <p className="mt-2 text-muted-foreground">
                {description}
            </p>

        </div>
    );
}