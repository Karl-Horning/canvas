import Link from "next/link";

/**
 * Landing page for the Canvas Content Styling Guide.
 *
 * Provides a short introduction to the guide and a section overview with
 * links to every page it contains.
 *
 * @returns The rendered landing page.
 */
export default function Home() {
    return (
        <article>
            <h1>Canvas Content Styling Guide</h1>

            <p>
                This guide documents HTML patterns, CSS techniques, and
                Canvas-specific components for structuring content in Canvas
                LMS. Each section pairs working examples with the markup needed
                to reproduce them, with accessibility notes where relevant.
            </p>

            <p>
                The{" "}
                <Link href="/canvas-content-styling-guide/introduction">
                    Introduction
                </Link>{" "}
                covers the scope and overall structure if you are coming to this
                for the first time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="border border-[#e5e7eb] rounded-lg p-5">
                    <h2 className="mt-0 mb-1 text-base">
                        HTML Basics in Canvas
                    </h2>
                    <p className="mt-0 mb-3 text-sm text-[#4b5563]">
                        The core HTML elements supported in the Rich Content
                        Editor — how Canvas renders headings, paragraphs, lists,
                        and tables.
                    </p>
                    <ul className="list-none p-0 m-0 text-sm space-y-1">
                        <li>
                            <Link href="/html-basics-in-canvas/typography">
                                Typography
                            </Link>
                        </li>
                        <li>
                            <Link href="/html-basics-in-canvas/lists">
                                Lists
                            </Link>
                        </li>
                        <li>
                            <Link href="/html-basics-in-canvas/tables">
                                Tables
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="border border-[#e5e7eb] rounded-lg p-5">
                    <h2 className="mt-0 mb-1 text-base">Colour and Branding</h2>
                    <p className="mt-0 mb-3 text-sm text-[#4b5563]">
                        The colour palette available for Canvas content and how
                        to apply it consistently using inline styles.
                    </p>
                    <ul className="list-none p-0 m-0 text-sm space-y-1">
                        <li>
                            <Link href="/colour-and-branding/colours-in-canvas">
                                Colours in Canvas
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="border border-[#e5e7eb] rounded-lg p-5">
                    <h2 className="mt-0 mb-1 text-base">Layout and Spacing</h2>
                    <p className="mt-0 mb-3 text-sm text-[#4b5563]">
                        CSS Grid, spacing, and border patterns for building
                        structured multi-column layouts in Canvas pages.
                    </p>
                    <ul className="list-none p-0 m-0 text-sm space-y-1">
                        <li>
                            <Link href="/layout-and-spacing-utilities/grid">
                                Grid
                            </Link>
                        </li>
                        <li>
                            <Link href="/layout-and-spacing-utilities/spacing">
                                Spacing
                            </Link>
                        </li>
                        <li>
                            <Link href="/layout-and-spacing-utilities/borders">
                                Borders
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="border border-[#e5e7eb] rounded-lg p-5">
                    <h2 className="mt-0 mb-1 text-base">Canvas Components</h2>
                    <p className="mt-0 mb-3 text-sm text-[#4b5563]">
                        Legacy Canvas UI components — buttons, alerts, tabs,
                        progress bars, and interactive widgets — with accessible
                        markup examples.
                    </p>
                    <ul className="list-none p-0 m-0 text-sm space-y-1">
                        <li>
                            <Link href="/canvas-components/buttons">
                                Buttons
                            </Link>
                        </li>
                        <li>
                            <Link href="/canvas-components/alerts">Alerts</Link>
                        </li>
                        <li>
                            <Link href="/canvas-components/flash-messages">
                                Flash Messages
                            </Link>
                        </li>
                        <li>
                            <Link href="/canvas-components/tabs">Tabs</Link>
                        </li>
                        <li>
                            <Link href="/canvas-components/popovers-dialogs-and-tooltips">
                                Popovers, Dialogs &amp; Tooltips
                            </Link>
                        </li>
                        <li>
                            <Link href="/canvas-components/progress-and-status-indicators">
                                Progress &amp; Status Indicators
                            </Link>
                        </li>
                        <li>
                            <Link href="/canvas-components/draggable-resizable-and-sortable-content">
                                Draggable, Resizable &amp; Sortable
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="border border-[#e5e7eb] rounded-lg p-5">
                    <h2 className="mt-0 mb-1 text-base">
                        Icons &amp; Accessibility
                    </h2>
                    <p className="mt-0 mb-3 text-sm text-[#4b5563]">
                        Canvas's built-in icon set and the utility classes
                        available for improving accessibility in page content.
                    </p>
                    <ul className="list-none p-0 m-0 text-sm space-y-1">
                        <li>
                            <Link href="/icons-and-accessibility-helpers/accessibility-helpers">
                                Accessibility Helpers
                            </Link>
                        </li>
                        <li>
                            <Link href="/icons-and-accessibility-helpers/icons">
                                Icons
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="border border-[#e5e7eb] rounded-lg p-5">
                    <h2 className="mt-0 mb-1 text-base">Canvas Behaviour</h2>
                    <p className="mt-0 mb-3 text-sm text-[#4b5563]">
                        How Canvas processes HTML in the Rich Content Editor —
                        what it strips, what it modifies, and how to embed
                        external media.
                    </p>
                    <ul className="list-none p-0 m-0 text-sm space-y-1">
                        <li>
                            <Link href="/canvas-behaviour-and-extra-resources/frequently-asked-questions">
                                Frequently Asked Questions
                            </Link>
                        </li>
                        <li>
                            <Link href="/canvas-behaviour-and-extra-resources/what-canvas-removes-and-modifies">
                                What Canvas Removes
                            </Link>
                        </li>
                        <li>
                            <Link href="/canvas-behaviour-and-extra-resources/embedding-external-media-in-canvas">
                                Embedding External Media
                            </Link>
                        </li>
                        <li>
                            <Link href="/canvas-behaviour-and-extra-resources/additional-examples">
                                Additional Examples
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
}
