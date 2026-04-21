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
            - heading "Grid" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 7 min read
          - paragraph [ref=e65]:
            - text: Canvas includes a legacy responsive grid system based on rows and columns. Columns adapt to different screen sizes using classes such as
            - code [ref=e66]: col-xs-12
            - text: (full width on small screens) and
            - code [ref=e67]: col-md-4
            - text: (four columns wide on medium screens). These classes are part of Canvas' older CSS and still work in this Canvas instance, but they may change in future if the underlying theme is updated.
          - paragraph [ref=e68]: You can also build layouts using native CSS Grid directly in inline styles. This does not rely on Canvas' legacy CSS. Support depends on the learner's browser, but current browsers handle CSS Grid well.
          - heading "Useful references" [level=2] [ref=e69]
          - list [ref=e70]:
            - listitem [ref=e71]:
              - link "MDN — CSS Grid Layout" [ref=e72] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
            - listitem [ref=e73]:
              - link "MDN — CSS grid properties reference" [ref=e74] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid
            - listitem [ref=e75]:
              - link "CSS-Tricks — A Complete Guide to Grid" [ref=e76] [cursor=pointer]:
                - /url: https://css-tricks.com/snippets/css/complete-guide-grid/
            - listitem [ref=e77]:
              - link "Can I use — CSS Grid Layout" [ref=e78] [cursor=pointer]:
                - /url: https://caniuse.com/css-grid
          - heading "Two-column layout (Canvas legacy grid)" [level=2] [ref=e79]
          - paragraph [ref=e80]: This example shows an 8/12 main column and a 4/12 side column using Canvas' grid classes. On small screens they stack vertically. Backgrounds are added here for visibility.
          - generic [ref=e82]:
            - generic [ref=e84]:
              - heading "Main column (8/12)" [level=5] [ref=e85]
              - paragraph [ref=e86]:
                - text: Uses
                - code [ref=e87]: col-xs-12 col-md-8
                - text: . Full width on small screens.
            - generic [ref=e89]:
              - heading "Side column (4/12)" [level=5] [ref=e90]
              - paragraph [ref=e91]:
                - text: Uses
                - code [ref=e92]: col-xs-12 col-md-4
                - text: . Stacks below on smaller screens.
          - generic [ref=e93]:
            - code [ref=e97]:
              - generic [ref=e98]: <div class="content-box">
              - generic [ref=e99]: <div class="grid-row">
              - generic [ref=e100]: <div class="col-xs-12 col-md-8">
              - generic [ref=e101]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e102]: <h5>Main column (8/12)</h5>
              - generic [ref=e103]: <p>Uses <code>col-xs-12 col-md-8</code>. Full width on small screens.</p>
              - generic [ref=e104]: </div>
              - generic [ref=e105]: </div>
              - generic [ref=e106]: <div class="col-xs-12 col-md-4">
              - generic [ref=e107]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e108]: <h5>Side column (4/12)</h5>
              - generic [ref=e109]: <p>Uses <code>col-xs-12 col-md-4</code>. Stacks below on smaller screens.</p>
              - generic [ref=e110]: </div>
              - generic [ref=e111]: </div>
              - generic [ref=e112]: </div>
              - generic [ref=e113]: </div>
            - button "Copy code to clipboard" [ref=e114] [cursor=pointer]: Copy
          - heading "Three-column layout (Canvas legacy grid)" [level=2] [ref=e115]
          - paragraph [ref=e116]:
            - text: This layout uses three equal-width columns (
            - code [ref=e117]: col-xs-12 col-md-4
            - text: ). On smaller screens each column becomes full width and stacks vertically.
          - generic [ref=e119]:
            - generic [ref=e121]:
              - paragraph [ref=e122]:
                - strong [ref=e123]: Column 1
              - paragraph [ref=e124]:
                - text: Uses
                - code [ref=e125]: col-xs-12 col-md-4
                - text: .
            - generic [ref=e127]:
              - paragraph [ref=e128]:
                - strong [ref=e129]: Column 2
              - paragraph [ref=e130]:
                - text: Also uses
                - code [ref=e131]: col-xs-12 col-md-4
                - text: .
            - generic [ref=e133]:
              - paragraph [ref=e134]:
                - strong [ref=e135]: Column 3
              - paragraph [ref=e136]: Same width as the others.
          - generic [ref=e137]:
            - code [ref=e141]:
              - generic [ref=e142]: <div class="content-box">
              - generic [ref=e143]: <div class="grid-row">
              - generic [ref=e144]: <div class="col-xs-12 col-md-4">
              - generic [ref=e145]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e146]: <p><strong>Column 1</strong></p>
              - generic [ref=e147]: <p>Uses <code>col-xs-12 col-md-4</code>.</p>
              - generic [ref=e148]: </div>
              - generic [ref=e149]: </div>
              - generic [ref=e150]: <div class="col-xs-12 col-md-4">
              - generic [ref=e151]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e152]: <p><strong>Column 2</strong></p>
              - generic [ref=e153]: <p>Also uses <code>col-xs-12 col-md-4</code>.</p>
              - generic [ref=e154]: </div>
              - generic [ref=e155]: </div>
              - generic [ref=e156]: <div class="col-xs-12 col-md-4">
              - generic [ref=e157]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e158]: <p><strong>Column 3</strong></p>
              - generic [ref=e159]: <p>Same width as the others.</p>
              - generic [ref=e160]: </div>
              - generic [ref=e161]: </div>
              - generic [ref=e162]: </div>
              - generic [ref=e163]: </div>
            - button "Copy code to clipboard" [ref=e164] [cursor=pointer]: Copy
          - heading "Nested grid (Canvas legacy grid)" [level=2] [ref=e165]
          - paragraph [ref=e166]:
            - text: A column can contain its own grid. In this example, the nested columns use
            - code [ref=e167]: col-xs-6
            - text: ", so they remain side by side at 50% width each. The Canvas legacy grid is fixed to its predefined breakpoints; you cannot change how the grid behaves using inline styles alone."
          - generic [ref=e169]:
            - generic [ref=e171]:
              - heading "Main column with nested content" [level=5] [ref=e172]
              - paragraph [ref=e173]: "This column contains a nested grid:"
              - generic [ref=e174]:
                - generic [ref=e176]: Nested 1 (6/12)
                - generic [ref=e178]: Nested 2 (6/12)
            - generic [ref=e180]:
              - heading "Side column" [level=5] [ref=e181]
              - paragraph [ref=e182]: This column sits beside the nested example.
          - generic [ref=e183]:
            - code [ref=e187]:
              - generic [ref=e188]: <div class="content-box">
              - generic [ref=e189]: <div class="grid-row">
              - generic [ref=e190]: <div class="col-xs-12 col-md-8">
              - generic [ref=e191]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e192]: <h5>Main column with nested content</h5>
              - generic [ref=e193]: <p>This column contains a nested grid:</p>
              - generic [ref=e194]: <div class="grid-row">
              - generic [ref=e195]: <div class="col-xs-6">
              - generic [ref=e196]: "<div style=\"background: #def; padding: 0.5rem;\">Nested 1 (6/12)</div>"
              - generic [ref=e197]: </div>
              - generic [ref=e198]: <div class="col-xs-6">
              - generic [ref=e199]: "<div style=\"background: #def; padding: 0.5rem;\">Nested 2 (6/12)</div>"
              - generic [ref=e200]: </div>
              - generic [ref=e201]: </div>
              - generic [ref=e202]: </div>
              - generic [ref=e203]: </div>
              - generic [ref=e204]: <div class="col-xs-12 col-md-4">
              - generic [ref=e205]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e206]: <h5>Side column</h5>
              - generic [ref=e207]: <p>This column sits beside the nested example.</p>
              - generic [ref=e208]: </div>
              - generic [ref=e209]: </div>
              - generic [ref=e210]: </div>
              - generic [ref=e211]: </div>
            - button "Copy code to clipboard" [ref=e212] [cursor=pointer]: Copy
          - heading "Full-width section (Canvas legacy grid)" [level=2] [ref=e213]
          - paragraph [ref=e214]:
            - text: A full-width row can be created using
            - code [ref=e215]: col-xs-12
            - text: . The example below uses a highlighted background for visibility.
          - generic [ref=e219]:
            - strong [ref=e220]: Full-width section
            - text: using
            - code [ref=e221]: col-xs-12
            - text: .
          - generic [ref=e222]:
            - code [ref=e226]:
              - generic [ref=e227]: <div class="content-box">
              - generic [ref=e228]: <div class="grid-row">
              - generic [ref=e229]: <div class="col-xs-12">
              - generic [ref=e230]: "<div style=\"background: #def; padding: 1rem;\">"
              - generic [ref=e231]: <strong>Full-width section</strong> using <code>col-xs-12</code>.
              - generic [ref=e232]: </div>
              - generic [ref=e233]: </div>
              - generic [ref=e234]: </div>
              - generic [ref=e235]: </div>
            - button "Copy code to clipboard" [ref=e236] [cursor=pointer]: Copy
          - heading "Modern CSS Grid with inline styles" [level=2] [ref=e237]
          - paragraph [ref=e238]: You can also build layouts using native CSS Grid directly in inline styles. This does not rely on Canvas' legacy CSS and gives you more control over how content wraps on different screen sizes.
          - paragraph [ref=e239]:
            - text: "The examples below use the same pattern:"
            - code [ref=e240]: "display: grid"
            - text: ","
            - code [ref=e241]: grid-template-columns
            - text: with
            - code [ref=e242]: repeat(auto-fit, minmax(...))
            - text: ", and a"
            - code [ref=e243]: gap
            - text: between items.
          - heading "Two-column responsive grid (inline styles)" [level=3] [ref=e244]
          - paragraph [ref=e245]:
            - text: This example uses
            - code [ref=e246]: auto-fit
            - text: and
            - code [ref=e247]: minmax
            - text: so that columns wrap when there is not enough space. On wider screens you will see two columns; on narrow screens they stack.
          - generic [ref=e248]:
            - generic [ref=e249]:
              - heading "Main content" [level=5] [ref=e250]
              - paragraph [ref=e251]: This is the first column. It uses CSS Grid with inline styles and a minimum width of 260px.
            - generic [ref=e252]:
              - heading "Supporting content" [level=5] [ref=e253]
              - paragraph [ref=e254]: When the available width is too small for two 260px columns, the items stack vertically.
          - generic [ref=e255]:
            - code [ref=e259]:
              - generic [ref=e260]: "<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;\">"
              - generic [ref=e261]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e262]: <h5>Main content</h5>
              - generic [ref=e263]: <p>
              - generic [ref=e264]: This is the first column. It uses CSS Grid with inline styles
              - generic [ref=e265]: and a minimum width of 260px.
              - generic [ref=e266]: </p>
              - generic [ref=e267]: </div>
              - generic [ref=e268]: "<div style=\"background: #def; padding: 0.75rem;\">"
              - generic [ref=e269]: <h5>Supporting content</h5>
              - generic [ref=e270]: <p>
              - generic [ref=e271]: When the available width is too small for two 260px columns,
              - generic [ref=e272]: the items stack vertically.
              - generic [ref=e273]: </p>
              - generic [ref=e274]: </div>
              - generic [ref=e275]: </div>
            - button "Copy code to clipboard" [ref=e276] [cursor=pointer]: Copy
          - heading "Auto-fit card layout (inline styles)" [level=3] [ref=e277]
          - paragraph [ref=e278]:
            - text: This grid uses
            - code [ref=e279]: auto-fit
            - text: and
            - code [ref=e280]: minmax
            - text: so that cards wrap automatically, showing two or more columns on wider screens and a single column on small screens.
          - generic [ref=e281]:
            - generic [ref=e282]:
              - heading "Card 1" [level=5] [ref=e283]
              - paragraph [ref=e284]: Responsive card using CSS Grid.
            - generic [ref=e285]:
              - heading "Card 2" [level=5] [ref=e286]
              - paragraph [ref=e287]: The grid fits as many cards per row as space allows.
            - generic [ref=e288]:
              - heading "Card 3" [level=5] [ref=e289]
              - paragraph [ref=e290]: On narrow screens, these cards stack vertically.
          - generic [ref=e291]:
            - code [ref=e295]:
              - generic [ref=e296]: "<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;\">"
              - generic [ref=e297]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e298]: <h5>Card 1</h5>
              - generic [ref=e299]: <p>Responsive card using CSS Grid.</p>
              - generic [ref=e300]: </div>
              - generic [ref=e301]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e302]: <h5>Card 2</h5>
              - generic [ref=e303]: <p>The grid fits as many cards per row as space allows.</p>
              - generic [ref=e304]: </div>
              - generic [ref=e305]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e306]: <h5>Card 3</h5>
              - generic [ref=e307]: <p>On narrow screens, these cards stack vertically.</p>
              - generic [ref=e308]: </div>
              - generic [ref=e309]: </div>
            - button "Copy code to clipboard" [ref=e310] [cursor=pointer]: Copy
          - heading "Header / main / aside layout (inline styles)" [level=3] [ref=e311]
          - paragraph [ref=e312]:
            - text: This layout uses a simple wrapper for the header and a nested CSS Grid for the main and aside areas. The inner grid uses
            - code [ref=e313]: auto-fit
            - text: and
            - code [ref=e314]: minmax
            - text: ", so the main and aside sections wrap in a similar way to the card example."
          - generic [ref=e315]:
            - generic [ref=e316]:
              - strong [ref=e317]: Header area
              - text: — this block always spans the full width above the content grid.
            - generic [ref=e318]:
              - generic [ref=e319]:
                - heading "Main content" [level=5] [ref=e320]
                - paragraph [ref=e321]: This is the main content area. On wider screens it appears beside the side panel.
              - generic [ref=e322]:
                - heading "Side panel" [level=5] [ref=e323]
                - paragraph [ref=e324]: This section sits next to the main content when there is enough space, and stacks below on narrow screens.
          - generic [ref=e325]:
            - code [ref=e329]:
              - generic [ref=e330]: <div>
              - generic [ref=e331]: "<div style=\"background: #ddeeff; padding: 0.75rem; margin-bottom: 1rem;\">"
              - generic [ref=e332]: <strong>Header area</strong> — this block always spans the full width above the content grid.
              - generic [ref=e333]: </div>
              - generic [ref=e334]: "<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;\">"
              - generic [ref=e335]: "<div style=\"background: #eef; padding: 0.75rem;\">"
              - generic [ref=e336]: <h5>Main content</h5>
              - generic [ref=e337]: <p>This is the main content area. On wider screens it appears beside the side panel.</p>
              - generic [ref=e338]: </div>
              - generic [ref=e339]: "<div style=\"background: #def; padding: 0.75rem;\">"
              - generic [ref=e340]: <h5>Side panel</h5>
              - generic [ref=e341]: <p>
              - generic [ref=e342]: This section sits next to the main content when there is enough space,
              - generic [ref=e343]: and stacks below on narrow screens.
              - generic [ref=e344]: </p>
              - generic [ref=e345]: </div>
              - generic [ref=e346]: </div>
              - generic [ref=e347]: </div>
            - button "Copy code to clipboard" [ref=e348] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e349]
          - list [ref=e350]:
            - listitem [ref=e351]: Keep the reading order in the HTML logical (top to bottom, left to right). Do not rely on visual column position alone to convey meaning.
            - listitem [ref=e352]: Avoid very complex nested grids with many columns. They can become difficult to read on small screens and for screen reader users.
            - listitem [ref=e353]: Test layouts in Student View and on different screen sizes to confirm that columns stack in a readable order and that content does not become cramped.
            - listitem [ref=e354]: Use headings and clear labels within grid items so that the structure is understandable even if columns stack into a single column.
        - navigation "Page navigation" [ref=e355]:
          - link "← Previous Colours in Canvas" [ref=e357] [cursor=pointer]:
            - /url: /colours-in-canvas
            - generic [ref=e358]: ← Previous
            - generic [ref=e359]: Colours in Canvas
          - link "Next → Spacing" [ref=e361] [cursor=pointer]:
            - /url: /spacing
            - generic [ref=e362]: Next →
            - generic [ref=e363]: Spacing
      - generic "Site footer" [ref=e364]:
        - navigation "Site map" [ref=e365]:
          - generic [ref=e366]:
            - paragraph [ref=e367]: Canvas Content Styling Guide
            - link "Introduction" [ref=e368] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e369]:
            - paragraph [ref=e370]: HTML Basics in Canvas
            - link "Typography" [ref=e371] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e372] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e373] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e374]:
            - paragraph [ref=e375]: Colour and Branding
            - link "Colours in Canvas" [ref=e376] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e377]:
            - paragraph [ref=e378]: Layout and Spacing
            - link "Grid" [ref=e379] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e380] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e381] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e382]:
            - paragraph [ref=e383]: Canvas Components
            - link "Buttons" [ref=e384] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e385] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e386] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e387] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e388] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e389] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e390] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e391]:
            - paragraph [ref=e392]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e393] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e394] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e395] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e396]:
            - paragraph [ref=e397]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e398] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e399] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e400] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e401] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e402]:
          - paragraph [ref=e403]: © 2025–2026 Karl Horning
          - generic [ref=e404]:
            - link "Karl Horning on GitHub" [ref=e405] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e406]
            - link "Karl Horning on LinkedIn" [ref=e408] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e409]
            - link "Karl Horning's personal portfolio" [ref=e411] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e412]
  - button "Open Next.js Dev Tools" [ref=e421] [cursor=pointer]:
    - img [ref=e422]
  - alert [ref=e425]
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