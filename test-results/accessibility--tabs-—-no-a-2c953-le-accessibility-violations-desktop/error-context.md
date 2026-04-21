# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /tabs — no automatically detectable accessibility violations
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
+         "html": "<h4>Overview</h4>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#tab-one > h4",
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
            - heading "Tabs" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 2 min read
          - paragraph [ref=e62]:
            - text: Canvas can convert simple lists into interactive tabbed panels using its legacy
            - strong [ref=e63]: enhanceable content
            - text: system. When the page loads, Canvas runs JavaScript that looks for elements with
            - code [ref=e64]: enhanceable_content tabs
            - text: and turns them into tabs.
          - paragraph [ref=e65]: This behaviour depends on Canvas' own JavaScript and CSS. It cannot be recreated with inline styles alone — the examples below work only because Canvas enhances the markup for you.
          - heading "Useful references" [level=2] [ref=e66]
          - list [ref=e67]:
            - listitem [ref=e68]:
              - 'link "WAI-ARIA Authoring Practices: Tabs pattern" [ref=e69] [cursor=pointer]':
                - /url: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
            - listitem [ref=e70]:
              - 'link "MDN: role=\"tab\" and related roles" [ref=e71] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
                - text: "MDN:"
                - code [ref=e72]: role="tab"
                - text: and related roles
          - paragraph [ref=e73]: In this guide, ARIA attributes are not added manually to the tab markup. Canvas manages the interactive behaviour internally, and manually adding partial ARIA patterns could conflict with or duplicate what Canvas injects.
          - heading "Canvas-enhanced tabs example" [level=2] [ref=e74]
          - paragraph [ref=e75]: The structure below shows the minimum HTML needed for Canvas to create tabs. A list of links defines the tab labels, and each link points to a corresponding panel by ID.
          - generic [ref=e76]:
            - list [ref=e77]:
              - listitem [ref=e78]:
                - link "Overview" [ref=e79] [cursor=pointer]:
                  - /url: "#tab-one"
              - listitem [ref=e80]:
                - link "Details" [ref=e81] [cursor=pointer]:
                  - /url: "#tab-two"
              - listitem [ref=e82]:
                - link "Further support" [ref=e83] [cursor=pointer]:
                  - /url: "#tab-three"
            - generic [ref=e84]:
              - heading "Overview" [level=4] [ref=e85]
              - paragraph [ref=e86]: Use this tab for a short summary or introduction. Canvas will show this panel when the page first loads.
            - generic [ref=e87]:
              - heading "Details" [level=4] [ref=e88]
              - paragraph [ref=e89]: Place more detailed information here — for example, step-by-step instructions or criteria.
            - generic [ref=e90]:
              - heading "Further support" [level=4] [ref=e91]
              - paragraph [ref=e92]: This tab can be used for links to help, FAQs, or related resources without cluttering the main content.
          - generic [ref=e93]:
            - code [ref=e97]:
              - generic [ref=e98]: <div class="enhanceable_content tabs">
              - generic [ref=e99]: <ul>
              - generic [ref=e100]: <li><a href="#tab-one">Overview</a></li>
              - generic [ref=e101]: <li><a href="#tab-two">Details</a></li>
              - generic [ref=e102]: <li><a href="#tab-three">Further support</a></li>
              - generic [ref=e103]: </ul>
              - generic [ref=e104]: <div id="tab-one">
              - generic [ref=e105]: <h4>Overview</h4>
              - generic [ref=e106]: <p>Use this tab for a short summary or introduction.</p>
              - generic [ref=e107]: </div>
              - generic [ref=e108]: <div id="tab-two">
              - generic [ref=e109]: <h4>Details</h4>
              - generic [ref=e110]: <p>Place more detailed information here — for example, steps or criteria.</p>
              - generic [ref=e111]: </div>
              - generic [ref=e112]: <div id="tab-three">
              - generic [ref=e113]: <h4>Further support</h4>
              - generic [ref=e114]: <p>Use this tab for links to help, FAQs, or related resources.</p>
              - generic [ref=e115]: </div>
              - generic [ref=e116]: </div>
            - button "Copy code to clipboard" [ref=e117] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e118]
          - list [ref=e119]:
            - listitem [ref=e120]: The tab behaviour and ARIA attributes are handled by Canvas' own scripts. The raw HTML will appear as a list of links and sections if enhancement fails.
            - listitem [ref=e121]:
              - text: Avoid adding your own
              - code [ref=e122]: role="tab"
              - text: ","
              - code [ref=e123]: role="tablist"
              - text: ", or related attributes unless you are building a fully custom tabs pattern outside Canvas' enhancement system."
            - listitem [ref=e124]: Ensure that important instructions are not hidden only in a non-default tab; some learners may miss them if they do not explore all tabs.
            - listitem [ref=e125]:
              - text: For simpler show/hide content that does not require tabbed navigation, consider native
              - code [ref=e126]: <details>
              - text: /
              - code [ref=e127]: <summary>
              - text: instead, as shown on the Typography page.
        - navigation "Page navigation" [ref=e128]:
          - link "← Previous Flash Messages" [ref=e130] [cursor=pointer]:
            - /url: /flash-messages
            - generic [ref=e131]: ← Previous
            - generic [ref=e132]: Flash Messages
          - link "Next → Popovers, Dialogs, and Tooltips" [ref=e134] [cursor=pointer]:
            - /url: /popovers-dialogs-and-tooltips
            - generic [ref=e135]: Next →
            - generic [ref=e136]: Popovers, Dialogs, and Tooltips
      - generic "Site footer" [ref=e137]:
        - navigation "Site map" [ref=e138]:
          - generic [ref=e139]:
            - paragraph [ref=e140]: Canvas Content Styling Guide
            - link "Introduction" [ref=e141] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e142]:
            - paragraph [ref=e143]: HTML Basics in Canvas
            - link "Typography" [ref=e144] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e145] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e146] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e147]:
            - paragraph [ref=e148]: Colour and Branding
            - link "Colours in Canvas" [ref=e149] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e150]:
            - paragraph [ref=e151]: Layout and Spacing
            - link "Grid" [ref=e152] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e153] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e154] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e155]:
            - paragraph [ref=e156]: Canvas Components
            - link "Buttons" [ref=e157] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e158] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e159] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e160] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e161] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e162] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e163] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e164]:
            - paragraph [ref=e165]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e166] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e167] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e168] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e169]:
            - paragraph [ref=e170]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e171] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e172] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e173] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e174] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e175]:
          - paragraph [ref=e176]: © 2025–2026 Karl Horning
          - generic [ref=e177]:
            - link "Karl Horning on GitHub" [ref=e178] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e179]
            - link "Karl Horning on LinkedIn" [ref=e181] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e182]
            - link "Karl Horning's personal portfolio" [ref=e184] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e185]
  - button "Open Next.js Dev Tools" [ref=e194] [cursor=pointer]:
    - img [ref=e195]
  - alert [ref=e198]
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