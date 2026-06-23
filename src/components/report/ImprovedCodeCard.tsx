"use client";

import { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

import {
    Prism as SyntaxHighlighter,
} from "react-syntax-highlighter";

import {
    oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button } from "@/components/ui/button";

interface Props {
    code: string;
}

export default function ImprovedCodeCard({
    code,
}: Props) {

    const [copied, setCopied] =
        useState(false);

    return (

        <div className="rounded-3xl border bg-card p-6 shadow-lg">

            <div className="mb-5 flex items-center justify-between">
                <Copy className="h-5 w-5 text-muted-foreground" />

                <h2 className="text-2xl font-bold">

                    Improved Code

                </h2>

                <CopyToClipboard
                    text={code}
                    onCopy={() => {

                        setCopied(true);

                        setTimeout(() => {

                            setCopied(false);

                        }, 2000);

                    }}
                >

                    <Button>

                        {copied
                            ? "Copied!"
                            : "Copy"}

                    </Button>

                </CopyToClipboard>

            </div>

            <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                showLineNumbers
                customStyle={{
                    borderRadius: "16px",
                }}
            >

                {code}

            </SyntaxHighlighter>

        </div>

    );
}