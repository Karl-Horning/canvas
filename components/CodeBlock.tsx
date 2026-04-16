import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

/** Props for {@link CodeBlock}. */
interface CodeBlockProps {
    /** The raw code string to display. Newlines and indentation are preserved. */
    children: string;
}

/**
 * Displays a syntax-highlighted HTML code block with a copy-to-clipboard button.
 *
 * Uses Shiki to render highlighted HTML server-side, so no highlighting
 * JavaScript is shipped to the client. The copy button is handled by the
 * separate {@link CopyButton} client component.
 *
 * Accepts a raw string (typically a template literal) as its only child so
 * that newlines and indentation are preserved exactly as written.
 *
 * @example
 * ```tsx
 * <CodeBlock>{`<div class="btn">Click me</div>`}</CodeBlock>
 * ```
 *
 * @param props - Component props.
 * @param props.children - The code string to render and copy.
 * @returns A positioned wrapper containing the highlighted code and copy button.
 */
export default async function CodeBlock({ children }: CodeBlockProps) {
    const highlighted = await codeToHtml(children, {
        lang: "html",
        theme: "github-light",
    });

    return (
        <div className="relative mb-4">
            <div className="overflow-x-auto rounded-md border border-[#ddd]">
                <div
                    className="[&>pre]:m-0 [&>pre]:p-4 [&>pre]:pr-20 [&>pre]:text-sm [&>pre]:whitespace-pre [&>pre]:w-max [&>pre]:min-w-full"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is generated server-side from trusted template literals, not user input.
                    dangerouslySetInnerHTML={{ __html: highlighted }}
                />
            </div>
            <CopyButton text={children} />
        </div>
    );
}
