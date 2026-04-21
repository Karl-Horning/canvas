# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: links.spec.ts >> all internal links resolve successfully
- Location: tests/links.spec.ts:9:5

# Error details

```
Error: Internal link /colour-and-branding/colours-in-canvas (found on /introduction) returned 404

expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e3]:
    - complementary [ref=e4]:
      - link "Karl Horning — CMALT Portfolio, home" [ref=e6] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
      - navigation "Portfolio sections" [ref=e13]:
        - generic [ref=e14]:
          - link "Search" [ref=e16] [cursor=pointer]:
            - /url: /search
          - generic [ref=e17]:
            - paragraph [ref=e18]: Canvas Content Styling Guide
            - link "Introduction" [ref=e19] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e20]:
            - paragraph [ref=e21]: HTML Basics in Canvas
            - link "Typography" [ref=e22] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e23] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e24] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e25]:
            - paragraph [ref=e26]: Colour and Branding
            - link "Colours in Canvas" [ref=e27] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e28]:
            - paragraph [ref=e29]: Layout and Spacing
            - link "Grid" [ref=e30] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e31] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e32] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e33]:
            - paragraph [ref=e34]: Canvas Components
            - link "Buttons" [ref=e35] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e36] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e37] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e38] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e39] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e40] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e41] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e42]:
            - paragraph [ref=e43]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e44] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e45] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e46] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e47]:
            - paragraph [ref=e48]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e49] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e50] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e51] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e52] [cursor=pointer]:
              - /url: /additional-examples
    - button "Back to top":
      - img
    - main [ref=e53]:
      - generic [ref=e54]:
        - article [ref=e55]:
          - generic [ref=e56]:
            - heading "Introduction" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 4 min read
          - paragraph [ref=e62]: This guide collects examples of HTML and CSS patterns that can be used to style content created with the Canvas Rich Content Editor (RCE). All examples have been tested in Canvas and are intended for everyday use when building pages, assignments, and other course content.
          - paragraph [ref=e63]:
            - text: The patterns shown here are based on Canvas' legacy style guide, available at
            - link "canvas.instructure.com/styleguide" [ref=e64] [cursor=pointer]:
              - /url: https://canvas.instructure.com/styleguide
            - text: ", with additional adjustments where needed to ensure that they work reliably in this Canvas instance."
          - heading "About these styles" [level=2] [ref=e65]
          - paragraph [ref=e66]:
            - text: The Canvas style guide describes HTML and CSS components that were developed for use in Canvas prior to 2015. The
            - strong [ref=e67]: Canvas-provided CSS classes and JavaScript behaviours
            - text: documented there are no longer actively maintained by Instructure, so their behaviour or appearance may change in future updates to Canvas.
          - paragraph [ref=e68]:
            - text: In this guide, those legacy classes are combined with
            - strong [ref=e69]: modern HTML semantics, inline styles, and current accessibility practices
            - text: (for example, appropriate use of headings, ARIA attributes, and colour contrast). Inline styles are often the most reliable way to apply consistent visual styling in Canvas content and are recommended when used alongside accessible HTML.
          - paragraph [ref=e70]:
            - text: "You can therefore think of these examples as:"
            - strong [ref=e71]: modern HTML and accessibility patterns layered on top of Canvas' legacy CSS utilities
            - text: for authors working inside Canvas, rather than as a design system for new applications.
          - heading "Scope of this guide" [level=2] [ref=e72]
          - paragraph [ref=e73]:
            - text: This guide focuses on patterns that work
            - strong [ref=e74]: reliably
            - text: in the Canvas RCE after saving. It is not an exhaustive list of everything Canvas allows. Many legacy classes, JavaScript behaviours, and older components are intentionally excluded if they are unstable, inaccessible, or inconsistent across browsers. Every example here has been curated for clarity, reliability, and practical use in course content.
          - paragraph [ref=e75]: Because Canvas rewrites HTML when you save or switch between the Visual and HTML editors, examples in this guide use simple, widely supported HTML and inline CSS that survive Canvas' cleaning process. For complex patterns, it is often easiest to paste the code directly into the HTML editor.
          - heading "When to use these patterns" [level=2] [ref=e76]
          - paragraph [ref=e77]: "Use the patterns in this guide when you are:"
          - list [ref=e78]:
            - listitem [ref=e79]: Creating or updating Canvas content in the RCE.
            - listitem [ref=e80]: Structuring information with headings, lists, and tables.
            - listitem [ref=e81]: Applying layout, spacing, and borders to make content easier to read.
            - listitem [ref=e82]: Adding Canvas-styled components such as buttons, alerts, flash messages, and tabs.
            - listitem [ref=e83]: Including icons or accessibility helpers to support users.
          - paragraph [ref=e84]:
            - strong [ref=e85]: Do not
            - text: use these Canvas-specific classes as the basis for new standalone applications or LTI tools. For those, use a modern design system instead.
          - heading "LTI tools and Instructure UI" [level=2] [ref=e86]
          - paragraph [ref=e87]:
            - text: If you are building an LTI tool (for example, with React.js) and want it to visually integrate with Canvas, you should use
            - link "Instructure UI" [ref=e88] [cursor=pointer]:
              - /url: https://instructure.design
            - text: rather than the legacy Canvas CSS documented here. Instructure UI is the actively maintained design system for Canvas and related products.
          - heading "Using colour for headings" [level=2] [ref=e89]
          - paragraph [ref=e90]: Combining background colour with text colour can create distinct visual moods while maintaining accessible contrast. The examples below show three ready-to-use combinations for headings in Canvas. They are intended for short headings or banners rather than long paragraphs of text.
          - heading "Mood 1 — Calm, scientific, trustworthy" [level=3] [ref=e91]
          - paragraph [ref=e92]: A deep blue background paired with light text creates a cool, calm, analytical feel. This combination is suitable for high-level section headings.
          - heading "Example heading" [level=2] [ref=e93]
          - generic [ref=e94]:
            - code [ref=e98]:
              - generic [ref=e99]: "<h2 style=\"background: #0000cd; color: #ffd6e5; padding: 1rem;\">"
              - generic [ref=e100]: Example heading
              - generic [ref=e101]: </h2>
            - button "Copy code to clipboard" [ref=e102] [cursor=pointer]: Copy
          - heading "Mood 2 — Bold, forward-looking" [level=3] [ref=e103]
          - paragraph [ref=e104]: A bright yellow background with slate-like grey text communicates energy and confidence. Use this for key announcements or stand-out sections.
          - heading "Example heading" [level=2] [ref=e105]
          - generic [ref=e106]:
            - code [ref=e110]:
              - generic [ref=e111]: "<h2 style=\"background: #fff200; color: #4b4f57; padding: 1rem;\">"
              - generic [ref=e112]: Example heading
              - generic [ref=e113]: </h2>
            - button "Copy code to clipboard" [ref=e114] [cursor=pointer]: Copy
          - heading "Mood 3 — Fresh, modern" [level=3] [ref=e115]
          - paragraph [ref=e116]: A fresh green background with a dark navy text tone gives a contemporary, optimistic feel while preserving good contrast for headings.
          - heading "Example heading" [level=2] [ref=e117]
          - generic [ref=e118]:
            - code [ref=e122]:
              - generic [ref=e123]: "<h2 style=\"background: #00e67a; color: #111322; padding: 1rem;\">"
              - generic [ref=e124]: Example heading
              - generic [ref=e125]: </h2>
            - button "Copy code to clipboard" [ref=e126] [cursor=pointer]: Copy
          - heading "Optional variations" [level=3] [ref=e127]
          - paragraph [ref=e128]: "You can adapt the same colour combinations for smaller headings or simple banner blocks by changing the heading level:"
          - generic [ref=e129]:
            - code [ref=e133]:
              - generic [ref=e134]: "<h3 style=\"background: #0000cd; color: #ffd6e5; padding: 0.75rem;\">"
              - generic [ref=e135]: Subsection heading
              - generic [ref=e136]: </h3>
            - button "Copy code to clipboard" [ref=e137] [cursor=pointer]: Copy
          - paragraph [ref=e138]: "Or wrapping the text in a container:"
          - generic [ref=e139]:
            - code [ref=e143]:
              - generic [ref=e144]: "<div style=\"background: #fff200; color: #4b4f57; padding: 1.25rem; margin: 1rem 0;\">"
              - generic [ref=e145]: "<h2 style=\"margin: 0;\">Module introduction</h2>"
              - generic [ref=e146]: </div>
            - button "Copy code to clipboard" [ref=e147] [cursor=pointer]: Copy
          - paragraph [ref=e148]: When creating your own colour combinations, always check contrast with a WCAG contrast checker and avoid using low-contrast pairings for text.
          - paragraph [ref=e149]:
            - text: For more detail on which colours are suitable for text and background combinations, see the
            - link "Colours in Canvas" [ref=e150] [cursor=pointer]:
              - /url: /colour-and-branding/colours-in-canvas
            - text: page in this guide.
          - heading "How to use the examples" [level=2] [ref=e151]
          - paragraph [ref=e152]: "Each page follows a consistent pattern: a live example shown as it appears in Canvas, followed by a code block containing the HTML needed to recreate it. You can copy the code into the RCE (using the HTML view) and adapt it for your own content."
          - paragraph [ref=e153]:
            - text: Where possible, examples also include brief notes about accessibility, such as the use of
            - code [ref=e154]: screenreader-only
            - text: ","
            - code [ref=e155]: aria-hidden="true"
            - text: ", and appropriate heading levels."
        - navigation "Page navigation" [ref=e156]:
          - link "Next → Typography" [ref=e158] [cursor=pointer]:
            - /url: /typography
            - generic [ref=e159]: Next →
            - generic [ref=e160]: Typography
      - generic "Site footer" [ref=e161]:
        - navigation "Site map" [ref=e162]:
          - generic [ref=e163]:
            - paragraph [ref=e164]: Canvas Content Styling Guide
            - link "Introduction" [ref=e165] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e166]:
            - paragraph [ref=e167]: HTML Basics in Canvas
            - link "Typography" [ref=e168] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e169] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e170] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e171]:
            - paragraph [ref=e172]: Colour and Branding
            - link "Colours in Canvas" [ref=e173] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e174]:
            - paragraph [ref=e175]: Layout and Spacing
            - link "Grid" [ref=e176] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e177] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e178] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e179]:
            - paragraph [ref=e180]: Canvas Components
            - link "Buttons" [ref=e181] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e182] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e183] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e184] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e185] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e186] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e187] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e188]:
            - paragraph [ref=e189]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e190] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e191] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e192] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e193]:
            - paragraph [ref=e194]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e195] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e196] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e197] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e198] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e199]:
          - paragraph [ref=e200]: © 2025–2026 Karl Horning
          - generic [ref=e201]:
            - link "Karl Horning on GitHub" [ref=e202] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e203]
            - link "Karl Horning on LinkedIn" [ref=e205] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e206]
            - link "Karl Horning's personal portfolio" [ref=e208] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e209]
  - button "Open Next.js Dev Tools" [ref=e218] [cursor=pointer]:
    - img [ref=e219]
  - alert [ref=e222]
```

# Test source

```ts
  1  | /**
  2  |  * @fileoverview Verifies that all internal links across the site resolve
  3  |  * without returning a 404 or other error status.
  4  |  */
  5  | 
  6  | import { expect, test } from "@playwright/test";
  7  | import { routes } from "../lib/nav";
  8  | 
  9  | test("all internal links resolve successfully", async ({ page, request }) => {
  10 |     const checked = new Set<string>();
  11 | 
  12 |     for (const route of routes) {
  13 |         await page.goto(route);
  14 | 
  15 |         const hrefs = await page
  16 |             .locator("a[href]")
  17 |             .evaluateAll((anchors) =>
  18 |                 anchors
  19 |                     .map((a) => a.getAttribute("href") ?? "")
  20 |                     .filter((href) => href.startsWith("/")),
  21 |             );
  22 | 
  23 |         for (const href of hrefs) {
  24 |             if (checked.has(href)) continue;
  25 |             checked.add(href);
  26 | 
  27 |             const response = await request.get(href);
  28 |             expect(
  29 |                 response.status(),
  30 |                 `Internal link ${href} (found on ${route}) returned ${response.status()}`,
> 31 |             ).toBe(200);
     |               ^ Error: Internal link /colour-and-branding/colours-in-canvas (found on /introduction) returned 404
  32 |         }
  33 |     }
  34 | });
  35 | 
```