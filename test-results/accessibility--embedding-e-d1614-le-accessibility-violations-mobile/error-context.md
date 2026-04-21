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
+         "html": "<div class=\"html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode\" tabindex=\"\" id=\"movie_player\" data-version=\"/s/player/218d9d92/player_embed_es6.vflset/en_US/base.js\" aria-label=\"YouTube Video Player\">",
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
            - heading "Embedding External Media in Canvas" [level=1] [ref=e60]
            - paragraph [ref=e61]:
              - time [ref=e62]: 28 Nov 2025
              - generic [ref=e63]: ·
              - generic [ref=e64]: 3 min read
          - paragraph [ref=e65]:
            - text: Canvas supports embedded media using elements such as
            - code [ref=e66]: <iframe>
            - text: ","
            - code [ref=e67]: <audio>
            - text: ", and"
            - code [ref=e68]: <video>
            - text: . These patterns use standard HTML and are suitable for including maps, videos, audio clips, and other external resources within pages created in the Rich Content Editor.
          - paragraph [ref=e69]: The examples below show how to embed audio, a YouTube video, a Google Map, and a standard HTML5 video, followed by the code needed to reproduce each pattern.
          - heading "Useful references" [level=2] [ref=e70]
          - list [ref=e71]:
            - listitem [ref=e72]:
              - link "MDN — <iframe> element" [ref=e73] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
                - text: MDN —
                - code [ref=e74]: <iframe>
                - text: element
            - listitem [ref=e75]:
              - link "MDN — <embed> element" [ref=e76] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
                - text: MDN —
                - code [ref=e77]: <embed>
                - text: element
            - listitem [ref=e78]:
              - link "MDN — <audio> element" [ref=e79] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
                - text: MDN —
                - code [ref=e80]: <audio>
                - text: element
            - listitem [ref=e81]:
              - link "MDN — <video> element" [ref=e82] [cursor=pointer]:
                - /url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
                - text: MDN —
                - code [ref=e83]: <video>
                - text: element
            - listitem [ref=e84]:
              - link "W3C WAI — Making Audio and Video Media Accessible" [ref=e85] [cursor=pointer]:
                - /url: https://www.w3.org/WAI/media/av/
          - heading "Audio embed" [level=2] [ref=e86]
          - paragraph [ref=e87]:
            - text: Use the HTML5
            - code [ref=e88]: <audio>
            - text: element with one or more
            - code [ref=e89]: <source>
            - text: children. The
            - code [ref=e90]: controls
            - text: attribute displays built-in browser audio controls.
          - generic [ref=e92]: Your browser does not support the audio element.
          - generic [ref=e93]:
            - code [ref=e97]:
              - generic [ref=e98]: <audio controls>
              - generic [ref=e99]: <source src="YOUR_AUDIO_FILE_URL" type="audio/mpeg" />
              - generic [ref=e100]: Your browser does not support the audio element.
              - generic [ref=e101]: </audio>
            - button "Copy code to clipboard" [ref=e102] [cursor=pointer]: Copy
          - heading "YouTube video embed" [level=2] [ref=e103]
          - paragraph [ref=e104]:
            - text: YouTube videos can be embedded using an
            - code [ref=e105]: <iframe>
            - text: with the
            - code [ref=e106]: /embed/
            - text: URL format. The example below uses a public Canvas 101 video.
          - iframe [ref=e108]:
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
          - generic [ref=e109]:
            - code [ref=e113]:
              - generic [ref=e114]: <iframe
              - generic [ref=e115]: width="100%"
              - generic [ref=e116]: height="400"
              - generic [ref=e117]: src="https://www.youtube.com/embed/dwXwah-feFk"
              - generic [ref=e118]: frameborder="0"
              - generic [ref=e119]: allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              - generic [ref=e120]: allowfullscreen
              - generic [ref=e121]: "></iframe>"
            - button "Copy code to clipboard" [ref=e122] [cursor=pointer]: Copy
          - heading "Google Maps embed" [level=2] [ref=e123]
          - paragraph [ref=e124]:
            - text: Google Maps provides embed code that can be pasted directly into Canvas as an
            - code [ref=e125]: <iframe>
            - text: . The example below shows an embedded map for Tate Modern.
          - iframe [ref=e127]:
            - link "Open in Maps (opens in new tab)" [ref=f2e4] [cursor=pointer]:
              - /url: about:invalid#zClosurez
              - text: Open in Maps
              - img [ref=f2e6]
          - generic [ref=e128]:
            - code [ref=e132]:
              - generic [ref=e133]: <iframe
              - generic [ref=e134]: src="https://www.google.com/maps/embed?pb=..."
              - generic [ref=e135]: width="100%"
              - generic [ref=e136]: height="450"
              - generic [ref=e137]: style="border:0;"
              - generic [ref=e138]: allowfullscreen
              - generic [ref=e139]: loading="lazy"
              - generic [ref=e140]: referrerpolicy="no-referrer-when-downgrade"
              - generic [ref=e141]: "></iframe>"
            - button "Copy code to clipboard" [ref=e142] [cursor=pointer]: Copy
          - heading "Video embed" [level=2] [ref=e143]
          - paragraph [ref=e144]:
            - text: Use the HTML5
            - code [ref=e145]: <video>
            - text: element to embed a video file directly. The
            - code [ref=e146]: controls
            - text: attribute displays native playback controls and the
            - code [ref=e147]: poster
            - text: attribute sets a placeholder image.
          - generic [ref=e149]: Sorry, your browser does not support embedded videos.
          - generic [ref=e150]:
            - code [ref=e154]:
              - generic [ref=e155]: <video
              - generic [ref=e156]: controls
              - generic [ref=e157]: width="100%"
              - generic [ref=e158]: src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              - generic [ref=e159]: poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              - generic [ref=e160]: ">"
              - generic [ref=e161]: Sorry, your browser does not support embedded videos.
              - generic [ref=e162]: </video>
            - button "Copy code to clipboard" [ref=e163] [cursor=pointer]: Copy
          - heading "Other services" [level=2] [ref=e164]
          - paragraph [ref=e165]:
            - text: Services such as Google Drive and Google Slides provide embed codes that can be used in Canvas via
            - code [ref=e166]: <iframe>
            - text: ", in the same way as the examples above. These can be pasted into the HTML editor when creating or editing a page."
          - heading "Accessibility and limitations" [level=2] [ref=e167]
          - list [ref=e168]:
            - listitem [ref=e169]: Always provide text alternatives for audio and video (for example, captions, transcripts, or brief summaries) so that learners who cannot hear or see the media can still access the content.
            - listitem [ref=e170]: Avoid relying on autoplay. Let learners control when media starts, and consider those using screen readers or working in shared spaces.
            - listitem [ref=e171]: Provide direct links to the original resource (for example, "Open in a new tab") beneath embeds in case the iframe or media player does not load.
            - listitem [ref=e172]: Some embeds may not work if your institution blocks certain domains or if the external site prevents embedding. Test in Student View and, if necessary, offer an alternative presentation of the same content.
            - listitem [ref=e173]: Keep iframes to a reasonable height and width so that they remain usable on smaller screens. Where possible, ensure that critical information appears in the main page content as well as inside the embedded frame.
        - navigation "Page navigation" [ref=e174]:
          - link "← Previous What Canvas Removes and Modifies" [ref=e176] [cursor=pointer]:
            - /url: /what-canvas-removes-and-modifies
            - generic [ref=e177]: ← Previous
            - generic [ref=e178]: What Canvas Removes and Modifies
          - link "Next → Additional Examples" [ref=e180] [cursor=pointer]:
            - /url: /additional-examples
            - generic [ref=e181]: Next →
            - generic [ref=e182]: Additional Examples
      - generic "Site footer" [ref=e183]:
        - navigation "Site map" [ref=e184]:
          - generic [ref=e185]:
            - paragraph [ref=e186]: Canvas Content Styling Guide
            - link "Introduction" [ref=e187] [cursor=pointer]:
              - /url: /introduction
          - generic [ref=e188]:
            - paragraph [ref=e189]: HTML Basics in Canvas
            - link "Typography" [ref=e190] [cursor=pointer]:
              - /url: /typography
            - link "Lists" [ref=e191] [cursor=pointer]:
              - /url: /lists
            - link "Tables" [ref=e192] [cursor=pointer]:
              - /url: /tables
          - generic [ref=e193]:
            - paragraph [ref=e194]: Colour and Branding
            - link "Colours in Canvas" [ref=e195] [cursor=pointer]:
              - /url: /colours-in-canvas
          - generic [ref=e196]:
            - paragraph [ref=e197]: Layout and Spacing
            - link "Grid" [ref=e198] [cursor=pointer]:
              - /url: /grid
            - link "Spacing" [ref=e199] [cursor=pointer]:
              - /url: /spacing
            - link "Borders" [ref=e200] [cursor=pointer]:
              - /url: /borders
          - generic [ref=e201]:
            - paragraph [ref=e202]: Canvas Components
            - link "Buttons" [ref=e203] [cursor=pointer]:
              - /url: /buttons
            - link "Alerts" [ref=e204] [cursor=pointer]:
              - /url: /alerts
            - link "Flash Messages" [ref=e205] [cursor=pointer]:
              - /url: /flash-messages
            - link "Tabs" [ref=e206] [cursor=pointer]:
              - /url: /tabs
            - link "Popovers, Dialogs, and Tooltips" [ref=e207] [cursor=pointer]:
              - /url: /popovers-dialogs-and-tooltips
            - link "Progress and Status Indicators" [ref=e208] [cursor=pointer]:
              - /url: /progress-and-status-indicators
            - link "Draggable, Resizable, and Sortable Content" [ref=e209] [cursor=pointer]:
              - /url: /draggable-resizable-and-sortable-content
          - generic [ref=e210]:
            - paragraph [ref=e211]: Icons and Accessibility
            - link "Accessibility Helpers" [ref=e212] [cursor=pointer]:
              - /url: /accessibility-helpers
            - link "Legacy Icons" [ref=e213] [cursor=pointer]:
              - /url: /legacy-icons
            - link "Full Legacy Icons Reference" [ref=e214] [cursor=pointer]:
              - /url: /full-legacy-icons-reference
          - generic [ref=e215]:
            - paragraph [ref=e216]: Canvas Behaviour
            - link "Frequently Asked Questions" [ref=e217] [cursor=pointer]:
              - /url: /frequently-asked-questions
            - link "What Canvas Removes and Modifies" [ref=e218] [cursor=pointer]:
              - /url: /what-canvas-removes-and-modifies
            - link "Embedding External Media" [ref=e219] [cursor=pointer]:
              - /url: /embedding-external-media-in-canvas
            - link "Additional Examples" [ref=e220] [cursor=pointer]:
              - /url: /additional-examples
        - generic [ref=e221]:
          - paragraph [ref=e222]: © 2025–2026 Karl Horning
          - generic [ref=e223]:
            - link "Karl Horning on GitHub" [ref=e224] [cursor=pointer]:
              - /url: https://github.com/Karl-Horning
              - img [ref=e225]
            - link "Karl Horning on LinkedIn" [ref=e227] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/karl-horning
              - img [ref=e228]
            - link "Karl Horning's personal portfolio" [ref=e230] [cursor=pointer]:
              - /url: https://www.karlhorning.dev/
              - img [ref=e231]
  - button "Open Next.js Dev Tools" [ref=e240] [cursor=pointer]:
    - img [ref=e241]
  - alert [ref=e244]
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