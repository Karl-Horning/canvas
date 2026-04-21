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
            - heading "Buttons" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 4 min read
          - paragraph [ref=e62]:
            - text: In this Canvas instance, actual
            - code [ref=e63]: <button>
            - text: elements are removed from content created in the Rich Content Editor. Instead, links (
            - code [ref=e64]: <a>
            - text: ") are visually styled to look like buttons. This page shows:"
          - list [ref=e65]:
            - listitem [ref=e66]:
              - text: Canvas' legacy button classes (such as
              - code [ref=e67]: btn btn-primary
              - text: ).
            - listitem [ref=e68]: Modern inline CSS examples for styling links as buttons.
          - paragraph [ref=e69]:
            - text: For navigation (moving to another page, opening a resource), links are semantically correct. For true "actions" (submitting a form, toggling a state) the ideal element would be a real
            - code [ref=e70]: <button>
            - text: ", but this is not available in this Canvas configuration."
          - heading "Useful references" [level=2] [ref=e71]
          - list [ref=e72]:
            - listitem [ref=e73]:
              - 'link "MDN: <a> (anchor) element" [ref=e74] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
                - text: "MDN:"
                - code [ref=e75]: <a>
                - text: (anchor) element
            - listitem [ref=e76]:
              - 'link "MDN: button role (when and how to use it)" [ref=e77] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
                - text: "MDN:"
                - code [ref=e78]: button
                - text: role (when and how to use it)
          - heading "Button styles (Canvas legacy classes)" [level=2] [ref=e79]
          - paragraph [ref=e80]:
            - text: Standard Canvas buttons use the base
            - code [ref=e81]: btn
            - text: class combined with a contextual class such as
            - code [ref=e82]: btn-primary
            - text: or
            - code [ref=e83]: btn-success
            - text: . These classes come from a legacy Canvas style guide and may change in future, but still work in current pages.
          - generic [ref=e84]:
            - paragraph [ref=e85]:
              - link "Primary button" [ref=e86] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e87]:
              - link "Secondary button" [ref=e88] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e89]:
              - link "Success button" [ref=e90] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e91]:
              - link "Warning button" [ref=e92] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e93]:
              - link "Danger button" [ref=e94] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e95]:
            - code [ref=e99]:
              - generic [ref=e100]: <a class="btn btn-primary" href="#">Primary button</a>
            - button "Copy code to clipboard" [ref=e101] [cursor=pointer]: Copy
          - generic [ref=e102]:
            - code [ref=e106]:
              - generic [ref=e107]: <a class="btn btn-secondary" href="#">Secondary button</a>
            - button "Copy code to clipboard" [ref=e108] [cursor=pointer]: Copy
          - generic [ref=e109]:
            - code [ref=e113]:
              - generic [ref=e114]: <a class="btn btn-success" href="#">Success button</a>
            - button "Copy code to clipboard" [ref=e115] [cursor=pointer]: Copy
          - generic [ref=e116]:
            - code [ref=e120]:
              - generic [ref=e121]: <a class="btn btn-warning" href="#">Warning button</a>
            - button "Copy code to clipboard" [ref=e122] [cursor=pointer]: Copy
          - generic [ref=e123]:
            - code [ref=e127]:
              - generic [ref=e128]: <a class="btn btn-danger" href="#">Danger button</a>
            - button "Copy code to clipboard" [ref=e129] [cursor=pointer]: Copy
          - heading "Button sizes (Canvas legacy classes)" [level=2] [ref=e130]
          - paragraph [ref=e131]:
            - text: "You can adjust the size of a Canvas button by adding one of the optional size classes:"
            - code [ref=e132]: btn-large
            - text: ","
            - code [ref=e133]: btn-small
            - text: ", or"
            - code [ref=e134]: btn-mini
            - text: .
          - generic [ref=e135]:
            - paragraph [ref=e136]:
              - link "Primary button (large)" [ref=e137] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e138]:
              - link "Primary button (small)" [ref=e139] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e140]:
              - link "Primary button (mini)" [ref=e141] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e142]:
            - code [ref=e146]:
              - generic [ref=e147]: <a class="btn btn-primary btn-large" href="#">Primary button (large)</a>
            - button "Copy code to clipboard" [ref=e148] [cursor=pointer]: Copy
          - generic [ref=e149]:
            - code [ref=e153]:
              - generic [ref=e154]: <a class="btn btn-primary btn-small" href="#">Primary button (small)</a>
            - button "Copy code to clipboard" [ref=e155] [cursor=pointer]: Copy
          - generic [ref=e156]:
            - code [ref=e160]:
              - generic [ref=e161]: <a class="btn btn-primary btn-mini" href="#">Primary button (mini)</a>
            - button "Copy code to clipboard" [ref=e162] [cursor=pointer]: Copy
          - heading "Modern inline-styled links as buttons" [level=2] [ref=e163]
          - paragraph [ref=e164]:
            - text: If you prefer not to rely on Canvas' legacy classes, you can style links as buttons using inline CSS. This uses standard CSS properties such as
            - code [ref=e165]: background-color
            - text: ","
            - code [ref=e166]: padding
            - text: ","
            - code [ref=e167]: border-radius
            - text: ", and"
            - code [ref=e168]: "display: inline-block;"
            - text: .
          - paragraph [ref=e169]:
            - text: The examples below keep the default browser focus outline for keyboard users by not overriding the
            - code [ref=e170]: outline
            - text: property.
          - heading "Primary and secondary actions" [level=3] [ref=e171]
          - generic [ref=e172]:
            - paragraph [ref=e173]:
              - link "Primary action" [ref=e174] [cursor=pointer]:
                - /url: "#"
            - paragraph [ref=e175]:
              - link "Secondary action" [ref=e176] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e177]:
            - code [ref=e181]:
              - generic [ref=e182]: "<a href=\"#\" style=\"display: inline-block; padding: 0.5rem 1rem; border-radius: 0.375rem; background-color: #0000cd; color: #ffffff; text-decoration: none; font-weight: 600;\">"
              - generic [ref=e183]: Primary action
              - generic [ref=e184]: </a>
            - button "Copy code to clipboard" [ref=e185] [cursor=pointer]: Copy
          - generic [ref=e186]:
            - code [ref=e190]:
              - generic [ref=e191]: "<a href=\"#\" style=\"display: inline-block; padding: 0.5rem 1rem; border-radius: 0.375rem; border: 1px solid #0000cd; color: #0000cd; background-color: #ffffff; text-decoration: none; font-weight: 600;\">"
              - generic [ref=e192]: Secondary action
              - generic [ref=e193]: </a>
            - button "Copy code to clipboard" [ref=e194] [cursor=pointer]: Copy
          - heading "Full-width call-to-action" [level=3] [ref=e195]
          - paragraph [ref=e196]:
            - text: A full-width call-to-action link can be created using
            - code [ref=e197]: "display: block;"
            - text: and
            - code [ref=e198]: "text-align: center;"
            - text: . This works well for important actions on mobile screens.
          - link "Full-width call to action" [ref=e200] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e201]:
            - code [ref=e205]:
              - generic [ref=e206]: "<a href=\"#\" style=\"display: block; padding: 0.75rem 1rem; border-radius: 0.5rem; background-color: #008080; color: #ffffff; text-align: center; text-decoration: none; font-weight: 600;\">"
              - generic [ref=e207]: Full-width call to action
              - generic [ref=e208]: </a>
            - button "Copy code to clipboard" [ref=e209] [cursor=pointer]: Copy
          - heading "Subtle text-style button" [level=3] [ref=e210]
          - paragraph [ref=e211]: Sometimes you may want a link that looks more like a subtle control than a bold button. The example below uses a simple underline and colour, without a filled background.
          - link "Subtle action link" [ref=e213] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e214]:
            - code [ref=e218]:
              - generic [ref=e219]: "<a href=\"#\" style=\"display: inline-block; padding: 0.25rem 0; color: #0000cd; text-decoration: underline; font-weight: 500;\">"
              - generic [ref=e220]: Subtle action link
              - generic [ref=e221]: </a>
            - button "Copy code to clipboard" [ref=e222] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e223]
          - list [ref=e224]:
            - listitem [ref=e225]: Use these styles for navigation actions (for example, "View assignment", "Open resource"), where a link is the correct HTML element.
            - listitem [ref=e226]:
              - text: Avoid adding
              - code [ref=e227]: role="button"
              - text: to links unless you also handle keyboard activation exactly like a real button (which usually requires JavaScript).
            - listitem [ref=e228]:
              - text: Do not remove the focus outline. The inline examples here avoid overriding
              - code [ref=e229]: outline
              - text: so that keyboard users can still see which element is focused.
            - listitem [ref=e230]: Ensure colour contrast between background and text meets at least WCAG AA for the size of text you are using.
        - navigation "Page navigation" [ref=e231]:
          - link "← Previous Borders" [ref=e233] [cursor=pointer]:
            - /url: /borders
            - generic [ref=e234]: ← Previous
            - generic [ref=e235]: Borders
          - link "Next → Alerts" [ref=e237] [cursor=pointer]:
            - /url: /alerts
            - generic [ref=e238]: Next →
            - generic [ref=e239]: Alerts
      - generic "Site footer" [ref=e240]:
        - navigation "Site map" [ref=e241]:
          - generic [ref=e242]:
            - paragraph [ref=e243]: Canvas Content Styling Guide
            - link "Introduction" [ref=e244] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e245]:
            - paragraph [ref=e246]: HTML Basics in Canvas
            - link "Typography" [ref=e247] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e248] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e249] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e250]:
            - paragraph [ref=e251]: Colour and Branding
            - link "Colours in Canvas" [ref=e252] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e253]:
            - paragraph [ref=e254]: Layout and Spacing
            - link "Grid" [ref=e255] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e256] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e257] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e258]:
            - paragraph [ref=e259]: Canvas Components
            - link "Buttons" [ref=e260] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e261] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e262] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e263] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e264] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e265] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e266] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e267]:
            - paragraph [ref=e268]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e269] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e270] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e271] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e272]:
            - paragraph [ref=e273]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e274] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e275] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e276] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e277] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e278]:
          - paragraph [ref=e279]: © 2025–2026 Karl Horning
          - generic [ref=e280]:
            - link "Karl Horning on GitHub" [ref=e281] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e282]
            - link "Karl Horning on LinkedIn" [ref=e284] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e285]
            - link "Karl Horning's personal portfolio" [ref=e287] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e288]
  - button "Open Next.js Dev Tools" [ref=e297] [cursor=pointer]:
    - img [ref=e298]
  - alert [ref=e301]
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