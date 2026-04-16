export default function page() {
    return (
        <article>
            <h1>Borders</h1>

            <p>
                Canvas provides legacy utility classes for adding borders and
                rounded corners to elements. These include classes such as{" "}
                <code>border</code>, <code>border-trbl</code>, and{" "}
                <code>border-round</code>. They come from an older Canvas style
                guide and may change in future, but still work for styling
                content created in the Rich Content Editor.
            </p>

            <p>
                For new content, you can also use standard CSS properties such
                as <code>border</code> and <code>border-radius</code> directly
                in inline styles. The sections below show both approaches.
            </p>

            <h2>Useful references</h2>
            <ul>
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

            <h2>Content box with border (Canvas legacy classes)</h2>

            <p>
                This example shows a content box with padding and a border on
                all sides using <code>content-box pad-box-mini</code> and
                <code>border border-trbl</code>. These classes are part of
                Canvas' legacy CSS.
            </p>

            <div className="content-box pad-box-mini border border-trbl mb-4 bg-[#f9f9f9]">
                <h5>Example content box</h5>
                <p>
                    This box uses
                    <code>content-box pad-box-mini border border-trbl</code> for
                    spacing and a border on all sides.
                </p>
            </div>

            <pre>
                <code>
                    &lt;div class="content-box pad-box-mini border
                    border-trbl"&gt; &lt;h5&gt;Example content box&lt;/h5&gt;
                    &lt;p&gt; This box uses &lt;code&gt;content-box pad-box-mini
                    border border-trbl&lt;/code&gt; for spacing and a border on
                    all sides. &lt;/p&gt; &lt;/div&gt;
                </code>
            </pre>

            <h2>Full border (Canvas legacy classes)</h2>

            <p>
                Use <code>border border-trbl</code> to apply a border to all
                sides of an element using Canvas' legacy border utilities.
            </p>

            <div className="border border-trbl mb-4 p-3 bg-[#f9f9f9]">
                Full border using <code>border border-trbl</code>.
            </div>

            <pre>
                <code>
                    &lt;div class="border border-trbl"&gt; Full border using
                    &lt;code&gt;border border-trbl&lt;/code&gt;. &lt;/div&gt;
                </code>
            </pre>

            <h2>Partial borders (Canvas legacy classes)</h2>

            <p>
                Combine <code>border</code> with directional classes such as
                <code>border-rbl</code> or <code>border-b</code> to apply
                borders to specific sides only. These helpers are part of the
                older Canvas style guide.
            </p>

            <div className="border border-rbl mb-3 p-3 bg-[#f9f9f9]">
                Right, bottom, left border (<code>border border-rbl</code>)
            </div>

            <div className="border border-tbl mb-3 p-3 bg-[#f9f9f9]">
                Top, bottom, left border (<code>border border-tbl</code>)
            </div>

            <div className="border border-bl mb-3 p-3 bg-[#f9f9f9]">
                Bottom, left border (<code>border border-bl</code>)
            </div>

            <div className="border border-tl mb-3 p-3 bg-[#f9f9f9]">
                Top, left border (<code>border border-tl</code>)
            </div>

            <div className="border border-b mb-3 p-3 bg-[#f9f9f9]">
                Bottom border only (<code>border border-b</code>)
            </div>

            <div className="border border-t mb-4 p-3 bg-[#f9f9f9]">
                Top border only (<code>border border-t</code>)
            </div>

            <pre>
                <code>
                    &lt;div class="border border-rbl"&gt; Right, bottom, left
                    border &lt;/div&gt; &lt;div class="border border-tbl"&gt;
                    Top, bottom, left border &lt;/div&gt; &lt;div class="border
                    border-bl"&gt; Bottom, left border &lt;/div&gt; &lt;div
                    class="border border-tl"&gt; Top, left border &lt;/div&gt;
                    &lt;div class="border border-b"&gt; Bottom border only
                    &lt;/div&gt; &lt;div class="border border-t"&gt; Top border
                    only &lt;/div&gt;
                </code>
            </pre>

            <h2>Border radius (Canvas legacy classes)</h2>

            <p>
                Use <code>border-round</code> and related classes to round all
                corners or specific corners of a bordered element. Under the
                hood, these classes use the standard
                <code>border-radius</code> property.
            </p>

            <div className="border border-trbl border-round mb-3 p-3 bg-[#f9f9f9]">
                All corners rounded (
                <code>border border-trbl border-round</code>)
            </div>

            <div className="border border-trbl border-round-b mb-3 p-3 bg-[#f9f9f9]">
                Bottom corners rounded (
                <code>border border-trbl border-round-b</code>)
            </div>

            <div className="border border-trbl border-round-t mb-3 p-3 bg-[#f9f9f9]">
                Top corners rounded (
                <code>border border-trbl border-round-t</code>)
            </div>

            <div className="border border-trbl border-round-tl mb-4 p-3 bg-[#f9f9f9]">
                Top-left corner rounded (
                <code>border border-trbl border-round-tl</code>)
            </div>

            <pre>
                <code>
                    &lt;div class="border border-trbl border-round"&gt; All
                    corners rounded &lt;/div&gt; &lt;div class="border
                    border-trbl border-round-b"&gt; Bottom corners rounded
                    &lt;/div&gt; &lt;div class="border border-trbl
                    border-round-t"&gt; Top corners rounded &lt;/div&gt; &lt;div
                    class="border border-trbl border-round-tl"&gt; Top-left
                    corner rounded &lt;/div&gt;
                </code>
            </pre>

            <h2>Modern borders with inline CSS</h2>

            <p>
                For new content, you can rely on standard CSS properties
                directly in inline styles. This removes the dependency on
                Canvas-specific classes and matches how borders are defined in
                modern web development.
            </p>

            <p>
                The examples below use only inline styles for
                <code>border</code>, <code>border-radius</code>, and spacing.
            </p>

            <h3>Simple bordered box</h3>

            <div className="border border-[#d0d7de] p-3 mb-4 bg-white">
                <p className="m-0">
                    This box uses <code>border: 1px solid #d0d7de;</code> and
                    <code>padding: 0.75rem;</code> applied directly as inline
                    styles.
                </p>
            </div>

            <pre>
                <code>
                    &lt;div style=" border: 1px solid #d0d7de; padding: 0.75rem;
                    margin-bottom: 1rem; background: #ffffff; " &gt; &lt;p
                    style="margin: 0"&gt; This box uses &lt;code&gt;border: 1px
                    solid #d0d7de;&lt;/code&gt; and &lt;code&gt;padding:
                    0.75rem;&lt;/code&gt; applied directly as inline styles.
                    &lt;/p&gt; &lt;/div&gt;
                </code>
            </pre>

            <h3>Left border callout</h3>

            <p>
                You can create callout panels by applying a thicker border to
                one side only, combined with padding and background colour.
            </p>

            <div className="[border-left:4px_solid_#0000cd] px-4 py-3 mb-4 bg-[#f5f7ff]">
                <strong>Callout heading</strong>
                <p className="mt-2 mb-0">
                    This callout uses
                    <code>border-left: 4px solid #0000cd;</code> to emphasise
                    the block without adding borders on all sides.
                </p>
            </div>

            <pre>
                <code>
                    &lt;div style=" border-left: 4px solid #0000cd; padding:
                    0.75rem 1rem; margin-bottom: 1rem; background: #f5f7ff; "
                    &gt; &lt;strong&gt;Callout heading&lt;/strong&gt; &lt;p
                    style="margin: 0.5rem 0 0"&gt; This callout uses
                    &lt;code&gt;border-left: 4px solid #0000cd;&lt;/code&gt; to
                    emphasise the block without adding borders on all sides.
                    &lt;/p&gt; &lt;/div&gt;
                </code>
            </pre>

            <h3>Rounded panels and pill-style badges</h3>

            <p>
                Rounded corners are controlled with
                <code>border-radius</code>. Larger values create softer corners,
                and very large values can create pill-shaped elements.
            </p>

            <div className="border border-[#d0d7de] rounded-lg p-3 mb-3 bg-[#f9fafb]">
                <p className="m-0">
                    This panel uses <code>border-radius: 0.5rem;</code> for
                    gently rounded corners.
                </p>
            </div>

            <div className="border border-[#d0d7de] rounded-full px-5 py-2 inline-block mb-4 bg-[#eef6ff]">
                <span>Example pill badge with rounded edges</span>
            </div>

            <pre>
                <code>
                    &lt;div style=" border: 1px solid #d0d7de; border-radius:
                    0.5rem; padding: 0.75rem; margin-bottom: 0.75rem;
                    background: #f9fafb; " &gt; &lt;p style="margin: 0"&gt; This
                    panel uses &lt;code&gt;border-radius: 0.5rem;&lt;/code&gt;
                    for gently rounded corners. &lt;/p&gt; &lt;/div&gt; &lt;div
                    style=" border: 1px solid #d0d7de; border-radius: 999px;
                    padding: 0.5rem 1.25rem; display: inline-block;
                    margin-bottom: 1rem; background: #eef6ff; " &gt;
                    &lt;span&gt;Example pill badge with rounded
                    edges&lt;/span&gt; &lt;/div&gt;
                </code>
            </pre>

            <h2>Accessibility notes</h2>
            <ul>
                <li>
                    Do not rely on borders alone to convey meaning. If the
                    border is used to highlight important information, include a
                    clear text label such as a heading or descriptor.
                </li>
                <li>
                    Light grey borders may be difficult for some learners to
                    see. This does not fail WCAG, but consider using slightly
                    stronger colours when the border is important for
                    comprehension.
                </li>
                <li>
                    Avoid using borders to mimic interactive controls such as
                    buttons or input fields unless Canvas provides the
                    underlying behaviour. This prevents confusion for screen
                    reader and keyboard users.
                </li>
            </ul>
        </article>
    );
}
