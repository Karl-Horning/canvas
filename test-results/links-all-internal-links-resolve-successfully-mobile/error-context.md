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
  - button "Open navigation" [ref=e3] [cursor=pointer]:
    - img [ref=e4]
  - generic [ref=e6]:
    - complementary [ref=e7]:
      - link "Karl Horning — CMALT Portfolio, home" [ref=e9] [cursor=pointer]:
        - /url: /
        - img [ref=e10]
      - navigation "Portfolio sections" [ref=e16]:
        - generic [ref=e17]:
          - link "Search" [ref=e19] [cursor=pointer]:
            - /url: /search
          - generic [ref=e20]:
            - paragraph [ref=e21]: Canvas Content Styling Guide
            - link "Introduction" [ref=e22] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e23]:
            - paragraph [ref=e24]: HTML Basics in Canvas
            - link "Typography" [ref=e25] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e26] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e27] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e28]:
            - paragraph [ref=e29]: Colour and Branding
            - link "Colours in Canvas" [ref=e30] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e31]:
            - paragraph [ref=e32]: Layout and Spacing
            - link "Grid" [ref=e33] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e34] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e35] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e36]:
            - paragraph [ref=e37]: Canvas Components
            - link "Buttons" [ref=e38] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e39] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e40] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e41] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e42] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e43] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e44] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e45]:
            - paragraph [ref=e46]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e47] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e48] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e49] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e50]:
            - paragraph [ref=e51]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e52] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e53] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e54] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e55] [cursor=pointer]:
              - /url: /additional-examples
    - button "Back to top":
      - img
    - main [ref=e56]:
      - generic [ref=e57]:
        - article [ref=e58]:
          - generic [ref=e59]:
            - heading "Introduction" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 4 min read
          - paragraph [ref=e65]: This guide collects examples of HTML and CSS patterns that can be used to style content created with the Canvas Rich Content Editor (RCE). All examples have been tested in Canvas and are intended for everyday use when building pages, assignments, and other course content.
          - paragraph [ref=e66]:
            - text: The patterns shown here are based on Canvas' legacy style guide, available at
            - link "canvas.instructure.com/styleguide" [ref=e67] [cursor=pointer]:
              - /url: https://canvas.instructure.com/styleguide
            - text: ", with additional adjustments where needed to ensure that they work reliably in this Canvas instance."
          - heading "About these styles" [level=2] [ref=e68]
          - paragraph [ref=e69]:
            - text: The Canvas style guide describes HTML and CSS components that were developed for use in Canvas prior to 2015. The
            - strong [ref=e70]: Canvas-provided CSS classes and JavaScript behaviours
            - text: documented there are no longer actively maintained by Instructure, so their behaviour or appearance may change in future updates to Canvas.
          - paragraph [ref=e71]:
            - text: In this guide, those legacy classes are combined with
            - strong [ref=e72]: modern HTML semantics, inline styles, and current accessibility practices
            - text: (for example, appropriate use of headings, ARIA attributes, and colour contrast). Inline styles are often the most reliable way to apply consistent visual styling in Canvas content and are recommended when used alongside accessible HTML.
          - paragraph [ref=e73]:
            - text: "You can therefore think of these examples as:"
            - strong [ref=e74]: modern HTML and accessibility patterns layered on top of Canvas' legacy CSS utilities
            - text: for authors working inside Canvas, rather than as a design system for new applications.
          - heading "Scope of this guide" [level=2] [ref=e75]
          - paragraph [ref=e76]:
            - text: This guide focuses on patterns that work
            - strong [ref=e77]: reliably
            - text: in the Canvas RCE after saving. It is not an exhaustive list of everything Canvas allows. Many legacy classes, JavaScript behaviours, and older components are intentionally excluded if they are unstable, inaccessible, or inconsistent across browsers. Every example here has been curated for clarity, reliability, and practical use in course content.
          - paragraph [ref=e78]: Because Canvas rewrites HTML when you save or switch between the Visual and HTML editors, examples in this guide use simple, widely supported HTML and inline CSS that survive Canvas' cleaning process. For complex patterns, it is often easiest to paste the code directly into the HTML editor.
          - heading "When to use these patterns" [level=2] [ref=e79]
          - paragraph [ref=e80]: "Use the patterns in this guide when you are:"
          - list [ref=e81]:
            - listitem [ref=e82]: Creating or updating Canvas content in the RCE.
            - listitem [ref=e83]: Structuring information with headings, lists, and tables.
            - listitem [ref=e84]: Applying layout, spacing, and borders to make content easier to read.
            - listitem [ref=e85]: Adding Canvas-styled components such as buttons, alerts, flash messages, and tabs.
            - listitem [ref=e86]: Including icons or accessibility helpers to support users.
          - paragraph [ref=e87]:
            - strong [ref=e88]: Do not
            - text: use these Canvas-specific classes as the basis for new standalone applications or LTI tools. For those, use a modern design system instead.
          - heading "LTI tools and Instructure UI" [level=2] [ref=e89]
          - paragraph [ref=e90]:
            - text: If you are building an LTI tool (for example, with React.js) and want it to visually integrate with Canvas, you should use
            - link "Instructure UI" [ref=e91] [cursor=pointer]:
              - /url: https://instructure.design
            - text: rather than the legacy Canvas CSS documented here. Instructure UI is the actively maintained design system for Canvas and related products.
          - heading "Using colour for headings" [level=2] [ref=e92]
          - paragraph [ref=e93]: Combining background colour with text colour can create distinct visual moods while maintaining accessible contrast. The examples below show three ready-to-use combinations for headings in Canvas. They are intended for short headings or banners rather than long paragraphs of text.
          - heading "Mood 1 — Calm, scientific, trustworthy" [level=3] [ref=e94]
          - paragraph [ref=e95]: A deep blue background paired with light text creates a cool, calm, analytical feel. This combination is suitable for high-level section headings.
          - heading "Example heading" [level=2] [ref=e96]
          - generic [ref=e97]:
            - code [ref=e101]:
              - generic [ref=e102]: "<h2 style=\"background: #0000cd; color: #ffd6e5; padding: 1rem;\">"
              - generic [ref=e103]: Example heading
              - generic [ref=e104]: </h2>
            - button "Copy code to clipboard" [ref=e105] [cursor=pointer]: Copy
          - heading "Mood 2 — Bold, forward-looking" [level=3] [ref=e106]
          - paragraph [ref=e107]: A bright yellow background with slate-like grey text communicates energy and confidence. Use this for key announcements or stand-out sections.
          - heading "Example heading" [level=2] [ref=e108]
          - generic [ref=e109]:
            - code [ref=e113]:
              - generic [ref=e114]: "<h2 style=\"background: #fff200; color: #4b4f57; padding: 1rem;\">"
              - generic [ref=e115]: Example heading
              - generic [ref=e116]: </h2>
            - button "Copy code to clipboard" [ref=e117] [cursor=pointer]: Copy
          - heading "Mood 3 — Fresh, modern" [level=3] [ref=e118]
          - paragraph [ref=e119]: A fresh green background with a dark navy text tone gives a contemporary, optimistic feel while preserving good contrast for headings.
          - heading "Example heading" [level=2] [ref=e120]
          - generic [ref=e121]:
            - code [ref=e125]:
              - generic [ref=e126]: "<h2 style=\"background: #00e67a; color: #111322; padding: 1rem;\">"
              - generic [ref=e127]: Example heading
              - generic [ref=e128]: </h2>
            - button "Copy code to clipboard" [ref=e129] [cursor=pointer]: Copy
          - heading "Optional variations" [level=3] [ref=e130]
          - paragraph [ref=e131]: "You can adapt the same colour combinations for smaller headings or simple banner blocks by changing the heading level:"
          - generic [ref=e132]:
            - code [ref=e136]:
              - generic [ref=e137]: "<h3 style=\"background: #0000cd; color: #ffd6e5; padding: 0.75rem;\">"
              - generic [ref=e138]: Subsection heading
              - generic [ref=e139]: </h3>
            - button "Copy code to clipboard" [ref=e140] [cursor=pointer]: Copy
          - paragraph [ref=e141]: "Or wrapping the text in a container:"
          - generic [ref=e142]:
            - code [ref=e146]:
              - generic [ref=e147]: "<div style=\"background: #fff200; color: #4b4f57; padding: 1.25rem; margin: 1rem 0;\">"
              - generic [ref=e148]: "<h2 style=\"margin: 0;\">Module introduction</h2>"
              - generic [ref=e149]: </div>
            - button "Copy code to clipboard" [ref=e150] [cursor=pointer]: Copy
          - paragraph [ref=e151]: When creating your own colour combinations, always check contrast with a WCAG contrast checker and avoid using low-contrast pairings for text.
          - paragraph [ref=e152]:
            - text: For more detail on which colours are suitable for text and background combinations, see the
            - link "Colours in Canvas" [ref=e153] [cursor=pointer]:
              - /url: /colour-and-branding/colours-in-canvas
            - text: page in this guide.
          - heading "How to use the examples" [level=2] [ref=e154]
          - paragraph [ref=e155]: "Each page follows a consistent pattern: a live example shown as it appears in Canvas, followed by a code block containing the HTML needed to recreate it. You can copy the code into the RCE (using the HTML view) and adapt it for your own content."
          - paragraph [ref=e156]:
            - text: Where possible, examples also include brief notes about accessibility, such as the use of
            - code [ref=e157]: screenreader-only
            - text: ","
            - code [ref=e158]: aria-hidden="true"
            - text: ", and appropriate heading levels."
        - navigation "Page navigation" [ref=e159]:
          - link "Next → Typography" [ref=e161] [cursor=pointer]:
            - /url: /typography
            - generic [ref=e162]: Next →
            - generic [ref=e163]: Typography
      - generic "Site footer" [ref=e164]:
        - navigation "Site map" [ref=e165]:
          - generic [ref=e166]:
            - paragraph [ref=e167]: Canvas Content Styling Guide
            - link "Introduction" [ref=e168] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e169]:
            - paragraph [ref=e170]: HTML Basics in Canvas
            - link "Typography" [ref=e171] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e172] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e173] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e174]:
            - paragraph [ref=e175]: Colour and Branding
            - link "Colours in Canvas" [ref=e176] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e177]:
            - paragraph [ref=e178]: Layout and Spacing
            - link "Grid" [ref=e179] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e180] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e181] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e182]:
            - paragraph [ref=e183]: Canvas Components
            - link "Buttons" [ref=e184] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e185] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e186] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e187] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e188] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e189] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e190] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e191]:
            - paragraph [ref=e192]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e193] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e194] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e195] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e196]:
            - paragraph [ref=e197]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e198] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e199] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e200] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e201] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e202]:
          - paragraph [ref=e203]: © 2025–2026 Karl Horning
          - generic [ref=e204]:
            - link "Karl Horning on GitHub" [ref=e205] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e206]
            - link "Karl Horning on LinkedIn" [ref=e208] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e209]
            - link "Karl Horning's personal portfolio" [ref=e211] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e212]
  - button "Open Next.js Dev Tools" [ref=e221] [cursor=pointer]:
    - img [ref=e222]
  - alert [ref=e225]
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