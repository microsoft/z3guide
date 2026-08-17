import React, { useEffect, useRef, useState } from "react";

async function copyToClipboard(code: string) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(code);
    }

    const textarea = document.createElement("textarea");
    textarea.value = code;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) {
        throw new Error("Failed to copy code to the clipboard");
    }
}

export default function CopyButton(props: {
    className?: string;
    code: string;
}) {
    const [copied, setCopied] = useState(false);
    const resetTimer = useRef<number>();

    useEffect(
        () => () => window.clearTimeout(resetTimer.current),
        []
    );

    const copyCode = () => {
        copyToClipboard(props.code).then(() => {
            setCopied(true);
            resetTimer.current = window.setTimeout(
                () => setCopied(false),
                1000
            );
        });
    };

    return (
        <button
            type="button"
            className={props.className}
            aria-label={copied ? "Copied" : "Copy code to clipboard"}
            title={copied ? "Copied" : "Copy"}
            onClick={copyCode}
        >
            {copied ? "Copied" : "Copy"}
        </button>
    );
}
