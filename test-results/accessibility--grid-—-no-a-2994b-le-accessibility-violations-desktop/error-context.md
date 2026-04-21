# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /grid — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 115

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
+         "html": "<h5>Main column (8/12)</h5>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".content-box.mb-4:nth-child(9) > .grid-row > .col-md-8.col-xs-12 > .bg-\\[\\#eef\\].dark\\:bg-\\[\\#1e2a4a\\].p-3 > h5",
+         ],
+       },
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
+         "html": "<h5>Main column with nested content</h5>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".content-box.mb-4:nth-child(17) > .grid-row > .col-md-8.col-xs-12 > .bg-\\[\\#eef\\].dark\\:bg-\\[\\#1e2a4a\\].p-3 > h5",
+         ],
+       },
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
+         "html": "<h5>Main content</h5>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "article > .grid-cols-\\[repeat\\(auto-fit\\,minmax\\(260px\\,1fr\\)\\)\\].grid.gap-4 > .bg-\\[\\#eef\\].dark\\:bg-\\[\\#1e2a4a\\].p-3 > h5",
+         ],
+       },
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
+         "html": "<h5>Card 1</h5>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\] > .bg-\\[\\#eef\\].dark\\:bg-\\[\\#1e2a4a\\].p-3:nth-child(1) > h5",
+         ],
+       },
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
+         "html": "<h5>Main content</h5>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-4:nth-child(36) > .grid-cols-\\[repeat\\(auto-fit\\,minmax\\(260px\\,1fr\\)\\)\\].grid.gap-4 > .bg-\\[\\#eef\\].dark\\:bg-\\[\\#1e2a4a\\].p-3 > h5",
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
            - heading "Grid" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 7 min read
          - paragraph [ref=e62]:
            - text: Canvas includes a legacy responsive grid system based on rows and columns. Columns adapt to different screen sizes using classes such as
            - code [ref=e63]: col-xs-12
            - text: (full width on small screens) and
            - code [ref=e64]: col-md-4
            - text: (four columns wide on medium screens). These classes are part of Canvas' older CSS and still work in this Canvas instance, but they may change in future if the underlying theme is updated.
          - paragraph [ref=e65]: You can also build layouts using native CSS Grid directly in inline styles. This does not rely on Canvas' legacy CSS. Support depends on the learner's browser, but current browsers handle CSS Grid well.
          - heading "Useful references" [level=2] [ref=e66]
          - list [ref=e67]:
            - listitem [ref=e68]:
              - link "MDN — CSS Grid Layout" [ref=e69] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
            - listitem [ref=e70]:
              - link "MDN — CSS grid properties reference" [ref=e71] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid
            - listitem [ref=e72]:
              - link "CSS-Tricks — A Complete Guide to Grid" [ref=e73] [cursor=pointer]:
                - /url: https://css-tricks.com/snippets/css/complete-guide-grid/
            - listitem [ref=e74]:
              - link "Can I use — CSS Grid Layout" [ref=e75] [cursor=pointer]:
                - /url: https://caniuse.com/css-grid
          - heading "Two-column layout (Canvas legacy grid)" [level=2] [ref=e76]
          - paragraph [ref=e77]: This example shows an 8/12 main column and a 4/12 side column using Canvas' grid classes. On small screens they stack vertically. Backgrounds are added here for visibility.
          - generic [ref=e79]:
            - generic [ref=e81]:
              - heading "Main column (8/12)" [level=5] [ref=e82]
              - paragraph [ref=e83]:
                - text: Uses
                - code [ref=e84]: col-xs-12 col-md-8
                - text: . Full width on small screens.
            - generic [ref=e86]:
              - heading "Side column (4/12)" [level=5] [ref=e87]
              - paragraph [ref=e88]:
                - text: Uses
                - code [ref=e89]: col-xs-12 col-md-4
                - text: . Stacks below on smaller screens.
          - generic [ref=e90]:
            - code [ref=e94]:
              - generic [ref=e95]: <div class="content-box">
              - generic [ref=e96]: <div class="grid-row">
              - generic [ref=e97]: <div class="col-xs-12 col-md-8">
              - generic [ref=e98]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e99]: <h5>Main column (8/12)</h5>
              - generic [ref=e100]: <p>Uses <code>col-xs-12 col-md-8</code>. Full width on small screens.</p>
              - generic [ref=e101]: </div>
              - generic [ref=e102]: </div>
              - generic [ref=e103]: <div class="col-xs-12 col-md-4">
              - generic [ref=e104]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e105]: <h5>Side column (4/12)</h5>
              - generic [ref=e106]: <p>Uses <code>col-xs-12 col-md-4</code>. Stacks below on smaller screens.</p>
              - generic [ref=e107]: </div>
              - generic [ref=e108]: </div>
              - generic [ref=e109]: </div>
              - generic [ref=e110]: </div>
            - button "Copy code to clipboard" [ref=e111] [cursor=pointer]: Copy
          - heading "Three-column layout (Canvas legacy grid)" [level=2] [ref=e112]
          - paragraph [ref=e113]:
            - text: This layout uses three equal-width columns (
            - code [ref=e114]: col-xs-12 col-md-4
            - text: ). On smaller screens each column becomes full width and stacks vertically.
          - generic [ref=e116]:
            - generic [ref=e118]:
              - paragraph [ref=e119]:
                - strong [ref=e120]: Column 1
              - paragraph [ref=e121]:
                - text: Uses
                - code [ref=e122]: col-xs-12 col-md-4
                - text: .
            - generic [ref=e124]:
              - paragraph [ref=e125]:
                - strong [ref=e126]: Column 2
              - paragraph [ref=e127]:
                - text: Also uses
                - code [ref=e128]: col-xs-12 col-md-4
                - text: .
            - generic [ref=e130]:
              - paragraph [ref=e131]:
                - strong [ref=e132]: Column 3
              - paragraph [ref=e133]: Same width as the others.
          - generic [ref=e134]:
            - code [ref=e138]:
              - generic [ref=e139]: <div class="content-box">
              - generic [ref=e140]: <div class="grid-row">
              - generic [ref=e141]: <div class="col-xs-12 col-md-4">
              - generic [ref=e142]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e143]: <p><strong>Column 1</strong></p>
              - generic [ref=e144]: <p>Uses <code>col-xs-12 col-md-4</code>.</p>
              - generic [ref=e145]: </div>
              - generic [ref=e146]: </div>
              - generic [ref=e147]: <div class="col-xs-12 col-md-4">
              - generic [ref=e148]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e149]: <p><strong>Column 2</strong></p>
              - generic [ref=e150]: <p>Also uses <code>col-xs-12 col-md-4</code>.</p>
              - generic [ref=e151]: </div>
              - generic [ref=e152]: </div>
              - generic [ref=e153]: <div class="col-xs-12 col-md-4">
              - generic [ref=e154]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e155]: <p><strong>Column 3</strong></p>
              - generic [ref=e156]: <p>Same width as the others.</p>
              - generic [ref=e157]: </div>
              - generic [ref=e158]: </div>
              - generic [ref=e159]: </div>
              - generic [ref=e160]: </div>
            - button "Copy code to clipboard" [ref=e161] [cursor=pointer]: Copy
          - heading "Nested grid (Canvas legacy grid)" [level=2] [ref=e162]
          - paragraph [ref=e163]:
            - text: A column can contain its own grid. In this example, the nested columns use
            - code [ref=e164]: col-xs-6
            - text: ", so they remain side by side at 50% width each. The Canvas legacy grid is fixed to its predefined breakpoints; you cannot change how the grid behaves using inline styles alone."
          - generic [ref=e166]:
            - generic [ref=e168]:
              - heading "Main column with nested content" [level=5] [ref=e169]
              - paragraph [ref=e170]: "This column contains a nested grid:"
              - generic [ref=e171]:
                - generic [ref=e173]: Nested 1 (6/12)
                - generic [ref=e175]: Nested 2 (6/12)
            - generic [ref=e177]:
              - heading "Side column" [level=5] [ref=e178]
              - paragraph [ref=e179]: This column sits beside the nested example.
          - generic [ref=e180]:
            - code [ref=e184]:
              - generic [ref=e185]: <div class="content-box">
              - generic [ref=e186]: <div class="grid-row">
              - generic [ref=e187]: <div class="col-xs-12 col-md-8">
              - generic [ref=e188]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e189]: <h5>Main column with nested content</h5>
              - generic [ref=e190]: <p>This column contains a nested grid:</p>
              - generic [ref=e191]: <div class="grid-row">
              - generic [ref=e192]: <div class="col-xs-6">
              - generic [ref=e193]: "<div style=\"background: #def; padding: 0.5rem;\">Nested 1 (6/12)</div>"
              - generic [ref=e194]: </div>
              - generic [ref=e195]: <div class="col-xs-6">
              - generic [ref=e196]: "<div style=\"background: #def; padding: 0.5rem;\">Nested 2 (6/12)</div>"
              - generic [ref=e197]: </div>
              - generic [ref=e198]: </div>
              - generic [ref=e199]: </div>
              - generic [ref=e200]: </div>
              - generic [ref=e201]: <div class="col-xs-12 col-md-4">
              - generic [ref=e202]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e203]: <h5>Side column</h5>
              - generic [ref=e204]: <p>This column sits beside the nested example.</p>
              - generic [ref=e205]: </div>
              - generic [ref=e206]: </div>
              - generic [ref=e207]: </div>
              - generic [ref=e208]: </div>
            - button "Copy code to clipboard" [ref=e209] [cursor=pointer]: Copy
          - heading "Full-width section (Canvas legacy grid)" [level=2] [ref=e210]
          - paragraph [ref=e211]:
            - text: A full-width row can be created using
            - code [ref=e212]: col-xs-12
            - text: . The example below uses a highlighted background for visibility.
          - generic [ref=e216]:
            - strong [ref=e217]: Full-width section
            - text: using
            - code [ref=e218]: col-xs-12
            - text: .
          - generic [ref=e219]:
            - code [ref=e223]:
              - generic [ref=e224]: <div class="content-box">
              - generic [ref=e225]: <div class="grid-row">
              - generic [ref=e226]: <div class="col-xs-12">
              - generic [ref=e227]: "<div style=\"background: #def; padding: 1rem;\">"
              - generic [ref=e228]: <strong>Full-width section</strong> using <code>col-xs-12</code>.
              - generic [ref=e229]: </div>
              - generic [ref=e230]: </div>
              - generic [ref=e231]: </div>
              - generic [ref=e232]: </div>
            - button "Copy code to clipboard" [ref=e233] [cursor=pointer]: Copy
          - heading "Modern CSS Grid with inline styles" [level=2] [ref=e234]
          - paragraph [ref=e235]: You can also build layouts using native CSS Grid directly in inline styles. This does not rely on Canvas' legacy CSS and gives you more control over how content wraps on different screen sizes.
          - paragraph [ref=e236]:
            - text: "The examples below use the same pattern:"
            - code [ref=e237]: "display: grid"
            - text: ","
            - code [ref=e238]: grid-template-columns
            - text: with
            - code [ref=e239]: repeat(auto-fit, minmax(...))
            - text: ", and a"
            - code [ref=e240]: gap
            - text: between items.
          - heading "Two-column responsive grid (inline styles)" [level=3] [ref=e241]
          - paragraph [ref=e242]:
            - text: This example uses
            - code [ref=e243]: auto-fit
            - text: and
            - code [ref=e244]: minmax
            - text: so that columns wrap when there is not enough space. On wider screens you will see two columns; on narrow screens they stack.
          - generic [ref=e245]:
            - generic [ref=e246]:
              - heading "Main content" [level=5] [ref=e247]
              - paragraph [ref=e248]: This is the first column. It uses CSS Grid with inline styles and a minimum width of 260px.
            - generic [ref=e249]:
              - heading "Supporting content" [level=5] [ref=e250]
              - paragraph [ref=e251]: When the available width is too small for two 260px columns, the items stack vertically.
          - generic [ref=e252]:
            - code [ref=e256]:
              - generic [ref=e257]: "<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;\">"
              - generic [ref=e258]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e259]: <h5>Main content</h5>
              - generic [ref=e260]: <p>
              - generic [ref=e261]: This is the first column. It uses CSS Grid with inline styles
              - generic [ref=e262]: and a minimum width of 260px.
              - generic [ref=e263]: </p>
              - generic [ref=e264]: </div>
              - generic [ref=e265]: "<div style=\"background: #def; padding: 0.75rem;\">"
              - generic [ref=e266]: <h5>Supporting content</h5>
              - generic [ref=e267]: <p>
              - generic [ref=e268]: When the available width is too small for two 260px columns,
              - generic [ref=e269]: the items stack vertically.
              - generic [ref=e270]: </p>
              - generic [ref=e271]: </div>
              - generic [ref=e272]: </div>
            - button "Copy code to clipboard" [ref=e273] [cursor=pointer]: Copy
          - heading "Auto-fit card layout (inline styles)" [level=3] [ref=e274]
          - paragraph [ref=e275]:
            - text: This grid uses
            - code [ref=e276]: auto-fit
            - text: and
            - code [ref=e277]: minmax
            - text: so that cards wrap automatically, showing two or more columns on wider screens and a single column on small screens.
          - generic [ref=e278]:
            - generic [ref=e279]:
              - heading "Card 1" [level=5] [ref=e280]
              - paragraph [ref=e281]: Responsive card using CSS Grid.
            - generic [ref=e282]:
              - heading "Card 2" [level=5] [ref=e283]
              - paragraph [ref=e284]: The grid fits as many cards per row as space allows.
            - generic [ref=e285]:
              - heading "Card 3" [level=5] [ref=e286]
              - paragraph [ref=e287]: On narrow screens, these cards stack vertically.
          - generic [ref=e288]:
            - code [ref=e292]:
              - generic [ref=e293]: "<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;\">"
              - generic [ref=e294]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e295]: <h5>Card 1</h5>
              - generic [ref=e296]: <p>Responsive card using CSS Grid.</p>
              - generic [ref=e297]: </div>
              - generic [ref=e298]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e299]: <h5>Card 2</h5>
              - generic [ref=e300]: <p>The grid fits as many cards per row as space allows.</p>
              - generic [ref=e301]: </div>
              - generic [ref=e302]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e303]: <h5>Card 3</h5>
              - generic [ref=e304]: <p>On narrow screens, these cards stack vertically.</p>
              - generic [ref=e305]: </div>
              - generic [ref=e306]: </div>
            - button "Copy code to clipboard" [ref=e307] [cursor=pointer]: Copy
          - heading "Header / main / aside layout (inline styles)" [level=3] [ref=e308]
          - paragraph [ref=e309]:
            - text: This layout uses a simple wrapper for the header and a nested CSS Grid for the main and aside areas. The inner grid uses
            - code [ref=e310]: auto-fit
            - text: and
            - code [ref=e311]: minmax
            - text: ", so the main and aside sections wrap in a similar way to the card example."
          - generic [ref=e312]:
            - generic [ref=e313]:
              - strong [ref=e314]: Header area
              - text: — this block always spans the full width above the content grid.
            - generic [ref=e315]:
              - generic [ref=e316]:
                - heading "Main content" [level=5] [ref=e317]
                - paragraph [ref=e318]: This is the main content area. On wider screens it appears beside the side panel.
              - generic [ref=e319]:
                - heading "Side panel" [level=5] [ref=e320]
                - paragraph [ref=e321]: This section sits next to the main content when there is enough space, and stacks below on narrow screens.
          - generic [ref=e322]:
            - code [ref=e326]:
              - generic [ref=e327]: <div>
              - generic [ref=e328]: "<div style=\"background: #ddeeff; padding: 0.75rem; margin-bottom: 1rem;\">"
              - generic [ref=e329]: <strong>Header area</strong> — this block always spans the full width above the content grid.
              - generic [ref=e330]: </div>
              - generic [ref=e331]: "<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;\">"
              - generic [ref=e332]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e333]: <h5>Main content</h5>
              - generic [ref=e334]: <p>This is the main content area. On wider screens it appears beside the side panel.</p>
              - generic [ref=e335]: </div>
              - generic [ref=e336]: "<div style=\"background: #def; padding: 0.75rem;\">"
              - generic [ref=e337]: <h5>Side panel</h5>
              - generic [ref=e338]: <p>
              - generic [ref=e339]: This section sits next to the main content when there is enough space,
              - generic [ref=e340]: and stacks below on narrow screens.
              - generic [ref=e341]: </p>
              - generic [ref=e342]: </div>
              - generic [ref=e343]: </div>
              - generic [ref=e344]: </div>
            - button "Copy code to clipboard" [ref=e345] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e346]
          - list [ref=e347]:
            - listitem [ref=e348]: Keep the reading order in the HTML logical (top to bottom, left to right). Do not rely on visual column position alone to convey meaning.
            - listitem [ref=e349]: Avoid very complex nested grids with many columns. They can become difficult to read on small screens and for screen reader users.
            - listitem [ref=e350]: Test layouts in Student View and on different screen sizes to confirm that columns stack in a readable order and that content does not become cramped.
            - listitem [ref=e351]: Use headings and clear labels within grid items so that the structure is understandable even if columns stack into a single column.
        - navigation "Page navigation" [ref=e352]:
          - link "← Previous Colours in Canvas" [ref=e354] [cursor=pointer]:
            - /url: /colours-in-canvas
            - generic [ref=e355]: ← Previous
            - generic [ref=e356]: Colours in Canvas
          - link "Next → Spacing" [ref=e358] [cursor=pointer]:
            - /url: /spacing
            - generic [ref=e359]: Next →
            - generic [ref=e360]: Spacing
      - generic "Site footer" [ref=e361]:
        - navigation "Site map" [ref=e362]:
          - generic [ref=e363]:
            - paragraph [ref=e364]: Canvas Content Styling Guide
            - link "Introduction" [ref=e365] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e366]:
            - paragraph [ref=e367]: HTML Basics in Canvas
            - link "Typography" [ref=e368] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e369] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e370] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e371]:
            - paragraph [ref=e372]: Colour and Branding
            - link "Colours in Canvas" [ref=e373] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e374]:
            - paragraph [ref=e375]: Layout and Spacing
            - link "Grid" [ref=e376] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e377] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e378] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e379]:
            - paragraph [ref=e380]: Canvas Components
            - link "Buttons" [ref=e381] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e382] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e383] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e384] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e385] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e386] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e387] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e388]:
            - paragraph [ref=e389]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e390] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e391] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e392] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e393]:
            - paragraph [ref=e394]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e395] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e396] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e397] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e398] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e399]:
          - paragraph [ref=e400]: © 2025–2026 Karl Horning
          - generic [ref=e401]:
            - link "Karl Horning on GitHub" [ref=e402] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e403]
            - link "Karl Horning on LinkedIn" [ref=e405] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e406]
            - link "Karl Horning's personal portfolio" [ref=e408] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e409]
  - button "Open Next.js Dev Tools" [ref=e418] [cursor=pointer]:
    - img [ref=e419]
  - alert [ref=e422]
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