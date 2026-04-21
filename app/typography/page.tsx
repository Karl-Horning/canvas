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
                Canvas uses standard HTML elements for headings, paragraphs, and
                text emphasis, along with a set of Canvas utility classes for
                alignment and colour. The utility classes come from Canvas&apos;
                legacy styles, while the HTML patterns shown here follow modern
                semantic and accessibility best practice. The examples below
                show how common typography patterns appear in Canvas, followed
                by the code used to create them.
            </p>

            <p>
                All examples are designed to be copied into a Canvas page using
                the HTML editor. They rely on native HTML elements, inline
                styles, and a small number of Canvas legacy classes that are
                still available in this Canvas instance.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — Headings and paragraphs
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;strong&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;em&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;small&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;details&gt;</code> and{" "}
                        <code>&lt;summary&gt;</code>
                    </a>
                </li>
            </ul>

            <h2>Headings</h2>

            <p>
                Use <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> to
                structure content hierarchically. <code>&lt;h1&gt;</code> is the
                most important heading on the page, and <code>&lt;h6&gt;</code>{" "}
                is the least important. In most Canvas pages you will only need
                levels one to three.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <h1>H1 Heading example</h1>
                <h2>H2 Heading example</h2>
                <h3>H3 Heading example</h3>
                <h4>H4 Heading example</h4>
                <h5>H5 Heading example</h5>
                <h6>H6 Heading example</h6>
            </div>

            <CodeBlock>{`<h1>H1 Heading example</h1>`}</CodeBlock>

            <CodeBlock>{`<h2>H2 Heading example</h2>`}</CodeBlock>

            <CodeBlock>{`<h3>H3 Heading example</h3>`}</CodeBlock>

            <CodeBlock>{`<h4>H4 Heading example</h4>`}</CodeBlock>

            <CodeBlock>{`<h5>H5 Heading example</h5>`}</CodeBlock>

            <CodeBlock>{`<h6>H6 Heading example</h6>`}</CodeBlock>

            <h2>Emphasis</h2>

            <p>
                Use <code>&lt;strong&gt;</code> to indicate important text,{" "}
                <code>&lt;em&gt;</code> for emphasised text (often read with
                stress by screen readers), and <code>&lt;small&gt;</code> for
                secondary or fine-print text. These are standard HTML elements
                and are preferred over purely visual styling for conveying
                meaning.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    This sentence contains{" "}
                    <strong>important highlighted text</strong> using{" "}
                    <code>&lt;strong&gt;</code>.
                </p>
                <p>
                    This sentence uses <em>emphasised text for stress</em> with{" "}
                    <code>&lt;em&gt;</code>.
                </p>
                <p>
                    This line includes{" "}
                    <small>supporting details in smaller text</small> using{" "}
                    <code>&lt;small&gt;</code>.
                </p>
            </div>

            <CodeBlock>{`<p>
  This sentence contains <strong>important highlighted text</strong>
  using <code>&lt;strong&gt;</code>.
</p>`}</CodeBlock>

            <CodeBlock>{`<p>
  This sentence uses <em>emphasised text for stress</em>
  with <code>&lt;em&gt;</code>.
</p>`}</CodeBlock>

            <CodeBlock>{`<p>
  This line includes <small>supporting details in smaller text</small>
  using <code>&lt;small&gt;</code>.
</p>`}</CodeBlock>

            <h2>Alignment</h2>

            <p>
                Alignment utility classes adjust the horizontal alignment of
                text. Use <code>text-left</code>, <code>text-right</code>, or{" "}
                <code>text-center</code> on block-level elements.
            </p>

            <p>
                These <code>text-*</code> classes are part of Canvas&apos;
                legacy utility CSS. They still work in this Canvas instance, but
                behaviour or naming could change in the future. You can also use
                inline styles such as{" "}
                <code>style=&quot;text-align: center;&quot;</code> if you prefer
                a more standard HTML approach that does not depend on
                Canvas&apos; stylesheets.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p className="text-left">This paragraph is left-aligned.</p>
                <p className="text-center">This paragraph is centre-aligned.</p>
                <p className="text-right">This paragraph is right-aligned.</p>
            </div>

            <CodeBlock>{`<p class="text-left">This paragraph is left-aligned.</p>`}</CodeBlock>

            <CodeBlock>{`<p class="text-center">This paragraph is centre-aligned.</p>`}</CodeBlock>

            <CodeBlock>{`<p class="text-right">This paragraph is right-aligned.</p>`}</CodeBlock>

            <h2>Text colour</h2>

            <p>
                Colour utility classes can be used to indicate status or
                emphasis. These classes are usually applied to short pieces of
                text such as labels, inline messages, or links.
            </p>

            <p>
                Classes like <code>muted</code>, <code>text-warning</code>,{" "}
                <code>text-error</code>, <code>text-info</code>, and{" "}
                <code>text-success</code> are provided by Canvas&apos; legacy
                CSS. They still work, but the exact colours may change if
                Canvas&apos; theme is updated. For precise colour control you
                can also use inline styles (for example from the{" "}
                <a href="/colour-and-branding/colours-in-canvas">
                    Colours in Canvas
                </a>{" "}
                page) alongside these classes.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p className="muted">Example of muted text.</p>

                <p className="text-warning">
                    Example of warning text{" "}
                    <a href="#" className="text-warning">
                        with a link
                    </a>
                </p>

                <p className="text-error">
                    Example of error text{" "}
                    <a href="#" className="text-error">
                        with a link
                    </a>
                </p>

                <p className="text-info">
                    Example of info text{" "}
                    <a href="#" className="text-info">
                        with a link
                    </a>
                </p>

                <p className="text-success">
                    Example of success text{" "}
                    <a href="#" className="text-success">
                        with a link
                    </a>
                </p>
            </div>

            <CodeBlock>{`<p class="muted">Example of muted text.</p>`}</CodeBlock>

            <CodeBlock>{`<p class="text-warning">
  Example of warning text <a href="#" class="text-warning">with a link</a>
</p>`}</CodeBlock>

            <CodeBlock>{`<p class="text-error">
  Example of error text <a href="#" class="text-error">with a link</a>
</p>`}</CodeBlock>

            <CodeBlock>{`<p class="text-info">
  Example of info text <a href="#" class="text-info">with a link</a>
</p>`}</CodeBlock>

            <CodeBlock>{`<p class="text-success">
  Example of success text <a href="#" class="text-success">with a link</a>
</p>`}</CodeBlock>

            <h2>Collapsible content with &lt;details&gt;</h2>

            <p>
                You can use the native HTML <code>&lt;details&gt;</code> and{" "}
                <code>&lt;summary&gt;</code> elements to create simple
                collapsible sections. These are useful for optional extra
                information, examples, or FAQs, without needing any custom
                JavaScript.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <details>
                    <summary>Collapsible section one</summary>
                    <p>
                        This is some additional content that can be shown or
                        hidden by activating the summary above.
                    </p>
                </details>

                <details>
                    <summary>Collapsible section two</summary>
                    <p>
                        You can use multiple <code>&lt;details&gt;</code>{" "}
                        elements on a page for separate blocks of content.
                    </p>
                </details>

                <details>
                    <summary>Collapsible section three</summary>
                    <p>
                        Avoid hiding critical instructions inside collapsed
                        content, as some learners may miss it.
                    </p>
                </details>
            </div>

            <CodeBlock>{`<details>
  <summary>Collapsible section one</summary>
  <p>
    This is some additional content that can be shown or hidden
    by activating the summary above.
  </p>
</details>

<details>
  <summary>Collapsible section two</summary>
  <p>
    You can use multiple <code>&lt;details&gt;</code> elements on
    a page for separate blocks of content.
  </p>
</details>

<details>
  <summary>Collapsible section three</summary>
  <p>
    Avoid hiding critical instructions inside collapsed content,
    as some learners may miss it.
  </p>
</details>`}</CodeBlock>

            <p>
                Some browsers support &quot;exclusive&quot; accordion behaviour
                using a <code>name</code> attribute on{" "}
                <code>&lt;details&gt;</code> (where opening one section closes
                the others). However, in this Canvas instance the{" "}
                <code>name</code> attribute is removed from{" "}
                <code>&lt;details&gt;</code> elements, so this exclusive
                accordion pattern is not available.
            </p>

            <p>
                If you would like to learn more about the{" "}
                <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code>{" "}
                elements and the exclusive accordion pattern, see the MDN
                article{" "}
                <a
                    href="https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Exclusive accordions using the HTML details element
                </a>
                .
            </p>

            <h2>Accessibility notes</h2>

            <ul>
                <li>
                    Use headings in order and avoid skipping levels (for
                    example, do not jump from <code>&lt;h1&gt;</code> straight
                    to <code>&lt;h4&gt;</code>).
                </li>
                <li>
                    Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code>{" "}
                    to convey importance or emphasis, not just to change the
                    visual appearance.
                </li>
                <li>
                    Avoid using colour alone to indicate meaning in text (for
                    example, &quot;items in red are required&quot; without any
                    other cue).
                </li>
                <li>
                    Treat <code>&lt;details&gt;</code> as a way to hide optional
                    or supplementary information. Essential instructions should
                    remain visible without needing to open a collapsed section.
                </li>
            </ul>
        </article>
    );
}
