import Link from "next/link";

export default function Home() {
    return (
        <article className="max-w-240 p-8">
            <h1 className="text-3xl font-bold mb-6">Canvas</h1>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Canvas content styling guide
            </h2>

            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-content-styling-guide/introduction"
                    >
                        Introduction
                    </Link>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                HTML basics in Canvas
            </h2>
            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/html-basics-in-canvas/typography"
                    >
                        Typography
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/html-basics-in-canvas/lists"
                    >
                        Lists
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/html-basics-in-canvas/tables"
                    >
                        Tables
                    </Link>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Colour and branding
            </h2>

            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/colour-and-branding/colours-in-canvas"
                    >
                        Colours in Canvas
                    </Link>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Layout and spacing utilities
            </h2>

            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/layout-and-spacing-utilities/grid"
                    >
                        Grid
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/layout-and-spacing-utilities/spacing"
                    >
                        Spacing
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/layout-and-spacing-utilities/borders"
                    >
                        Borders
                    </Link>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Canvas components
            </h2>

            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-components/buttons"
                    >
                        Buttons
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-components/alerts"
                    >
                        Alerts
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-components/flash-messages"
                    >
                        Flash messages
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-components/tabs"
                    >
                        Tabs
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-components/popovers-dialogs-and-tooltips"
                    >
                        Popovers, dialogs, and tooltips
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-components/progress-and-status-indicators"
                    >
                        Progress and status indicators
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-components/draggable-resizable-and-sortable-content"
                    >
                        Draggable, resizable, an sortable content
                    </Link>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Icons and accessibility helpers
            </h2>

            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/icons-and-accessibility-helpers/accessibility-helpers"
                    >
                        Accessibility helpers
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/icons-and-accessibility-helpers/icons"
                    >
                        Icons
                    </Link>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Canvas behaviour and extra resources
            </h2>

            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-behaviour-and-extra-resources/frequently-asked-questions"
                    >
                        Frequently Asked Questions
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-behaviour-and-extra-resources/what-canvas-removes-and-modifies"
                    >
                        What Canvas removes and modifies
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-behaviour-and-extra-resources/embedding-external-media-in-canvas"
                    >
                        Embedding external media in Canvas
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[#0000cd] underline hover:no-underline"
                        href="/canvas-behaviour-and-extra-resources/additional-examples"
                    >
                        Additional examples
                    </Link>
                </li>
            </ul>
        </article>
    );
}
