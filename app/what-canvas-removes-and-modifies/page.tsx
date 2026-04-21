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

            <h2>Overview</h2>

            <p>
                Canvas sanitises all content created in the Rich Content Editor.
                This means it removes unsupported elements, rewrites parts of
                the HTML, and limits which CSS can be used. The goal is to
                protect learners, keep pages consistent, and prevent broken or
                insecure layouts.
            </p>

            <p>
                The table below summarises the main behaviours observed in
                Canvas while building the examples in this guide. Details may
                vary slightly between institutions and over time as Canvas is
                updated, so always test important content after saving.
            </p>

            <h2>Summary of what Canvas removes and modifies</h2>

            <p>
                This table focuses on everyday authoring in the Rich Content
                Editor. It does not cover custom themes, LTI tools, or
                account-level branding.
            </p>

            <div className="overflow-x-auto mb-4" tabIndex={0}>
                <table className="w-full border-collapse text-[0.95rem]">
                    <caption className="text-left font-semibold mb-2">
                        Common HTML and CSS behaviours in this Canvas instance
                    </caption>
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="border border-[#dddddd] p-2 bg-[#f5f5f5] dark:bg-[#1f2937] text-left"
                            >
                                Item
                            </th>
                            <th
                                scope="col"
                                className="border border-[#dddddd] p-2 bg-[#f5f5f5] dark:bg-[#1f2937] text-left"
                            >
                                Type
                            </th>
                            <th
                                scope="col"
                                className="border border-[#dddddd] p-2 bg-[#f5f5f5] dark:bg-[#1f2937] text-left"
                            >
                                Canvas behaviour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#dddddd] p-2 bg-[#f5f5f5] dark:bg-[#1f2937] text-left"
                            >
                                Notes and alternatives
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                <code>&lt;script&gt;</code> and inline
                                JavaScript
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Element and attribute
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Removed when the page is saved.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                You cannot add your own JavaScript to RCE pages.
                                Only Canvas&apos; built-in JavaScript (for
                                example <code>enhanceable_content</code>) can
                                run.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                <code>&lt;style&gt;</code> and external
                                stylesheets
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Element
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Removed or ignored in the Rich Content Editor.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Use inline styles on individual elements
                                instead.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                Forms (<code>&lt;form&gt;</code>, inputs, etc.)
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Element group
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Removed or heavily sanitised so that real HTML
                                forms are not available in normal course
                                content.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Use Canvas assignments, quizzes, or external
                                tools for collecting responses instead of
                                hand-built forms.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                <code>&lt;button&gt;</code>,
                                <code>&lt;dialog&gt;</code>,
                                <code>&lt;progress&gt;</code>
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                HTML elements
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Removed when saved in this Canvas instance.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Use styled links that look like buttons, and
                                Canvas&apos; legacy progress bar or inline text
                                descriptions instead of native elements.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                Custom CSS classes
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                CSS class use
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Class names remain in the HTML, but there is no
                                way to define new CSS for them inside the RCE.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                For predictable results, rely on inline styles
                                and the legacy Canvas classes in this guide (for
                                example <code>btn</code>,<code>ic-Table</code>,
                                <code>enhanceable_content</code>).
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                <code>name</code> on{" "}
                                <code>&lt;details&gt;</code>
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Attribute
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Stripped from <code>&lt;details&gt;</code> when
                                saved, so browser “exclusive accordion”
                                behaviour is not available.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                You can still use multiple collapsible sections
                                with <code>&lt;details&gt;</code> and
                                <code>&lt;summary&gt;</code>, but they will not
                                auto-close each other.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                ARIA attributes
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Attribute group
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Generally preserved. Elements such as alerts and
                                progress indicators can use <code>role</code>,{" "}
                                <code>aria-label</code>, and
                                <code>aria-valuenow</code>.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Always test ARIA-heavy patterns after saving, as
                                Canvas may re-wrap content or insert extra{" "}
                                <code>&lt;p&gt;</code> tags that affect the
                                structure.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                Inline CSS (style attribute)
                            </td>
                            <td className="border border-[#dddddd] p-2">CSS</td>
                            <td className="border border-[#dddddd] p-2">
                                Allowed but sanitised. Unsupported properties
                                and values are removed, and some complex
                                shorthand may be rewritten.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Use widely supported properties such as{" "}
                                <code>margin</code>, <code>padding</code>,
                                <code>border</code>, and basic
                                <code>display</code> and <code>grid</code>{" "}
                                patterns. Check layouts again after saving.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                Text and block structure
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Markup normalisation
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Canvas often wraps content in{" "}
                                <code>&lt;p&gt;</code> tags, removes empty
                                elements, and reformats whitespace.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                If you need tighter control over spacing, use{" "}
                                <code>&lt;div&gt;</code> elements with inline
                                margins instead of relying on blank lines in the
                                editor.
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-[#dddddd] p-2">
                                Legacy Canvas components (
                                <code>enhanceable_content</code>)
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Canvas-specific patterns
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                Still recognised in this instance. Tabs,
                                popovers, tooltips, draggable items, sortable
                                lists and resizable boxes work when marked up
                                correctly.
                            </td>
                            <td className="border border-[#dddddd] p-2">
                                These are legacy features and behaviour may
                                change in future updates. Use them for optional
                                enhancements, not as the only way to access key
                                content.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    );
}
