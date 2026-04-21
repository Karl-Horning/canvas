# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /borders — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 35

- Array []
+ Array [
+   Object {
+     "description": "Ensure the order of headings is semantically correct",
+     "help": "Heading levels should only increase by one",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright",
+     "id": "heading-order",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "heading-order",
+             "impact": "moderate",
+             "message": "Heading order invalid",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Heading order invalid",
+         "html": "<h5>Example content box</h5>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "h5",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+ ]
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
            - heading "Borders" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 4 min read
          - paragraph [ref=e62]:
            - text: Canvas provides legacy utility classes for adding borders and rounded corners to elements. These include classes such as
            - code [ref=e63]: border
            - text: ","
            - code [ref=e64]: border-trbl
            - text: ", and"
            - code [ref=e65]: border-round
            - text: . They come from an older Canvas style guide and may change in future, but still work for styling content created in the Rich Content Editor.
          - paragraph [ref=e66]:
            - text: For new content, you can also use standard CSS properties such as
            - code [ref=e67]: border
            - text: and
            - code [ref=e68]: border-radius
            - text: directly in inline styles. The sections below show both approaches.
          - heading "Useful references" [level=2] [ref=e69]
          - list [ref=e70]:
            - listitem [ref=e71]:
              - 'link "MDN: border" [ref=e72] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border
                - text: "MDN:"
                - code [ref=e73]: border
            - listitem [ref=e74]:
              - 'link "MDN: border-radius" [ref=e75] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-radius
                - text: "MDN:"
                - code [ref=e76]: border-radius
          - heading "Content box with border (Canvas legacy classes)" [level=2] [ref=e77]
          - paragraph [ref=e78]:
            - text: This example shows a content box with padding and a border on all sides using
            - code [ref=e79]: content-box pad-box-mini
            - text: and
            - code [ref=e80]: border border-trbl
            - text: . These classes are part of Canvas' legacy CSS.
          - generic [ref=e81]:
            - heading "Example content box" [level=5] [ref=e82]
            - paragraph [ref=e83]:
              - text: This box uses
              - code [ref=e84]: content-box pad-box-mini border border-trbl
              - text: for spacing and a border on all sides.
          - generic [ref=e85]:
            - code [ref=e89]:
              - generic [ref=e90]: <div class="content-box pad-box-mini border border-trbl">
              - generic [ref=e91]: <h5>Example content box</h5>
              - generic [ref=e92]: <p>
              - generic [ref=e93]: This box uses <code>content-box pad-box-mini border border-trbl</code>
              - generic [ref=e94]: for spacing and a border on all sides.
              - generic [ref=e95]: </p>
              - generic [ref=e96]: </div>
            - button "Copy code to clipboard" [ref=e97] [cursor=pointer]: Copy
          - heading "Full border (Canvas legacy classes)" [level=2] [ref=e98]
          - paragraph [ref=e99]:
            - text: Use
            - code [ref=e100]: border border-trbl
            - text: to apply a border to all sides of an element using Canvas' legacy border utilities.
          - generic [ref=e101]:
            - text: Full border using
            - code [ref=e102]: border border-trbl
            - text: .
          - generic [ref=e103]:
            - code [ref=e107]:
              - generic [ref=e108]: <div class="border border-trbl">
              - generic [ref=e109]: Full border using <code>border border-trbl</code>.
              - generic [ref=e110]: </div>
            - button "Copy code to clipboard" [ref=e111] [cursor=pointer]: Copy
          - heading "Partial borders (Canvas legacy classes)" [level=2] [ref=e112]
          - paragraph [ref=e113]:
            - text: Combine
            - code [ref=e114]: border
            - text: with directional classes such as
            - code [ref=e115]: border-rbl
            - text: or
            - code [ref=e116]: border-b
            - text: to apply borders to specific sides only. These helpers are part of the older Canvas style guide.
          - generic [ref=e117]:
            - text: Right, bottom, left border (
            - code [ref=e118]: border border-rbl
            - text: )
          - generic [ref=e119]:
            - text: Top, bottom, left border (
            - code [ref=e120]: border border-tbl
            - text: )
          - generic [ref=e121]:
            - text: Bottom, left border (
            - code [ref=e122]: border border-bl
            - text: )
          - generic [ref=e123]:
            - text: Top, left border (
            - code [ref=e124]: border border-tl
            - text: )
          - generic [ref=e125]:
            - text: Bottom border only (
            - code [ref=e126]: border border-b
            - text: )
          - generic [ref=e127]:
            - text: Top border only (
            - code [ref=e128]: border border-t
            - text: )
          - generic [ref=e129]:
            - code [ref=e133]:
              - generic [ref=e134]: <div class="border border-rbl">Right, bottom, left border</div>
            - button "Copy code to clipboard" [ref=e135] [cursor=pointer]: Copy
          - generic [ref=e136]:
            - code [ref=e140]:
              - generic [ref=e141]: <div class="border border-tbl">Top, bottom, left border</div>
            - button "Copy code to clipboard" [ref=e142] [cursor=pointer]: Copy
          - generic [ref=e143]:
            - code [ref=e147]:
              - generic [ref=e148]: <div class="border border-bl">Bottom, left border</div>
            - button "Copy code to clipboard" [ref=e149] [cursor=pointer]: Copy
          - generic [ref=e150]:
            - code [ref=e154]:
              - generic [ref=e155]: <div class="border border-tl">Top, left border</div>
            - button "Copy code to clipboard" [ref=e156] [cursor=pointer]: Copy
          - generic [ref=e157]:
            - code [ref=e161]:
              - generic [ref=e162]: <div class="border border-b">Bottom border only</div>
            - button "Copy code to clipboard" [ref=e163] [cursor=pointer]: Copy
          - generic [ref=e164]:
            - code [ref=e168]:
              - generic [ref=e169]: <div class="border border-t">Top border only</div>
            - button "Copy code to clipboard" [ref=e170] [cursor=pointer]: Copy
          - heading "Border radius (Canvas legacy classes)" [level=2] [ref=e171]
          - paragraph [ref=e172]:
            - text: Use
            - code [ref=e173]: border-round
            - text: and related classes to round all corners or specific corners of a bordered element. Under the hood, these classes use the standard
            - code [ref=e174]: border-radius
            - text: property.
          - generic [ref=e175]:
            - text: All corners rounded (
            - code [ref=e176]: border border-trbl border-round
            - text: )
          - generic [ref=e177]:
            - text: Bottom corners rounded (
            - code [ref=e178]: border border-trbl border-round-b
            - text: )
          - generic [ref=e179]:
            - text: Top corners rounded (
            - code [ref=e180]: border border-trbl border-round-t
            - text: )
          - generic [ref=e181]:
            - text: Top-left corner rounded (
            - code [ref=e182]: border border-trbl border-round-tl
            - text: )
          - generic [ref=e183]:
            - code [ref=e187]:
              - generic [ref=e188]: <div class="border border-trbl border-round">All corners rounded</div>
            - button "Copy code to clipboard" [ref=e189] [cursor=pointer]: Copy
          - generic [ref=e190]:
            - code [ref=e194]:
              - generic [ref=e195]: <div class="border border-trbl border-round-b">Bottom corners rounded</div>
            - button "Copy code to clipboard" [ref=e196] [cursor=pointer]: Copy
          - generic [ref=e197]:
            - code [ref=e201]:
              - generic [ref=e202]: <div class="border border-trbl border-round-t">Top corners rounded</div>
            - button "Copy code to clipboard" [ref=e203] [cursor=pointer]: Copy
          - generic [ref=e204]:
            - code [ref=e208]:
              - generic [ref=e209]: <div class="border border-trbl border-round-tl">Top-left corner rounded</div>
            - button "Copy code to clipboard" [ref=e210] [cursor=pointer]: Copy
          - heading "Modern borders with inline CSS" [level=2] [ref=e211]
          - paragraph [ref=e212]: For new content, you can rely on standard CSS properties directly in inline styles. This removes the dependency on Canvas-specific classes and matches how borders are defined in modern web development.
          - paragraph [ref=e213]:
            - text: The examples below use only inline styles for
            - code [ref=e214]: border
            - text: ","
            - code [ref=e215]: border-radius
            - text: ", and spacing."
          - heading "Simple bordered box" [level=3] [ref=e216]
          - paragraph [ref=e218]:
            - text: This box uses
            - code [ref=e219]: "border: 1px solid #d0d7de;"
            - text: and
            - code [ref=e220]: "padding: 0.75rem;"
            - text: applied directly as inline styles.
          - generic [ref=e221]:
            - code [ref=e225]:
              - generic [ref=e226]: "<div style=\"border: 1px solid #d0d7de; padding: 0.75rem; margin-bottom: 1rem; background: #ffffff;\">"
              - generic [ref=e227]: "<p style=\"margin: 0\">"
              - generic [ref=e228]: "This box uses <code>border: 1px solid #d0d7de;</code> and"
              - generic [ref=e229]: "<code>padding: 0.75rem;</code> applied directly as inline styles."
              - generic [ref=e230]: </p>
              - generic [ref=e231]: </div>
            - button "Copy code to clipboard" [ref=e232] [cursor=pointer]: Copy
          - heading "Left border callout" [level=3] [ref=e233]
          - paragraph [ref=e234]: You can create callout panels by applying a thicker border to one side only, combined with padding and background colour.
          - generic [ref=e235]:
            - strong [ref=e236]: Callout heading
            - paragraph [ref=e237]:
              - text: This callout uses
              - code [ref=e238]: "border-left: 4px solid #0000cd;"
              - text: to emphasise the block without adding borders on all sides.
          - generic [ref=e239]:
            - code [ref=e243]:
              - generic [ref=e244]: "<div style=\"border-left: 4px solid #0000cd; padding: 0.75rem 1rem; margin-bottom: 1rem; background: #f5f7ff;\">"
              - generic [ref=e245]: <strong>Callout heading</strong>
              - generic [ref=e246]: "<p style=\"margin: 0.5rem 0 0\">"
              - generic [ref=e247]: "This callout uses <code>border-left: 4px solid #0000cd;</code> to"
              - generic [ref=e248]: emphasise the block without adding borders on all sides.
              - generic [ref=e249]: </p>
              - generic [ref=e250]: </div>
            - button "Copy code to clipboard" [ref=e251] [cursor=pointer]: Copy
          - heading "Rounded panels and pill-style badges" [level=3] [ref=e252]
          - paragraph [ref=e253]:
            - text: Rounded corners are controlled with
            - code [ref=e254]: border-radius
            - text: . Larger values create softer corners, and very large values can create pill-shaped elements.
          - paragraph [ref=e256]:
            - text: This panel uses
            - code [ref=e257]: "border-radius: 0.5rem;"
            - text: for gently rounded corners.
          - generic [ref=e258]: Example pill badge with rounded edges
          - generic [ref=e259]:
            - code [ref=e263]:
              - generic [ref=e264]: "<div style=\"border: 1px solid #d0d7de; border-radius: 0.5rem; padding: 0.75rem; margin-bottom: 0.75rem; background: #f9fafb;\">"
              - generic [ref=e265]: "<p style=\"margin: 0\">"
              - generic [ref=e266]: "This panel uses <code>border-radius: 0.5rem;</code> for gently rounded corners."
              - generic [ref=e267]: </p>
              - generic [ref=e268]: </div>
            - button "Copy code to clipboard" [ref=e269] [cursor=pointer]: Copy
          - generic [ref=e270]:
            - code [ref=e274]:
              - generic [ref=e275]: "<div style=\"border: 1px solid #d0d7de; border-radius: 999px; padding: 0.5rem 1.25rem; display: inline-block; margin-bottom: 1rem; background: #eef6ff;\">"
              - generic [ref=e276]: <span>Example pill badge with rounded edges</span>
              - generic [ref=e277]: </div>
            - button "Copy code to clipboard" [ref=e278] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e279]
          - list [ref=e280]:
            - listitem [ref=e281]: Do not rely on borders alone to convey meaning. If the border is used to highlight important information, include a clear text label such as a heading or descriptor.
            - listitem [ref=e282]: Light grey borders may be difficult for some learners to see. This does not fail WCAG, but consider using slightly stronger colours when the border is important for comprehension.
            - listitem [ref=e283]: Avoid using borders to mimic interactive controls such as buttons or input fields unless Canvas provides the underlying behaviour. This prevents confusion for screen reader and keyboard users.
        - navigation "Page navigation" [ref=e284]:
          - link "← Previous Spacing" [ref=e286] [cursor=pointer]:
            - /url: /spacing
            - generic [ref=e287]: ← Previous
            - generic [ref=e288]: Spacing
          - link "Next → Buttons" [ref=e290] [cursor=pointer]:
            - /url: /buttons
            - generic [ref=e291]: Next →
            - generic [ref=e292]: Buttons
      - generic "Site footer" [ref=e293]:
        - navigation "Site map" [ref=e294]:
          - generic [ref=e295]:
            - paragraph [ref=e296]: Canvas Content Styling Guide
            - link "Introduction" [ref=e297] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e298]:
            - paragraph [ref=e299]: HTML Basics in Canvas
            - link "Typography" [ref=e300] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e301] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e302] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e303]:
            - paragraph [ref=e304]: Colour and Branding
            - link "Colours in Canvas" [ref=e305] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e306]:
            - paragraph [ref=e307]: Layout and Spacing
            - link "Grid" [ref=e308] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e309] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e310] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e311]:
            - paragraph [ref=e312]: Canvas Components
            - link "Buttons" [ref=e313] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e314] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e315] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e316] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e317] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e318] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e319] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e320]:
            - paragraph [ref=e321]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e322] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e323] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e324] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e325]:
            - paragraph [ref=e326]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e327] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e328] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e329] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e330] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e331]:
          - paragraph [ref=e332]: © 2025–2026 Karl Horning
          - generic [ref=e333]:
            - link "Karl Horning on GitHub" [ref=e334] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e335]
            - link "Karl Horning on LinkedIn" [ref=e337] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e338]
            - link "Karl Horning's personal portfolio" [ref=e340] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e341]
  - button "Open Next.js Dev Tools" [ref=e350] [cursor=pointer]:
    - img [ref=e351]
  - alert [ref=e354]
```

# Test source

```ts
  1  | /**
  2  |  * @fileoverview Automated accessibility tests using axe-core.
  3  |  *
  4  |  * Scans every page for WCAG violations detectable by axe. Note that axe
  5  |  * catches roughly 30–40% of accessibility issues; these tests complement
  6  |  * but do not replace manual accessibility review.
  7  |  */
  8  | 
  9  | import AxeBuilder from "@axe-core/playwright";
  10 | import { expect, test } from "@playwright/test";
  11 | import { routes } from "../lib/nav";
  12 | 
  13 | for (const route of routes) {
  14 |     test(`${route} — no automatically detectable accessibility violations`, async ({
  15 |         page,
  16 |     }) => {
  17 |         await page.goto(route);
  18 |         const results = await new AxeBuilder({ page }).analyze();
> 19 |         expect(results.violations).toEqual([]);
     |                                    ^ Error: expect(received).toEqual(expected) // deep equality
  20 |     });
  21 | }
  22 | 
```