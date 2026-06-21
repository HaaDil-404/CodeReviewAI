"use client";

import { LANGUAGES } from "@/constants/languages";

interface Props {

    language: string;

    setLanguage: (
        language: string
    ) => void;
}

export default function LanguageSelector({
    language,
    setLanguage,
}: Props) {

    return (

        <select
            className="rounded-lg border bg-background p-3"
            value={language}
            onChange={(e) =>
                setLanguage(
                    e.target.value
                )
            }
        >

            {LANGUAGES.map((lang) => (

                <option
                    key={lang}
                    value={lang}
                >
                    {lang}
                </option>

            ))}

        </select>

    );
}