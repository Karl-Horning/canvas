# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> /embedding-external-media-in-canvas — no automatically detectable accessibility violations
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 142

- Array []
+ Array [
+   Object {
+     "description": "Ensure ARIA attributes are not prohibited for an element's role",
+     "help": "Elements must only use permitted ARIA attributes",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright",
+     "id": "aria-prohibited-attr",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   aria-label attribute cannot be used on a div with no valid role attribute.",
+         "html": "<div class=\"html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode\" tabindex=\"\" id=\"movie_player\" data-version=\"/s/player/218d9d92/player_embed_es6.vflset/en_US/base.js\" aria-label=\"YouTube Video Player\">",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": Object {
+               "messageKey": "noRoleSingular",
+               "nodeName": "div",
+               "prohibited": Array [
+                 "aria-label",
+               ],
+               "role": null,
+             },
+             "id": "aria-prohibited-attr",
+             "impact": "serious",
+             "message": "aria-label attribute cannot be used on a div with no valid role attribute.",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           "iframe[title=\"Canvas 101 — YouTube video\"]",
+           "#movie_player",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.aria",
+       "wcag2a",
+       "wcag412",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-7.1.1",
+     ],
+   },
+   Object {
+     "description": "Ensure buttons have discernible text",
+     "help": "Buttons must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright",
+     "id": "button-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button class=\"ytmVideoInfoLink ytmVideoInfoChannelAvatar\"><img alt=\"thumbnail-image\" class=\"ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill\"></button>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "iframe[title=\"Canvas 101 — YouTube video\"]",
+           ".ytmVideoInfoChannelAvatar",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.9.1",
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
            - heading "Embedding External Media in Canvas" [level=1] [ref=e57]
            - paragraph [ref=e58]:
              - time [ref=e59]: 28 Nov 2025
              - generic [ref=e60]: ·
              - generic [ref=e61]: 3 min read
          - paragraph [ref=e62]:
            - text: Canvas supports embedded media using elements such as
            - code [ref=e63]: <iframe>
            - text: ","
            - code [ref=e64]: <audio>
            - text: ", and"
            - code [ref=e65]: <video>
            - text: . These patterns use standard HTML and are suitable for including maps, videos, audio clips, and other external resources within pages created in the Rich Content Editor.
          - paragraph [ref=e66]: The examples below show how to embed audio, a YouTube video, a Google Map, and a standard HTML5 video, followed by the code needed to reproduce each pattern.
          - heading "Useful references" [level=2] [ref=e67]
          - list [ref=e68]:
            - listitem [ref=e69]:
              - link "MDN — <iframe> element" [ref=e70] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
                - text: MDN —
                - code [ref=e71]: <iframe>
                - text: element
            - listitem [ref=e72]:
              - link "MDN — <embed> element" [ref=e73] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
                - text: MDN —
                - code [ref=e74]: <embed>
                - text: element
            - listitem [ref=e75]:
              - link "MDN — <audio> element" [ref=e76] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
                - text: MDN —
                - code [ref=e77]: <audio>
                - text: element
            - listitem [ref=e78]:
              - link "MDN — <video> element" [ref=e79] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
                - text: MDN —
                - code [ref=e80]: <video>
                - text: element
            - listitem [ref=e81]:
              - link "W3C WAI — Making Audio and Video Media Accessible" [ref=e82] [cursor=pointer]:
                - /url: https://www.w3.org/WAI/media/av/
          - heading "Audio embed" [level=2] [ref=e83]
          - paragraph [ref=e84]:
            - text: Use the HTML5
            - code [ref=e85]: <audio>
            - text: element with one or more
            - code [ref=e86]: <source>
            - text: children. The
            - code [ref=e87]: controls
            - text: attribute displays built-in browser audio controls.
          - generic [ref=e89]: Your browser does not support the audio element.
          - generic [ref=e90]:
            - code [ref=e94]:
              - generic [ref=e95]: <audio controls>
              - generic [ref=e96]: <source src="YOUR_AUDIO_FILE_URL" type="audio/mpeg" />
              - generic [ref=e97]: Your browser does not support the audio element.
              - generic [ref=e98]: </audio>
            - button "Copy code to clipboard" [ref=e99] [cursor=pointer]: Copy
          - heading "YouTube video embed" [level=2] [ref=e100]
          - paragraph [ref=e101]:
            - text: YouTube videos can be embedded using an
            - code [ref=e102]: <iframe>
            - text: with the
            - code [ref=e103]: /embed/
            - text: URL format. The example below uses a public Canvas 101 video.
          - iframe [ref=e105]:
            - generic [active] [ref=f1e1]:
              - generic "YouTube Video Player" [ref=f1e3]
              - generic [ref=f1e5]:
                - generic:
                  - generic:
                    - button "Play video" [ref=f1e10] [cursor=pointer]
                    - button "Hide player controls" [ref=f1e12] [cursor=pointer]
                    - generic [ref=f1e14]:
                      - generic [ref=f1e19]:
                        - generic [ref=f1e20]:
                          - link "Canvas 101" [ref=f1e21] [cursor=pointer]:
                            - /url: https://www.youtube.com/watch?v=dwXwah-feFk
                          - link "Instructure" [ref=f1e22] [cursor=pointer]:
                            - /url: /channel/UCSbm2g19jXCOfIe8OusD17w
                            - generic [ref=f1e23]: Instructure
                        - generic [ref=f1e24]:
                          - button [ref=f1e25] [cursor=pointer]
                          - generic [ref=f1e27]:
                            - generic: Instructure
                            - generic: 31.2K subscribers
                      - generic [ref=f1e28]:
                        - button "Share" [ref=f1e31] [cursor=pointer]:
                          - generic [ref=f1e35]:
                            - img
                        - link "Watch on YouTube" [ref=f1e42] [cursor=pointer]:
                          - /url: https://www.youtube.com/watch?v=dwXwah-feFk
                          - generic [ref=f1e45]:
                            - text: Watch on
                            - img [ref=f1e47]:
                              - generic [ref=f1e49]:
                                - img
          - generic [ref=e106]:
            - code [ref=e110]:
              - generic [ref=e111]: <iframe
              - generic [ref=e112]: width="100%"
              - generic [ref=e113]: height="400"
              - generic [ref=e114]: src="https://www.youtube.com/embed/dwXwah-feFk"
              - generic [ref=e115]: frameborder="0"
              - generic [ref=e116]: allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              - generic [ref=e117]: allowfullscreen
              - generic [ref=e118]: "></iframe>"
            - button "Copy code to clipboard" [ref=e119] [cursor=pointer]: Copy
          - heading "Google Maps embed" [level=2] [ref=e120]
          - paragraph [ref=e121]:
            - text: Google Maps provides embed code that can be pasted directly into Canvas as an
            - code [ref=e122]: <iframe>
            - text: . The example below shows an embedded map for Tate Modern.
          - iframe [ref=e124]:
            
          - generic [ref=e125]:
            - code [ref=e129]:
              - generic [ref=e130]: <iframe
              - generic [ref=e131]: src="https://www.google.com/maps/embed?pb=..."
              - generic [ref=e132]: width="100%"
              - generic [ref=e133]: height="450"
              - generic [ref=e134]: style="border:0;"
              - generic [ref=e135]: allowfullscreen
              - generic [ref=e136]: loading="lazy"
              - generic [ref=e137]: referrerpolicy="no-referrer-when-downgrade"
              - generic [ref=e138]: "></iframe>"
            - button "Copy code to clipboard" [ref=e139] [cursor=pointer]: Copy
          - heading "Video embed" [level=2] [ref=e140]
          - paragraph [ref=e141]:
            - text: Use the HTML5
            - code [ref=e142]: <video>
            - text: element to embed a video file directly. The
            - code [ref=e143]: controls
            - text: attribute displays native playback controls and the
            - code [ref=e144]: poster
            - text: attribute sets a placeholder image.
          - generic [ref=e146]: Sorry, your browser does not support embedded videos.
          - generic [ref=e147]:
            - code [ref=e151]:
              - generic [ref=e152]: <video
              - generic [ref=e153]: controls
              - generic [ref=e154]: width="100%"
              - generic [ref=e155]: src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              - generic [ref=e156]: poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              - generic [ref=e157]: ">"
              - generic [ref=e158]: Sorry, your browser does not support embedded videos.
              - generic [ref=e159]: </video>
            - button "Copy code to clipboard" [ref=e160] [cursor=pointer]: Copy
          - heading "Other services" [level=2] [ref=e161]
          - paragraph [ref=e162]:
            - text: Services such as Google Drive and Google Slides provide embed codes that can be used in Canvas via
            - code [ref=e163]: <iframe>
            - text: ", in the same way as the examples above. These can be pasted into the HTML editor when creating or editing a page."
          - heading "Accessibility and limitations" [level=2] [ref=e164]
          - list [ref=e165]:
            - listitem [ref=e166]: Always provide text alternatives for audio and video (for example, captions, transcripts, or brief summaries) so that learners who cannot hear or see the media can still access the content.
            - listitem [ref=e167]: Avoid relying on autoplay. Let learners control when media starts, and consider those using screen readers or working in shared spaces.
            - listitem [ref=e168]: Provide direct links to the original resource (for example, "Open in a new tab") beneath embeds in case the iframe or media player does not load.
            - listitem [ref=e169]: Some embeds may not work if your institution blocks certain domains or if the external site prevents embedding. Test in Student View and, if necessary, offer an alternative presentation of the same content.
            - listitem [ref=e170]: Keep iframes to a reasonable height and width so that they remain usable on smaller screens. Where possible, ensure that critical information appears in the main page content as well as inside the embedded frame.
        - navigation "Page navigation" [ref=e171]:
          - link "← Previous What Canvas Removes and Modifies" [ref=e173] [cursor=pointer]:
            - /url: /what-canvas-removes-and-modifies
            - generic [ref=e174]: ← Previous
            - generic [ref=e175]: What Canvas Removes and Modifies
          - link "Next → Additional Examples" [ref=e177] [cursor=pointer]:
            - /url: /additional-examples
            - generic [ref=e178]: Next →
            - generic [ref=e179]: Additional Examples
      - generic "Site footer" [ref=e180]:
        - navigation "Site map" [ref=e181]:
          - generic [ref=e182]:
            - paragraph [ref=e183]: Canvas Content Styling Guide
            - link "Introduction" [ref=e184] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e185]:
            - paragraph [ref=e186]: HTML Basics in Canvas
            - link "Typography" [ref=e187] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e188] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e189] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e190]:
            - paragraph [ref=e191]: Colour and Branding
            - link "Colours in Canvas" [ref=e192] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e193]:
            - paragraph [ref=e194]: Layout and Spacing
            - link "Grid" [ref=e195] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e196] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e197] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e198]:
            - paragraph [ref=e199]: Canvas Components
            - link "Buttons" [ref=e200] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e201] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e202] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e203] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e204] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e205] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e206] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e207]:
            - paragraph [ref=e208]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e209] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e210] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e211] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e212]:
            - paragraph [ref=e213]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e214] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e215] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e216] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e217] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e218]:
          - paragraph [ref=e219]: © 2025–2026 Karl Horning
          - generic [ref=e220]:
            - link "Karl Horning on GitHub" [ref=e221] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e222]
            - link "Karl Horning on LinkedIn" [ref=e224] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e225]
            - link "Karl Horning's personal portfolio" [ref=e227] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e228]
  - button "Open Next.js Dev Tools" [ref=e237] [cursor=pointer]:
    - img [ref=e238]
  - alert [ref=e241]
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