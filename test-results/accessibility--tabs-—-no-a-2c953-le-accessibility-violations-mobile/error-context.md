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
            - heading "Tabs" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 2 min read
          - paragraph [ref=e65]:
            - text: Canvas can convert simple lists into interactive tabbed panels using its legacy
            - strong [ref=e66]: enhanceable content
            - text: system. When the page loads, Canvas runs JavaScript that looks for elements with
            - code [ref=e67]: enhanceable_content tabs
            - text: and turns them into tabs.
          - paragraph [ref=e68]: This behaviour depends on Canvas' own JavaScript and CSS. It cannot be recreated with inline styles alone — the examples below work only because Canvas enhances the markup for you.
          - heading "Useful references" [level=2] [ref=e69]
          - list [ref=e70]:
            - listitem [ref=e71]:
              - 'link "WAI-ARIA Authoring Practices: Tabs pattern" [ref=e72] [cursor=pointer]':
                - /url: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
            - listitem [ref=e73]:
              - 'link "MDN: role=\"tab\" and related roles" [ref=e74] [cursor=pointer]':
                - /url: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
                - text: "MDN:"
                - code [ref=e75]: role="tab"
                - text: and related roles
          - paragraph [ref=e76]: In this guide, ARIA attributes are not added manually to the tab markup. Canvas manages the interactive behaviour internally, and manually adding partial ARIA patterns could conflict with or duplicate what Canvas injects.
          - heading "Canvas-enhanced tabs example" [level=2] [ref=e77]
          - paragraph [ref=e78]: The structure below shows the minimum HTML needed for Canvas to create tabs. A list of links defines the tab labels, and each link points to a corresponding panel by ID.
          - generic [ref=e79]:
            - list [ref=e80]:
              - listitem [ref=e81]:
                - link "Overview" [ref=e82] [cursor=pointer]:
                  - /url: "#tab-one"
              - listitem [ref=e83]:
                - link "Details" [ref=e84] [cursor=pointer]:
                  - /url: "#tab-two"
              - listitem [ref=e85]:
                - link "Further support" [ref=e86] [cursor=pointer]:
                  - /url: "#tab-three"
            - generic [ref=e87]:
              - heading "Overview" [level=4] [ref=e88]
              - paragraph [ref=e89]: Use this tab for a short summary or introduction. Canvas will show this panel when the page first loads.
            - generic [ref=e90]:
              - heading "Details" [level=4] [ref=e91]
              - paragraph [ref=e92]: Place more detailed information here — for example, step-by-step instructions or criteria.
            - generic [ref=e93]:
              - heading "Further support" [level=4] [ref=e94]
              - paragraph [ref=e95]: This tab can be used for links to help, FAQs, or related resources without cluttering the main content.
          - generic [ref=e96]:
            - code [ref=e100]:
              - generic [ref=e101]: <div class="enhanceable_content tabs">
              - generic [ref=e102]: <ul>
              - generic [ref=e103]: <li><a href="#tab-one">Overview</a></li>
              - generic [ref=e104]: <li><a href="#tab-two">Details</a></li>
              - generic [ref=e105]: <li><a href="#tab-three">Further support</a></li>
              - generic [ref=e106]: </ul>
              - generic [ref=e107]: <div id="tab-one">
              - generic [ref=e108]: <h4>Overview</h4>
              - generic [ref=e109]: <p>Use this tab for a short summary or introduction.</p>
              - generic [ref=e110]: </div>
              - generic [ref=e111]: <div id="tab-two">
              - generic [ref=e112]: <h4>Details</h4>
              - generic [ref=e113]: <p>Place more detailed information here — for example, steps or criteria.</p>
              - generic [ref=e114]: </div>
              - generic [ref=e115]: <div id="tab-three">
              - generic [ref=e116]: <h4>Further support</h4>
              - generic [ref=e117]: <p>Use this tab for links to help, FAQs, or related resources.</p>
              - generic [ref=e118]: </div>
              - generic [ref=e119]: </div>
            - button "Copy code to clipboard" [ref=e120] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e121]
          - list [ref=e122]:
            - listitem [ref=e123]: The tab behaviour and ARIA attributes are handled by Canvas' own scripts. The raw HTML will appear as a list of links and sections if enhancement fails.
            - listitem [ref=e124]:
              - text: Avoid adding your own
              - code [ref=e125]: role="tab"
              - text: ","
              - code [ref=e126]: role="tablist"
              - text: ", or related attributes unless you are building a fully custom tabs pattern outside Canvas' enhancement system."
            - listitem [ref=e127]: Ensure that important instructions are not hidden only in a non-default tab; some learners may miss them if they do not explore all tabs.
            - listitem [ref=e128]:
              - text: For simpler show/hide content that does not require tabbed navigation, consider native
              - code [ref=e129]: <details>
              - text: /
              - code [ref=e130]: <summary>
              - text: instead, as shown on the Typography page.
        - navigation "Page navigation" [ref=e131]:
          - link "← Previous Flash Messages" [ref=e133] [cursor=pointer]:
            - /url: /flash-messages
            - generic [ref=e134]: ← Previous
            - generic [ref=e135]: Flash Messages
          - link "Next → Popovers, Dialogs, and Tooltips" [ref=e137] [cursor=pointer]:
            - /url: /popovers-dialogs-and-tooltips
            - generic [ref=e138]: Next →
            - generic [ref=e139]: Popovers, Dialogs, and Tooltips
      - generic "Site footer" [ref=e140]:
        - navigation "Site map" [ref=e141]:
          - generic [ref=e142]:
            - paragraph [ref=e143]: Canvas Content Styling Guide
            - link "Introduction" [ref=e144] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e145]:
            - paragraph [ref=e146]: HTML Basics in Canvas
            - link "Typography" [ref=e147] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e148] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e149] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e150]:
            - paragraph [ref=e151]: Colour and Branding
            - link "Colours in Canvas" [ref=e152] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e153]:
            - paragraph [ref=e154]: Layout and Spacing
            - link "Grid" [ref=e155] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e156] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e157] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e158]:
            - paragraph [ref=e159]: Canvas Components
            - link "Buttons" [ref=e160] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e161] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e162] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e163] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e164] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e165] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e166] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e167]:
            - paragraph [ref=e168]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e169] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e170] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e171] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e172]:
            - paragraph [ref=e173]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e174] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e175] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e176] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e177] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e178]:
          - paragraph [ref=e179]: © 2025–2026 Karl Horning
          - generic [ref=e180]:
            - link "Karl Horning on GitHub" [ref=e181] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e182]
            - link "Karl Horning on LinkedIn" [ref=e184] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e185]
            - link "Karl Horning's personal portfolio" [ref=e187] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e188]
  - button "Open Next.js Dev Tools" [ref=e197] [cursor=pointer]:
    - img [ref=e198]
  - alert [ref=e201]
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