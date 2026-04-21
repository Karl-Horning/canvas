# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /buttons — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 93

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#0000cd",
+               "contrastRatio": 1.77,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#4f46e5",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.77 (foreground color: #4f46e5, background color: #0000cd, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"#\" class=\"inline-block px-4 py-2 rounded-md bg-[#0000cd] text-white no-underline font-semibold\">Primary action</a>",
+                 "target": Array [
+                   ".bg-\\[\\#0000cd\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.77 (foreground color: #4f46e5, background color: #0000cd, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"#\" class=\"inline-block px-4 py-2 rounded-md bg-[#0000cd] text-white no-underline font-semibold\">Primary action</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-\\[\\#0000cd\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#008080",
+               "contrastRatio": 1.31,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#4f46e5",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.31 (foreground color: #4f46e5, background color: #008080, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"#\" class=\"block px-4 py-3 rounded-lg bg-[#008080] text-white text-center no-underline font-semibold\">Full-width call to action</a>",
+                 "target": Array [
+                   ".block",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.31 (foreground color: #4f46e5, background color: #008080, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"#\" class=\"block px-4 py-3 rounded-lg bg-[#008080] text-white text-center no-underline font-semibold\">Full-width call to action</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".block",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
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
            - heading "Buttons" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 4 min read
          - paragraph [ref=e65]:
            - text: In this Canvas instance, actual
            - code [ref=e66]: <button>
            - text: elements are removed from content created in the Rich Content Editor. Instead, links (
            - code [ref=e67]: <a>
            - text: ") are visually styled to look like buttons. This page shows:"
          - list [ref=e68]:
            - listitem [ref=e69]:
              - text: Canvas' legacy button classes (such as
              - code [ref=e70]: btn btn-primary
              - text: ).
            - listitem [ref=e71]: Modern inline CSS examples for styling links as buttons.
          - paragraph [ref=e72]:
            - text: For navigation (moving to another page, opening a resource), links are semantically correct. For true "actions" (submitting a form, toggling a state) the ideal element would be a real
            - code [ref=e73]: <button>
            - text: ", but this is not available in this Canvas configuration."
          - heading "Useful references" [level=2] [ref=e74]
          - list [ref=e75]:
            - listitem [ref=e76]:
              - 'link "MDN: <a> (anchor) element" [ref=e77] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
                - text: "MDN:"
                - code [ref=e78]: <a>
                - text: (anchor) element
            - listitem [ref=e79]:
              - 'link "MDN: button role (when and how to use it)" [ref=e80] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
                - text: "MDN:"
                - code [ref=e81]: button
                - text: role (when and how to use it)
          - heading "Button styles (Canvas legacy classes)" [level=2] [ref=e82]
          - paragraph [ref=e83]:
            - text: Standard Canvas buttons use the base
            - code [ref=e84]: btn
            - text: class combined with a contextual class such as
            - code [ref=e85]: btn-primary
            - text: or
            - code [ref=e86]: btn-success
            - text: . These classes come from a legacy Canvas style guide and may change in future, but still work in current pages.
          - generic [ref=e87]:
            - paragraph [ref=e88]:
              - link "Primary button" [ref=e89] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e90]:
              - link "Secondary button" [ref=e91] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e92]:
              - link "Success button" [ref=e93] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e94]:
              - link "Warning button" [ref=e95] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e96]:
              - link "Danger button" [ref=e97] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e98]:
            - code [ref=e102]:
              - generic [ref=e103]: <a class="btn btn-primary" href="#">Primary button</a>
            - button "Copy code to clipboard" [ref=e104] [cursor=pointer]: Copy
          - generic [ref=e105]:
            - code [ref=e109]:
              - generic [ref=e110]: <a class="btn btn-secondary" href="#">Secondary button</a>
            - button "Copy code to clipboard" [ref=e111] [cursor=pointer]: Copy
          - generic [ref=e112]:
            - code [ref=e116]:
              - generic [ref=e117]: <a class="btn btn-success" href="#">Success button</a>
            - button "Copy code to clipboard" [ref=e118] [cursor=pointer]: Copy
          - generic [ref=e119]:
            - code [ref=e123]:
              - generic [ref=e124]: <a class="btn btn-warning" href="#">Warning button</a>
            - button "Copy code to clipboard" [ref=e125] [cursor=pointer]: Copy
          - generic [ref=e126]:
            - code [ref=e130]:
              - generic [ref=e131]: <a class="btn btn-danger" href="#">Danger button</a>
            - button "Copy code to clipboard" [ref=e132] [cursor=pointer]: Copy
          - heading "Button sizes (Canvas legacy classes)" [level=2] [ref=e133]
          - paragraph [ref=e134]:
            - text: "You can adjust the size of a Canvas button by adding one of the optional size classes:"
            - code [ref=e135]: btn-large
            - text: ","
            - code [ref=e136]: btn-small
            - text: ", or"
            - code [ref=e137]: btn-mini
            - text: .
          - generic [ref=e138]:
            - paragraph [ref=e139]:
              - link "Primary button (large)" [ref=e140] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e141]:
              - link "Primary button (small)" [ref=e142] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e143]:
              - link "Primary button (mini)" [ref=e144] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e145]:
            - code [ref=e149]:
              - generic [ref=e150]: <a class="btn btn-primary btn-large" href="#">Primary button (large)</a>
            - button "Copy code to clipboard" [ref=e151] [cursor=pointer]: Copy
          - generic [ref=e152]:
            - code [ref=e156]:
              - generic [ref=e157]: <a class="btn btn-primary btn-small" href="#">Primary button (small)</a>
            - button "Copy code to clipboard" [ref=e158] [cursor=pointer]: Copy
          - generic [ref=e159]:
            - code [ref=e163]:
              - generic [ref=e164]: <a class="btn btn-primary btn-mini" href="#">Primary button (mini)</a>
            - button "Copy code to clipboard" [ref=e165] [cursor=pointer]: Copy
          - heading "Modern inline-styled links as buttons" [level=2] [ref=e166]
          - paragraph [ref=e167]:
            - text: If you prefer not to rely on Canvas' legacy classes, you can style links as buttons using inline CSS. This uses standard CSS properties such as
            - code [ref=e168]: background-color
            - text: ","
            - code [ref=e169]: padding
            - text: ","
            - code [ref=e170]: border-radius
            - text: ", and"
            - code [ref=e171]: "display: inline-block;"
            - text: .
          - paragraph [ref=e172]:
            - text: The examples below keep the default browser focus outline for keyboard users by not overriding the
            - code [ref=e173]: outline
            - text: property.
          - heading "Primary and secondary actions" [level=3] [ref=e174]
          - generic [ref=e175]:
            - paragraph [ref=e176]:
              - link "Primary action" [ref=e177] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e178]:
              - link "Secondary action" [ref=e179] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e180]:
            - code [ref=e184]:
              - generic [ref=e185]: "<a href=\"#\" style=\"display: inline-block; padding: 0.5rem 1rem; border-radius: 0.375rem; background-color: #0000cd; color: #ffffff; text-decoration: none; font-weight: 600;\">"
              - generic [ref=e186]: Primary action
              - generic [ref=e187]: </a>
            - button "Copy code to clipboard" [ref=e188] [cursor=pointer]: Copy
          - generic [ref=e189]:
            - code [ref=e193]:
              - generic [ref=e194]: "<a href=\"#\" style=\"display: inline-block; padding: 0.5rem 1rem; border-radius: 0.375rem; border: 1px solid #0000cd; color: #0000cd; background-color: #ffffff; text-decoration: none; font-weight: 600;\">"
              - generic [ref=e195]: Secondary action
              - generic [ref=e196]: </a>
            - button "Copy code to clipboard" [ref=e197] [cursor=pointer]: Copy
          - heading "Full-width call-to-action" [level=3] [ref=e198]
          - paragraph [ref=e199]:
            - text: A full-width call-to-action link can be created using
            - code [ref=e200]: "display: block;"
            - text: and
            - code [ref=e201]: "text-align: center;"
            - text: . This works well for important actions on mobile screens.
          - link "Full-width call to action" [ref=e203] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e204]:
            - code [ref=e208]:
              - generic [ref=e209]: "<a href=\"#\" style=\"display: block; padding: 0.75rem 1rem; border-radius: 0.5rem; background-color: #008080; color: #ffffff; text-align: center; text-decoration: none; font-weight: 600;\">"
              - generic [ref=e210]: Full-width call to action
              - generic [ref=e211]: </a>
            - button "Copy code to clipboard" [ref=e212] [cursor=pointer]: Copy
          - heading "Subtle text-style button" [level=3] [ref=e213]
          - paragraph [ref=e214]: Sometimes you may want a link that looks more like a subtle control than a bold button. The example below uses a simple underline and colour, without a filled background.
          - link "Subtle action link" [ref=e216] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e217]:
            - code [ref=e221]:
              - generic [ref=e222]: "<a href=\"#\" style=\"display: inline-block; padding: 0.25rem 0; color: #0000cd; text-decoration: underline; font-weight: 500;\">"
              - generic [ref=e223]: Subtle action link
              - generic [ref=e224]: </a>
            - button "Copy code to clipboard" [ref=e225] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e226]
          - list [ref=e227]:
            - listitem [ref=e228]: Use these styles for navigation actions (for example, "View assignment", "Open resource"), where a link is the correct HTML element.
            - listitem [ref=e229]:
              - text: Avoid adding
              - code [ref=e230]: role="button"
              - text: to links unless you also handle keyboard activation exactly like a real button (which usually requires JavaScript).
            - listitem [ref=e231]:
              - text: Do not remove the focus outline. The inline examples here avoid overriding
              - code [ref=e232]: outline
              - text: so that keyboard users can still see which element is focused.
            - listitem [ref=e233]: Ensure colour contrast between background and text meets at least WCAG AA for the size of text you are using.
        - navigation "Page navigation" [ref=e234]:
          - link "← Previous Borders" [ref=e236] [cursor=pointer]:
            - /url: /borders
            - generic [ref=e237]: ← Previous
            - generic [ref=e238]: Borders
          - link "Next → Alerts" [ref=e240] [cursor=pointer]:
            - /url: /alerts
            - generic [ref=e241]: Next →
            - generic [ref=e242]: Alerts
      - generic "Site footer" [ref=e243]:
        - navigation "Site map" [ref=e244]:
          - generic [ref=e245]:
            - paragraph [ref=e246]: Canvas Content Styling Guide
            - link "Introduction" [ref=e247] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e248]:
            - paragraph [ref=e249]: HTML Basics in Canvas
            - link "Typography" [ref=e250] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e251] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e252] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e253]:
            - paragraph [ref=e254]: Colour and Branding
            - link "Colours in Canvas" [ref=e255] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e256]:
            - paragraph [ref=e257]: Layout and Spacing
            - link "Grid" [ref=e258] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e259] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e260] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e261]:
            - paragraph [ref=e262]: Canvas Components
            - link "Buttons" [ref=e263] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e264] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e265] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e266] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e267] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e268] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e269] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e270]:
            - paragraph [ref=e271]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e272] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e273] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e274] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e275]:
            - paragraph [ref=e276]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e277] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e278] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e279] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e280] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e281]:
          - paragraph [ref=e282]: © 2025–2026 Karl Horning
          - generic [ref=e283]:
            - link "Karl Horning on GitHub" [ref=e284] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e285]
            - link "Karl Horning on LinkedIn" [ref=e287] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e288]
            - link "Karl Horning's personal portfolio" [ref=e290] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e291]
  - button "Open Next.js Dev Tools" [ref=e300] [cursor=pointer]:
    - img [ref=e301]
  - alert [ref=e304]
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