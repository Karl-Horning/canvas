/**
 * @fileoverview Automated accessibility tests using axe-core.
 *
 * Scans every page for WCAG violations detectable by axe. Note that axe
 * catches roughly 30–40% of accessibility issues; these tests complement
 * but do not replace manual accessibility review.
 */

import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { routes } from "../lib/nav";

// Violations inside third-party iframes that cannot be fixed by the page author.
const YOUTUBE_IFRAME = `iframe[title="Canvas 101 — YouTube video"]`;

for (const route of routes) {
    test(`${route} — no automatically detectable accessibility violations`, async ({
        page,
    }) => {
        await page.goto(route);

        let builder = new AxeBuilder({ page });

        if (route === "/embedding-external-media-in-canvas") {
            builder = builder.exclude(YOUTUBE_IFRAME);
        }

        const results = await builder.analyze();
        expect(results.violations).toEqual([]);
    });
}
