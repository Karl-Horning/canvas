# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /tables — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 80

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
+           ".overflow-x-auto.mb-4:nth-child(9)",
+         ],
+       },
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
+           ".overflow-x-auto.mb-4:nth-child(13)",
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
            - heading "Tables" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 6 min read
          - paragraph [ref=e65]:
            - text: Tables in Canvas are created using standard HTML
            - code [ref=e66]: <table>
            - text: markup. Canvas also provides a set of legacy utility classes (such as
            - code [ref=e67]: ic-Table
            - text: and
            - code [ref=e68]: ic-Table--striped
            - text: ) that control visual styling. These classes are still supported in this Canvas instance, but are not actively maintained by Instructure and may change in future updates.
          - paragraph [ref=e69]: You can safely combine these legacy classes with inline CSS to improve readability and accessibility, or use inline CSS alone if you prefer a fully self-contained, modern HTML approach.
          - heading "Useful references" [level=2] [ref=e70]
          - list [ref=e71]:
            - listitem [ref=e72]:
              - link "MDN — HTML <table> element" [ref=e73] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
                - text: MDN — HTML
                - code [ref=e74]: <table>
                - text: element
            - listitem [ref=e75]:
              - link "MDN — Table accessibility guide" [ref=e76] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility
            - listitem [ref=e77]:
              - link "W3C WAI — Tables Tutorial" [ref=e78] [cursor=pointer]:
                - /url: https://www.w3.org/WAI/tutorials/tables/
          - heading "Default table (Canvas legacy classes)" [level=2] [ref=e79]
          - paragraph [ref=e80]:
            - text: The base
            - code [ref=e81]: ic-Table
            - text: class applies Canvas' default table styling without stripes or hover effects. This class comes from Canvas' legacy CSS, but is still useful for quickly applying a consistent table style.
          - table [ref=e83]:
            - rowgroup [ref=e84]:
              - row "Name Email address Section Role" [ref=e85]:
                - columnheader "Name" [ref=e86]
                - columnheader "Email address" [ref=e87]
                - columnheader "Section" [ref=e88]
                - columnheader "Role" [ref=e89]
            - rowgroup [ref=e90]:
              - row "Alex Rivers alex.rivers@example.com Advanced students Student" [ref=e91]:
                - cell "Alex Rivers" [ref=e92]
                - cell "alex.rivers@example.com" [ref=e93]
                - cell "Advanced students" [ref=e94]
                - cell "Student" [ref=e95]
              - row "Jamie Patel jamie.patel@example.com Advanced students Student" [ref=e96]:
                - cell "Jamie Patel" [ref=e97]
                - cell "jamie.patel@example.com" [ref=e98]
                - cell "Advanced students" [ref=e99]
                - cell "Student" [ref=e100]
              - row "Morgan Lee morgan.lee@example.com Advanced students Student" [ref=e101]:
                - cell "Morgan Lee" [ref=e102]
                - cell "morgan.lee@example.com" [ref=e103]
                - cell "Advanced students" [ref=e104]
                - cell "Student" [ref=e105]
          - generic [ref=e106]:
            - code [ref=e110]:
              - generic [ref=e111]: <table class="ic-Table">
              - generic [ref=e112]: <thead>
              - generic [ref=e113]: <tr>
              - generic [ref=e114]: <th>Name</th>
              - generic [ref=e115]: <th>Email address</th>
              - generic [ref=e116]: <th>Section</th>
              - generic [ref=e117]: <th>Role</th>
              - generic [ref=e118]: </tr>
              - generic [ref=e119]: </thead>
              - generic [ref=e120]: <tbody>
              - generic [ref=e121]: <tr>
              - generic [ref=e122]: <td>Alex Rivers</td>
              - generic [ref=e123]: <td>alex.rivers@example.com</td>
              - generic [ref=e124]: <td>Advanced students</td>
              - generic [ref=e125]: <td>Student</td>
              - generic [ref=e126]: </tr>
              - generic [ref=e127]: <tr>
              - generic [ref=e128]: <td>Jamie Patel</td>
              - generic [ref=e129]: <td>jamie.patel@example.com</td>
              - generic [ref=e130]: <td>Advanced students</td>
              - generic [ref=e131]: <td>Student</td>
              - generic [ref=e132]: </tr>
              - generic [ref=e133]: <tr>
              - generic [ref=e134]: <td>Morgan Lee</td>
              - generic [ref=e135]: <td>morgan.lee@example.com</td>
              - generic [ref=e136]: <td>Advanced students</td>
              - generic [ref=e137]: <td>Student</td>
              - generic [ref=e138]: </tr>
              - generic [ref=e139]: </tbody>
              - generic [ref=e140]: </table>
            - button "Copy code to clipboard" [ref=e141] [cursor=pointer]: Copy
          - heading "Striped table (Canvas legacy classes)" [level=2] [ref=e142]
          - paragraph [ref=e143]:
            - text: Add
            - code [ref=e144]: ic-Table--striped
            - text: for alternating row stripes and
            - code [ref=e145]: ic-Table--hover-row
            - text: to highlight rows on hover. These classes are part of Canvas' legacy utility CSS, but are still available for course content.
          - table [ref=e147]:
            - rowgroup [ref=e148]:
              - row "Name Email address Section Role" [ref=e149]:
                - columnheader "Name" [ref=e150]
                - columnheader "Email address" [ref=e151]
                - columnheader "Section" [ref=e152]
                - columnheader "Role" [ref=e153]
            - rowgroup [ref=e154]:
              - row "Alex Rivers alex.rivers@example.com Advanced students Student" [ref=e155]:
                - cell "Alex Rivers" [ref=e156]
                - cell "alex.rivers@example.com" [ref=e157]
                - cell "Advanced students" [ref=e158]
                - cell "Student" [ref=e159]
              - row "Jamie Patel jamie.patel@example.com Advanced students Student" [ref=e160]:
                - cell "Jamie Patel" [ref=e161]
                - cell "jamie.patel@example.com" [ref=e162]
                - cell "Advanced students" [ref=e163]
                - cell "Student" [ref=e164]
              - row "Morgan Lee morgan.lee@example.com Advanced students Student" [ref=e165]:
                - cell "Morgan Lee" [ref=e166]
                - cell "morgan.lee@example.com" [ref=e167]
                - cell "Advanced students" [ref=e168]
                - cell "Student" [ref=e169]
          - generic [ref=e170]:
            - code [ref=e174]:
              - generic [ref=e175]: <table class="ic-Table ic-Table--hover-row ic-Table--striped">
              - generic [ref=e176]: <thead>
              - generic [ref=e177]: <tr>
              - generic [ref=e178]: <th>Name</th>
              - generic [ref=e179]: <th>Email address</th>
              - generic [ref=e180]: <th>Section</th>
              - generic [ref=e181]: <th>Role</th>
              - generic [ref=e182]: </tr>
              - generic [ref=e183]: </thead>
              - generic [ref=e184]: <tbody>
              - generic [ref=e185]: <tr>
              - generic [ref=e186]: <td>Alex Rivers</td>
              - generic [ref=e187]: <td>alex.rivers@example.com</td>
              - generic [ref=e188]: <td>Advanced students</td>
              - generic [ref=e189]: <td>Student</td>
              - generic [ref=e190]: </tr>
              - generic [ref=e191]: <tr>
              - generic [ref=e192]: <td>Jamie Patel</td>
              - generic [ref=e193]: <td>jamie.patel@example.com</td>
              - generic [ref=e194]: <td>Advanced students</td>
              - generic [ref=e195]: <td>Student</td>
              - generic [ref=e196]: </tr>
              - generic [ref=e197]: <tr>
              - generic [ref=e198]: <td>Morgan Lee</td>
              - generic [ref=e199]: <td>morgan.lee@example.com</td>
              - generic [ref=e200]: <td>Advanced students</td>
              - generic [ref=e201]: <td>Student</td>
              - generic [ref=e202]: </tr>
              - generic [ref=e203]: </tbody>
              - generic [ref=e204]: </table>
            - button "Copy code to clipboard" [ref=e205] [cursor=pointer]: Copy
          - heading "Condensed striped table (Canvas legacy classes)" [level=2] [ref=e206]
          - paragraph [ref=e207]:
            - text: Add
            - code [ref=e208]: ic-Table--condensed
            - text: to reduce vertical spacing. This can be useful when displaying tables with many rows.
          - table [ref=e210]:
            - rowgroup [ref=e211]:
              - row "Column A Column B Column C" [ref=e212]:
                - columnheader "Column A" [ref=e213]
                - columnheader "Column B" [ref=e214]
                - columnheader "Column C" [ref=e215]
            - rowgroup [ref=e216]:
              - row "Row 1, A Row 1, B Row 1, C" [ref=e217]:
                - cell "Row 1, A" [ref=e218]
                - cell "Row 1, B" [ref=e219]
                - cell "Row 1, C" [ref=e220]
              - row "Row 2, A Row 2, B Row 2, C" [ref=e221]:
                - cell "Row 2, A" [ref=e222]
                - cell "Row 2, B" [ref=e223]
                - cell "Row 2, C" [ref=e224]
              - row "Row 3, A Row 3, B Row 3, C" [ref=e225]:
                - cell "Row 3, A" [ref=e226]
                - cell "Row 3, B" [ref=e227]
                - cell "Row 3, C" [ref=e228]
          - generic [ref=e229]:
            - code [ref=e233]:
              - generic [ref=e234]: <table class="ic-Table ic-Table--striped ic-Table--hover-row ic-Table--condensed">
              - generic [ref=e235]: <thead>
              - generic [ref=e236]: <tr>
              - generic [ref=e237]: <th>Column A</th>
              - generic [ref=e238]: <th>Column B</th>
              - generic [ref=e239]: <th>Column C</th>
              - generic [ref=e240]: </tr>
              - generic [ref=e241]: </thead>
              - generic [ref=e242]: <tbody>
              - generic [ref=e243]: <tr>
              - generic [ref=e244]: <td>Row 1, A</td>
              - generic [ref=e245]: <td>Row 1, B</td>
              - generic [ref=e246]: <td>Row 1, C</td>
              - generic [ref=e247]: </tr>
              - generic [ref=e248]: <tr>
              - generic [ref=e249]: <td>Row 2, A</td>
              - generic [ref=e250]: <td>Row 2, B</td>
              - generic [ref=e251]: <td>Row 2, C</td>
              - generic [ref=e252]: </tr>
              - generic [ref=e253]: <tr>
              - generic [ref=e254]: <td>Row 3, A</td>
              - generic [ref=e255]: <td>Row 3, B</td>
              - generic [ref=e256]: <td>Row 3, C</td>
              - generic [ref=e257]: </tr>
              - generic [ref=e258]: </tbody>
              - generic [ref=e259]: </table>
            - button "Copy code to clipboard" [ref=e260] [cursor=pointer]: Copy
          - heading "Modern accessible table (inline CSS only)" [level=2] [ref=e261]
          - paragraph [ref=e262]: "You can also create tables using standard HTML and inline CSS without relying on Canvas' legacy classes. The example below demonstrates a more accessible pattern, including:"
          - list [ref=e263]:
            - listitem [ref=e264]:
              - text: a
              - code [ref=e265]: <caption>
              - text: describing the table
            - listitem [ref=e266]:
              - code [ref=e267]: scope="col"
              - text: and
              - code [ref=e268]: scope="row"
              - text: to help screen readers understand headers
            - listitem [ref=e269]: clear borders and zebra striping defined with inline CSS
          - 'table "Example: Module weekly activities" [ref=e271]':
            - caption [ref=e272]: "Example: Module weekly activities"
            - rowgroup [ref=e273]:
              - row "Week Topic Activities" [ref=e274]:
                - columnheader "Week" [ref=e275]
                - columnheader "Topic" [ref=e276]
                - columnheader "Activities" [ref=e277]
            - rowgroup [ref=e278]:
              - row "1 Introduction to the module Welcome video, syllabus quiz" [ref=e279]:
                - rowheader "1" [ref=e280]
                - cell "Introduction to the module" [ref=e281]
                - cell "Welcome video, syllabus quiz" [ref=e282]
              - row "2 Research basics Reading task, short discussion post" [ref=e283]:
                - rowheader "2" [ref=e284]
                - cell "Research basics" [ref=e285]
                - cell "Reading task, short discussion post" [ref=e286]
              - row "3 Literature searching Video demonstration, practice worksheet" [ref=e287]:
                - rowheader "3" [ref=e288]
                - cell "Literature searching" [ref=e289]
                - cell "Video demonstration, practice worksheet" [ref=e290]
          - generic [ref=e291]:
            - code [ref=e295]:
              - generic [ref=e296]: "<table style=\"border-collapse: collapse; width: 100%; margin-bottom: 1rem; font-size: 0.95rem;\">"
              - generic [ref=e297]: "<caption style=\"text-align: left; font-weight: bold; padding: 0.5rem 0;\">"
              - generic [ref=e298]: "Example: Module weekly activities"
              - generic [ref=e299]: </caption>
              - generic [ref=e300]: <thead>
              - generic [ref=e301]: "<tr style=\"background: #f0f0f0;\">"
              - generic [ref=e302]: "<th scope=\"col\" style=\"border: 1px solid #ccc; padding: 0.5rem;\">Week</th>"
              - generic [ref=e303]: "<th scope=\"col\" style=\"border: 1px solid #ccc; padding: 0.5rem;\">Topic</th>"
              - generic [ref=e304]: "<th scope=\"col\" style=\"border: 1px solid #ccc; padding: 0.5rem;\">Activities</th>"
              - generic [ref=e305]: </tr>
              - generic [ref=e306]: </thead>
              - generic [ref=e307]: <tbody>
              - generic [ref=e308]: "<tr style=\"background: #ffffff;\">"
              - generic [ref=e309]: "<th scope=\"row\" style=\"border: 1px solid #ccc; padding: 0.5rem;\">1</th>"
              - generic [ref=e310]: "<td style=\"border: 1px solid #ccc; padding: 0.5rem;\">Introduction to the module</td>"
              - generic [ref=e311]: "<td style=\"border: 1px solid #ccc; padding: 0.5rem;\">Welcome video, syllabus quiz</td>"
              - generic [ref=e312]: </tr>
              - generic [ref=e313]: "<tr style=\"background: #f9f9f9;\">"
              - generic [ref=e314]: "<th scope=\"row\" style=\"border: 1px solid #ccc; padding: 0.5rem;\">2</th>"
              - generic [ref=e315]: "<td style=\"border: 1px solid #ccc; padding: 0.5rem;\">Research basics</td>"
              - generic [ref=e316]: "<td style=\"border: 1px solid #ccc; padding: 0.5rem;\">Reading task, short discussion post</td>"
              - generic [ref=e317]: </tr>
              - generic [ref=e318]: "<tr style=\"background: #ffffff;\">"
              - generic [ref=e319]: "<th scope=\"row\" style=\"border: 1px solid #ccc; padding: 0.5rem;\">3</th>"
              - generic [ref=e320]: "<td style=\"border: 1px solid #ccc; padding: 0.5rem;\">Literature searching</td>"
              - generic [ref=e321]: "<td style=\"border: 1px solid #ccc; padding: 0.5rem;\">Video demonstration, practice worksheet</td>"
              - generic [ref=e322]: </tr>
              - generic [ref=e323]: </tbody>
              - generic [ref=e324]: </table>
            - button "Copy code to clipboard" [ref=e325] [cursor=pointer]: Copy
          - heading "Accessibility notes" [level=2] [ref=e326]
          - paragraph [ref=e327]: Tables should only be used for data that is genuinely tabular (for example, timetables, mark schemes, or comparisons). Avoid using tables purely for layout, as this can create significant barriers for screen reader users and learners on small screens.
          - paragraph [ref=e328]: "For accessible tables:"
          - list [ref=e329]:
            - listitem [ref=e330]:
              - text: Always include a clear heading or
              - code [ref=e331]: <caption>
              - text: explaining what the table shows.
            - listitem [ref=e332]:
              - text: Use
              - code [ref=e333]: <th>
              - text: for header cells, and add
              - code [ref=e334]: scope="col"
              - text: for column headers and
              - code [ref=e335]: scope="row"
              - text: for row headers where appropriate.
            - listitem [ref=e336]: Keep table structures as simple as possible. Avoid nested tables or heavily merged cells unless absolutely necessary.
            - listitem [ref=e337]: Do not rely on colour alone to communicate meaning within a table — include text labels or symbols as well.
        - navigation "Page navigation" [ref=e338]:
          - link "← Previous Lists" [ref=e340] [cursor=pointer]:
            - /url: /lists
            - generic [ref=e341]: ← Previous
            - generic [ref=e342]: Lists
          - link "Next → Colours in Canvas" [ref=e344] [cursor=pointer]:
            - /url: /colours-in-canvas
            - generic [ref=e345]: Next →
            - generic [ref=e346]: Colours in Canvas
      - generic "Site footer" [ref=e347]:
        - navigation "Site map" [ref=e348]:
          - generic [ref=e349]:
            - paragraph [ref=e350]: Canvas Content Styling Guide
            - link "Introduction" [ref=e351] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e352]:
            - paragraph [ref=e353]: HTML Basics in Canvas
            - link "Typography" [ref=e354] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e355] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e356] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e357]:
            - paragraph [ref=e358]: Colour and Branding
            - link "Colours in Canvas" [ref=e359] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e360]:
            - paragraph [ref=e361]: Layout and Spacing
            - link "Grid" [ref=e362] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e363] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e364] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e365]:
            - paragraph [ref=e366]: Canvas Components
            - link "Buttons" [ref=e367] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e368] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e369] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e370] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e371] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e372] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e373] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e374]:
            - paragraph [ref=e375]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e376] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e377] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e378] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e379]:
            - paragraph [ref=e380]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e381] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e382] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e383] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e384] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e385]:
          - paragraph [ref=e386]: © 2025–2026 Karl Horning
          - generic [ref=e387]:
            - link "Karl Horning on GitHub" [ref=e388] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e389]
            - link "Karl Horning on LinkedIn" [ref=e391] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e392]
            - link "Karl Horning's personal portfolio" [ref=e394] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e395]
  - button "Open Next.js Dev Tools" [ref=e404] [cursor=pointer]:
    - img [ref=e405]
  - alert [ref=e408]
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