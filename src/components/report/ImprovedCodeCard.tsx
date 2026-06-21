interface Props {
    code: string;
}

export default function ImprovedCodeCard({
    code,
}: Props) {

    return (

        <div className="rounded-2xl border p-6">

            <h2 className="mb-4 text-xl font-bold">
                Improved Code
            </h2>

            <pre className="overflow-auto rounded-xl bg-black p-4">

                <code>

                    {code}

                </code>

            </pre>

        </div>

    );
}