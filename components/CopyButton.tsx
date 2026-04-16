"use client";

import { useState } from "react";

/** Props for {@link CopyButton}. */
interface CopyButtonProps {
    /** The text to write to the clipboard when clicked. */
    text: string;
}

/**
 * Copy-to-clipboard button used inside {@link CodeBlock}.
 *
 * Writes `text` to the system clipboard and shows a brief "Copied!"
 * confirmation before resetting. Extracted as a separate client component so
 * that `CodeBlock` itself can remain a server component.
 *
 * @param props - Component props.
 * @param props.text - The string to copy.
 * @returns A button element positioned absolutely by its parent.
 */
export default function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    /** Writes the code string to the system clipboard. */
    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
            className="absolute top-2 right-2 px-2 py-1 text-xs bg-white border border-[#ddd] rounded cursor-pointer hover:bg-[#f0f0f0]"
        >
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}
