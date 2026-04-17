/**
 * @fileoverview Filterable icon grid component for the Canvas icon reference.
 */

"use client";

import { useState, useMemo } from "react";

/**
 * Props for the IconGrid component.
 */
interface IconGridProps {
    /** List of icon name suffixes (without the `icon-` prefix). */
    names: string[];
}

/**
 * Renders a filterable grid of Canvas icon classes.
 *
 * Each card displays the rendered icon glyph, its CSS class name, and a button
 * that copies the class name to the clipboard. The filter input performs a
 * case-insensitive substring search across all icon names.
 *
 * @param props - The component props.
 * @param props.names - Icon name suffixes to display (e.g. `"add"`, `"info"`).
 *     The component prepends `icon-` when rendering and copying.
 * @return The filterable icon grid.
 */
export default function IconGrid({ names }: IconGridProps) {
    const [filter, setFilter] = useState("");
    const [copied, setCopied] = useState<string | null>(null);

    const filtered = useMemo(() => {
        const q = filter.toLowerCase().trim();
        if (!q) return names;
        return names.filter((n) => n.toLowerCase().includes(q));
    }, [filter, names]);

    /**
     * Copies the full icon class name to the clipboard and shows brief
     * confirmation feedback on the triggering button.
     *
     * @param name - The icon name suffix (without `icon-` prefix).
     * @return A promise that resolves once the text is written to the clipboard.
     */
    const handleCopy = async (name: string): Promise<void> => {
        await navigator.clipboard.writeText(`icon-${name}`);
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div>
            <div className="mb-3 flex gap-3 items-center">
                <input
                    type="search"
                    placeholder="Filter icons…"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="flex-1 px-3 py-2 border border-[#ccc] dark:border-[#4b5563] rounded-md bg-white dark:bg-[#1f2937] text-[0.9rem]"
                    aria-label="Filter icons by name"
                />
                <span className="text-sm text-[#666] dark:text-[#9ca3af] whitespace-nowrap">
                    {filtered.length} icon{filtered.length !== 1 ? "s" : ""}
                </span>
            </div>

            {filtered.length === 0 ? (
                <p className="text-[#666] dark:text-[#9ca3af]">
                    No icons match &ldquo;{filter}&rdquo;.
                </p>
            ) : (
                <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(8rem,1fr))]">
                    {filtered.map((name) => (
                        <div
                            key={name}
                            className="flex flex-col items-center gap-1 p-3 bg-[#f9f9f9] dark:bg-[#1f2937] rounded-md text-center"
                        >
                            <i
                                className={`icon-${name}`}
                                aria-hidden="true"
                                style={{ fontSize: "1.5rem", lineHeight: 1 }}
                            />
                            <code className="text-[0.7rem] break-all leading-tight mb-1">{`icon-${name}`}</code>
                            <button
                                type="button"
                                onClick={() => handleCopy(name)}
                                aria-label={`Copy icon-${name}`}
                                className="mt-auto px-2 py-0.5 text-[0.7rem] border border-[#ccc] dark:border-[#4b5563] rounded bg-white dark:bg-[#374151] dark:text-[#e5e7eb] hover:bg-[#f0f0f0] dark:hover:bg-[#4b5563] cursor-pointer"
                            >
                                {copied === name ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
