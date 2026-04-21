# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /additional-examples — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 37

- Array []
+ Array [
+   Object {
+     "description": "Ensure the complementary landmark or aside is at top level",
+     "help": "Aside should not be contained in another landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright",
+     "id": "landmark-complementary-is-top-level",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "role": null,
+             },
+             "id": "landmark-is-top-level",
+             "impact": "moderate",
+             "message": "The null landmark is contained in another landmark.",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   The null landmark is contained in another landmark.",
+         "html": "<aside class=\"px-5 py-4 border border-[#dddddd] rounded-lg bg-[#f5f5f5] dark:bg-[#1f2937]\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".grid-cols-\\[minmax\\(0\\,2fr\\)_minmax\\(0\\,1fr\\)\\] > aside",
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
            - heading "Additional Examples" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 7 min read
          - paragraph [ref=e62]: This page collects extra patterns that you can copy, paste, and adapt in Canvas. All examples use semantic HTML and inline styles so they work within the Rich Content Editor. They are intended as starting points for common course content layouts.
          - heading "Useful references" [level=2] [ref=e63]
          - list [ref=e64]:
            - listitem [ref=e65]:
              - link "MDN Web Docs — HTML Reference" [ref=e66] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML
            - listitem [ref=e67]:
              - link "MDN Web Docs — CSS Reference" [ref=e68] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS
            - listitem [ref=e69]:
              - link "W3C WAI — Writing for Web Accessibility" [ref=e70] [cursor=pointer]:
                - /url: https://www.w3.org/WAI/tips/writing/
          - heading "Learning outcomes card" [level=2] [ref=e71]
          - paragraph [ref=e72]: A simple card for listing learning outcomes at the top of a page or module. The heading and list are grouped in a lightly shaded box.
          - generic [ref=e73]:
            - heading "By the end of this activity you should be able to:" [level=3] [ref=e74]
            - list [ref=e75]:
              - listitem [ref=e76]: Describe the key stages in the workflow.
              - listitem [ref=e77]: Explain the main advantages and limitations.
              - listitem [ref=e78]: Apply the method to a simple example.
          - generic [ref=e79]:
            - code [ref=e83]:
              - generic [ref=e84]: <div style="
              - generic [ref=e85]: "margin-bottom: 1rem;"
              - generic [ref=e86]: "background: #f5f5f5;"
              - generic [ref=e87]: "padding: 1rem 1.25rem;"
              - generic [ref=e88]: "border: 1px solid #dddddd;"
              - generic [ref=e89]: "border-radius: 0.5rem;"
              - generic [ref=e90]: "\">"
              - generic [ref=e91]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e92]: "By the end of this activity you should be able to:"
              - generic [ref=e93]: </h3>
              - generic [ref=e94]: "<ul style=\"margin: 0; padding-left: 1.25rem\">"
              - generic [ref=e95]: <li>Describe the key stages in the workflow.</li>
              - generic [ref=e96]: <li>Explain the main advantages and limitations.</li>
              - generic [ref=e97]: <li>Apply the method to a simple example.</li>
              - generic [ref=e98]: </ul>
              - generic [ref=e99]: </div>
            - button "Copy code to clipboard" [ref=e100] [cursor=pointer]: Copy
          - heading "Assessment summary panel" [level=2] [ref=e101]
          - paragraph [ref=e102]: A compact panel summarising key information about an assessment. Uses a simple two-column layout on larger screens and a stacked layout on narrow screens.
          - generic [ref=e103]:
            - heading "Assessment summary" [level=3] [ref=e104]
            - generic [ref=e105]:
              - generic [ref=e106]:
                - paragraph [ref=e107]: Due date
                - paragraph [ref=e108]:
                  - strong [ref=e109]: Friday 15 November, 16:00
              - generic [ref=e110]:
                - paragraph [ref=e111]: Weighting
                - paragraph [ref=e112]:
                  - strong [ref=e113]: 30% of module mark
              - generic [ref=e114]:
                - paragraph [ref=e115]: Format
                - paragraph [ref=e116]: Short written report (1500-2000 words)
              - generic [ref=e117]:
                - paragraph [ref=e118]: Submission
                - paragraph [ref=e119]: Upload as a single PDF via Canvas
          - generic [ref=e120]:
            - code [ref=e124]:
              - generic [ref=e125]: <div style="
              - generic [ref=e126]: "margin-bottom: 1rem;"
              - generic [ref=e127]: "border: 1px solid #dddddd;"
              - generic [ref=e128]: "border-radius: 0.5rem;"
              - generic [ref=e129]: "padding: 1rem 1.25rem;"
              - generic [ref=e130]: "background: #ffffff;"
              - generic [ref=e131]: "\">"
              - generic [ref=e132]: "<h3 style=\"margin-top: 0; margin-bottom: 0.75rem\">Assessment summary</h3>"
              - generic [ref=e133]: <div style="
              - generic [ref=e134]: "display: grid;"
              - generic [ref=e135]: "grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));"
              - generic [ref=e136]: "gap: 0.75rem 1.5rem;"
              - generic [ref=e137]: "\">"
              - generic [ref=e138]: <div>
              - generic [ref=e139]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Due date</p>"
              - generic [ref=e140]: "<p style=\"margin: 0.1rem 0 0\"><strong>Friday 15 November, 16:00</strong></p>"
              - generic [ref=e141]: </div>
              - generic [ref=e142]: <div>
              - generic [ref=e143]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Weighting</p>"
              - generic [ref=e144]: "<p style=\"margin: 0.1rem 0 0\"><strong>30% of module mark</strong></p>"
              - generic [ref=e145]: </div>
              - generic [ref=e146]: <div>
              - generic [ref=e147]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Format</p>"
              - generic [ref=e148]: "<p style=\"margin: 0.1rem 0 0\">Short written report (1500-2000 words)</p>"
              - generic [ref=e149]: </div>
              - generic [ref=e150]: <div>
              - generic [ref=e151]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Submission</p>"
              - generic [ref=e152]: "<p style=\"margin: 0.1rem 0 0\">Upload as a single PDF via Canvas</p>"
              - generic [ref=e153]: </div>
              - generic [ref=e154]: </div>
              - generic [ref=e155]: </div>
            - button "Copy code to clipboard" [ref=e156] [cursor=pointer]: Copy
          - heading "Call-to-action strip (link styled as a button)" [level=2] [ref=e157]
          - paragraph [ref=e158]: A full-width strip with a short message and a prominent link styled as a button. This can be used to point learners to the next activity or an important resource.
          - generic [ref=e159]:
            - paragraph [ref=e160]: Ready to continue? Work through the next activity to apply these ideas in practice.
            - link "Go to the next activity" [ref=e161] [cursor=pointer]:
              - /url: "#"
          - generic [ref=e162]:
            - code [ref=e166]:
              - generic [ref=e167]: <div style="
              - generic [ref=e168]: "margin-bottom: 1rem;"
              - generic [ref=e169]: "padding: 1rem 1.25rem;"
              - generic [ref=e170]: "background: #0000cd;"
              - generic [ref=e171]: "color: #ffffff;"
              - generic [ref=e172]: "border-radius: 0.5rem;"
              - generic [ref=e173]: "display: flex;"
              - generic [ref=e174]: "flex-wrap: wrap;"
              - generic [ref=e175]: "align-items: center;"
              - generic [ref=e176]: "justify-content: space-between;"
              - generic [ref=e177]: "gap: 0.75rem;"
              - generic [ref=e178]: "\">"
              - generic [ref=e179]: "<p style=\"margin: 0; font-size: 1rem\">"
              - generic [ref=e180]: Ready to continue? Work through the next activity to apply these ideas in practice.
              - generic [ref=e181]: </p>
              - generic [ref=e182]: <a href="#" style="
              - generic [ref=e183]: "display: inline-block;"
              - generic [ref=e184]: "padding: 0.6rem 1.1rem;"
              - generic [ref=e185]: "background: #ffffff;"
              - generic [ref=e186]: "color: #0000cd;"
              - generic [ref=e187]: "text-decoration: none;"
              - generic [ref=e188]: "border-radius: 999px;"
              - generic [ref=e189]: "font-weight: 600;"
              - generic [ref=e190]: "font-size: 0.95rem;"
              - generic [ref=e191]: "\">"
              - generic [ref=e192]: Go to the next activity
              - generic [ref=e193]: </a>
              - generic [ref=e194]: </div>
            - button "Copy code to clipboard" [ref=e195] [cursor=pointer]: Copy
          - heading "Side-by-side text and notes" [level=2] [ref=e196]
          - paragraph [ref=e197]: A two-column layout where the main explanation appears on the left and supporting notes or tips appear on the right. On narrow screens, the columns stack vertically.
          - generic [ref=e198]:
            - generic [ref=e199]:
              - heading "Main explanation" [level=3] [ref=e200]
              - paragraph [ref=e201]: Use this area for the primary content, such as a worked example, step-by-step explanation, or short case study.
              - paragraph [ref=e202]: Keep paragraphs short and use headings or lists to break up dense information.
            - complementary [ref=e203]:
              - heading "Notes and tips" [level=3] [ref=e204]
              - list [ref=e205]:
                - listitem [ref=e206]: Highlight common mistakes or misconceptions.
                - listitem [ref=e207]: Provide quick reminders of key definitions.
                - listitem [ref=e208]: Link to related resources or further reading.
          - generic [ref=e209]:
            - code [ref=e213]:
              - generic [ref=e214]: <div style="
              - generic [ref=e215]: "margin-bottom: 1rem;"
              - generic [ref=e216]: "display: grid;"
              - generic [ref=e217]: "grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);"
              - generic [ref=e218]: "gap: 1rem;"
              - generic [ref=e219]: "\">"
              - generic [ref=e220]: <div style="
              - generic [ref=e221]: "padding: 1rem 1.25rem;"
              - generic [ref=e222]: "border: 1px solid #dddddd;"
              - generic [ref=e223]: "border-radius: 0.5rem;"
              - generic [ref=e224]: "background: #ffffff;"
              - generic [ref=e225]: "\">"
              - generic [ref=e226]: "<h3 style=\"margin-top: 0; margin-bottom: 0.75rem\">Main explanation</h3>"
              - generic [ref=e227]: "<p style=\"margin-top: 0\">"
              - generic [ref=e228]: Use this area for the primary content, such as a worked example,
              - generic [ref=e229]: step-by-step explanation, or short case study.
              - generic [ref=e230]: </p>
              - generic [ref=e231]: <p>Keep paragraphs short and use headings or lists to break up dense information.</p>
              - generic [ref=e232]: </div>
              - generic [ref=e233]: <aside style="
              - generic [ref=e234]: "padding: 1rem 1.25rem;"
              - generic [ref=e235]: "border: 1px solid #dddddd;"
              - generic [ref=e236]: "border-radius: 0.5rem;"
              - generic [ref=e237]: "background: #f5f5f5;"
              - generic [ref=e238]: "\">"
              - generic [ref=e239]: "<h3 style=\"margin-top: 0; margin-bottom: 0.75rem\">Notes and tips</h3>"
              - generic [ref=e240]: "<ul style=\"margin: 0; padding-left: 1.25rem\">"
              - generic [ref=e241]: <li>Highlight common mistakes or misconceptions.</li>
              - generic [ref=e242]: <li>Provide quick reminders of key definitions.</li>
              - generic [ref=e243]: <li>Link to related resources or further reading.</li>
              - generic [ref=e244]: </ul>
              - generic [ref=e245]: </aside>
              - generic [ref=e246]: </div>
            - button "Copy code to clipboard" [ref=e247] [cursor=pointer]: Copy
          - heading "Resource cards grid" [level=2] [ref=e248]
          - paragraph [ref=e249]:
            - text: A responsive grid of cards for key resources or readings. The layout uses CSS Grid with
            - code [ref=e250]: auto-fit
            - text: and
            - code [ref=e251]: minmax()
            - text: to adapt to different screen sizes.
          - generic [ref=e252]:
            - generic [ref=e253]:
              - heading "Core reading" [level=3] [ref=e254]
              - paragraph [ref=e255]: Introduction to the main concepts covered in this week.
              - link "View article" [ref=e256] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e257]:
              - heading "Worked example" [level=3] [ref=e258]
              - paragraph [ref=e259]: Step-by-step example showing how to apply the method.
              - link "Open example" [ref=e260] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e261]:
              - heading "Optional extension" [level=3] [ref=e262]
              - paragraph [ref=e263]: Extra material if you would like to explore further.
              - link "Explore more" [ref=e264] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e265]:
            - code [ref=e269]:
              - generic [ref=e270]: <div style="
              - generic [ref=e271]: "margin-bottom: 1rem;"
              - generic [ref=e272]: "display: grid;"
              - generic [ref=e273]: "grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
              - generic [ref=e274]: "gap: 1rem;"
              - generic [ref=e275]: "\">"
              - generic [ref=e276]: <div style="
              - generic [ref=e277]: "border: 1px solid #dddddd;"
              - generic [ref=e278]: "border-radius: 0.5rem;"
              - generic [ref=e279]: "padding: 0.9rem 1rem;"
              - generic [ref=e280]: "background: #ffffff;"
              - generic [ref=e281]: "\">"
              - generic [ref=e282]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem; font-size: 1.05rem\">Core reading</h3>"
              - generic [ref=e283]: "<p style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e284]: Introduction to the main concepts covered in this week.
              - generic [ref=e285]: </p>
              - generic [ref=e286]: "<a href=\"#\" style=\"font-weight: 600\">View article</a>"
              - generic [ref=e287]: </div>
              - generic [ref=e288]: <div style="
              - generic [ref=e289]: "border: 1px solid #dddddd;"
              - generic [ref=e290]: "border-radius: 0.5rem;"
              - generic [ref=e291]: "padding: 0.9rem 1rem;"
              - generic [ref=e292]: "background: #ffffff;"
              - generic [ref=e293]: "\">"
              - generic [ref=e294]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem; font-size: 1.05rem\">Worked example</h3>"
              - generic [ref=e295]: "<p style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e296]: Step-by-step example showing how to apply the method.
              - generic [ref=e297]: </p>
              - generic [ref=e298]: "<a href=\"#\" style=\"font-weight: 600\">Open example</a>"
              - generic [ref=e299]: </div>
              - generic [ref=e300]: <div style="
              - generic [ref=e301]: "border: 1px solid #dddddd;"
              - generic [ref=e302]: "border-radius: 0.5rem;"
              - generic [ref=e303]: "padding: 0.9rem 1rem;"
              - generic [ref=e304]: "background: #ffffff;"
              - generic [ref=e305]: "\">"
              - generic [ref=e306]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem; font-size: 1.05rem\">Optional extension</h3>"
              - generic [ref=e307]: "<p style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e308]: Extra material if you would like to explore further.
              - generic [ref=e309]: </p>
              - generic [ref=e310]: "<a href=\"#\" style=\"font-weight: 600\">Explore more</a>"
              - generic [ref=e311]: </div>
              - generic [ref=e312]: </div>
            - button "Copy code to clipboard" [ref=e313] [cursor=pointer]: Copy
          - heading "Resource cards grid with images" [level=2] [ref=e314]
          - paragraph [ref=e315]: This version adds thumbnail images to each resource card using external placeholder image URLs. Replace the image sources and alt text with your own content when you are ready.
          - generic [ref=e316]:
            - generic [ref=e317]:
              - img "Illustrative placeholder image for core reading" [ref=e318]
              - generic [ref=e319]:
                - heading "Core reading" [level=3] [ref=e320]
                - paragraph [ref=e321]: Introduction to the main concepts covered in this week.
                - link "View article" [ref=e322] [cursor=pointer]:
                  - /url: "#"
            - generic [ref=e323]:
              - img "Illustrative placeholder image for a worked example" [ref=e324]
              - generic [ref=e325]:
                - heading "Worked example" [level=3] [ref=e326]
                - paragraph [ref=e327]: Step-by-step example showing how to apply the method.
                - link "Open example" [ref=e328] [cursor=pointer]:
                  - /url: "#"
            - generic [ref=e329]:
              - img "Illustrative placeholder image for an optional extension resource" [ref=e330]
              - generic [ref=e331]:
                - heading "Optional extension" [level=3] [ref=e332]
                - paragraph [ref=e333]: Extra material if you would like to explore further.
                - link "Explore more" [ref=e334] [cursor=pointer]:
                  - /url: "#"
          - generic [ref=e335]:
            - code [ref=e339]:
              - generic [ref=e340]: <div style="
              - generic [ref=e341]: "margin-bottom: 1rem;"
              - generic [ref=e342]: "display: grid;"
              - generic [ref=e343]: "grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
              - generic [ref=e344]: "gap: 1rem;"
              - generic [ref=e345]: "\">"
              - generic [ref=e346]: "<div style=\"border: 1px solid #dddddd; border-radius: 0.5rem; background: #ffffff; overflow: hidden;\">"
              - generic [ref=e347]: <img src="https://placehold.co/400x225?text=Core+reading"
              - generic [ref=e348]: alt="Illustrative placeholder image for core reading"
              - generic [ref=e349]: style="display:block; width:100%; height:auto;" />
              - generic [ref=e350]: "<div style=\"padding: 0.9rem 1rem\">"
              - generic [ref=e351]: <h3 style="margin:0 0 .5rem; font-size:1.05rem;">Core reading</h3>
              - generic [ref=e352]: <p style="margin:0 0 .5rem;">Introduction to the main concepts covered in this week.</p>
              - generic [ref=e353]: <a href="#" style="font-weight:600;">View article</a>
              - generic [ref=e354]: </div>
              - generic [ref=e355]: </div>
              - generic [ref=e356]: "<div style=\"border: 1px solid #dddddd; border-radius: 0.5rem; background: #ffffff; overflow: hidden;\">"
              - generic [ref=e357]: <img src="https://placehold.co/400x225?text=Worked+example"
              - generic [ref=e358]: alt="Illustrative placeholder image for a worked example"
              - generic [ref=e359]: style="display:block; width:100%; height:auto;" />
              - generic [ref=e360]: "<div style=\"padding: 0.9rem 1rem\">"
              - generic [ref=e361]: <h3 style="margin:0 0 .5rem; font-size:1.05rem;">Worked example</h3>
              - generic [ref=e362]: <p style="margin:0 0 .5rem;">Step-by-step example showing how to apply the method.</p>
              - generic [ref=e363]: <a href="#" style="font-weight:600;">Open example</a>
              - generic [ref=e364]: </div>
              - generic [ref=e365]: </div>
              - generic [ref=e366]: "<div style=\"border: 1px solid #dddddd; border-radius: 0.5rem; background: #ffffff; overflow: hidden;\">"
              - generic [ref=e367]: <img src="https://placehold.co/400x225?text=Optional+extension"
              - generic [ref=e368]: alt="Illustrative placeholder image for an optional extension resource"
              - generic [ref=e369]: style="display:block; width:100%; height:auto;" />
              - generic [ref=e370]: "<div style=\"padding: 0.9rem 1rem\">"
              - generic [ref=e371]: <h3 style="margin:0 0 .5rem; font-size:1.05rem;">Optional extension</h3>
              - generic [ref=e372]: <p style="margin:0 0 .5rem;">Extra material if you would like to explore further.</p>
              - generic [ref=e373]: <a href="#" style="font-weight:600;">Explore more</a>
              - generic [ref=e374]: </div>
              - generic [ref=e375]: </div>
              - generic [ref=e376]: </div>
            - button "Copy code to clipboard" [ref=e377] [cursor=pointer]: Copy
        - navigation "Page navigation" [ref=e378]:
          - link "← Previous Embedding External Media" [ref=e380] [cursor=pointer]:
            - /url: /embedding-external-media-in-canvas
            - generic [ref=e381]: ← Previous
            - generic [ref=e382]: Embedding External Media
      - generic "Site footer" [ref=e383]:
        - navigation "Site map" [ref=e384]:
          - generic [ref=e385]:
            - paragraph [ref=e386]: Canvas Content Styling Guide
            - link "Introduction" [ref=e387] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e388]:
            - paragraph [ref=e389]: HTML Basics in Canvas
            - link "Typography" [ref=e390] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e391] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e392] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e393]:
            - paragraph [ref=e394]: Colour and Branding
            - link "Colours in Canvas" [ref=e395] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e396]:
            - paragraph [ref=e397]: Layout and Spacing
            - link "Grid" [ref=e398] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e399] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e400] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e401]:
            - paragraph [ref=e402]: Canvas Components
            - link "Buttons" [ref=e403] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e404] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e405] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e406] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e407] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e408] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e409] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e410]:
            - paragraph [ref=e411]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e412] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e413] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e414] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e415]:
            - paragraph [ref=e416]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e417] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e418] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e419] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e420] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e421]:
          - paragraph [ref=e422]: © 2025–2026 Karl Horning
          - generic [ref=e423]:
            - link "Karl Horning on GitHub" [ref=e424] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e425]
            - link "Karl Horning on LinkedIn" [ref=e427] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e428]
            - link "Karl Horning's personal portfolio" [ref=e430] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e431]
  - button "Open Next.js Dev Tools" [ref=e440] [cursor=pointer]:
    - img [ref=e441]
  - alert [ref=e444]
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