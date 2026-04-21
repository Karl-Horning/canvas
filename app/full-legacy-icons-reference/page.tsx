/**
 * @fileoverview Full icon reference page listing all available Canvas icon
 * classes in a filterable, copyable grid.
 */

import fs from "fs";
import path from "path";
import IconGrid from "@/components/IconGrid";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { generatePageMetadata, generatePageJsonLd } from "@/lib/siteMetadata";
import { meta } from "./meta";

export const metadata = generatePageMetadata(meta);

/**
 * Reads the Instructure Icons Line SCSS map at build time and extracts all
 * icon name suffixes.
 *
 * Only glyph entries (unicode values such as `"\EA06"`) are extracted. The
 * separate `$icons-line-bidirectional` map, which uses `"true"` values for RTL
 * transform flags, is intentionally excluded to avoid duplicate names.
 *
 * @return An array of icon name suffixes (e.g. `"add"`, `"info"`).
 */
function parseIconNames(): string[] {
    const scssPath = path.join(
        process.cwd(),
        "public/fonts/instructure_icons/Line/InstructureIcons-Line_icon-map.scss",
    );
    const scss = fs.readFileSync(scssPath, "utf8");
    // Match only glyph entries (unicode values), not the RTL bidirectional map
    return [...scss.matchAll(/^\s+([\w-]+):\s+"\\[A-F0-9]+"/gm)].map(
        (m) => m[1],
    );
}

/**
 * Renders the full icon reference page.
 *
 * Icon names are parsed from the SCSS map at build time and passed to the
 * client-side {@link IconGrid} component for filtering and copy interactions.
 *
 * @return The full icon reference article.
 */
export default function page() {
    const names = parseIconNames();

    return (
        <article>
            <JsonLd data={generatePageJsonLd(meta)} />
            <PageHeader
                title={meta.title}
                date={meta.date}
                readingTime={meta.readingTime}
            />

            <p>
                The grid below shows all {names.length} icon classes available
                in Canvas. Use the filter to search by name, then click{" "}
                <strong>Copy</strong> to copy the class name ready to paste into
                your HTML.
            </p>

            <p>
                Use the class on an <code>&lt;i&gt;</code> element with{" "}
                <code>aria-hidden=&quot;true&quot;</code> for decorative icons,
                or with <code>role=&quot;img&quot;</code> and{" "}
                <code>aria-label</code> when the icon carries meaning. See the{" "}
                <a href="/legacy-icons">Legacy Icons page</a>{" "}
                for usage examples.
            </p>

            <IconGrid names={names} />
        </article>
    );
}
