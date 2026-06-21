"use client";

import Editor from "@monaco-editor/react";

interface Props {
    code: string;
    setCode: (value: string) => void;
    language: string;
}

export default function CodeEditor({
    code,
    setCode,
    language,
}: Props) {

    return (

        <Editor
            height="600px"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) =>
                setCode(value || "")
            }
        />

    );
}