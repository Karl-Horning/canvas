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
                Canvas includes some legacy patterns that use{" "}
                <code>enhanceable_content</code> and data attributes to turn
                links and containers into popovers, dialogs, and tooltips. These
                are powered by Canvas&apos; own JavaScript and CSS and are
                intended for small pieces of supporting content, not for
                critical instructions.
            </p>

            <p>
                The examples below show how to create a simple popover dialog
                and a tooltip using Canvas&apos; legacy classes, followed by the
                HTML needed to reproduce them in this Canvas instance.
                Inline-style alternatives are also included for cases where you
                do not want to rely on Canvas&apos; JavaScript.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: Popover API
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>role=&quot;tooltip&quot;</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>role=&quot;dialog&quot;</code>
                    </a>
                </li>
            </ul>

            <h2>Popover dialog (Canvas legacy pattern)</h2>

            <p>
                A popover dialog can be created by marking a container with{" "}
                <code>class=&quot;enhanceable_content dialog&quot;</code> and
                linking to it with an anchor. When the link is activated, Canvas
                turns the target into a popover-style dialog. This relies on
                Canvas&apos; legacy JavaScript and cannot be recreated with
                inline styles alone.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <div
                    id="example-popover"
                    className="enhanceable_content dialog"
                    popover="auto"
                >
                    <p>
                        This is an example popover dialog. Use it for brief,
                        supporting information instead of critical instructions.
                    </p>
                </div>

                <p>
                    <a href="#example-popover" className="btn btn-primary">
                        Open dialog example
                    </a>
                </p>
            </div>

            <CodeBlock>{`<div id="example-popover" class="enhanceable_content dialog" popover="auto">
  <p>
    This is an example popover dialog. Use it for brief,
    supporting information instead of critical instructions.
  </p>
</div>
<p>
  <a href="#example-popover" class="btn btn-primary">
    Open dialog example
  </a>
</p>`}</CodeBlock>

            <p>
                Because this pattern relies on Canvas&apos; JavaScript, the
                exact behaviour (for example, how focus is handled and how the
                dialog is closed) may change over time. Avoid placing essential
                instructions or assessment content only inside a popover dialog.
            </p>

            <h3>Inline-only alternative: always-visible support panel</h3>

            <p>
                If you want to avoid relying on Canvas&apos; dialog enhancement,
                you can present supporting information in a clearly styled panel
                directly on the page using inline styles. This works without any
                JavaScript and is more predictable for assistive technologies.
            </p>

            <div
                role="note"
                className="mb-4 p-4 rounded-md [border-left:6px_solid_#4c9dcd] bg-[#e8f2ff] dark:bg-[#1e3a5f]"
            >
                <strong>Additional information:</strong>
                <p className="mt-2">
                    This panel shows information that might otherwise be hidden
                    in a popover. Because it is always visible in the page
                    content, all learners can access it without needing to open
                    a separate dialog.
                </p>
            </div>

            <CodeBlock>{`<div role="note" style="
  padding: 1rem;
  border-radius: 0.375rem;
  border-left: 6px solid #4c9dcd;
  background: #e8f2ff;
">
  <strong>Additional information:</strong>
  <p style="margin: 0.5rem 0 0 0">
    This panel shows information that might otherwise be hidden in a popover.
    Because it is always visible, all learners can access it.
  </p>
</div>`}</CodeBlock>

            <h2>Tooltips (Canvas legacy pattern)</h2>

            <p>
                Tooltips can be created by adding a <code>data-tooltip</code>{" "}
                attribute to a link or other element. Canvas uses this attribute
                to initialise a tooltip with the specified options, such as the
                tooltip class and position.
            </p>

            <p>
                The example below shows a link with a tooltip that appears to
                the right. The visible link text is generic and suitable for use
                in course content.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    Hover or focus the link below to see the tooltip (behaviour
                    may vary between browsers and devices):
                </p>

                <p>
                    <a
                        href="#"
                        title="Additional information about this topic."
                        data-tooltip='{"tooltipClass":"popover popover-padded","position":"right"}'
                    >
                        More information about this topic
                    </a>
                </p>
            </div>

            <CodeBlock>{`<p>
  <a href="#"
    title="Additional information about this topic."
    data-tooltip='{"tooltipClass":"popover popover-padded","position":"right"}'
  >
    More information about this topic
  </a>
</p>`}</CodeBlock>

            <p>
                Tooltips are best used for short, supplementary explanations.
                They should not be the only place where important instructions
                or assessment criteria are explained, as some users may not
                discover or be able to access the tooltip content.
            </p>

            <h3>Inline-only alternative: expanded help text</h3>

            <p>
                Instead of hiding information in a tooltip, you can place brief
                help text immediately after the link or phrase, styled so that
                it is visually distinct but always readable.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    You can
                    <a href="#"> download the template</a>
                    <span className="inline-block ml-1 px-[0.4rem] py-[0.1rem] rounded-full bg-[#eef4ff] dark:bg-[#1e3a5f] text-[#111322] dark:text-[#e5e7eb] text-[0.8rem]">
                        This opens in a new tab and may take a few seconds to
                        load.
                    </span>
                </p>
            </div>

            <CodeBlock>{`<p>
  You can
  <a href="#">download the template</a>
  <span style="
    display: inline-block;
    margin-left: 0.25rem;
    padding: 0.1rem 0.4rem;
    border-radius: 999px;
    background: #eef4ff;
    color: #111322;
    font-size: 0.8rem;
  ">
    This opens in a new tab and may take a few seconds to load.
  </span>
</p>`}</CodeBlock>

            <h2>Accessibility and limitations</h2>

            <ul>
                <li>
                    Popover dialogs and tooltips shown here depend on
                    Canvas&apos; legacy JavaScript and may not fully match
                    modern accessibility recommendations for focus management
                    and announcements.
                </li>
                <li>
                    Some learners may not discover tooltips triggered only by
                    hover. Always ensure essential information is available in
                    the main page content.
                </li>
                <li>
                    Inline-style alternatives (such as visible panels or brief
                    help text next to a link) are often more robust and
                    predictable for screen reader and keyboard users.
                </li>
                <li>
                    If you build your own custom dialog or popover outside
                    Canvas&apos; enhancement system, follow the patterns in the
                    MDN and WAI-ARIA guidance linked above.
                </li>
            </ul>
        </article>
    );
}
