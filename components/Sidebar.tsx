"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Navigation structure for the Canvas Content Styling Guide.
 *
 * Each entry defines a labelled section and the pages nested beneath it.
 * Sections and items are rendered in the order they appear here.
 */
const nav = [
    {
        section: "Canvas Content Styling Guide",
        items: [
            {
                label: "Introduction",
                href: "/canvas-content-styling-guide/introduction",
            },
        ],
    },
    {
        section: "HTML Basics in Canvas",
        items: [
            { label: "Typography", href: "/html-basics-in-canvas/typography" },
            { label: "Lists", href: "/html-basics-in-canvas/lists" },
            { label: "Tables", href: "/html-basics-in-canvas/tables" },
        ],
    },
    {
        section: "Colour and Branding",
        items: [
            {
                label: "Colours in Canvas",
                href: "/colour-and-branding/colours-in-canvas",
            },
        ],
    },
    {
        section: "Layout and Spacing",
        items: [
            { label: "Grid", href: "/layout-and-spacing-utilities/grid" },
            { label: "Spacing", href: "/layout-and-spacing-utilities/spacing" },
            { label: "Borders", href: "/layout-and-spacing-utilities/borders" },
        ],
    },
    {
        section: "Canvas Components",
        items: [
            { label: "Buttons", href: "/canvas-components/buttons" },
            { label: "Alerts", href: "/canvas-components/alerts" },
            {
                label: "Flash Messages",
                href: "/canvas-components/flash-messages",
            },
            { label: "Tabs", href: "/canvas-components/tabs" },
            {
                label: "Popovers, Dialogs & Tooltips",
                href: "/canvas-components/popovers-dialogs-and-tooltips",
            },
            {
                label: "Progress & Status Indicators",
                href: "/canvas-components/progress-and-status-indicators",
            },
            {
                label: "Draggable, Resizable & Sortable",
                href: "/canvas-components/draggable-resizable-and-sortable-content",
            },
        ],
    },
    {
        section: "Icons & Accessibility",
        items: [
            {
                label: "Accessibility Helpers",
                href: "/icons-and-accessibility-helpers/accessibility-helpers",
            },
            {
                label: "Legacy Icons",
                href: "/icons-and-accessibility-helpers/legacy-icons",
            },
            {
                label: "Full Legacy Icons Reference",
                href: "/icons-and-accessibility-helpers/full-legacy-icons-reference",
            },
        ],
    },
    {
        section: "Canvas Behaviour",
        items: [
            {
                label: "Frequently Asked Questions",
                href: "/canvas-behaviour-and-extra-resources/frequently-asked-questions",
            },
            {
                label: "What Canvas Removes",
                href: "/canvas-behaviour-and-extra-resources/what-canvas-removes-and-modifies",
            },
            {
                label: "Embedding External Media",
                href: "/canvas-behaviour-and-extra-resources/embedding-external-media-in-canvas",
            },
            {
                label: "Additional Examples",
                href: "/canvas-behaviour-and-extra-resources/additional-examples",
            },
        ],
    },
];

/**
 * Site navigation sidebar with active-link highlighting and mobile support.
 *
 * On medium-width screens and above the sidebar is always visible as a sticky
 * column. On smaller screens it is hidden by default and toggled via a
 * hamburger button. Tapping the overlay backdrop or a nav link closes the
 * sidebar on mobile.
 *
 * Active state is determined by comparing `usePathname()` against each item's
 * `href`. The active link receives a left border accent and a tinted background
 * to match the visual style used on instructure.design.
 *
 * @returns The sidebar aside element together with its mobile toggle controls.
 */
export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    /** Closes the sidebar. Called when a nav link is activated on mobile. */
    const close = () => setIsOpen(false);

    return (
        <>
            {/* Hamburger toggle — only rendered on screens narrower than md */}
            <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls="site-sidebar"
                className={`fixed top-3 left-3 z-50 flex flex-col justify-center items-center w-9 h-9 gap-1 rounded border border-[#e5e7eb] bg-white shadow-sm md:hidden dark:bg-[#1f2937] dark:border-[#374151]${isOpen ? " hidden" : ""}`}
                onClick={() => setIsOpen(true)}
            >
                <span className="block w-5 h-0.5 bg-[#374151] dark:bg-[#9ca3af]" />
                <span className="block w-5 h-0.5 bg-[#374151] dark:bg-[#9ca3af]" />
                <span className="block w-5 h-0.5 bg-[#374151] dark:bg-[#9ca3af]" />
            </button>

            {/* Backdrop — dims page content when sidebar is open on mobile */}
            {isOpen && (
                <div
                    aria-hidden="true"
                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                    onClick={close}
                />
            )}

            {/* Sidebar panel */}
            <aside
                id="site-sidebar"
                className={[
                    "w-60 shrink-0 h-screen overflow-y-auto border-r border-[#e5e7eb] bg-white dark:bg-[#1f2937] dark:border-[#374151]",
                    // Mobile: fixed overlay, slides in/out
                    "fixed top-0 left-0 z-40 transition-transform duration-200",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    // Desktop: sticky column, always visible
                    "md:sticky md:translate-x-0",
                ].join(" ")}
            >
                <div className="px-4 py-4 border-b border-[#e5e7eb] flex items-center justify-between dark:border-[#374151]">
                    <Link
                        href="/"
                        className="text-sm font-bold text-[#1f2937] no-underline hover:no-underline hover:text-[#0000cd] dark:text-[#e5e7eb] dark:hover:text-[#93c5fd]"
                        onClick={close}
                    >
                        Canvas Guide
                    </Link>

                    {/* Close button — only visible on mobile */}
                    <button
                        type="button"
                        aria-label="Close navigation menu"
                        className="md:hidden flex items-center justify-center w-7 h-7 rounded text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#111827] dark:text-[#9ca3af] dark:hover:bg-[#374151] dark:hover:text-[#f9fafb]"
                        onClick={close}
                    >
                        <span aria-hidden="true" className="text-lg leading-none">
                            &times;
                        </span>
                    </button>
                </div>

                <nav aria-label="Site navigation">
                    {nav.map(({ section, items }) => (
                        <div key={section} className="mt-5">
                            {/*
                             * Section heading uses #4b5563 (≈7:1 on white) to satisfy
                             * WCAG AA contrast at this small font size.
                             */}
                            <div className="px-4 pb-1 text-[0.7rem] font-semibold uppercase tracking-wider text-[#4b5563] dark:text-[#9ca3af]">
                                {section}
                            </div>
                            <ul className="list-none p-0 m-0">
                                {items.map(({ label, href }) => {
                                    const isActive = pathname === href;
                                    return (
                                        <li key={href} className="m-0">
                                            <Link
                                                href={href}
                                                onClick={close}
                                                className={
                                                    isActive
                                                        ? "flex text-sm py-1.5 px-3.25 border-l-[3px] border-[#0000cd] bg-[#eff6ff] text-[#0000cd] font-medium no-underline dark:border-[#93c5fd] dark:bg-[#172554] dark:text-[#93c5fd]"
                                                        : "flex text-sm py-1.5 px-4 text-[#374151] no-underline hover:bg-[#f3f4f6] hover:text-[#111827] dark:text-[#d1d5db] dark:hover:bg-[#374151] dark:hover:text-[#f9fafb]"
                                                }
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className="h-8" />
            </aside>
        </>
    );
}
