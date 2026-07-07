/**
 * @fileoverview Floating back-to-top button for the docs.
 */

"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.css";

/**
 * Number of pixels the user must scroll down before the button becomes
 * visible. Keeps the button hidden during brief scrolls to reduce accidental
 * taps.
 */
const SCROLL_THRESHOLD = 400;

/**
 * Renders a floating button that scrolls the page back to the top.
 *
 * The button is hidden until the user scrolls past {@link SCROLL_THRESHOLD}
 * pixels, at which point it fades in at the bottom-right of the viewport.
 * Clicking it scrolls smoothly back to the main content anchor, consistent
 * with the skip-to-content link.
 *
 * @returns The rendered button element.
 */
export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const footer = document.getElementById("site-footer");
            const footerVisible =
                footer !== null &&
                footer.getBoundingClientRect().top < window.innerHeight;
            setVisible(window.scrollY > SCROLL_THRESHOLD && !footerVisible);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        document.getElementById("main-content")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${styles.backToTop}${visible ? ` ${styles.visible}` : ""}`}
            aria-label="Back to top"
        >
            <FaArrowUp aria-hidden="true" />
        </button>
    );
}
