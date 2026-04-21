import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { generatePageMetadata, generatePageJsonLd } from "@/lib/siteMetadata";
import { meta } from "./meta";

export const metadata = generatePageMetadata(meta);

export default function page() {
    return (
        <article>
            <JsonLd data={generatePageJsonLd(meta)} />
            <PageHeader
                title={meta.title}
                date={meta.date}
                readingTime={meta.readingTime}
            />

            <p>
                This page answers common questions about how Canvas handles
                HTML, CSS, and legacy components in the Rich Content Editor.
                Each answer is based on the behaviour used throughout this
                Canvas Content Styling Guide.
            </p>

            <p>
                Use the questions below to expand and collapse each answer. To
                ask a question not included here,{" "}
                <a
                    href="https://github.com/Karl-Horning/canvas/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    open an issue on GitHub
                </a>
                .
            </p>

            <h2>HTML sanitisation and removed elements</h2>

            <div className="mb-6">
                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why does Canvas sometimes change my HTML?
                    </summary>
                    <p className="m-0">
                        Canvas sanitises every page created in the Rich Content
                        Editor. It removes unsupported elements, rewrites
                        structure, and inserts <code>&lt;p&gt;</code> tags to
                        normalise spacing. This behaviour cannot be disabled.
                        The goal is to prevent broken layouts and block
                        unsupported or unsafe features.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why are my scripts removed?
                    </summary>
                    <p className="m-0">
                        Canvas strips all <code>&lt;script&gt;</code> tags and
                        inline JavaScript for security. Only the JavaScript
                        already built into Canvas can run. You cannot add your
                        own JavaScript to a Canvas page.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why are some elements removed, such as buttons, forms,
                        or progress bars?
                    </summary>
                    <p className="m-0">
                        Canvas removes elements it does not support inside
                        course content. Examples include{" "}
                        <code>&lt;button&gt;</code>, <code>&lt;form&gt;</code>,
                        <code>&lt;input&gt;</code>, <code>&lt;dialog&gt;</code>,
                        <code>&lt;style&gt;</code>, and
                        <code>&lt;progress&gt;</code>. Where useful, this guide
                        shows alternatives that still work in the Rich Content
                        Editor.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why do my custom CSS styles disappear?
                    </summary>
                    <p className="m-0">
                        Canvas removes <code>&lt;style&gt;</code> tags, external
                        stylesheets, and most custom classes. Only inline styles
                        and Canvas&apos; built-in classes are allowed. The
                        examples in this guide use inline CSS for this reason.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why does Canvas wrap everything in paragraphs?
                    </summary>
                    <p className="m-0">
                        This is part of Canvas&apos; HTML normalisation. The
                        editor treats line breaks as paragraphs. To avoid
                        unwanted spacing, you can use inline{" "}
                        <code>&lt;div&gt;</code>
                        elements or control spacing manually with inline{" "}
                        <code>margin</code> styles.
                    </p>
                </details>
            </div>

            <h2>Layouts, styles, and components</h2>

            <div className="mb-6">
                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why do some Canvas components work even though I cannot
                        use JavaScript?
                    </summary>
                    <p className="m-0">
                        Canvas includes its own legacy JavaScript that
                        automatically enhances patterns such as tabs, tooltips,
                        popovers, progress bars, draggable items, sortable
                        lists, and resizable containers. These work because
                        Canvas detects elements marked with{" "}
                        <code>enhanceable_content</code> and upgrades them when
                        the page loads.
                    </p>
                    <p>
                        You cannot create new behaviour with JavaScript, but you
                        can use the patterns Canvas already supports.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why do my tables or layouts look different after saving?
                    </summary>
                    <p className="mb-2">
                        Canvas applies its own HTML cleanup which may:
                    </p>
                    <ul className="mb-2 ml-5 pl-0">
                        <li>
                            add <code>&lt;p&gt;</code> tags around elements
                        </li>
                        <li>remove empty cells</li>
                        <li>strip classes it does not recognise</li>
                        <li>reformat whitespace</li>
                    </ul>
                    <p className="m-0">
                        Using inline styles helps prevent unexpected formatting
                        changes. The examples in this guide avoid any classes
                        that are not supported by Canvas.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why do my inline styles get rewritten or reordered?
                    </summary>
                    <p className="m-0">
                        Canvas sanitises inline CSS and removes unsupported
                        properties. For example, certain forms of grid
                        shorthand, unsupported values, or vendor-specific CSS
                        may be stripped or rewritten. Stick to widely supported
                        properties and explicitly set values to maintain
                        consistency.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why will my CSS Grid layout not behave responsively?
                    </summary>
                    <p className="m-0">
                        Canvas allows CSS Grid in inline styles, but not all
                        responsive patterns behave consistently. Items inside
                        nested grids may not wrap as expected, and some browsers
                        may handle <code>auto-fit</code> or{" "}
                        <code>minmax()</code> differently. The examples in the
                        Grid section focus on patterns that work reliably inside
                        Canvas.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Can I use ARIA attributes?
                    </summary>
                    <p className="m-0">
                        Yes. Canvas allows ARIA attributes, but it may
                        occasionally reorder HTML or wrap elements, which can
                        affect complex ARIA patterns. Always test ARIA-heavy
                        content after saving.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Why cannot I rely on tooltips, popovers, or draggable
                        content?
                    </summary>
                    <p className="m-0">
                        These patterns work because Canvas enhances them with
                        its own JavaScript. However, behaviour may vary between
                        browsers, devices, or institutional theme settings. They
                        should be used only for optional content, not essential
                        instructions.
                    </p>
                </details>
            </div>

            <h2>Editing workflow and long-term maintenance</h2>

            <div className="mb-6">
                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Can I copy and paste content directly into Canvas?
                    </summary>
                    <p className="m-0">
                        Yes. All examples in this guide are designed to be
                        copied into a Canvas page without modification. For
                        complex content, paste using the HTML editor to prevent
                        the Rich Content Editor from rewriting your markup
                        prematurely.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        How should I edit and manage my Canvas HTML?
                    </summary>
                    <p className="mb-2">
                        The easiest workflow is to write your pages using a code
                        editor such as
                        <a
                            href="https://code.visualstudio.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visual Studio Code
                        </a>
                        , keeping HTML and CSS separate while drafting. Once the
                        layout is final, convert the CSS into inline styles and
                        paste the finished HTML into Canvas.
                    </p>
                    <p className="m-0">
                        It is strongly recommended that you store your files in
                        version control (for example, Git) so you have reliable
                        backups and can track changes over time.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        What happens if Canvas updates its styles or JavaScript?
                    </summary>
                    <p className="m-0">
                        Legacy components and classes are still supported, but
                        future Canvas updates may replace or remove certain
                        behaviours. All examples in this guide rely on the
                        current behaviour of Canvas and avoid unsupported
                        structures or deprecated elements.
                    </p>
                </details>

                <details className="mb-3 border border-[#d0d7de] rounded-lg bg-[#f9f9f9] dark:bg-[#1f2937] px-4 py-3">
                    <summary className="font-semibold mb-2 cursor-pointer">
                        Is it safe to rely on these components long term?
                    </summary>
                    <p className="m-0">
                        Yes, but with caution. Anything powered by{" "}
                        <code>enhanceable_content</code> is legacy and may
                        behave differently in future updates. Use semantic HTML
                        as your base layout, and treat any enhanced behaviour as
                        optional.
                    </p>
                </details>
            </div>
        </article>
    );
}
