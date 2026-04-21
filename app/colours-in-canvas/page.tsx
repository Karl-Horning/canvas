import CodeBlock from "@/components/CodeBlock";
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
                Canvas&apos; Rich Content Editor gives you access to a range of
                colours for text and backgrounds. Not all of them are safe to
                use for body text — some only have enough contrast for headings
                or large UI elements, and others should be reserved for
                backgrounds, borders, and highlights only.
            </p>

            <p>
                The tables below summarise which colours are suitable for use as{" "}
                <strong>text on a white background</strong> in Canvas content.
                They are grouped by their WCAG contrast rating when used as text
                on white:
            </p>

            <ul>
                <li>
                    <strong>AAA / AA</strong> — suitable for body text on white.
                </li>
                <li>
                    <strong>AA</strong> — suitable for large text, headings or
                    UI elements on white.
                </li>
                <li>
                    <strong>Accent / background only</strong> — not recommended
                    for text on white; best used for backgrounds, borders or
                    highlights.
                </li>
            </ul>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI — Understanding SC 1.4.6: Contrast (Enhanced /
                        AAA)
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI — Understanding SC 1.4.3: Contrast (Minimum /
                        AA)
                    </a>
                </li>
                <li>
                    <a
                        href="https://webaim.org/resources/contrastchecker/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WebAIM — Contrast Checker
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — CSS colour values
                    </a>
                </li>
            </ul>

            <h2>AAA-compliant colour combinations</h2>

            <p>
                The combinations below all meet WCAG AAA contrast (7:1 ratio or
                higher). Use these when you want the strongest possible
                accessibility guarantee — for example in body paragraphs,
                callout boxes, and alert messages.
            </p>

            <h3>Dark text on light or coloured backgrounds</h3>

            <div className="overflow-x-auto mb-4" tabIndex={0}>
                <table className="border-collapse w-full text-[0.95rem]">
                    <thead>
                        <tr className="bg-[#f0f0f0] dark:bg-[#374151]">
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Text colour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Background colour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Example
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Ratio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Black <code>#000000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffffff] text-[#000000] border border-[#ccc]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">21:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Dark <code>#232333</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffffff] text-[#232333] border border-[#ccc]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">15.4:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Navy <code>#000080</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffffff] text-[#000080] border border-[#ccc]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">16.1:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Medium Blue <code>#0000cd</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffffff] text-[#0000cd] border border-[#ccc]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">11.2:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Indigo <code>#4b0082</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffffff] text-[#4b0082] border border-[#ccc]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">13:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Dark Green <code>#006400</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffffff] text-[#006400] border border-[#ccc]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">7.4:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Saddle Brown <code>#8b4513</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffffff] text-[#8b4513] border border-[#ccc]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">7.1:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Black <code>#000000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Yellow <code>#fff200</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#fff200] text-[#000000]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">18:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Black <code>#000000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Pale Green <code>#98fb98</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#98fb98] text-[#000000]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">16.6:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Black <code>#000000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Pale Turquoise <code>#afeeee</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#afeeee] text-[#000000]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">16.4:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Black <code>#000000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Lavender <code>#e6e6fa</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#e6e6fa] text-[#000000]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">16.8:1</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Light text on dark backgrounds</h3>

            <div className="overflow-x-auto mb-4" tabIndex={0}>
                <table className="border-collapse w-full text-[0.95rem]">
                    <thead>
                        <tr className="bg-[#f0f0f0] dark:bg-[#374151]">
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Text colour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Background colour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Example
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Ratio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Black <code>#000000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#000000] text-[#ffffff]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">21:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Dark <code>#232333</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#232333] text-[#ffffff]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">15.4:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Navy <code>#000080</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#000080] text-[#ffffff]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">16.1:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Medium Blue <code>#0000cd</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#0000cd] text-[#ffffff]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">11.2:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Indigo <code>#4b0082</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#4b0082] text-[#ffffff]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">13:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Dark Green <code>#006400</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#006400] text-[#ffffff]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">7.4:1</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Saddle Brown <code>#8b4513</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#8b4513] text-[#ffffff]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">7.1:1</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Pink <code>#ffd6e5</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Medium Blue <code>#0000cd</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#0000cd] text-[#ffd6e5]"
                                >
                                    Sample text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">8.5:1</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Colours suitable for body text on white (AAA / AA)</h2>

            <div className="overflow-x-auto mb-4" tabIndex={0}>
                <table className="border-collapse w-full text-[0.95rem]">
                    <thead>
                        <tr className="bg-[#f0f0f0] dark:bg-[#374151]">
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Colour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Hex
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Example
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Rating (on white)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Black</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#000000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#000000] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Dark</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#232333</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#232333] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Navy</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#000080</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#000080] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Medium Blue
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#0000cd</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#0000cd] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Saddle Brown
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#8b4513</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#8b4513] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Teal</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#008080</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#008080] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Medium Violet Red
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#c71585</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#c71585] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Indigo</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#4b0082</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#4b0082] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Crimson
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#dc143c</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#dc143c] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Dark Green
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#006400</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#006400] text-white"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                AAA / AA
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Colours for large text, headings or UI (AA on white)</h2>

            <p>
                The colours below meet AA contrast for text on white, but are
                best reserved for larger text (such as headings) or for
                interface elements like buttons and labels, rather than long
                paragraphs.
            </p>

            <div className="overflow-x-auto mb-4" tabIndex={0}>
                <table className="border-collapse w-full text-[0.95rem]">
                    <thead>
                        <tr className="bg-[#f0f0f0] dark:bg-[#374151]">
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Colour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Hex
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Example
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Rating (on white)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Slate Grey
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#708090</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#708090] text-white text-xl font-bold"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">AA</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Medium Blue Slate
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#7b68ee</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#7b68ee] text-white text-xl font-bold"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">AA</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Red</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ff0000</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ff0000] text-white text-xl font-bold"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">AA</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Orange Red
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ff4500</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ff4500] text-white text-xl font-bold"
                                >
                                    Text
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">AA</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Accent and background colours (not for text on white)</h2>

            <p>
                The colours below are generally not suitable for body text on a
                white background. They can be used as background fills, borders,
                highlights, or within graphics, provided the contrast with any
                overlaid text is checked.
            </p>

            <div className="overflow-x-auto mb-4" tabIndex={0}>
                <table className="border-collapse w-full text-[0.95rem]">
                    <thead>
                        <tr className="bg-[#f0f0f0] dark:bg-[#374151]">
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Colour
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Hex
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Example
                            </th>
                            <th
                                scope="col"
                                className="border border-[#ccc] p-2 text-left"
                            >
                                Notes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">White</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ffffff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 border border-[#ccc] bg-white dark:bg-[#1f2937] text-black dark:text-white"
                                >
                                    Background
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Use as a background, not as text on white.
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                White Smoke
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#f5f5f5</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 border border-[#ccc] bg-[#f5f5f5] dark:bg-[#1f2937] text-black dark:text-white"
                                >
                                    Background
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Use as a light background panel.
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Deep Sky Blue
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#00bfff</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#00bfff] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Accent or background; not recommended for text
                                on white.
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Yellow</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ffff00</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffff00] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Highlight or accent only; very low contrast as
                                text.
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Khaki</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#f0e68c</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#f0e68c] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Use as a soft background or accent.
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Turquoise
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#40e0d0</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#40e0d0] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Accent colour; check contrast if used behind
                                text.
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Pale Turquoise
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#afeeee</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#afeeee] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Light background only; avoid for text.
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Violet</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ee82ee</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ee82ee] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Accent colour; not for body text on white.
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Light Pink
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ffb6c1</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffb6c1] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Light background only.
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Lavender
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#e6e6fa</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#e6e6fa] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Subtle background panel or highlight.
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Salmon</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#fa8072</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#fa8072] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Accent; avoid as text on white.
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Dark Orange
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ff8c00</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ff8c00] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Accent colour; check contrast when used.
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">Orange</td>
                            <td className="border border-[#ccc] p-2">
                                <code>#ffa500</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#ffa500] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Accent only; not recommended for text on white.
                            </td>
                        </tr>
                        <tr className="bg-[#f9f9f9] dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Spring Green
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#00ff7f</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#00ff7f] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Highlight or accent; check contrast carefully.
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-[#1f2937]">
                            <td className="border border-[#ccc] p-2">
                                Pale Green
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <code>#98fb98</code>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                <span
                                    aria-hidden="true"
                                    className="inline-block px-2 py-1 bg-[#98fb98] text-black"
                                >
                                    Swatch
                                </span>
                            </td>
                            <td className="border border-[#ccc] p-2">
                                Soft background only; avoid for text on white.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Using colours in Canvas content</h2>

            <p>
                When applying colours in Canvas, use them through inline styles
                on text or container elements. For example:
            </p>

            <CodeBlock>{`<p style="color: #0000cd;">
  This paragraph uses Medium Blue as text on a white background.
</p>`}</CodeBlock>

            <CodeBlock>{`<div style="background-color: #f5f5f5; padding: 1rem;">
  <p>This panel uses White Smoke as a light background.</p>
</div>`}</CodeBlock>

            <p>
                For combinations not shown here, use the{" "}
                <a
                    href="https://webaim.org/resources/contrastchecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WebAIM Contrast Checker
                </a>{" "}
                to verify that your chosen colours meet at least AA contrast
                (4.5:1 for normal text, 3:1 for large text).
            </p>
        </article>
    );
}
