import CodeBlock from "@/components/CodeBlock";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { generatePageMetadata, generatePageJsonLd } from "@/lib/siteMetadata";
import { meta } from "./meta";

export const metadata = generatePageMetadata(meta);

export default function page() {
    return (
        <article>
            <JsonLd data={generatePageJsonLd(meta)} />
            <PageHeader
                title={meta.title}
                date={meta.date}
                readingTime={meta.readingTime}
            />

            <p>
                Canvas supports embedded media using elements such as{" "}
                <code>&lt;iframe&gt;</code>, <code>&lt;audio&gt;</code>, and{" "}
                <code>&lt;video&gt;</code>. These patterns use standard HTML and
                are suitable for including maps, videos, audio clips, and other
                external resources within pages created in the Rich Content
                Editor.
            </p>

            <p>
                The examples below show how to embed audio, a YouTube video, a
                Google Map, and a standard HTML5 video, followed by the code
                needed to reproduce each pattern.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;iframe&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;embed&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;audio&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;video&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/media/av/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI — Making Audio and Video Media Accessible
                    </a>
                </li>
            </ul>

            <h2>Audio embed</h2>

            <p>
                Use the HTML5 <code>&lt;audio&gt;</code> element with one or
                more <code>&lt;source&gt;</code> children. The{" "}
                <code>controls</code> attribute displays built-in browser audio
                controls.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <audio controls>
                    <source
                        src="/audio/penguinmusic-future-design-344320.mp3"
                        type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                </audio>
            </div>

            <CodeBlock>{`<audio controls>
  <source src="YOUR_AUDIO_FILE_URL" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>`}</CodeBlock>

            <h2>YouTube video embed</h2>

            <p>
                YouTube videos can be embedded using an{" "}
                <code>&lt;iframe&gt;</code> with the <code>/embed/</code> URL
                format. The example below uses a public Canvas 101 video.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <iframe
                    title="Canvas 101 — YouTube video"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/dwXwah-feFk"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <CodeBlock>{`<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/dwXwah-feFk"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>`}</CodeBlock>

            <h2>Google Maps embed</h2>

            <p>
                Google Maps provides embed code that can be pasted directly into
                Canvas as an <code>&lt;iframe&gt;</code>. The example below
                shows an embedded map for Tate Modern.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <iframe
                    title="Tate Modern — Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.6509037157691!2d-0.10013424061170775!3d51.507678771728145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a931761995%3A0x1ffc6f23e06b9be7!2sTate%20Modern!5e0!3m2!1sen!2suk!4v1776430360702!5m2!1sen!2suk"
                    width="100%"
                    height="450"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <CodeBlock>{`<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>`}</CodeBlock>

            <h2>Video embed</h2>

            <p>
                Use the HTML5 <code>&lt;video&gt;</code> element to embed a
                video file directly. The <code>controls</code> attribute
                displays native playback controls and the <code>poster</code>{" "}
                attribute sets a placeholder image.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <video
                    controls
                    width="100%"
                    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                >
                    Sorry, your browser does not support embedded videos.
                </video>
            </div>

            <CodeBlock>{`<video
  controls
  width="100%"
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
>
  Sorry, your browser does not support embedded videos.
</video>`}</CodeBlock>

            <h2>Other services</h2>

            <p>
                Services such as Google Drive and Google Slides provide embed
                codes that can be used in Canvas via <code>&lt;iframe&gt;</code>
                , in the same way as the examples above. These can be pasted
                into the HTML editor when creating or editing a page.
            </p>

            <h2>Accessibility and limitations</h2>

            <ul>
                <li>
                    Always provide text alternatives for audio and video (for
                    example, captions, transcripts, or brief summaries) so that
                    learners who cannot hear or see the media can still access
                    the content.
                </li>
                <li>
                    Avoid relying on autoplay. Let learners control when media
                    starts, and consider those using screen readers or working
                    in shared spaces.
                </li>
                <li>
                    Provide direct links to the original resource (for example,
                    &quot;Open in a new tab&quot;) beneath embeds in case the
                    iframe or media player does not load.
                </li>
                <li>
                    Some embeds may not work if your institution blocks certain
                    domains or if the external site prevents embedding. Test in
                    Student View and, if necessary, offer an alternative
                    presentation of the same content.
                </li>
                <li>
                    Keep iframes to a reasonable height and width so that they
                    remain usable on smaller screens. Where possible, ensure
                    that critical information appears in the main page content
                    as well as inside the embedded frame.
                </li>
                <li>
                    Automated accessibility checkers (such as axe or WAVE) may
                    flag errors inside embedded iframes from services like
                    YouTube or Google Maps. These originate from the third
                    party&apos;s own markup and cannot be fixed by the page
                    author. They do not reflect a problem with your Canvas page.
                </li>
            </ul>
        </article>
    );
}
