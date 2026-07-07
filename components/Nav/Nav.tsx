/**
 * @fileoverview Sidebar navigation component for the docs.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navStructure } from "@/lib/nav";
import styles from "./Nav.module.css";

/**
 * Renders the portfolio sidebar navigation with grouped section links.
 *
 * Highlights the active link using aria-current="page", derived from the
 * current pathname rather than route params, to avoid stale state on
 * client-side navigation.
 *
 * @returns The rendered nav element.
 */
export default function Nav() {
    const pathname = usePathname();

    return (
        <nav aria-label="Portfolio sections">
            <div id="nav-list" className={styles.navList}>
                {navStructure.map((item) => {
                    if (item.type === "standalone") {
                        return (
                            <div
                                key={item.href}
                                className={styles.navStandalone}
                            >
                                <Link
                                    href={item.href}
                                    className={styles.navItem}
                                    aria-current={
                                        pathname === item.href
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {item.label}
                                </Link>
                            </div>
                        );
                    }

                    return (
                        <div key={item.label} className={styles.navGroup}>
                            <p className={styles.navGroupLabel}>
                                {item.label}
                            </p>
                            {item.items.map((subItem) => (
                                <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className={styles.navItem}
                                    aria-current={
                                        pathname === subItem.href
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
