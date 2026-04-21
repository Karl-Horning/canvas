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
            - heading "Additional Examples" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 7 min read
          - paragraph [ref=e65]: This page collects extra patterns that you can copy, paste, and adapt in Canvas. All examples use semantic HTML and inline styles so they work within the Rich Content Editor. They are intended as starting points for common course content layouts.
          - heading "Useful references" [level=2] [ref=e66]
          - list [ref=e67]:
            - listitem [ref=e68]:
              - link "MDN Web Docs — HTML Reference" [ref=e69] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML
            - listitem [ref=e70]:
              - link "MDN Web Docs — CSS Reference" [ref=e71] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS
            - listitem [ref=e72]:
              - link "W3C WAI — Writing for Web Accessibility" [ref=e73] [cursor=pointer]:
                - /url: https://www.w3.org/WAI/tips/writing/
          - heading "Learning outcomes card" [level=2] [ref=e74]
          - paragraph [ref=e75]: A simple card for listing learning outcomes at the top of a page or module. The heading and list are grouped in a lightly shaded box.
          - generic [ref=e76]:
            - heading "By the end of this activity you should be able to:" [level=3] [ref=e77]
            - list [ref=e78]:
              - listitem [ref=e79]: Describe the key stages in the workflow.
              - listitem [ref=e80]: Explain the main advantages and limitations.
              - listitem [ref=e81]: Apply the method to a simple example.
          - generic [ref=e82]:
            - code [ref=e86]:
              - generic [ref=e87]: <div style="
              - generic [ref=e88]: "margin-bottom: 1rem;"
              - generic [ref=e89]: "background: #f5f5f5;"
              - generic [ref=e90]: "padding: 1rem 1.25rem;"
              - generic [ref=e91]: "border: 1px solid #dddddd;"
              - generic [ref=e92]: "border-radius: 0.5rem;"
              - generic [ref=e93]: "\">"
              - generic [ref=e94]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e95]: "By the end of this activity you should be able to:"
              - generic [ref=e96]: </h3>
              - generic [ref=e97]: "<ul style=\"margin: 0; padding-left: 1.25rem\">"
              - generic [ref=e98]: <li>Describe the key stages in the workflow.</li>
              - generic [ref=e99]: <li>Explain the main advantages and limitations.</li>
              - generic [ref=e100]: <li>Apply the method to a simple example.</li>
              - generic [ref=e101]: </ul>
              - generic [ref=e102]: </div>
            - button "Copy code to clipboard" [ref=e103] [cursor=pointer]: Copy
          - heading "Assessment summary panel" [level=2] [ref=e104]
          - paragraph [ref=e105]: A compact panel summarising key information about an assessment. Uses a simple two-column layout on larger screens and a stacked layout on narrow screens.
          - generic [ref=e106]:
            - heading "Assessment summary" [level=3] [ref=e107]
            - generic [ref=e108]:
              - generic [ref=e109]:
                - paragraph [ref=e110]: Due date
                - paragraph [ref=e111]:
                  - strong [ref=e112]: Friday 15 November, 16:00
              - generic [ref=e113]:
                - paragraph [ref=e114]: Weighting
                - paragraph [ref=e115]:
                  - strong [ref=e116]: 30% of module mark
              - generic [ref=e117]:
                - paragraph [ref=e118]: Format
                - paragraph [ref=e119]: Short written report (1500-2000 words)
              - generic [ref=e120]:
                - paragraph [ref=e121]: Submission
                - paragraph [ref=e122]: Upload as a single PDF via Canvas
          - generic [ref=e123]:
            - code [ref=e127]:
              - generic [ref=e128]: <div style="
              - generic [ref=e129]: "margin-bottom: 1rem;"
              - generic [ref=e130]: "border: 1px solid #dddddd;"
              - generic [ref=e131]: "border-radius: 0.5rem;"
              - generic [ref=e132]: "padding: 1rem 1.25rem;"
              - generic [ref=e133]: "background: #ffffff;"
              - generic [ref=e134]: "\">"
              - generic [ref=e135]: "<h3 style=\"margin-top: 0; margin-bottom: 0.75rem\">Assessment summary</h3>"
              - generic [ref=e136]: <div style="
              - generic [ref=e137]: "display: grid;"
              - generic [ref=e138]: "grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));"
              - generic [ref=e139]: "gap: 0.75rem 1.5rem;"
              - generic [ref=e140]: "\">"
              - generic [ref=e141]: <div>
              - generic [ref=e142]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Due date</p>"
              - generic [ref=e143]: "<p style=\"margin: 0.1rem 0 0\"><strong>Friday 15 November, 16:00</strong></p>"
              - generic [ref=e144]: </div>
              - generic [ref=e145]: <div>
              - generic [ref=e146]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Weighting</p>"
              - generic [ref=e147]: "<p style=\"margin: 0.1rem 0 0\"><strong>30% of module mark</strong></p>"
              - generic [ref=e148]: </div>
              - generic [ref=e149]: <div>
              - generic [ref=e150]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Format</p>"
              - generic [ref=e151]: "<p style=\"margin: 0.1rem 0 0\">Short written report (1500-2000 words)</p>"
              - generic [ref=e152]: </div>
              - generic [ref=e153]: <div>
              - generic [ref=e154]: "<p style=\"margin: 0; font-size: 0.9rem; color: #555555\">Submission</p>"
              - generic [ref=e155]: "<p style=\"margin: 0.1rem 0 0\">Upload as a single PDF via Canvas</p>"
              - generic [ref=e156]: </div>
              - generic [ref=e157]: </div>
              - generic [ref=e158]: </div>
            - button "Copy code to clipboard" [ref=e159] [cursor=pointer]: Copy
          - heading "Call-to-action strip (link styled as a button)" [level=2] [ref=e160]
          - paragraph [ref=e161]: A full-width strip with a short message and a prominent link styled as a button. This can be used to point learners to the next activity or an important resource.
          - generic [ref=e162]:
            - paragraph [ref=e163]: Ready to continue? Work through the next activity to apply these ideas in practice.
            - link "Go to the next activity" [ref=e164] [cursor=pointer]:
              - /url: "#"
          - generic [ref=e165]:
            - code [ref=e169]:
              - generic [ref=e170]: <div style="
              - generic [ref=e171]: "margin-bottom: 1rem;"
              - generic [ref=e172]: "padding: 1rem 1.25rem;"
              - generic [ref=e173]: "background: #0000cd;"
              - generic [ref=e174]: "color: #ffffff;"
              - generic [ref=e175]: "border-radius: 0.5rem;"
              - generic [ref=e176]: "display: flex;"
              - generic [ref=e177]: "flex-wrap: wrap;"
              - generic [ref=e178]: "align-items: center;"
              - generic [ref=e179]: "justify-content: space-between;"
              - generic [ref=e180]: "gap: 0.75rem;"
              - generic [ref=e181]: "\">"
              - generic [ref=e182]: "<p style=\"margin: 0; font-size: 1rem\">"
              - generic [ref=e183]: Ready to continue? Work through the next activity to apply these ideas in practice.
              - generic [ref=e184]: </p>
              - generic [ref=e185]: <a href="#" style="
              - generic [ref=e186]: "display: inline-block;"
              - generic [ref=e187]: "padding: 0.6rem 1.1rem;"
              - generic [ref=e188]: "background: #ffffff;"
              - generic [ref=e189]: "color: #0000cd;"
              - generic [ref=e190]: "text-decoration: none;"
              - generic [ref=e191]: "border-radius: 999px;"
              - generic [ref=e192]: "font-weight: 600;"
              - generic [ref=e193]: "font-size: 0.95rem;"
              - generic [ref=e194]: "\">"
              - generic [ref=e195]: Go to the next activity
              - generic [ref=e196]: </a>
              - generic [ref=e197]: </div>
            - button "Copy code to clipboard" [ref=e198] [cursor=pointer]: Copy
          - heading "Side-by-side text and notes" [level=2] [ref=e199]
          - paragraph [ref=e200]: A two-column layout where the main explanation appears on the left and supporting notes or tips appear on the right. On narrow screens, the columns stack vertically.
          - generic [ref=e201]:
            - generic [ref=e202]:
              - heading "Main explanation" [level=3] [ref=e203]
              - paragraph [ref=e204]: Use this area for the primary content, such as a worked example, step-by-step explanation, or short case study.
              - paragraph [ref=e205]: Keep paragraphs short and use headings or lists to break up dense information.
            - complementary [ref=e206]:
              - heading "Notes and tips" [level=3] [ref=e207]
              - list [ref=e208]:
                - listitem [ref=e209]: Highlight common mistakes or misconceptions.
                - listitem [ref=e210]: Provide quick reminders of key definitions.
                - listitem [ref=e211]: Link to related resources or further reading.
          - generic [ref=e212]:
            - code [ref=e216]:
              - generic [ref=e217]: <div style="
              - generic [ref=e218]: "margin-bottom: 1rem;"
              - generic [ref=e219]: "display: grid;"
              - generic [ref=e220]: "grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);"
              - generic [ref=e221]: "gap: 1rem;"
              - generic [ref=e222]: "\">"
              - generic [ref=e223]: <div style="
              - generic [ref=e224]: "padding: 1rem 1.25rem;"
              - generic [ref=e225]: "border: 1px solid #dddddd;"
              - generic [ref=e226]: "border-radius: 0.5rem;"
              - generic [ref=e227]: "background: #ffffff;"
              - generic [ref=e228]: "\">"
              - generic [ref=e229]: "<h3 style=\"margin-top: 0; margin-bottom: 0.75rem\">Main explanation</h3>"
              - generic [ref=e230]: "<p style=\"margin-top: 0\">"
              - generic [ref=e231]: Use this area for the primary content, such as a worked example,
              - generic [ref=e232]: step-by-step explanation, or short case study.
              - generic [ref=e233]: </p>
              - generic [ref=e234]: <p>Keep paragraphs short and use headings or lists to break up dense information.</p>
              - generic [ref=e235]: </div>
              - generic [ref=e236]: <aside style="
              - generic [ref=e237]: "padding: 1rem 1.25rem;"
              - generic [ref=e238]: "border: 1px solid #dddddd;"
              - generic [ref=e239]: "border-radius: 0.5rem;"
              - generic [ref=e240]: "background: #f5f5f5;"
              - generic [ref=e241]: "\">"
              - generic [ref=e242]: "<h3 style=\"margin-top: 0; margin-bottom: 0.75rem\">Notes and tips</h3>"
              - generic [ref=e243]: "<ul style=\"margin: 0; padding-left: 1.25rem\">"
              - generic [ref=e244]: <li>Highlight common mistakes or misconceptions.</li>
              - generic [ref=e245]: <li>Provide quick reminders of key definitions.</li>
              - generic [ref=e246]: <li>Link to related resources or further reading.</li>
              - generic [ref=e247]: </ul>
              - generic [ref=e248]: </aside>
              - generic [ref=e249]: </div>
            - button "Copy code to clipboard" [ref=e250] [cursor=pointer]: Copy
          - heading "Resource cards grid" [level=2] [ref=e251]
          - paragraph [ref=e252]:
            - text: A responsive grid of cards for key resources or readings. The layout uses CSS Grid with
            - code [ref=e253]: auto-fit
            - text: and
            - code [ref=e254]: minmax()
            - text: to adapt to different screen sizes.
          - generic [ref=e255]:
            - generic [ref=e256]:
              - heading "Core reading" [level=3] [ref=e257]
              - paragraph [ref=e258]: Introduction to the main concepts covered in this week.
              - link "View article" [ref=e259] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e260]:
              - heading "Worked example" [level=3] [ref=e261]
              - paragraph [ref=e262]: Step-by-step example showing how to apply the method.
              - link "Open example" [ref=e263] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e264]:
              - heading "Optional extension" [level=3] [ref=e265]
              - paragraph [ref=e266]: Extra material if you would like to explore further.
              - link "Explore more" [ref=e267] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e268]:
            - code [ref=e272]:
              - generic [ref=e273]: <div style="
              - generic [ref=e274]: "margin-bottom: 1rem;"
              - generic [ref=e275]: "display: grid;"
              - generic [ref=e276]: "grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
              - generic [ref=e277]: "gap: 1rem;"
              - generic [ref=e278]: "\">"
              - generic [ref=e279]: <div style="
              - generic [ref=e280]: "border: 1px solid #dddddd;"
              - generic [ref=e281]: "border-radius: 0.5rem;"
              - generic [ref=e282]: "padding: 0.9rem 1rem;"
              - generic [ref=e283]: "background: #ffffff;"
              - generic [ref=e284]: "\">"
              - generic [ref=e285]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem; font-size: 1.05rem\">Core reading</h3>"
              - generic [ref=e286]: "<p style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e287]: Introduction to the main concepts covered in this week.
              - generic [ref=e288]: </p>
              - generic [ref=e289]: "<a href=\"#\" style=\"font-weight: 600\">View article</a>"
              - generic [ref=e290]: </div>
              - generic [ref=e291]: <div style="
              - generic [ref=e292]: "border: 1px solid #dddddd;"
              - generic [ref=e293]: "border-radius: 0.5rem;"
              - generic [ref=e294]: "padding: 0.9rem 1rem;"
              - generic [ref=e295]: "background: #ffffff;"
              - generic [ref=e296]: "\">"
              - generic [ref=e297]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem; font-size: 1.05rem\">Worked example</h3>"
              - generic [ref=e298]: "<p style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e299]: Step-by-step example showing how to apply the method.
              - generic [ref=e300]: </p>
              - generic [ref=e301]: "<a href=\"#\" style=\"font-weight: 600\">Open example</a>"
              - generic [ref=e302]: </div>
              - generic [ref=e303]: <div style="
              - generic [ref=e304]: "border: 1px solid #dddddd;"
              - generic [ref=e305]: "border-radius: 0.5rem;"
              - generic [ref=e306]: "padding: 0.9rem 1rem;"
              - generic [ref=e307]: "background: #ffffff;"
              - generic [ref=e308]: "\">"
              - generic [ref=e309]: "<h3 style=\"margin-top: 0; margin-bottom: 0.5rem; font-size: 1.05rem\">Optional extension</h3>"
              - generic [ref=e310]: "<p style=\"margin-top: 0; margin-bottom: 0.5rem\">"
              - generic [ref=e311]: Extra material if you would like to explore further.
              - generic [ref=e312]: </p>
              - generic [ref=e313]: "<a href=\"#\" style=\"font-weight: 600\">Explore more</a>"
              - generic [ref=e314]: </div>
              - generic [ref=e315]: </div>
            - button "Copy code to clipboard" [ref=e316] [cursor=pointer]: Copy
          - heading "Resource cards grid with images" [level=2] [ref=e317]
          - paragraph [ref=e318]: This version adds thumbnail images to each resource card using external placeholder image URLs. Replace the image sources and alt text with your own content when you are ready.
          - generic [ref=e319]:
            - generic [ref=e320]:
              - img "Illustrative placeholder image for core reading" [ref=e321]
              - generic [ref=e322]:
                - heading "Core reading" [level=3] [ref=e323]
                - paragraph [ref=e324]: Introduction to the main concepts covered in this week.
                - link "View article" [ref=e325] [cursor=pointer]:
                  - /url: "#"
            - generic [ref=e326]:
              - img "Illustrative placeholder image for a worked example" [ref=e327]
              - generic [ref=e328]:
                - heading "Worked example" [level=3] [ref=e329]
                - paragraph [ref=e330]: Step-by-step example showing how to apply the method.
                - link "Open example" [ref=e331] [cursor=pointer]:
                  - /url: "#"
            - generic [ref=e332]:
              - img "Illustrative placeholder image for an optional extension resource" [ref=e333]
              - generic [ref=e334]:
                - heading "Optional extension" [level=3] [ref=e335]
                - paragraph [ref=e336]: Extra material if you would like to explore further.
                - link "Explore more" [ref=e337] [cursor=pointer]:
                  - /url: "#"
          - generic [ref=e338]:
            - code [ref=e342]:
              - generic [ref=e343]: <div style="
              - generic [ref=e344]: "margin-bottom: 1rem;"
              - generic [ref=e345]: "display: grid;"
              - generic [ref=e346]: "grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
              - generic [ref=e347]: "gap: 1rem;"
              - generic [ref=e348]: "\">"
              - generic [ref=e349]: "<div style=\"border: 1px solid #dddddd; border-radius: 0.5rem; background: #ffffff; overflow: hidden;\">"
              - generic [ref=e350]: <img src="https://placehold.co/400x225?text=Core+reading"
              - generic [ref=e351]: alt="Illustrative placeholder image for core reading"
              - generic [ref=e352]: style="display:block; width:100%; height:auto;" />
              - generic [ref=e353]: "<div style=\"padding: 0.9rem 1rem\">"
              - generic [ref=e354]: <h3 style="margin:0 0 .5rem; font-size:1.05rem;">Core reading</h3>
              - generic [ref=e355]: <p style="margin:0 0 .5rem;">Introduction to the main concepts covered in this week.</p>
              - generic [ref=e356]: <a href="#" style="font-weight:600;">View article</a>
              - generic [ref=e357]: </div>
              - generic [ref=e358]: </div>
              - generic [ref=e359]: "<div style=\"border: 1px solid #dddddd; border-radius: 0.5rem; background: #ffffff; overflow: hidden;\">"
              - generic [ref=e360]: <img src="https://placehold.co/400x225?text=Worked+example"
              - generic [ref=e361]: alt="Illustrative placeholder image for a worked example"
              - generic [ref=e362]: style="display:block; width:100%; height:auto;" />
              - generic [ref=e363]: "<div style=\"padding: 0.9rem 1rem\">"
              - generic [ref=e364]: <h3 style="margin:0 0 .5rem; font-size:1.05rem;">Worked example</h3>
              - generic [ref=e365]: <p style="margin:0 0 .5rem;">Step-by-step example showing how to apply the method.</p>
              - generic [ref=e366]: <a href="#" style="font-weight:600;">Open example</a>
              - generic [ref=e367]: </div>
              - generic [ref=e368]: </div>
              - generic [ref=e369]: "<div style=\"border: 1px solid #dddddd; border-radius: 0.5rem; background: #ffffff; overflow: hidden;\">"
              - generic [ref=e370]: <img src="https://placehold.co/400x225?text=Optional+extension"
              - generic [ref=e371]: alt="Illustrative placeholder image for an optional extension resource"
              - generic [ref=e372]: style="display:block; width:100%; height:auto;" />
              - generic [ref=e373]: "<div style=\"padding: 0.9rem 1rem\">"
              - generic [ref=e374]: <h3 style="margin:0 0 .5rem; font-size:1.05rem;">Optional extension</h3>
              - generic [ref=e375]: <p style="margin:0 0 .5rem;">Extra material if you would like to explore further.</p>
              - generic [ref=e376]: <a href="#" style="font-weight:600;">Explore more</a>
              - generic [ref=e377]: </div>
              - generic [ref=e378]: </div>
              - generic [ref=e379]: </div>
            - button "Copy code to clipboard" [ref=e380] [cursor=pointer]: Copy
        - navigation "Page navigation" [ref=e381]:
          - link "← Previous Embedding External Media" [ref=e383] [cursor=pointer]:
            - /url: /embedding-external-media-in-canvas
            - generic [ref=e384]: ← Previous
            - generic [ref=e385]: Embedding External Media
      - generic "Site footer" [ref=e386]:
        - navigation "Site map" [ref=e387]:
          - generic [ref=e388]:
            - paragraph [ref=e389]: Canvas Content Styling Guide
            - link "Introduction" [ref=e390] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e391]:
            - paragraph [ref=e392]: HTML Basics in Canvas
            - link "Typography" [ref=e393] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e394] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e395] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e396]:
            - paragraph [ref=e397]: Colour and Branding
            - link "Colours in Canvas" [ref=e398] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e399]:
            - paragraph [ref=e400]: Layout and Spacing
            - link "Grid" [ref=e401] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e402] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e403] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e404]:
            - paragraph [ref=e405]: Canvas Components
            - link "Buttons" [ref=e406] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e407] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e408] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e409] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e410] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e411] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e412] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e413]:
            - paragraph [ref=e414]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e415] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e416] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e417] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e418]:
            - paragraph [ref=e419]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e420] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e421] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e422] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e423] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e424]:
          - paragraph [ref=e425]: © 2025–2026 Karl Horning
          - generic [ref=e426]:
            - link "Karl Horning on GitHub" [ref=e427] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e428]
            - link "Karl Horning on LinkedIn" [ref=e430] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e431]
            - link "Karl Horning's personal portfolio" [ref=e433] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e434]
  - button "Open Next.js Dev Tools" [ref=e443] [cursor=pointer]:
    - img [ref=e444]
  - alert [ref=e447]
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