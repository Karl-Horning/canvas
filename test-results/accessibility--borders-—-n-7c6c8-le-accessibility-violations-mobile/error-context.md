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
            - heading "Borders" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 4 min read
          - paragraph [ref=e65]:
            - text: Canvas provides legacy utility classes for adding borders and rounded corners to elements. These include classes such as
            - code [ref=e66]: border
            - text: ","
            - code [ref=e67]: border-trbl
            - text: ", and"
            - code [ref=e68]: border-round
            - text: . They come from an older Canvas style guide and may change in future, but still work for styling content created in the Rich Content Editor.
          - paragraph [ref=e69]:
            - text: For new content, you can also use standard CSS properties such as
            - code [ref=e70]: border
            - text: and
            - code [ref=e71]: border-radius
            - text: directly in inline styles. The sections below show both approaches.
          - heading "Useful references" [level=2] [ref=e72]
          - list [ref=e73]:
            - listitem [ref=e74]:
              - 'link "MDN: border" [ref=e75] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border
                - text: "MDN:"
                - code [ref=e76]: border
            - listitem [ref=e77]:
              - 'link "MDN: border-radius" [ref=e78] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-radius
                - text: "MDN:"
                - code [ref=e79]: border-radius
          - heading "Content box with border (Canvas legacy classes)" [level=2] [ref=e80]
          - paragraph [ref=e81]:
            - text: This example shows a content box with padding and a border on all sides using
            - code [ref=e82]: content-box pad-box-mini
            - text: and
            - code [ref=e83]: border border-trbl
            - text: . These classes are part of Canvas' legacy CSS.
          - generic [ref=e84]:
            - heading "Example content box" [level=5] [ref=e85]
            - paragraph [ref=e86]:
              - text: This box uses
              - code [ref=e87]: content-box pad-box-mini border border-trbl
              - text: for spacing and a border on all sides.
          - generic [ref=e88]:
            - code [ref=e92]:
              - generic [ref=e93]: <div class="content-box pad-box-mini border border-trbl">
              - generic [ref=e94]: <h5>Example content box</h5>
              - generic [ref=e95]: <p>
              - generic [ref=e96]: This box uses <code>content-box pad-box-mini border border-trbl</code>
              - generic [ref=e97]: for spacing and a border on all sides.
              - generic [ref=e98]: </p>
              - generic [ref=e99]: </div>
            - button "Copy code to clipboard" [ref=e100] [cursor=pointer]: Copy
          - heading "Full border (Canvas legacy classes)" [level=2] [ref=e101]
          - paragraph [ref=e102]:
            - text: Use
            - code [ref=e103]: border border-trbl
            - text: to apply a border to all sides of an element using Canvas' legacy border utilities.
          - generic [ref=e104]:
            - text: Full border using
            - code [ref=e105]: border border-trbl
            - text: .
          - generic [ref=e106]:
            - code [ref=e110]:
              - generic [ref=e111]: <div class="border border-trbl">
              - generic [ref=e112]: Full border using <code>border border-trbl</code>.
              - generic [ref=e113]: </div>
            - button "Copy code to clipboard" [ref=e114] [cursor=pointer]: Copy
          - heading "Partial borders (Canvas legacy classes)" [level=2] [ref=e115]
          - paragraph [ref=e116]:
            - text: Combine
            - code [ref=e117]: border
            - text: with directional classes such as
            - code [ref=e118]: border-rbl
            - text: or
            - code [ref=e119]: border-b
            - text: to apply borders to specific sides only. These helpers are part of the older Canvas style guide.
          - generic [ref=e120]:
            - text: Right, bottom, left border (
            - code [ref=e121]: border border-rbl
            - text: )
          - generic [ref=e122]:
            - text: Top, bottom, left border (
            - code [ref=e123]: border border-tbl
            - text: )
          - generic [ref=e124]:
            - text: Bottom, left border (
            - code [ref=e125]: border border-bl
            - text: )
          - generic [ref=e126]:
            - text: Top, left border (
            - code [ref=e127]: border border-tl
            - text: )
          - generic [ref=e128]:
            - text: Bottom border only (
            - code [ref=e129]: border border-b
            - text: )
          - generic [ref=e130]:
            - text: Top border only (
            - code [ref=e131]: border border-t
            - text: )
          - generic [ref=e132]:
            - code [ref=e136]:
              - generic [ref=e137]: <div class="border border-rbl">Right, bottom, left border</div>
            - button "Copy code to clipboard" [ref=e138] [cursor=pointer]: Copy
          - generic [ref=e139]:
            - code [ref=e143]:
              - generic [ref=e144]: <div class="border border-tbl">Top, bottom, left border</div>
            - button "Copy code to clipboard" [ref=e145] [cursor=pointer]: Copy
          - generic [ref=e146]:
            - code [ref=e150]:
              - generic [ref=e151]: <div class="border border-bl">Bottom, left border</div>
            - button "Copy code to clipboard" [ref=e152] [cursor=pointer]: Copy
          - generic [ref=e153]:
            - code [ref=e157]:
              - generic [ref=e158]: <div class="border border-tl">Top, left border</div>
            - button "Copy code to clipboard" [ref=e159] [cursor=pointer]: Copy
          - generic [ref=e160]:
            - code [ref=e164]:
              - generic [ref=e165]: <div class="border border-b">Bottom border only</div>
            - button "Copy code to clipboard" [ref=e166] [cursor=pointer]: Copy
          - generic [ref=e167]:
            - code [ref=e171]:
              - generic [ref=e172]: <div class="border border-t">Top border only</div>
            - button "Copy code to clipboard" [ref=e173] [cursor=pointer]: Copy
          - heading "Border radius (Canvas legacy classes)" [level=2] [ref=e174]
          - paragraph [ref=e175]:
            - text: Use
            - code [ref=e176]: border-round
            - text: and related classes to round all corners or specific corners of a bordered element. Under the hood, these classes use the standard
            - code [ref=e177]: border-radius
            - text: property.
          - generic [ref=e178]:
            - text: All corners rounded (
            - code [ref=e179]: border border-trbl border-round
            - text: )
          - generic [ref=e180]:
            - text: Bottom corners rounded (
            - code [ref=e181]: border border-trbl border-round-b
            - text: )
          - generic [ref=e182]:
            - text: Top corners rounded (
            - code [ref=e183]: border border-trbl border-round-t
            - text: )
          - generic [ref=e184]:
            - text: Top-left corner rounded (
            - code [ref=e185]: border border-trbl border-round-tl
            - text: )
          - generic [ref=e186]:
            - code [ref=e190]:
              - generic [ref=e191]: <div class="border border-trbl border-round">All corners rounded</div>
            - button "Copy code to clipboard" [ref=e192] [cursor=pointer]: Copy
          - generic [ref=e193]:
            - code [ref=e197]:
              - generic [ref=e198]: <div class="border border-trbl border-round-b">Bottom corners rounded</div>
            - button "Copy code to clipboard" [ref=e199] [cursor=pointer]: Copy
          - generic [ref=e200]:
            - code [ref=e204]:
              - generic [ref=e205]: <div class="border border-trbl border-round-t">Top corners rounded</div>
            - button "Copy code to clipboard" [ref=e206] [cursor=pointer]: Copy
          - generic [ref=e207]:
            - code [ref=e211]:
              - generic [ref=e212]: <div class="border border-trbl border-round-tl">Top-left corner rounded</div>
            - button "Copy code to clipboard" [ref=e213] [cursor=pointer]: Copy
          - heading "Modern borders with inline CSS" [level=2] [ref=e214]
          - paragraph [ref=e215]: For new content, you can rely on standard CSS properties directly in inline styles. This removes the dependency on Canvas-specific classes and matches how borders are defined in modern web development.
          - paragraph [ref=e216]:
            - text: The examples below use only inline styles for
            - code [ref=e217]: border
            - text: ","
            - code [ref=e218]: border-radius
            - text: ", and spacing."
          - heading "Simple bordered box" [level=3] [ref=e219]
          - paragraph [ref=e221]:
            - text: This box uses
            - code [ref=e222]: "border: 1px solid #d0d7de;"
            - text: and
            - code [ref=e223]: "padding: 0.75rem;"
            - text: applied directly as inline styles.
          - generic [ref=e224]:
            - code [ref=e228]:
              - generic [ref=e229]: "<div style=\"border: 1px solid #d0d7de; padding: 0.75rem; margin-bottom: 1rem; background: #ffffff;\">"
              - generic [ref=e230]: "<p style=\"margin: 0\">"
              - generic [ref=e231]: "This box uses <code>border: 1px solid #d0d7de;</code> and"
              - generic [ref=e232]: "<code>padding: 0.75rem;</code> applied directly as inline styles."
              - generic [ref=e233]: </p>
              - generic [ref=e234]: </div>
            - button "Copy code to clipboard" [ref=e235] [cursor=pointer]: Copy
          - heading "Left border callout" [level=3] [ref=e236]
          - paragraph [ref=e237]: You can create callout panels by applying a thicker border to one side only, combined with padding and background colour.
          - generic [ref=e238]:
            - strong [ref=e239]: Callout heading
            - paragraph [ref=e240]:
              - text: This callout uses
              - code [ref=e241]: "border-left: 4px solid #0000cd;"
              - text: to emphasise the block without adding borders on all sides.
          - generic [ref=e242]:
            - code [ref=e246]:
              - generic [ref=e247]: "<div style=\"border-left: 4px solid #0000cd; padding: 0.75rem 1rem; margin-bottom: 1rem; background: #f5f7ff;\">"
              - generic [ref=e248]: <strong>Callout heading</strong>
              - generic [ref=e249]: "<p style=\"margin: 0.5rem 0 0\">"
              - generic [ref=e250]: "This callout uses <code>border-left: 4px solid #0000cd;</code> to"
              - generic [ref=e251]: emphasise the block without adding borders on all sides.
              - generic [ref=e252]: </p>
              - generic [ref=e253]: </div>
            - button "Copy code to clipboard" [ref=e254] [cursor=pointer]: Copy
          - heading "Rounded panels and pill-style badges" [level=3] [ref=e255]
          - paragraph [ref=e256]:
            - text: Rounded corners are controlled with
            - code [ref=e257]: border-radius
            - text: . Larger values create softer corners, and very large values can create pill-shaped elements.
          - paragraph [ref=e259]:
            - text: This panel uses
            - code [ref=e260]: "border-radius: 0.5rem;"
            - text: for gently rounded corners.
          - generic [ref=e261]: Example pill badge with rounded edges
          - generic [ref=e262]:
            - code [ref=e266]:
              - generic [ref=e267]: "<div style=\"border: 1px solid #d0d7de; border-radius: 0.5rem; padding: 0.75rem; margin-bottom: 0.75rem; background: #f9fafb;\">"
              - generic [ref=e268]: "<p style=\"margin: 0\">"
              - generic [ref=e269]: "This panel uses <code>border-radius: 0.5rem;</code> for gently rounded corners."
              - generic [ref=e270]: </p>
              - generic [ref=e271]: </div>
            - button "Copy code to clipboard" [ref=e272] [cursor=pointer]: Copy
          - generic [ref=e273]:
            - code [ref=e277]:
              - generic [ref=e278]: "<div style=\"border: 1px solid #d0d7de; border-radius: 999px; padding: 0.5rem 1.25rem; display: inline-block; margin-bottom: 1rem; background: #eef6ff;\">"
              - generic [ref=e279]: <span>Example pill badge with rounded edges</span>
              - generic [ref=e280]: </div>
            - button "Copy code to clipboard" [ref=e281] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e282]
          - list [ref=e283]:
            - listitem [ref=e284]: Do not rely on borders alone to convey meaning. If the border is used to highlight important information, include a clear text label such as a heading or descriptor.
            - listitem [ref=e285]: Light grey borders may be difficult for some learners to see. This does not fail WCAG, but consider using slightly stronger colours when the border is important for comprehension.
            - listitem [ref=e286]: Avoid using borders to mimic interactive controls such as buttons or input fields unless Canvas provides the underlying behaviour. This prevents confusion for screen reader and keyboard users.
        - navigation "Page navigation" [ref=e287]:
          - link "← Previous Spacing" [ref=e289] [cursor=pointer]:
            - /url: /spacing
            - generic [ref=e290]: ← Previous
            - generic [ref=e291]: Spacing
          - link "Next → Buttons" [ref=e293] [cursor=pointer]:
            - /url: /buttons
            - generic [ref=e294]: Next →
            - generic [ref=e295]: Buttons
      - generic "Site footer" [ref=e296]:
        - navigation "Site map" [ref=e297]:
          - generic [ref=e298]:
            - paragraph [ref=e299]: Canvas Content Styling Guide
            - link "Introduction" [ref=e300] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e301]:
            - paragraph [ref=e302]: HTML Basics in Canvas
            - link "Typography" [ref=e303] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e304] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e305] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e306]:
            - paragraph [ref=e307]: Colour and Branding
            - link "Colours in Canvas" [ref=e308] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e309]:
            - paragraph [ref=e310]: Layout and Spacing
            - link "Grid" [ref=e311] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e312] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e313] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e314]:
            - paragraph [ref=e315]: Canvas Components
            - link "Buttons" [ref=e316] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e317] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e318] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e319] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e320] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e321] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e322] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e323]:
            - paragraph [ref=e324]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e325] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e326] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e327] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e328]:
            - paragraph [ref=e329]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e330] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e331] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e332] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e333] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e334]:
          - paragraph [ref=e335]: © 2025–2026 Karl Horning
          - generic [ref=e336]:
            - link "Karl Horning on GitHub" [ref=e337] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e338]
            - link "Karl Horning on LinkedIn" [ref=e340] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e341]
            - link "Karl Horning's personal portfolio" [ref=e343] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e344]
  - button "Open Next.js Dev Tools" [ref=e353] [cursor=pointer]:
    - img [ref=e354]
  - alert [ref=e357]
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