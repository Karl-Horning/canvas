export default function page() {
    return (
        <article>
            <h1>Spacing</h1>

            <p>
                Spacing in Canvas content can be controlled in two main ways:
                using Canvas' legacy utility classes (such as
                <code>content-box</code> and <code>pad-box</code>) and using
                modern CSS properties like <code>margin</code> and
                <code>padding</code> directly in inline styles.
            </p>

            <p>
                The examples below show both approaches. The Canvas classes come
                from an older style guide and may change in future, whereas the
                inline style examples use standard CSS that will be familiar
                from modern web development.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>padding</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>margin</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>border</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-radius"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>border-radius</code>
                    </a>
                </li>
            </ul>

            <h2>Content boxes (Canvas legacy classes)</h2>

            <p>
                The <code>content-box</code> class adds padding inside an
                element, making blocks of content easier to read. In the example
                below, two boxes use <code>content-box</code> together with
                Canvas border classes to show the spacing clearly.
            </p>

            <div className="content-box border border-trbl mb-4 bg-[#f9f9f9]">
                First content box using <code>content-box</code>.
            </div>

            <div className="content-box border border-trbl mb-4 bg-[#f9f9f9]">
                Second content box with the same class and spacing.
            </div>

            <pre>
                <code>
                    &lt;div class="content-box border border-trbl"&gt; First
                    content box using &lt;code&gt;content-box&lt;/code&gt;.
                    &lt;/div&gt; &lt;div class="content-box border
                    border-trbl"&gt; Second content box with the same class and
                    spacing. &lt;/div&gt;
                </code>
            </pre>

            <h2>Padding utilities (Canvas legacy classes)</h2>

            <p>
                The <code>pad-box</code> utilities control the amount of padding
                inside an element. Larger values add more space, while
                <code>pad-box-micro</code> adds only a small amount. These
                classes are part of Canvas' legacy CSS and may not be available
                in future versions, but they can still be used in current
                content.
            </p>

            <div className="pad-box-mega border border-trbl mb-3 bg-[#f9f9f9]">
                <strong>pad-box-mega</strong> (largest padding)
            </div>

            <div className="pad-box border border-trbl mb-3 bg-[#f9f9f9]">
                <strong>pad-box</strong> (standard padding)
            </div>

            <div className="pad-box-mini border border-trbl mb-3 bg-[#f9f9f9]">
                <strong>pad-box-mini</strong> (small padding)
            </div>

            <div className="pad-box-micro border border-trbl mb-4 bg-[#f9f9f9]">
                <strong>pad-box-micro</strong> (very small padding)
            </div>

            <pre>
                <code>
                    &lt;div class="pad-box-mega border border-trbl"&gt;
                    &lt;strong&gt;pad-box-mega&lt;/strong&gt; (largest padding)
                    &lt;/div&gt; &lt;div class="pad-box border border-trbl"&gt;
                    &lt;strong&gt;pad-box&lt;/strong&gt; (standard padding)
                    &lt;/div&gt; &lt;div class="pad-box-mini border
                    border-trbl"&gt; &lt;strong&gt;pad-box-mini&lt;/strong&gt;
                    (small padding) &lt;/div&gt; &lt;div class="pad-box-micro
                    border border-trbl"&gt;
                    &lt;strong&gt;pad-box-micro&lt;/strong&gt; (very small
                    padding) &lt;/div&gt;
                </code>
            </pre>

            <h2>Modern spacing with inline CSS</h2>

            <p>
                For new content, it is often clearer to control spacing using
                standard CSS properties directly in inline styles. This avoids
                relying on legacy Canvas classes and makes your content easier
                to understand for anyone familiar with modern CSS.
            </p>

            <p>
                Common properties include:
                <code>padding</code> (space inside an element),
                <code>margin</code> (space outside an element),
                <code>border</code>, and <code>border-radius</code> (for rounded
                corners).
            </p>

            <h3>Card-style blocks with padding and margin</h3>

            <p>
                The example below shows three "card" blocks that use only inline
                styles for spacing and borders. Each card has:
            </p>
            <ul>
                <li>
                    <code>padding</code> to space the content inside;
                </li>
                <li>
                    <code>margin-bottom</code> to add space between cards;
                </li>
                <li>
                    <code>border</code> and <code>border-radius</code> for a
                    simple card-style appearance.
                </li>
            </ul>

            <div className="border border-[#d0d7de] rounded-lg p-4 mb-4 bg-[#f9fafb]">
                <h3 className="mt-0 mb-2">
                    Card with standard padding
                </h3>
                <p className="m-0">
                    This card uses <code>padding: 1rem;</code> and
                    <code>margin-bottom: 1rem;</code> to create clear spacing
                    around the content and between cards.
                </p>
            </div>

            <div className="border border-[#d0d7de] rounded-lg p-3 mb-4 bg-white">
                <h3 className="mt-0 mb-2">
                    Card with slightly smaller padding
                </h3>
                <p className="m-0">
                    This card uses <code>padding: 0.75rem;</code> for a slightly
                    more compact layout.
                </p>
            </div>

            <div className="border border-[#d0d7de] rounded-full py-3 px-5 mb-4 bg-[#eef6ff] inline-block">
                <p className="m-0">
                    This pill-style badge uses
                    <code>border-radius: 999px;</code> and extra horizontal
                    padding.
                </p>
            </div>

            <pre>
                <code>
                    &lt;div style=" border: 1px solid #d0d7de; border-radius:
                    0.5rem; padding: 1rem; margin-bottom: 1rem; background:
                    #f9fafb; " &gt; &lt;h3 style="margin-top: 0; margin-bottom:
                    0.5rem"&gt; Card with standard padding &lt;/h3&gt; &lt;p
                    style="margin: 0"&gt; This card uses &lt;code&gt;padding:
                    1rem;&lt;/code&gt; and &lt;code&gt;margin-bottom:
                    1rem;&lt;/code&gt; to create clear spacing around the
                    content and between cards. &lt;/p&gt; &lt;/div&gt; &lt;div
                    style=" border: 1px solid #d0d7de; border-radius: 0.5rem;
                    padding: 0.75rem; margin-bottom: 1rem; background: #ffffff;
                    " &gt; &lt;h3 style="margin-top: 0; margin-bottom:
                    0.5rem"&gt; Card with slightly smaller padding &lt;/h3&gt;
                    &lt;p style="margin: 0"&gt; This card uses
                    &lt;code&gt;padding: 0.75rem;&lt;/code&gt; for a slightly
                    more compact layout. &lt;/p&gt; &lt;/div&gt; &lt;div style="
                    border: 1px solid #d0d7de; border-radius: 999px; padding:
                    0.75rem 1.25rem; margin-bottom: 1rem; background: #eef6ff;
                    display: inline-block; " &gt; &lt;p style="margin: 0"&gt;
                    This pill-style badge uses &lt;code&gt;border-radius:
                    999px;&lt;/code&gt; and extra horizontal padding. &lt;/p&gt;
                    &lt;/div&gt;
                </code>
            </pre>

            <h3>Spacing between sections</h3>

            <p>
                You can also control spacing between larger sections of a page
                using <code>margin-top</code> and <code>margin-bottom</code>.
                This is useful for separating headings, paragraphs, and blocks
                of content without relying on extra empty paragraphs or
                line-breaks.
            </p>

            <div className="[border-left:4px_solid_#0000cd] px-4 py-3 mt-6 mb-6 bg-[#f5f7ff]">
                <h3 className="mt-0 mb-2">
                    Section callout
                </h3>
                <p className="m-0">
                    This callout uses <code>margin-top</code> and
                    <code>margin-bottom</code> on the container to create space
                    above and below the block.
                </p>
            </div>

            <pre>
                <code>
                    &lt;div style=" border-left: 4px solid #0000cd; padding:
                    0.75rem 1rem; margin-top: 1.5rem; margin-bottom: 1.5rem;
                    background: #f5f7ff; " &gt; &lt;h3 style="margin-top: 0;
                    margin-bottom: 0.5rem"&gt; Section callout &lt;/h3&gt; &lt;p
                    style="margin: 0"&gt; This callout uses
                    &lt;code&gt;margin-top&lt;/code&gt; and
                    &lt;code&gt;margin-bottom&lt;/code&gt; on the container to
                    create space above and below the block. &lt;/p&gt;
                    &lt;/div&gt;
                </code>
            </pre>

            <h2>Accessibility and limitations</h2>

            <ul>
                <li>
                    Avoid using empty paragraphs or multiple line-breaks to
                    create space. These can be confusing for screen readers and
                    may be rewritten by Canvas when the page is saved.
                </li>
                <li>
                    Keep spacing consistent between related elements (such as
                    headings and their following paragraphs) so that content is
                    easy to scan and read.
                </li>
                <li>
                    When using borders and backgrounds to create card-style
                    blocks, ensure that text still has sufficient colour
                    contrast against the background.
                </li>
            </ul>
        </article>
    );
}
