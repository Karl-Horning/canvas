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
+ Received  + 241

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
+           ".overflow-x-auto.mb-4:nth-child(11)",
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
+           ".overflow-x-auto.mb-4:nth-child(21)",
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
            - heading "Colours in Canvas" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 5 min read
          - paragraph [ref=e65]: Canvas' Rich Content Editor gives you access to a range of colours for text and backgrounds. Not all of them are safe to use for body text — some only have enough contrast for headings or large UI elements, and others should be reserved for backgrounds, borders, and highlights only.
          - paragraph [ref=e66]:
            - text: The tables below summarise which colours are suitable for use as
            - strong [ref=e67]: text on a white background
            - text: "in Canvas content. They are grouped by their WCAG contrast rating when used as text on white:"
          - list [ref=e68]:
            - listitem [ref=e69]:
              - strong [ref=e70]: AAA / AA
              - text: — suitable for body text on white.
            - listitem [ref=e71]:
              - strong [ref=e72]: AA
              - text: — suitable for large text, headings or UI elements on white.
            - listitem [ref=e73]:
              - strong [ref=e74]: Accent / background only
              - text: — not recommended for text on white; best used for backgrounds, borders or highlights.
          - heading "Useful references" [level=2] [ref=e75]
          - list [ref=e76]:
            - listitem [ref=e77]:
              - 'link "W3C WAI — Understanding SC 1.4.6: Contrast (Enhanced / AAA)" [ref=e78] [cursor=pointer]':
                - /url: https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html
            - listitem [ref=e79]:
              - 'link "W3C WAI — Understanding SC 1.4.3: Contrast (Minimum / AA)" [ref=e80] [cursor=pointer]':
                - /url: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
            - listitem [ref=e81]:
              - link "WebAIM — Contrast Checker" [ref=e82] [cursor=pointer]:
                - /url: https://webaim.org/resources/contrastchecker/
            - listitem [ref=e83]:
              - link "MDN — CSS colour values" [ref=e84] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
          - heading "AAA-compliant colour combinations" [level=2] [ref=e85]
          - paragraph [ref=e86]: The combinations below all meet WCAG AAA contrast (7:1 ratio or higher). Use these when you want the strongest possible accessibility guarantee — for example in body paragraphs, callout boxes, and alert messages.
          - heading "Dark text on light or coloured backgrounds" [level=3] [ref=e87]
          - table [ref=e89]:
            - rowgroup [ref=e90]:
              - row "Text colour Background colour Example Ratio" [ref=e91]:
                - columnheader "Text colour" [ref=e92]
                - columnheader "Background colour" [ref=e93]
                - columnheader "Example" [ref=e94]
                - columnheader "Ratio" [ref=e95]
            - rowgroup [ref=e96]:
              - 'row "Black #000000 White #ffffff 21:1" [ref=e97]':
                - 'cell "Black #000000" [ref=e98]':
                  - text: Black
                  - code [ref=e99]: "#000000"
                - 'cell "White #ffffff" [ref=e100]':
                  - text: White
                  - code [ref=e101]: "#ffffff"
                - cell [ref=e102]:
                  - generic [ref=e103]: Sample text
                - cell "21:1" [ref=e104]
              - 'row "Dark #232333 White #ffffff 15.4:1" [ref=e105]':
                - 'cell "Dark #232333" [ref=e106]':
                  - text: Dark
                  - code [ref=e107]: "#232333"
                - 'cell "White #ffffff" [ref=e108]':
                  - text: White
                  - code [ref=e109]: "#ffffff"
                - cell [ref=e110]:
                  - generic [ref=e111]: Sample text
                - cell "15.4:1" [ref=e112]
              - 'row "Navy #000080 White #ffffff 16.1:1" [ref=e113]':
                - 'cell "Navy #000080" [ref=e114]':
                  - text: Navy
                  - code [ref=e115]: "#000080"
                - 'cell "White #ffffff" [ref=e116]':
                  - text: White
                  - code [ref=e117]: "#ffffff"
                - cell [ref=e118]:
                  - generic [ref=e119]: Sample text
                - cell "16.1:1" [ref=e120]
              - 'row "Medium Blue #0000cd White #ffffff 11.2:1" [ref=e121]':
                - 'cell "Medium Blue #0000cd" [ref=e122]':
                  - text: Medium Blue
                  - code [ref=e123]: "#0000cd"
                - 'cell "White #ffffff" [ref=e124]':
                  - text: White
                  - code [ref=e125]: "#ffffff"
                - cell [ref=e126]:
                  - generic [ref=e127]: Sample text
                - cell "11.2:1" [ref=e128]
              - 'row "Indigo #4b0082 White #ffffff 13:1" [ref=e129]':
                - 'cell "Indigo #4b0082" [ref=e130]':
                  - text: Indigo
                  - code [ref=e131]: "#4b0082"
                - 'cell "White #ffffff" [ref=e132]':
                  - text: White
                  - code [ref=e133]: "#ffffff"
                - cell [ref=e134]:
                  - generic [ref=e135]: Sample text
                - cell "13:1" [ref=e136]
              - 'row "Dark Green #006400 White #ffffff 7.4:1" [ref=e137]':
                - 'cell "Dark Green #006400" [ref=e138]':
                  - text: Dark Green
                  - code [ref=e139]: "#006400"
                - 'cell "White #ffffff" [ref=e140]':
                  - text: White
                  - code [ref=e141]: "#ffffff"
                - cell [ref=e142]:
                  - generic [ref=e143]: Sample text
                - cell "7.4:1" [ref=e144]
              - 'row "Saddle Brown #8b4513 White #ffffff 7.1:1" [ref=e145]':
                - 'cell "Saddle Brown #8b4513" [ref=e146]':
                  - text: Saddle Brown
                  - code [ref=e147]: "#8b4513"
                - 'cell "White #ffffff" [ref=e148]':
                  - text: White
                  - code [ref=e149]: "#ffffff"
                - cell [ref=e150]:
                  - generic [ref=e151]: Sample text
                - cell "7.1:1" [ref=e152]
              - 'row "Black #000000 Yellow #fff200 18:1" [ref=e153]':
                - 'cell "Black #000000" [ref=e154]':
                  - text: Black
                  - code [ref=e155]: "#000000"
                - 'cell "Yellow #fff200" [ref=e156]':
                  - text: Yellow
                  - code [ref=e157]: "#fff200"
                - cell [ref=e158]:
                  - generic [ref=e159]: Sample text
                - cell "18:1" [ref=e160]
              - 'row "Black #000000 Pale Green #98fb98 16.6:1" [ref=e161]':
                - 'cell "Black #000000" [ref=e162]':
                  - text: Black
                  - code [ref=e163]: "#000000"
                - 'cell "Pale Green #98fb98" [ref=e164]':
                  - text: Pale Green
                  - code [ref=e165]: "#98fb98"
                - cell [ref=e166]:
                  - generic [ref=e167]: Sample text
                - cell "16.6:1" [ref=e168]
              - 'row "Black #000000 Pale Turquoise #afeeee 16.4:1" [ref=e169]':
                - 'cell "Black #000000" [ref=e170]':
                  - text: Black
                  - code [ref=e171]: "#000000"
                - 'cell "Pale Turquoise #afeeee" [ref=e172]':
                  - text: Pale Turquoise
                  - code [ref=e173]: "#afeeee"
                - cell [ref=e174]:
                  - generic [ref=e175]: Sample text
                - cell "16.4:1" [ref=e176]
              - 'row "Black #000000 Lavender #e6e6fa 16.8:1" [ref=e177]':
                - 'cell "Black #000000" [ref=e178]':
                  - text: Black
                  - code [ref=e179]: "#000000"
                - 'cell "Lavender #e6e6fa" [ref=e180]':
                  - text: Lavender
                  - code [ref=e181]: "#e6e6fa"
                - cell [ref=e182]:
                  - generic [ref=e183]: Sample text
                - cell "16.8:1" [ref=e184]
          - heading "Light text on dark backgrounds" [level=3] [ref=e185]
          - table [ref=e187]:
            - rowgroup [ref=e188]:
              - row "Text colour Background colour Example Ratio" [ref=e189]:
                - columnheader "Text colour" [ref=e190]
                - columnheader "Background colour" [ref=e191]
                - columnheader "Example" [ref=e192]
                - columnheader "Ratio" [ref=e193]
            - rowgroup [ref=e194]:
              - 'row "White #ffffff Black #000000 21:1" [ref=e195]':
                - 'cell "White #ffffff" [ref=e196]':
                  - text: White
                  - code [ref=e197]: "#ffffff"
                - 'cell "Black #000000" [ref=e198]':
                  - text: Black
                  - code [ref=e199]: "#000000"
                - cell [ref=e200]:
                  - generic [ref=e201]: Sample text
                - cell "21:1" [ref=e202]
              - 'row "White #ffffff Dark #232333 15.4:1" [ref=e203]':
                - 'cell "White #ffffff" [ref=e204]':
                  - text: White
                  - code [ref=e205]: "#ffffff"
                - 'cell "Dark #232333" [ref=e206]':
                  - text: Dark
                  - code [ref=e207]: "#232333"
                - cell [ref=e208]:
                  - generic [ref=e209]: Sample text
                - cell "15.4:1" [ref=e210]
              - 'row "White #ffffff Navy #000080 16.1:1" [ref=e211]':
                - 'cell "White #ffffff" [ref=e212]':
                  - text: White
                  - code [ref=e213]: "#ffffff"
                - 'cell "Navy #000080" [ref=e214]':
                  - text: Navy
                  - code [ref=e215]: "#000080"
                - cell [ref=e216]:
                  - generic [ref=e217]: Sample text
                - cell "16.1:1" [ref=e218]
              - 'row "White #ffffff Medium Blue #0000cd 11.2:1" [ref=e219]':
                - 'cell "White #ffffff" [ref=e220]':
                  - text: White
                  - code [ref=e221]: "#ffffff"
                - 'cell "Medium Blue #0000cd" [ref=e222]':
                  - text: Medium Blue
                  - code [ref=e223]: "#0000cd"
                - cell [ref=e224]:
                  - generic [ref=e225]: Sample text
                - cell "11.2:1" [ref=e226]
              - 'row "White #ffffff Indigo #4b0082 13:1" [ref=e227]':
                - 'cell "White #ffffff" [ref=e228]':
                  - text: White
                  - code [ref=e229]: "#ffffff"
                - 'cell "Indigo #4b0082" [ref=e230]':
                  - text: Indigo
                  - code [ref=e231]: "#4b0082"
                - cell [ref=e232]:
                  - generic [ref=e233]: Sample text
                - cell "13:1" [ref=e234]
              - 'row "White #ffffff Dark Green #006400 7.4:1" [ref=e235]':
                - 'cell "White #ffffff" [ref=e236]':
                  - text: White
                  - code [ref=e237]: "#ffffff"
                - 'cell "Dark Green #006400" [ref=e238]':
                  - text: Dark Green
                  - code [ref=e239]: "#006400"
                - cell [ref=e240]:
                  - generic [ref=e241]: Sample text
                - cell "7.4:1" [ref=e242]
              - 'row "White #ffffff Saddle Brown #8b4513 7.1:1" [ref=e243]':
                - 'cell "White #ffffff" [ref=e244]':
                  - text: White
                  - code [ref=e245]: "#ffffff"
                - 'cell "Saddle Brown #8b4513" [ref=e246]':
                  - text: Saddle Brown
                  - code [ref=e247]: "#8b4513"
                - cell [ref=e248]:
                  - generic [ref=e249]: Sample text
                - cell "7.1:1" [ref=e250]
              - 'row "Pink #ffd6e5 Medium Blue #0000cd 8.5:1" [ref=e251]':
                - 'cell "Pink #ffd6e5" [ref=e252]':
                  - text: Pink
                  - code [ref=e253]: "#ffd6e5"
                - 'cell "Medium Blue #0000cd" [ref=e254]':
                  - text: Medium Blue
                  - code [ref=e255]: "#0000cd"
                - cell [ref=e256]:
                  - generic [ref=e257]: Sample text
                - cell "8.5:1" [ref=e258]
          - heading "Colours suitable for body text on white (AAA / AA)" [level=2] [ref=e259]
          - table [ref=e261]:
            - rowgroup [ref=e262]:
              - row "Colour Hex Example Rating (on white)" [ref=e263]:
                - columnheader "Colour" [ref=e264]
                - columnheader "Hex" [ref=e265]
                - columnheader "Example" [ref=e266]
                - columnheader "Rating (on white)" [ref=e267]
            - rowgroup [ref=e268]:
              - 'row "Black #000000 AAA / AA" [ref=e269]':
                - cell "Black" [ref=e270]
                - cell "#000000" [ref=e271]:
                  - code [ref=e272]: "#000000"
                - cell [ref=e273]:
                  - generic [ref=e274]: Text
                - cell "AAA / AA" [ref=e275]
              - 'row "Dark #232333 AAA / AA" [ref=e276]':
                - cell "Dark" [ref=e277]
                - cell "#232333" [ref=e278]:
                  - code [ref=e279]: "#232333"
                - cell [ref=e280]:
                  - generic [ref=e281]: Text
                - cell "AAA / AA" [ref=e282]
              - 'row "Navy #000080 AAA / AA" [ref=e283]':
                - cell "Navy" [ref=e284]
                - cell "#000080" [ref=e285]:
                  - code [ref=e286]: "#000080"
                - cell [ref=e287]:
                  - generic [ref=e288]: Text
                - cell "AAA / AA" [ref=e289]
              - 'row "Medium Blue #0000cd AAA / AA" [ref=e290]':
                - cell "Medium Blue" [ref=e291]
                - cell "#0000cd" [ref=e292]:
                  - code [ref=e293]: "#0000cd"
                - cell [ref=e294]:
                  - generic [ref=e295]: Text
                - cell "AAA / AA" [ref=e296]
              - 'row "Saddle Brown #8b4513 AAA / AA" [ref=e297]':
                - cell "Saddle Brown" [ref=e298]
                - cell "#8b4513" [ref=e299]:
                  - code [ref=e300]: "#8b4513"
                - cell [ref=e301]:
                  - generic [ref=e302]: Text
                - cell "AAA / AA" [ref=e303]
              - 'row "Teal #008080 AAA / AA" [ref=e304]':
                - cell "Teal" [ref=e305]
                - cell "#008080" [ref=e306]:
                  - code [ref=e307]: "#008080"
                - cell [ref=e308]:
                  - generic [ref=e309]: Text
                - cell "AAA / AA" [ref=e310]
              - 'row "Medium Violet Red #c71585 AAA / AA" [ref=e311]':
                - cell "Medium Violet Red" [ref=e312]
                - cell "#c71585" [ref=e313]:
                  - code [ref=e314]: "#c71585"
                - cell [ref=e315]:
                  - generic [ref=e316]: Text
                - cell "AAA / AA" [ref=e317]
              - 'row "Indigo #4b0082 AAA / AA" [ref=e318]':
                - cell "Indigo" [ref=e319]
                - cell "#4b0082" [ref=e320]:
                  - code [ref=e321]: "#4b0082"
                - cell [ref=e322]:
                  - generic [ref=e323]: Text
                - cell "AAA / AA" [ref=e324]
              - 'row "Crimson #dc143c AAA / AA" [ref=e325]':
                - cell "Crimson" [ref=e326]
                - cell "#dc143c" [ref=e327]:
                  - code [ref=e328]: "#dc143c"
                - cell [ref=e329]:
                  - generic [ref=e330]: Text
                - cell "AAA / AA" [ref=e331]
              - 'row "Dark Green #006400 AAA / AA" [ref=e332]':
                - cell "Dark Green" [ref=e333]
                - cell "#006400" [ref=e334]:
                  - code [ref=e335]: "#006400"
                - cell [ref=e336]:
                  - generic [ref=e337]: Text
                - cell "AAA / AA" [ref=e338]
          - heading "Colours for large text, headings or UI (AA on white)" [level=2] [ref=e339]
          - paragraph [ref=e340]: The colours below meet AA contrast for text on white, but are best reserved for larger text (such as headings) or for interface elements like buttons and labels, rather than long paragraphs.
          - table [ref=e342]:
            - rowgroup [ref=e343]:
              - row "Colour Hex Example Rating (on white)" [ref=e344]:
                - columnheader "Colour" [ref=e345]
                - columnheader "Hex" [ref=e346]
                - columnheader "Example" [ref=e347]
                - columnheader "Rating (on white)" [ref=e348]
            - rowgroup [ref=e349]:
              - 'row "Slate Grey #708090 AA" [ref=e350]':
                - cell "Slate Grey" [ref=e351]
                - cell "#708090" [ref=e352]:
                  - code [ref=e353]: "#708090"
                - cell [ref=e354]:
                  - generic [ref=e355]: Text
                - cell "AA" [ref=e356]
              - 'row "Medium Blue Slate #7b68ee AA" [ref=e357]':
                - cell "Medium Blue Slate" [ref=e358]
                - cell "#7b68ee" [ref=e359]:
                  - code [ref=e360]: "#7b68ee"
                - cell [ref=e361]:
                  - generic [ref=e362]: Text
                - cell "AA" [ref=e363]
              - 'row "Red #ff0000 AA" [ref=e364]':
                - cell "Red" [ref=e365]
                - cell "#ff0000" [ref=e366]:
                  - code [ref=e367]: "#ff0000"
                - cell [ref=e368]:
                  - generic [ref=e369]: Text
                - cell "AA" [ref=e370]
              - 'row "Orange Red #ff4500 AA" [ref=e371]':
                - cell "Orange Red" [ref=e372]
                - cell "#ff4500" [ref=e373]:
                  - code [ref=e374]: "#ff4500"
                - cell [ref=e375]:
                  - generic [ref=e376]: Text
                - cell "AA" [ref=e377]
          - heading "Accent and background colours (not for text on white)" [level=2] [ref=e378]
          - paragraph [ref=e379]: The colours below are generally not suitable for body text on a white background. They can be used as background fills, borders, highlights, or within graphics, provided the contrast with any overlaid text is checked.
          - table [ref=e381]:
            - rowgroup [ref=e382]:
              - row "Colour Hex Example Notes" [ref=e383]:
                - columnheader "Colour" [ref=e384]
                - columnheader "Hex" [ref=e385]
                - columnheader "Example" [ref=e386]
                - columnheader "Notes" [ref=e387]
            - rowgroup [ref=e388]:
              - 'row "White #ffffff Use as a background, not as text on white." [ref=e389]':
                - cell "White" [ref=e390]
                - cell "#ffffff" [ref=e391]:
                  - code [ref=e392]: "#ffffff"
                - cell [ref=e393]:
                  - generic [ref=e394]: Background
                - cell "Use as a background, not as text on white." [ref=e395]
              - 'row "White Smoke #f5f5f5 Use as a light background panel." [ref=e396]':
                - cell "White Smoke" [ref=e397]
                - cell "#f5f5f5" [ref=e398]:
                  - code [ref=e399]: "#f5f5f5"
                - cell [ref=e400]:
                  - generic [ref=e401]: Background
                - cell "Use as a light background panel." [ref=e402]
              - 'row "Deep Sky Blue #00bfff Accent or background; not recommended for text on white." [ref=e403]':
                - cell "Deep Sky Blue" [ref=e404]
                - cell "#00bfff" [ref=e405]:
                  - code [ref=e406]: "#00bfff"
                - cell [ref=e407]:
                  - generic [ref=e408]: Swatch
                - cell "Accent or background; not recommended for text on white." [ref=e409]
              - 'row "Yellow #ffff00 Highlight or accent only; very low contrast as text." [ref=e410]':
                - cell "Yellow" [ref=e411]
                - cell "#ffff00" [ref=e412]:
                  - code [ref=e413]: "#ffff00"
                - cell [ref=e414]:
                  - generic [ref=e415]: Swatch
                - cell "Highlight or accent only; very low contrast as text." [ref=e416]
              - 'row "Khaki #f0e68c Use as a soft background or accent." [ref=e417]':
                - cell "Khaki" [ref=e418]
                - cell "#f0e68c" [ref=e419]:
                  - code [ref=e420]: "#f0e68c"
                - cell [ref=e421]:
                  - generic [ref=e422]: Swatch
                - cell "Use as a soft background or accent." [ref=e423]
              - 'row "Turquoise #40e0d0 Accent colour; check contrast if used behind text." [ref=e424]':
                - cell "Turquoise" [ref=e425]
                - cell "#40e0d0" [ref=e426]:
                  - code [ref=e427]: "#40e0d0"
                - cell [ref=e428]:
                  - generic [ref=e429]: Swatch
                - cell "Accent colour; check contrast if used behind text." [ref=e430]
              - 'row "Pale Turquoise #afeeee Light background only; avoid for text." [ref=e431]':
                - cell "Pale Turquoise" [ref=e432]
                - cell "#afeeee" [ref=e433]:
                  - code [ref=e434]: "#afeeee"
                - cell [ref=e435]:
                  - generic [ref=e436]: Swatch
                - cell "Light background only; avoid for text." [ref=e437]
              - 'row "Violet #ee82ee Accent colour; not for body text on white." [ref=e438]':
                - cell "Violet" [ref=e439]
                - cell "#ee82ee" [ref=e440]:
                  - code [ref=e441]: "#ee82ee"
                - cell [ref=e442]:
                  - generic [ref=e443]: Swatch
                - cell "Accent colour; not for body text on white." [ref=e444]
              - 'row "Light Pink #ffb6c1 Light background only." [ref=e445]':
                - cell "Light Pink" [ref=e446]
                - cell "#ffb6c1" [ref=e447]:
                  - code [ref=e448]: "#ffb6c1"
                - cell [ref=e449]:
                  - generic [ref=e450]: Swatch
                - cell "Light background only." [ref=e451]
              - 'row "Lavender #e6e6fa Subtle background panel or highlight." [ref=e452]':
                - cell "Lavender" [ref=e453]
                - cell "#e6e6fa" [ref=e454]:
                  - code [ref=e455]: "#e6e6fa"
                - cell [ref=e456]:
                  - generic [ref=e457]: Swatch
                - cell "Subtle background panel or highlight." [ref=e458]
              - 'row "Salmon #fa8072 Accent; avoid as text on white." [ref=e459]':
                - cell "Salmon" [ref=e460]
                - cell "#fa8072" [ref=e461]:
                  - code [ref=e462]: "#fa8072"
                - cell [ref=e463]:
                  - generic [ref=e464]: Swatch
                - cell "Accent; avoid as text on white." [ref=e465]
              - 'row "Dark Orange #ff8c00 Accent colour; check contrast when used." [ref=e466]':
                - cell "Dark Orange" [ref=e467]
                - cell "#ff8c00" [ref=e468]:
                  - code [ref=e469]: "#ff8c00"
                - cell [ref=e470]:
                  - generic [ref=e471]: Swatch
                - cell "Accent colour; check contrast when used." [ref=e472]
              - 'row "Orange #ffa500 Accent only; not recommended for text on white." [ref=e473]':
                - cell "Orange" [ref=e474]
                - cell "#ffa500" [ref=e475]:
                  - code [ref=e476]: "#ffa500"
                - cell [ref=e477]:
                  - generic [ref=e478]: Swatch
                - cell "Accent only; not recommended for text on white." [ref=e479]
              - 'row "Spring Green #00ff7f Highlight or accent; check contrast carefully." [ref=e480]':
                - cell "Spring Green" [ref=e481]
                - cell "#00ff7f" [ref=e482]:
                  - code [ref=e483]: "#00ff7f"
                - cell [ref=e484]:
                  - generic [ref=e485]: Swatch
                - cell "Highlight or accent; check contrast carefully." [ref=e486]
              - 'row "Pale Green #98fb98 Soft background only; avoid for text on white." [ref=e487]':
                - cell "Pale Green" [ref=e488]
                - cell "#98fb98" [ref=e489]:
                  - code [ref=e490]: "#98fb98"
                - cell [ref=e491]:
                  - generic [ref=e492]: Swatch
                - cell "Soft background only; avoid for text on white." [ref=e493]
          - heading "Using colours in Canvas content" [level=2] [ref=e494]
          - paragraph [ref=e495]: "When applying colours in Canvas, use them through inline styles on text or container elements. For example:"
          - generic [ref=e496]:
            - code [ref=e500]:
              - generic [ref=e501]: "<p style=\"color: #0000cd;\">"
              - generic [ref=e502]: This paragraph uses Medium Blue as text on a white background.
              - generic [ref=e503]: </p>
            - button "Copy code to clipboard" [ref=e504] [cursor=pointer]: Copy
          - generic [ref=e505]:
            - code [ref=e509]:
              - generic [ref=e510]: "<div style=\"background-color: #f5f5f5; padding: 1rem;\">"
              - generic [ref=e511]: <p>This panel uses White Smoke as a light background.</p>
              - generic [ref=e512]: </div>
            - button "Copy code to clipboard" [ref=e513] [cursor=pointer]: Copy
          - paragraph [ref=e514]:
            - text: For combinations not shown here, use the
            - link "WebAIM Contrast Checker" [ref=e515] [cursor=pointer]:
              - /url: https://webaim.org/resources/contrastchecker/
            - text: to verify that your chosen colours meet at least AA contrast (4.5:1 for normal text, 3:1 for large text).
        - navigation "Page navigation" [ref=e516]:
          - link "← Previous Tables" [ref=e518] [cursor=pointer]:
            - /url: /tables
            - generic [ref=e519]: ← Previous
            - generic [ref=e520]: Tables
          - link "Next → Grid" [ref=e522] [cursor=pointer]:
            - /url: /grid
            - generic [ref=e523]: Next →
            - generic [ref=e524]: Grid
      - generic "Site footer" [ref=e525]:
        - navigation "Site map" [ref=e526]:
          - generic [ref=e527]:
            - paragraph [ref=e528]: Canvas Content Styling Guide
            - link "Introduction" [ref=e529] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e530]:
            - paragraph [ref=e531]: HTML Basics in Canvas
            - link "Typography" [ref=e532] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e533] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e534] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e535]:
            - paragraph [ref=e536]: Colour and Branding
            - link "Colours in Canvas" [ref=e537] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e538]:
            - paragraph [ref=e539]: Layout and Spacing
            - link "Grid" [ref=e540] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e541] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e542] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e543]:
            - paragraph [ref=e544]: Canvas Components
            - link "Buttons" [ref=e545] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e546] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e547] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e548] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e549] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e550] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e551] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e552]:
            - paragraph [ref=e553]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e554] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e555] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e556] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e557]:
            - paragraph [ref=e558]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e559] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e560] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e561] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e562] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e563]:
          - paragraph [ref=e564]: © 2025–2026 Karl Horning
          - generic [ref=e565]:
            - link "Karl Horning on GitHub" [ref=e566] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e567]
            - link "Karl Horning on LinkedIn" [ref=e569] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e570]
            - link "Karl Horning's personal portfolio" [ref=e572] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e573]
  - button "Open Next.js Dev Tools" [ref=e582] [cursor=pointer]:
    - img [ref=e583]
  - alert [ref=e586]
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