"use client";

import { useState } from "react";

/** Props for {@link CodeBlock}. */
interface CodeBlockProps {
    /** The raw code string to display. Newlines and indentation are preserved. */
    children: string;
}

/**
 * Displays a syntax-highlighted code block with a copy-to-clipboard button.
 *
 * Accepts a raw string (typically a template literal) as its only child so
 * that newlines and indentation are preserved exactly as written — avoiding
 * the whitespace-normalisation issue that affects JSX `<pre><code>` elements.
 *
 * The copy button writes `children` to the clipboard and shows a brief
 * "Copied!" confirmation before resetting.
 *
 * @example
 * ```tsx
 * <CodeBlock>{`<div class="btn">Click me</div>`}</CodeBlock>
 * ```
 *
 * @param props - Component props.
 * @param props.children - The code string to render and copy.
 * @returns A positioned wrapper containing a `<pre>` block and copy button.
 */
export default function CodeBlock({ children }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    /** Writes the code string to the system clipboard. */
    const handleCopy = async () => {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative mb-4">
            <div className="overflow-x-auto rounded-md border border-[#ddd]">
                <pre className="bg-[#f5f5f5] p-4 pr-20 m-0 text-sm font-mono whitespace-pre w-max min-w-full">
                    <code>{children}</code>
                </pre>
            </div>
            <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy code to clipboard"
                className="absolute top-2 right-2 px-2 py-1 text-xs bg-white border border-[#ddd] rounded cursor-pointer hover:bg-[#f0f0f0]"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    );
}
