/**
 * @fileoverview Single source of truth for site navigation structure and routes.
 */

/** A standalone nav entry rendered above the grouped sections. */
export interface StandaloneItem {
    type: "standalone";
    href: string;
    label: string;
    /** Utility pages (e.g. search) are excluded from prev/next and footer sitemap. */
    utility?: boolean;
}

/** A grouped nav section containing one or more child links. */
export interface GroupItem {
    type: "group";
    label: string;
    items: { href: string; label: string }[];
}

/** All site sections in display order, grouped to reflect document structure. */
export const navStructure: (StandaloneItem | GroupItem)[] = [
    {
        type: "standalone",
        href: "/search",
        label: "Search",
        utility: true,
    },
    {
        type: "group",
        label: "Canvas Content Styling Guide",
        items: [{ href: "/introduction", label: "Introduction" }],
    },
    {
        type: "group",
        label: "HTML Basics in Canvas",
        items: [
            { href: "/typography", label: "Typography" },
            { href: "/lists", label: "Lists" },
            { href: "/tables", label: "Tables" },
        ],
    },
    {
        type: "group",
        label: "Colour and Branding",
        items: [{ href: "/colours-in-canvas", label: "Colours in Canvas" }],
    },
    {
        type: "group",
        label: "Layout and Spacing",
        items: [
            { href: "/grid", label: "Grid" },
            { href: "/spacing", label: "Spacing" },
            { href: "/borders", label: "Borders" },
        ],
    },
    {
        type: "group",
        label: "Canvas Components",
        items: [
            { href: "/buttons", label: "Buttons" },
            { href: "/alerts", label: "Alerts" },
            { href: "/flash-messages", label: "Flash Messages" },
            { href: "/tabs", label: "Tabs" },
            {
                href: "/popovers-dialogs-and-tooltips",
                label: "Popovers, Dialogs, and Tooltips",
            },
            {
                href: "/progress-and-status-indicators",
                label: "Progress and Status Indicators",
            },
            {
                href: "/draggable-resizable-and-sortable-content",
                label: "Draggable, Resizable, and Sortable Content",
            },
        ],
    },
    {
        type: "group",
        label: "Icons and Accessibility",
        items: [
            {
                href: "/accessibility-helpers",
                label: "Accessibility Helpers",
            },
            { href: "/legacy-icons", label: "Legacy Icons" },
            {
                href: "/full-legacy-icons-reference",
                label: "Full Legacy Icons Reference",
            },
        ],
    },
    {
        type: "group",
        label: "Canvas Behaviour",
        items: [
            {
                href: "/frequently-asked-questions",
                label: "Frequently Asked Questions",
            },
            {
                href: "/what-canvas-removes-and-modifies",
                label: "What Canvas Removes and Modifies",
            },
            {
                href: "/embedding-external-media-in-canvas",
                label: "Embedding External Media",
            },
            { href: "/additional-examples", label: "Additional Examples" },
        ],
    },
];

/** Flat list of all routes, including the home page. Used by tests. */
export const routes = [
    "/",
    ...navStructure.flatMap((item) =>
        item.type === "standalone"
            ? [item.href]
            : item.items.map((i) => i.href),
    ),
];
