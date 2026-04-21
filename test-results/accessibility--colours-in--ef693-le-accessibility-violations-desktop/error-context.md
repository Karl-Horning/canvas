# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /colours-in-canvas — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 163

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
+               "bgColor": "#708090",
+               "contrastRatio": 4.05,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.8pt (17.1px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.05 (foreground color: #ffffff, background color: #708090, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#708090] text-white\">Text</span>",
+                 "target": Array [
+                   ".bg-\\[\\#708090\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.05 (foreground color: #ffffff, background color: #708090, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#708090] text-white\">Text</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-\\[\\#708090\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#7b68ee",
+               "contrastRatio": 4.15,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.8pt (17.1px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.15 (foreground color: #ffffff, background color: #7b68ee, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#7b68ee] text-white\">Text</span>",
+                 "target": Array [
+                   ".bg-\\[\\#7b68ee\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.15 (foreground color: #ffffff, background color: #7b68ee, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#7b68ee] text-white\">Text</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-\\[\\#7b68ee\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ff0000",
+               "contrastRatio": 3.99,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.8pt (17.1px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.99 (foreground color: #ffffff, background color: #ff0000, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#ff0000] text-white\">Text</span>",
+                 "target": Array [
+                   ".bg-\\[\\#ff0000\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.99 (foreground color: #ffffff, background color: #ff0000, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#ff0000] text-white\">Text</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-\\[\\#ff0000\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ff4500",
+               "contrastRatio": 3.44,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.8pt (17.1px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4500, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#ff4500] text-white\">Text</span>",
+                 "target": Array [
+                   ".bg-\\[\\#ff4500\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4500, font size: 12.8pt (17.1px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span aria-hidden=\"true\" class=\"inline-block px-2 py-1 bg-[#ff4500] text-white\">Text</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-\\[\\#ff4500\\]",
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
            - heading "Colours in Canvas" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 5 min read
          - paragraph [ref=e62]: Canvas' Rich Content Editor gives you access to a range of colours for text and backgrounds. Not all of them are safe to use for body text — some only have enough contrast for headings or large UI elements, and others should be reserved for backgrounds, borders, and highlights only.
          - paragraph [ref=e63]:
            - text: The tables below summarise which colours are suitable for use as
            - strong [ref=e64]: text on a white background
            - text: "in Canvas content. They are grouped by their WCAG contrast rating when used as text on white:"
          - list [ref=e65]:
            - listitem [ref=e66]:
              - strong [ref=e67]: AAA / AA
              - text: — suitable for body text on white.
            - listitem [ref=e68]:
              - strong [ref=e69]: AA
              - text: — suitable for large text, headings or UI elements on white.
            - listitem [ref=e70]:
              - strong [ref=e71]: Accent / background only
              - text: — not recommended for text on white; best used for backgrounds, borders or highlights.
          - heading "Useful references" [level=2] [ref=e72]
          - list [ref=e73]:
            - listitem [ref=e74]:
              - 'link "W3C WAI — Understanding SC 1.4.6: Contrast (Enhanced / AAA)" [ref=e75] [cursor=pointer]':
                - /url: https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html
            - listitem [ref=e76]:
              - 'link "W3C WAI — Understanding SC 1.4.3: Contrast (Minimum / AA)" [ref=e77] [cursor=pointer]':
                - /url: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
            - listitem [ref=e78]:
              - link "WebAIM — Contrast Checker" [ref=e79] [cursor=pointer]:
                - /url: https://webaim.org/resources/contrastchecker/
            - listitem [ref=e80]:
              - link "MDN — CSS colour values" [ref=e81] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
          - heading "AAA-compliant colour combinations" [level=2] [ref=e82]
          - paragraph [ref=e83]: The combinations below all meet WCAG AAA contrast (7:1 ratio or higher). Use these when you want the strongest possible accessibility guarantee — for example in body paragraphs, callout boxes, and alert messages.
          - heading "Dark text on light or coloured backgrounds" [level=3] [ref=e84]
          - table [ref=e86]:
            - rowgroup [ref=e87]:
              - row "Text colour Background colour Example Ratio" [ref=e88]:
                - columnheader "Text colour" [ref=e89]
                - columnheader "Background colour" [ref=e90]
                - columnheader "Example" [ref=e91]
                - columnheader "Ratio" [ref=e92]
            - rowgroup [ref=e93]:
              - 'row "Black #000000 White #ffffff 21:1" [ref=e94]':
                - 'cell "Black #000000" [ref=e95]':
                  - text: Black
                  - code [ref=e96]: "#000000"
                - 'cell "White #ffffff" [ref=e97]':
                  - text: White
                  - code [ref=e98]: "#ffffff"
                - cell [ref=e99]:
                  - generic [ref=e100]: Sample text
                - cell "21:1" [ref=e101]
              - 'row "Dark #232333 White #ffffff 15.4:1" [ref=e102]':
                - 'cell "Dark #232333" [ref=e103]':
                  - text: Dark
                  - code [ref=e104]: "#232333"
                - 'cell "White #ffffff" [ref=e105]':
                  - text: White
                  - code [ref=e106]: "#ffffff"
                - cell [ref=e107]:
                  - generic [ref=e108]: Sample text
                - cell "15.4:1" [ref=e109]
              - 'row "Navy #000080 White #ffffff 16.1:1" [ref=e110]':
                - 'cell "Navy #000080" [ref=e111]':
                  - text: Navy
                  - code [ref=e112]: "#000080"
                - 'cell "White #ffffff" [ref=e113]':
                  - text: White
                  - code [ref=e114]: "#ffffff"
                - cell [ref=e115]:
                  - generic [ref=e116]: Sample text
                - cell "16.1:1" [ref=e117]
              - 'row "Medium Blue #0000cd White #ffffff 11.2:1" [ref=e118]':
                - 'cell "Medium Blue #0000cd" [ref=e119]':
                  - text: Medium Blue
                  - code [ref=e120]: "#0000cd"
                - 'cell "White #ffffff" [ref=e121]':
                  - text: White
                  - code [ref=e122]: "#ffffff"
                - cell [ref=e123]:
                  - generic [ref=e124]: Sample text
                - cell "11.2:1" [ref=e125]
              - 'row "Indigo #4b0082 White #ffffff 13:1" [ref=e126]':
                - 'cell "Indigo #4b0082" [ref=e127]':
                  - text: Indigo
                  - code [ref=e128]: "#4b0082"
                - 'cell "White #ffffff" [ref=e129]':
                  - text: White
                  - code [ref=e130]: "#ffffff"
                - cell [ref=e131]:
                  - generic [ref=e132]: Sample text
                - cell "13:1" [ref=e133]
              - 'row "Dark Green #006400 White #ffffff 7.4:1" [ref=e134]':
                - 'cell "Dark Green #006400" [ref=e135]':
                  - text: Dark Green
                  - code [ref=e136]: "#006400"
                - 'cell "White #ffffff" [ref=e137]':
                  - text: White
                  - code [ref=e138]: "#ffffff"
                - cell [ref=e139]:
                  - generic [ref=e140]: Sample text
                - cell "7.4:1" [ref=e141]
              - 'row "Saddle Brown #8b4513 White #ffffff 7.1:1" [ref=e142]':
                - 'cell "Saddle Brown #8b4513" [ref=e143]':
                  - text: Saddle Brown
                  - code [ref=e144]: "#8b4513"
                - 'cell "White #ffffff" [ref=e145]':
                  - text: White
                  - code [ref=e146]: "#ffffff"
                - cell [ref=e147]:
                  - generic [ref=e148]: Sample text
                - cell "7.1:1" [ref=e149]
              - 'row "Black #000000 Yellow #fff200 18:1" [ref=e150]':
                - 'cell "Black #000000" [ref=e151]':
                  - text: Black
                  - code [ref=e152]: "#000000"
                - 'cell "Yellow #fff200" [ref=e153]':
                  - text: Yellow
                  - code [ref=e154]: "#fff200"
                - cell [ref=e155]:
                  - generic [ref=e156]: Sample text
                - cell "18:1" [ref=e157]
              - 'row "Black #000000 Pale Green #98fb98 16.6:1" [ref=e158]':
                - 'cell "Black #000000" [ref=e159]':
                  - text: Black
                  - code [ref=e160]: "#000000"
                - 'cell "Pale Green #98fb98" [ref=e161]':
                  - text: Pale Green
                  - code [ref=e162]: "#98fb98"
                - cell [ref=e163]:
                  - generic [ref=e164]: Sample text
                - cell "16.6:1" [ref=e165]
              - 'row "Black #000000 Pale Turquoise #afeeee 16.4:1" [ref=e166]':
                - 'cell "Black #000000" [ref=e167]':
                  - text: Black
                  - code [ref=e168]: "#000000"
                - 'cell "Pale Turquoise #afeeee" [ref=e169]':
                  - text: Pale Turquoise
                  - code [ref=e170]: "#afeeee"
                - cell [ref=e171]:
                  - generic [ref=e172]: Sample text
                - cell "16.4:1" [ref=e173]
              - 'row "Black #000000 Lavender #e6e6fa 16.8:1" [ref=e174]':
                - 'cell "Black #000000" [ref=e175]':
                  - text: Black
                  - code [ref=e176]: "#000000"
                - 'cell "Lavender #e6e6fa" [ref=e177]':
                  - text: Lavender
                  - code [ref=e178]: "#e6e6fa"
                - cell [ref=e179]:
                  - generic [ref=e180]: Sample text
                - cell "16.8:1" [ref=e181]
          - heading "Light text on dark backgrounds" [level=3] [ref=e182]
          - table [ref=e184]:
            - rowgroup [ref=e185]:
              - row "Text colour Background colour Example Ratio" [ref=e186]:
                - columnheader "Text colour" [ref=e187]
                - columnheader "Background colour" [ref=e188]
                - columnheader "Example" [ref=e189]
                - columnheader "Ratio" [ref=e190]
            - rowgroup [ref=e191]:
              - 'row "White #ffffff Black #000000 21:1" [ref=e192]':
                - 'cell "White #ffffff" [ref=e193]':
                  - text: White
                  - code [ref=e194]: "#ffffff"
                - 'cell "Black #000000" [ref=e195]':
                  - text: Black
                  - code [ref=e196]: "#000000"
                - cell [ref=e197]:
                  - generic [ref=e198]: Sample text
                - cell "21:1" [ref=e199]
              - 'row "White #ffffff Dark #232333 15.4:1" [ref=e200]':
                - 'cell "White #ffffff" [ref=e201]':
                  - text: White
                  - code [ref=e202]: "#ffffff"
                - 'cell "Dark #232333" [ref=e203]':
                  - text: Dark
                  - code [ref=e204]: "#232333"
                - cell [ref=e205]:
                  - generic [ref=e206]: Sample text
                - cell "15.4:1" [ref=e207]
              - 'row "White #ffffff Navy #000080 16.1:1" [ref=e208]':
                - 'cell "White #ffffff" [ref=e209]':
                  - text: White
                  - code [ref=e210]: "#ffffff"
                - 'cell "Navy #000080" [ref=e211]':
                  - text: Navy
                  - code [ref=e212]: "#000080"
                - cell [ref=e213]:
                  - generic [ref=e214]: Sample text
                - cell "16.1:1" [ref=e215]
              - 'row "White #ffffff Medium Blue #0000cd 11.2:1" [ref=e216]':
                - 'cell "White #ffffff" [ref=e217]':
                  - text: White
                  - code [ref=e218]: "#ffffff"
                - 'cell "Medium Blue #0000cd" [ref=e219]':
                  - text: Medium Blue
                  - code [ref=e220]: "#0000cd"
                - cell [ref=e221]:
                  - generic [ref=e222]: Sample text
                - cell "11.2:1" [ref=e223]
              - 'row "White #ffffff Indigo #4b0082 13:1" [ref=e224]':
                - 'cell "White #ffffff" [ref=e225]':
                  - text: White
                  - code [ref=e226]: "#ffffff"
                - 'cell "Indigo #4b0082" [ref=e227]':
                  - text: Indigo
                  - code [ref=e228]: "#4b0082"
                - cell [ref=e229]:
                  - generic [ref=e230]: Sample text
                - cell "13:1" [ref=e231]
              - 'row "White #ffffff Dark Green #006400 7.4:1" [ref=e232]':
                - 'cell "White #ffffff" [ref=e233]':
                  - text: White
                  - code [ref=e234]: "#ffffff"
                - 'cell "Dark Green #006400" [ref=e235]':
                  - text: Dark Green
                  - code [ref=e236]: "#006400"
                - cell [ref=e237]:
                  - generic [ref=e238]: Sample text
                - cell "7.4:1" [ref=e239]
              - 'row "White #ffffff Saddle Brown #8b4513 7.1:1" [ref=e240]':
                - 'cell "White #ffffff" [ref=e241]':
                  - text: White
                  - code [ref=e242]: "#ffffff"
                - 'cell "Saddle Brown #8b4513" [ref=e243]':
                  - text: Saddle Brown
                  - code [ref=e244]: "#8b4513"
                - cell [ref=e245]:
                  - generic [ref=e246]: Sample text
                - cell "7.1:1" [ref=e247]
              - 'row "Pink #ffd6e5 Medium Blue #0000cd 8.5:1" [ref=e248]':
                - 'cell "Pink #ffd6e5" [ref=e249]':
                  - text: Pink
                  - code [ref=e250]: "#ffd6e5"
                - 'cell "Medium Blue #0000cd" [ref=e251]':
                  - text: Medium Blue
                  - code [ref=e252]: "#0000cd"
                - cell [ref=e253]:
                  - generic [ref=e254]: Sample text
                - cell "8.5:1" [ref=e255]
          - heading "Colours suitable for body text on white (AAA / AA)" [level=2] [ref=e256]
          - table [ref=e258]:
            - rowgroup [ref=e259]:
              - row "Colour Hex Example Rating (on white)" [ref=e260]:
                - columnheader "Colour" [ref=e261]
                - columnheader "Hex" [ref=e262]
                - columnheader "Example" [ref=e263]
                - columnheader "Rating (on white)" [ref=e264]
            - rowgroup [ref=e265]:
              - 'row "Black #000000 AAA / AA" [ref=e266]':
                - cell "Black" [ref=e267]
                - cell "#000000" [ref=e268]:
                  - code [ref=e269]: "#000000"
                - cell [ref=e270]:
                  - generic [ref=e271]: Text
                - cell "AAA / AA" [ref=e272]
              - 'row "Dark #232333 AAA / AA" [ref=e273]':
                - cell "Dark" [ref=e274]
                - cell "#232333" [ref=e275]:
                  - code [ref=e276]: "#232333"
                - cell [ref=e277]:
                  - generic [ref=e278]: Text
                - cell "AAA / AA" [ref=e279]
              - 'row "Navy #000080 AAA / AA" [ref=e280]':
                - cell "Navy" [ref=e281]
                - cell "#000080" [ref=e282]:
                  - code [ref=e283]: "#000080"
                - cell [ref=e284]:
                  - generic [ref=e285]: Text
                - cell "AAA / AA" [ref=e286]
              - 'row "Medium Blue #0000cd AAA / AA" [ref=e287]':
                - cell "Medium Blue" [ref=e288]
                - cell "#0000cd" [ref=e289]:
                  - code [ref=e290]: "#0000cd"
                - cell [ref=e291]:
                  - generic [ref=e292]: Text
                - cell "AAA / AA" [ref=e293]
              - 'row "Saddle Brown #8b4513 AAA / AA" [ref=e294]':
                - cell "Saddle Brown" [ref=e295]
                - cell "#8b4513" [ref=e296]:
                  - code [ref=e297]: "#8b4513"
                - cell [ref=e298]:
                  - generic [ref=e299]: Text
                - cell "AAA / AA" [ref=e300]
              - 'row "Teal #008080 AAA / AA" [ref=e301]':
                - cell "Teal" [ref=e302]
                - cell "#008080" [ref=e303]:
                  - code [ref=e304]: "#008080"
                - cell [ref=e305]:
                  - generic [ref=e306]: Text
                - cell "AAA / AA" [ref=e307]
              - 'row "Medium Violet Red #c71585 AAA / AA" [ref=e308]':
                - cell "Medium Violet Red" [ref=e309]
                - cell "#c71585" [ref=e310]:
                  - code [ref=e311]: "#c71585"
                - cell [ref=e312]:
                  - generic [ref=e313]: Text
                - cell "AAA / AA" [ref=e314]
              - 'row "Indigo #4b0082 AAA / AA" [ref=e315]':
                - cell "Indigo" [ref=e316]
                - cell "#4b0082" [ref=e317]:
                  - code [ref=e318]: "#4b0082"
                - cell [ref=e319]:
                  - generic [ref=e320]: Text
                - cell "AAA / AA" [ref=e321]
              - 'row "Crimson #dc143c AAA / AA" [ref=e322]':
                - cell "Crimson" [ref=e323]
                - cell "#dc143c" [ref=e324]:
                  - code [ref=e325]: "#dc143c"
                - cell [ref=e326]:
                  - generic [ref=e327]: Text
                - cell "AAA / AA" [ref=e328]
              - 'row "Dark Green #006400 AAA / AA" [ref=e329]':
                - cell "Dark Green" [ref=e330]
                - cell "#006400" [ref=e331]:
                  - code [ref=e332]: "#006400"
                - cell [ref=e333]:
                  - generic [ref=e334]: Text
                - cell "AAA / AA" [ref=e335]
          - heading "Colours for large text, headings or UI (AA on white)" [level=2] [ref=e336]
          - paragraph [ref=e337]: The colours below meet AA contrast for text on white, but are best reserved for larger text (such as headings) or for interface elements like buttons and labels, rather than long paragraphs.
          - table [ref=e339]:
            - rowgroup [ref=e340]:
              - row "Colour Hex Example Rating (on white)" [ref=e341]:
                - columnheader "Colour" [ref=e342]
                - columnheader "Hex" [ref=e343]
                - columnheader "Example" [ref=e344]
                - columnheader "Rating (on white)" [ref=e345]
            - rowgroup [ref=e346]:
              - 'row "Slate Grey #708090 AA" [ref=e347]':
                - cell "Slate Grey" [ref=e348]
                - cell "#708090" [ref=e349]:
                  - code [ref=e350]: "#708090"
                - cell [ref=e351]:
                  - generic [ref=e352]: Text
                - cell "AA" [ref=e353]
              - 'row "Medium Blue Slate #7b68ee AA" [ref=e354]':
                - cell "Medium Blue Slate" [ref=e355]
                - cell "#7b68ee" [ref=e356]:
                  - code [ref=e357]: "#7b68ee"
                - cell [ref=e358]:
                  - generic [ref=e359]: Text
                - cell "AA" [ref=e360]
              - 'row "Red #ff0000 AA" [ref=e361]':
                - cell "Red" [ref=e362]
                - cell "#ff0000" [ref=e363]:
                  - code [ref=e364]: "#ff0000"
                - cell [ref=e365]:
                  - generic [ref=e366]: Text
                - cell "AA" [ref=e367]
              - 'row "Orange Red #ff4500 AA" [ref=e368]':
                - cell "Orange Red" [ref=e369]
                - cell "#ff4500" [ref=e370]:
                  - code [ref=e371]: "#ff4500"
                - cell [ref=e372]:
                  - generic [ref=e373]: Text
                - cell "AA" [ref=e374]
          - heading "Accent and background colours (not for text on white)" [level=2] [ref=e375]
          - paragraph [ref=e376]: The colours below are generally not suitable for body text on a white background. They can be used as background fills, borders, highlights, or within graphics, provided the contrast with any overlaid text is checked.
          - table [ref=e378]:
            - rowgroup [ref=e379]:
              - row "Colour Hex Example Notes" [ref=e380]:
                - columnheader "Colour" [ref=e381]
                - columnheader "Hex" [ref=e382]
                - columnheader "Example" [ref=e383]
                - columnheader "Notes" [ref=e384]
            - rowgroup [ref=e385]:
              - 'row "White #ffffff Use as a background, not as text on white." [ref=e386]':
                - cell "White" [ref=e387]
                - cell "#ffffff" [ref=e388]:
                  - code [ref=e389]: "#ffffff"
                - cell [ref=e390]:
                  - generic [ref=e391]: Background
                - cell "Use as a background, not as text on white." [ref=e392]
              - 'row "White Smoke #f5f5f5 Use as a light background panel." [ref=e393]':
                - cell "White Smoke" [ref=e394]
                - cell "#f5f5f5" [ref=e395]:
                  - code [ref=e396]: "#f5f5f5"
                - cell [ref=e397]:
                  - generic [ref=e398]: Background
                - cell "Use as a light background panel." [ref=e399]
              - 'row "Deep Sky Blue #00bfff Accent or background; not recommended for text on white." [ref=e400]':
                - cell "Deep Sky Blue" [ref=e401]
                - cell "#00bfff" [ref=e402]:
                  - code [ref=e403]: "#00bfff"
                - cell [ref=e404]:
                  - generic [ref=e405]: Swatch
                - cell "Accent or background; not recommended for text on white." [ref=e406]
              - 'row "Yellow #ffff00 Highlight or accent only; very low contrast as text." [ref=e407]':
                - cell "Yellow" [ref=e408]
                - cell "#ffff00" [ref=e409]:
                  - code [ref=e410]: "#ffff00"
                - cell [ref=e411]:
                  - generic [ref=e412]: Swatch
                - cell "Highlight or accent only; very low contrast as text." [ref=e413]
              - 'row "Khaki #f0e68c Use as a soft background or accent." [ref=e414]':
                - cell "Khaki" [ref=e415]
                - cell "#f0e68c" [ref=e416]:
                  - code [ref=e417]: "#f0e68c"
                - cell [ref=e418]:
                  - generic [ref=e419]: Swatch
                - cell "Use as a soft background or accent." [ref=e420]
              - 'row "Turquoise #40e0d0 Accent colour; check contrast if used behind text." [ref=e421]':
                - cell "Turquoise" [ref=e422]
                - cell "#40e0d0" [ref=e423]:
                  - code [ref=e424]: "#40e0d0"
                - cell [ref=e425]:
                  - generic [ref=e426]: Swatch
                - cell "Accent colour; check contrast if used behind text." [ref=e427]
              - 'row "Pale Turquoise #afeeee Light background only; avoid for text." [ref=e428]':
                - cell "Pale Turquoise" [ref=e429]
                - cell "#afeeee" [ref=e430]:
                  - code [ref=e431]: "#afeeee"
                - cell [ref=e432]:
                  - generic [ref=e433]: Swatch
                - cell "Light background only; avoid for text." [ref=e434]
              - 'row "Violet #ee82ee Accent colour; not for body text on white." [ref=e435]':
                - cell "Violet" [ref=e436]
                - cell "#ee82ee" [ref=e437]:
                  - code [ref=e438]: "#ee82ee"
                - cell [ref=e439]:
                  - generic [ref=e440]: Swatch
                - cell "Accent colour; not for body text on white." [ref=e441]
              - 'row "Light Pink #ffb6c1 Light background only." [ref=e442]':
                - cell "Light Pink" [ref=e443]
                - cell "#ffb6c1" [ref=e444]:
                  - code [ref=e445]: "#ffb6c1"
                - cell [ref=e446]:
                  - generic [ref=e447]: Swatch
                - cell "Light background only." [ref=e448]
              - 'row "Lavender #e6e6fa Subtle background panel or highlight." [ref=e449]':
                - cell "Lavender" [ref=e450]
                - cell "#e6e6fa" [ref=e451]:
                  - code [ref=e452]: "#e6e6fa"
                - cell [ref=e453]:
                  - generic [ref=e454]: Swatch
                - cell "Subtle background panel or highlight." [ref=e455]
              - 'row "Salmon #fa8072 Accent; avoid as text on white." [ref=e456]':
                - cell "Salmon" [ref=e457]
                - cell "#fa8072" [ref=e458]:
                  - code [ref=e459]: "#fa8072"
                - cell [ref=e460]:
                  - generic [ref=e461]: Swatch
                - cell "Accent; avoid as text on white." [ref=e462]
              - 'row "Dark Orange #ff8c00 Accent colour; check contrast when used." [ref=e463]':
                - cell "Dark Orange" [ref=e464]
                - cell "#ff8c00" [ref=e465]:
                  - code [ref=e466]: "#ff8c00"
                - cell [ref=e467]:
                  - generic [ref=e468]: Swatch
                - cell "Accent colour; check contrast when used." [ref=e469]
              - 'row "Orange #ffa500 Accent only; not recommended for text on white." [ref=e470]':
                - cell "Orange" [ref=e471]
                - cell "#ffa500" [ref=e472]:
                  - code [ref=e473]: "#ffa500"
                - cell [ref=e474]:
                  - generic [ref=e475]: Swatch
                - cell "Accent only; not recommended for text on white." [ref=e476]
              - 'row "Spring Green #00ff7f Highlight or accent; check contrast carefully." [ref=e477]':
                - cell "Spring Green" [ref=e478]
                - cell "#00ff7f" [ref=e479]:
                  - code [ref=e480]: "#00ff7f"
                - cell [ref=e481]:
                  - generic [ref=e482]: Swatch
                - cell "Highlight or accent; check contrast carefully." [ref=e483]
              - 'row "Pale Green #98fb98 Soft background only; avoid for text on white." [ref=e484]':
                - cell "Pale Green" [ref=e485]
                - cell "#98fb98" [ref=e486]:
                  - code [ref=e487]: "#98fb98"
                - cell [ref=e488]:
                  - generic [ref=e489]: Swatch
                - cell "Soft background only; avoid for text on white." [ref=e490]
          - heading "Using colours in Canvas content" [level=2] [ref=e491]
          - paragraph [ref=e492]: "When applying colours in Canvas, use them through inline styles on text or container elements. For example:"
          - generic [ref=e493]:
            - code [ref=e497]:
              - generic [ref=e498]: "<p style=\"color: #0000cd;\">"
              - generic [ref=e499]: This paragraph uses Medium Blue as text on a white background.
              - generic [ref=e500]: </p>
            - button "Copy code to clipboard" [ref=e501] [cursor=pointer]: Copy
          - generic [ref=e502]:
            - code [ref=e506]:
              - generic [ref=e507]: "<div style=\"background-color: #f5f5f5; padding: 1rem;\">"
              - generic [ref=e508]: <p>This panel uses White Smoke as a light background.</p>
              - generic [ref=e509]: </div>
            - button "Copy code to clipboard" [ref=e510] [cursor=pointer]: Copy
          - paragraph [ref=e511]:
            - text: For combinations not shown here, use the
            - link "WebAIM Contrast Checker" [ref=e512] [cursor=pointer]:
              - /url: https://webaim.org/resources/contrastchecker/
            - text: to verify that your chosen colours meet at least AA contrast (4.5:1 for normal text, 3:1 for large text).
        - navigation "Page navigation" [ref=e513]:
          - link "← Previous Tables" [ref=e515] [cursor=pointer]:
            - /url: /tables
            - generic [ref=e516]: ← Previous
            - generic [ref=e517]: Tables
          - link "Next → Grid" [ref=e519] [cursor=pointer]:
            - /url: /grid
            - generic [ref=e520]: Next →
            - generic [ref=e521]: Grid
      - generic "Site footer" [ref=e522]:
        - navigation "Site map" [ref=e523]:
          - generic [ref=e524]:
            - paragraph [ref=e525]: Canvas Content Styling Guide
            - link "Introduction" [ref=e526] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e527]:
            - paragraph [ref=e528]: HTML Basics in Canvas
            - link "Typography" [ref=e529] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e530] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e531] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e532]:
            - paragraph [ref=e533]: Colour and Branding
            - link "Colours in Canvas" [ref=e534] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e535]:
            - paragraph [ref=e536]: Layout and Spacing
            - link "Grid" [ref=e537] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e538] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e539] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e540]:
            - paragraph [ref=e541]: Canvas Components
            - link "Buttons" [ref=e542] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e543] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e544] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e545] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e546] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e547] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e548] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e549]:
            - paragraph [ref=e550]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e551] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e552] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e553] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e554]:
            - paragraph [ref=e555]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e556] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e557] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e558] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e559] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e560]:
          - paragraph [ref=e561]: © 2025–2026 Karl Horning
          - generic [ref=e562]:
            - link "Karl Horning on GitHub" [ref=e563] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e564]
            - link "Karl Horning on LinkedIn" [ref=e566] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e567]
            - link "Karl Horning's personal portfolio" [ref=e569] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e570]
  - button "Open Next.js Dev Tools" [ref=e579] [cursor=pointer]:
    - img [ref=e580]
  - alert [ref=e583]
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