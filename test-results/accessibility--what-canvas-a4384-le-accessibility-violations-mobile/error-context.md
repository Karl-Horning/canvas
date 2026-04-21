# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /what-canvas-removes-and-modifies — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 52

- Array []
+ Array [
+   Object {
+     "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
+     "help": "Scrollable region must have keyboard access",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright",
+     "id": "scrollable-region-focusable",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "focusable-content",
+             "impact": "serious",
+             "message": "Element should have focusable content",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "focusable-element",
+             "impact": "serious",
+             "message": "Element should be focusable",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element should have focusable content
+   Element should be focusable",
+         "html": "<div class=\"overflow-x-auto mb-4\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".overflow-x-auto",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "wcag2a",
+       "wcag211",
+       "wcag213",
+       "TTv5",
+       "TT4.a",
+       "EN-301-549",
+       "EN-9.2.1.1",
+       "EN-9.2.1.3",
+       "RGAAv4",
+       "RGAA-7.3.2",
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
            - heading "What Canvas Removes and Modifies" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 4 min read
          - heading "Overview" [level=2] [ref=e65]
          - paragraph [ref=e66]: Canvas sanitises all content created in the Rich Content Editor. This means it removes unsupported elements, rewrites parts of the HTML, and limits which CSS can be used. The goal is to protect learners, keep pages consistent, and prevent broken or insecure layouts.
          - paragraph [ref=e67]: The table below summarises the main behaviours observed in Canvas while building the examples in this guide. Details may vary slightly between institutions and over time as Canvas is updated, so always test important content after saving.
          - heading "Summary of what Canvas removes and modifies" [level=2] [ref=e68]
          - paragraph [ref=e69]: This table focuses on everyday authoring in the Rich Content Editor. It does not cover custom themes, LTI tools, or account-level branding.
          - table "Common HTML and CSS behaviours in this Canvas instance" [ref=e71]:
            - caption [ref=e72]: Common HTML and CSS behaviours in this Canvas instance
            - rowgroup [ref=e73]:
              - row "Item Type Canvas behaviour Notes and alternatives" [ref=e74]:
                - columnheader "Item" [ref=e75]
                - columnheader "Type" [ref=e76]
                - columnheader "Canvas behaviour" [ref=e77]
                - columnheader "Notes and alternatives" [ref=e78]
            - rowgroup [ref=e79]:
              - row "<script> and inline JavaScript Element and attribute Removed when the page is saved. You cannot add your own JavaScript to RCE pages. Only Canvas' built-in JavaScript (for example enhanceable_content) can run." [ref=e80]:
                - cell "<script> and inline JavaScript" [ref=e81]:
                  - code [ref=e82]: <script>
                  - text: and inline JavaScript
                - cell "Element and attribute" [ref=e83]
                - cell "Removed when the page is saved." [ref=e84]
                - cell "You cannot add your own JavaScript to RCE pages. Only Canvas' built-in JavaScript (for example enhanceable_content) can run." [ref=e85]:
                  - text: You cannot add your own JavaScript to RCE pages. Only Canvas' built-in JavaScript (for example
                  - code [ref=e86]: enhanceable_content
                  - text: ) can run.
              - row "<style> and external stylesheets Element Removed or ignored in the Rich Content Editor. Use inline styles on individual elements instead." [ref=e87]:
                - cell "<style> and external stylesheets" [ref=e88]:
                  - code [ref=e89]: <style>
                  - text: and external stylesheets
                - cell "Element" [ref=e90]
                - cell "Removed or ignored in the Rich Content Editor." [ref=e91]
                - cell "Use inline styles on individual elements instead." [ref=e92]
              - row "Forms (<form>, inputs, etc.) Element group Removed or heavily sanitised so that real HTML forms are not available in normal course content. Use Canvas assignments, quizzes, or external tools for collecting responses instead of hand-built forms." [ref=e93]:
                - cell "Forms (<form>, inputs, etc.)" [ref=e94]:
                  - text: Forms (
                  - code [ref=e95]: <form>
                  - text: ", inputs, etc.)"
                - cell "Element group" [ref=e96]
                - cell "Removed or heavily sanitised so that real HTML forms are not available in normal course content." [ref=e97]
                - cell "Use Canvas assignments, quizzes, or external tools for collecting responses instead of hand-built forms." [ref=e98]
              - row "<button>,<dialog>,<progress> HTML elements Removed when saved in this Canvas instance. Use styled links that look like buttons, and Canvas' legacy progress bar or inline text descriptions instead of native elements." [ref=e99]:
                - cell "<button>,<dialog>,<progress>" [ref=e100]:
                  - code [ref=e101]: <button>
                  - text: ","
                  - code [ref=e102]: <dialog>
                  - text: ","
                  - code [ref=e103]: <progress>
                - cell "HTML elements" [ref=e104]
                - cell "Removed when saved in this Canvas instance." [ref=e105]
                - cell "Use styled links that look like buttons, and Canvas' legacy progress bar or inline text descriptions instead of native elements." [ref=e106]
              - row "Custom CSS classes CSS class use Class names remain in the HTML, but there is no way to define new CSS for them inside the RCE. For predictable results, rely on inline styles and the legacy Canvas classes in this guide (for example btn,ic-Table,enhanceable_content)." [ref=e107]:
                - cell "Custom CSS classes" [ref=e108]
                - cell "CSS class use" [ref=e109]
                - cell "Class names remain in the HTML, but there is no way to define new CSS for them inside the RCE." [ref=e110]
                - cell "For predictable results, rely on inline styles and the legacy Canvas classes in this guide (for example btn,ic-Table,enhanceable_content)." [ref=e111]:
                  - text: For predictable results, rely on inline styles and the legacy Canvas classes in this guide (for example
                  - code [ref=e112]: btn
                  - text: ","
                  - code [ref=e113]: ic-Table
                  - text: ","
                  - code [ref=e114]: enhanceable_content
                  - text: ).
              - row "name on <details> Attribute Stripped from <details> when saved, so browser “exclusive accordion” behaviour is not available. You can still use multiple collapsible sections with <details> and<summary>, but they will not auto-close each other." [ref=e115]:
                - cell "name on <details>" [ref=e116]:
                  - code [ref=e117]: name
                  - text: "on"
                  - code [ref=e118]: <details>
                - cell "Attribute" [ref=e119]
                - cell "Stripped from <details> when saved, so browser “exclusive accordion” behaviour is not available." [ref=e120]:
                  - text: Stripped from
                  - code [ref=e121]: <details>
                  - text: when saved, so browser “exclusive accordion” behaviour is not available.
                - cell "You can still use multiple collapsible sections with <details> and<summary>, but they will not auto-close each other." [ref=e122]:
                  - text: You can still use multiple collapsible sections with
                  - code [ref=e123]: <details>
                  - text: and
                  - code [ref=e124]: <summary>
                  - text: ", but they will not auto-close each other."
              - row "ARIA attributes Attribute group Generally preserved. Elements such as alerts and progress indicators can use role, aria-label, andaria-valuenow. Always test ARIA-heavy patterns after saving, as Canvas may re-wrap content or insert extra <p> tags that affect the structure." [ref=e125]:
                - cell "ARIA attributes" [ref=e126]
                - cell "Attribute group" [ref=e127]
                - cell "Generally preserved. Elements such as alerts and progress indicators can use role, aria-label, andaria-valuenow." [ref=e128]:
                  - text: Generally preserved. Elements such as alerts and progress indicators can use
                  - code [ref=e129]: role
                  - text: ","
                  - code [ref=e130]: aria-label
                  - text: ", and"
                  - code [ref=e131]: aria-valuenow
                  - text: .
                - cell "Always test ARIA-heavy patterns after saving, as Canvas may re-wrap content or insert extra <p> tags that affect the structure." [ref=e132]:
                  - text: Always test ARIA-heavy patterns after saving, as Canvas may re-wrap content or insert extra
                  - code [ref=e133]: <p>
                  - text: tags that affect the structure.
              - row "Inline CSS (style attribute) CSS Allowed but sanitised. Unsupported properties and values are removed, and some complex shorthand may be rewritten. Use widely supported properties such as margin, padding,border, and basicdisplay and grid patterns. Check layouts again after saving." [ref=e134]:
                - cell "Inline CSS (style attribute)" [ref=e135]
                - cell "CSS" [ref=e136]
                - cell "Allowed but sanitised. Unsupported properties and values are removed, and some complex shorthand may be rewritten." [ref=e137]
                - cell "Use widely supported properties such as margin, padding,border, and basicdisplay and grid patterns. Check layouts again after saving." [ref=e138]:
                  - text: Use widely supported properties such as
                  - code [ref=e139]: margin
                  - text: ","
                  - code [ref=e140]: padding
                  - text: ","
                  - code [ref=e141]: border
                  - text: ", and basic"
                  - code [ref=e142]: display
                  - text: and
                  - code [ref=e143]: grid
                  - text: patterns. Check layouts again after saving.
              - row "Text and block structure Markup normalisation Canvas often wraps content in <p> tags, removes empty elements, and reformats whitespace. If you need tighter control over spacing, use <div> elements with inline margins instead of relying on blank lines in the editor." [ref=e144]:
                - cell "Text and block structure" [ref=e145]
                - cell "Markup normalisation" [ref=e146]
                - cell "Canvas often wraps content in <p> tags, removes empty elements, and reformats whitespace." [ref=e147]:
                  - text: Canvas often wraps content in
                  - code [ref=e148]: <p>
                  - text: tags, removes empty elements, and reformats whitespace.
                - cell "If you need tighter control over spacing, use <div> elements with inline margins instead of relying on blank lines in the editor." [ref=e149]:
                  - text: If you need tighter control over spacing, use
                  - code [ref=e150]: <div>
                  - text: elements with inline margins instead of relying on blank lines in the editor.
              - row "Legacy Canvas components (enhanceable_content) Canvas-specific patterns Still recognised in this instance. Tabs, popovers, tooltips, draggable items, sortable lists and resizable boxes work when marked up correctly. These are legacy features and behaviour may change in future updates. Use them for optional enhancements, not as the only way to access key content." [ref=e151]:
                - cell "Legacy Canvas components (enhanceable_content)" [ref=e152]:
                  - text: Legacy Canvas components (
                  - code [ref=e153]: enhanceable_content
                  - text: )
                - cell "Canvas-specific patterns" [ref=e154]
                - cell "Still recognised in this instance. Tabs, popovers, tooltips, draggable items, sortable lists and resizable boxes work when marked up correctly." [ref=e155]
                - cell "These are legacy features and behaviour may change in future updates. Use them for optional enhancements, not as the only way to access key content." [ref=e156]
        - navigation "Page navigation" [ref=e157]:
          - link "← Previous Frequently Asked Questions" [ref=e159] [cursor=pointer]:
            - /url: /frequently-asked-questions
            - generic [ref=e160]: ← Previous
            - generic [ref=e161]: Frequently Asked Questions
          - link "Next → Embedding External Media" [ref=e163] [cursor=pointer]:
            - /url: /embedding-external-media-in-canvas
            - generic [ref=e164]: Next →
            - generic [ref=e165]: Embedding External Media
      - generic "Site footer" [ref=e166]:
        - navigation "Site map" [ref=e167]:
          - generic [ref=e168]:
            - paragraph [ref=e169]: Canvas Content Styling Guide
            - link "Introduction" [ref=e170] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e171]:
            - paragraph [ref=e172]: HTML Basics in Canvas
            - link "Typography" [ref=e173] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e174] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e175] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e176]:
            - paragraph [ref=e177]: Colour and Branding
            - link "Colours in Canvas" [ref=e178] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e179]:
            - paragraph [ref=e180]: Layout and Spacing
            - link "Grid" [ref=e181] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e182] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e183] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e184]:
            - paragraph [ref=e185]: Canvas Components
            - link "Buttons" [ref=e186] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e187] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e188] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e189] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e190] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e191] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e192] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e193]:
            - paragraph [ref=e194]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e195] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e196] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e197] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e198]:
            - paragraph [ref=e199]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e200] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e201] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e202] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e203] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e204]:
          - paragraph [ref=e205]: © 2025–2026 Karl Horning
          - generic [ref=e206]:
            - link "Karl Horning on GitHub" [ref=e207] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e208]
            - link "Karl Horning on LinkedIn" [ref=e210] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e211]
            - link "Karl Horning's personal portfolio" [ref=e213] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e214]
  - button "Open Next.js Dev Tools" [ref=e223] [cursor=pointer]:
    - img [ref=e224]
  - alert [ref=e227]
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