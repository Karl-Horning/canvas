/**
 * @fileoverview Client-side search component powered by Fuse.js.
 */

"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchIndex } from "@/lib/searchIndex";
import styles from "./SearchPage.module.css";

/**
 * Fuse instance initialised once at module level to avoid re-creation on every
 * render. Searches across page titles (higher weight) and descriptions.
 */
const fuse = new Fuse(searchIndex, {
    keys: [
        { name: "title", weight: 3 },
        { name: "keywords", weight: 2 },
        { name: "content", weight: 1 },
        { name: "description", weight: 1 },
    ],
    threshold: 0.3,
});

/**
 * Renders a search input and live results list.
 *
 * Results are derived from a fuzzy search of the site's page index using
 * Fuse.js. No network requests are made — the index is bundled at build time.
 *
 * @returns The rendered search page content.
 */
export default function SearchPage() {
    const [query, setQuery] = useState("");

    const results = useMemo(
        () => (query.length > 1 ? fuse.search(query).map((r) => r.item) : []),
        [query],
    );

    return (
        <div className={styles.searchPage}>
            <div className={styles.searchInputWrapper}>
                <FaSearch className={styles.searchIcon} aria-hidden="true" />
                <input
                    id="search"
                    type="search"
                    className={styles.searchInput}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search pages…"
                    aria-label="Search"
                    autoFocus
                />
            </div>

            {query.length > 1 && (
                <ul className={styles.searchResults} role="list">
                    {results.length > 0 ? (
                        results.map((item) => (
                            <li key={item.slug} className={styles.searchResult}>
                                <Link
                                    href={`/${item.slug}`}
                                    className={styles.searchResultLink}
                                >
                                    <span className={styles.searchResultTitle}>
                                        {item.title}
                                    </span>
                                    <span
                                        className={
                                            styles.searchResultDescription
                                        }
                                    >
                                        {item.description}
                                    </span>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className={styles.searchNoResults}>
                            No results found.
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}
