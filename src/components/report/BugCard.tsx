interface Props {
    title: string;
    description: string;
}

export default function BugCard({
    title,
    description,
}: Props) {

    return (

        <div className="rounded-2xl border border-red-500 p-5">

            <h2 className="font-bold text-red-400">
                {title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
                {description}
            </p>

        </div>

    );
}