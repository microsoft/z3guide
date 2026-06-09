import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Props = {
    className?: string;
    code: string;
};

export default function CopyButton(props: Props) {
    const { className, code } = props;
    const [isCopied, setIsCopied] = useState(false);
    const timeoutRef = useRef<number | undefined>(undefined);

    const onClick = useCallback(async () => {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(code);
        } else {
            const textarea = document.createElement("textarea");
            textarea.value = code;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }

        setIsCopied(true);
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setIsCopied(false), 1000);
    }, [code]);

    useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

    return (
        <button
            type="button"
            aria-label={isCopied ? "Copied" : "Copy code to clipboard"}
            title={isCopied ? "Copied" : "Copy"}
            className={clsx("clean-btn", className)}
            onClick={() => {
                void onClick();
            }}
        >
            {isCopied ? "Copied" : "Copy"}
        </button>
    );
}
