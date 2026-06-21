interface Props {
    title: string;
    questions: string[];
}

export default function InterviewSection({
    title,
    questions,
}: Props) {

    return (

        <div className="rounded-2xl border p-6">

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

        </div>

    );
}