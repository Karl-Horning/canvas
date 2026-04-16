export default function page() {
    return (
        <article>
            <h1>Lists</h1>

            <p>
                Canvas supports standard HTML list elements, along with optional
                legacy utility classes such as <code>unstyled</code> and
                <code>dl-horizontal</code>. The structures shown here follow
                modern semantic HTML, and the examples demonstrate how each list
                type appears in this Canvas instance. All examples below can be
                copied directly into a Canvas page using the HTML editor.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — Structuring content with lists
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>,
                        and <code>&lt;dd&gt;</code>
                    </a>
                </li>
            </ul>

            <h2>Unordered lists</h2>

            <p>
                Use <code>&lt;ul&gt;</code> for lists where the order of items
                does not matter. Canvas displays unordered lists with standard
                bullet points.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <ul>
                    <li>First unordered item</li>
                    <li>Second unordered item</li>
                    <li>Third unordered item</li>
                </ul>
            </div>

            <pre>
                <code>
                    &lt;ul&gt; &lt;li&gt;First unordered item&lt;/li&gt;
                    &lt;li&gt;Second unordered item&lt;/li&gt; &lt;li&gt;Third
                    unordered item&lt;/li&gt; &lt;/ul&gt;
                </code>
            </pre>

            <h2>Ordered lists</h2>

            <p>
                Use <code>&lt;ol&gt;</code> for content where the sequence is
                meaningful, such as steps in a process or ranked items.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <ol>
                    <li>List item one</li>
                    <li>List item two</li>
                    <li>List item three</li>
                </ol>
            </div>

            <pre>
                <code>
                    &lt;ol&gt; &lt;li&gt;List item one&lt;/li&gt; &lt;li&gt;List
                    item two&lt;/li&gt; &lt;li&gt;List item three&lt;/li&gt;
                    &lt;/ol&gt;
                </code>
            </pre>

            <h2>Unstyled lists</h2>

            <p>
                The <code>unstyled</code> class removes bullets or numbering
                from a list. This utility comes from Canvas' legacy CSS and may
                behave differently if the institutional theme is updated.
                Alternatively, you can use inline styles such as
                <code>style="list-style: none; padding: 0; margin: 0;"</code>.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <ul className="unstyled">
                    <li>Unstyled list item one</li>
                    <li>Unstyled list item two</li>
                    <li>Unstyled list item three</li>
                </ul>
            </div>

            <pre>
                <code>
                    &lt;ul class="unstyled"&gt; &lt;li&gt;Unstyled list item
                    one&lt;/li&gt; &lt;li&gt;Unstyled list item two&lt;/li&gt;
                    &lt;li&gt;Unstyled list item three&lt;/li&gt; &lt;/ul&gt;
                </code>
            </pre>

            <h2>Definition lists</h2>

            <p>
                Definition lists use <code>&lt;dt&gt;</code> for the term and
                <code>&lt;dd&gt;</code> for its description. They are useful for
                glossaries, key-value pairs, or structured explanation lists.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <dl>
                    <dt>Placeholder term</dt>
                    <dd>A short description relating to the term.</dd>

                    <dt>Another term</dt>
                    <dd>Additional details describing this item.</dd>

                    <dt>Final term</dt>
                    <dd>A final example description.</dd>
                </dl>
            </div>

            <pre>
                <code>
                    &lt;dl&gt; &lt;dt&gt;Placeholder term&lt;/dt&gt; &lt;dd&gt;A
                    short description relating to the term.&lt;/dd&gt;
                    &lt;dt&gt;Another term&lt;/dt&gt; &lt;dd&gt;Additional
                    details describing this item.&lt;/dd&gt; &lt;dt&gt;Final
                    term&lt;/dt&gt; &lt;dd&gt;A final example
                    description.&lt;/dd&gt; &lt;/dl&gt;
                </code>
            </pre>

            <h2>Horizontal definition lists</h2>

            <p>
                The <code>dl-horizontal</code> class displays terms and
                definitions side-by-side. This layout is powered by Canvas'
                legacy CSS and may differ slightly depending on institutional
                theme settings.
            </p>

            <p>
                If you want full control of spacing and alignment, you can
                recreate a similar layout using inline CSS Grid. This avoids
                relying on legacy classes and behaves consistently across modern
                browsers. For a full reference of grid properties, see:{" "}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CSS Grid documentation (MDN)
                </a>
                .
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <dl className="dl-horizontal">
                    <dt>Placeholder term</dt>
                    <dd>A short description relating to the term.</dd>

                    <dt>Another term</dt>
                    <dd>Additional details describing this item.</dd>

                    <dt>Final term</dt>
                    <dd>A final example description.</dd>
                </dl>
            </div>

            <pre>
                <code>
                    &lt;dl class="dl-horizontal"&gt; &lt;dt&gt;Placeholder
                    term&lt;/dt&gt; &lt;dd&gt;A short description relating to
                    the term.&lt;/dd&gt; &lt;dt&gt;Another term&lt;/dt&gt;
                    &lt;dd&gt;Additional details describing this
                    item.&lt;/dd&gt; &lt;dt&gt;Final term&lt;/dt&gt; &lt;dd&gt;A
                    final example description.&lt;/dd&gt; &lt;/dl&gt;
                </code>
            </pre>

            <h2>Accessibility notes</h2>

            <ul>
                <li>
                    Use lists for genuine list content, not for layout or
                    indentation.
                </li>
                <li>
                    Avoid long lists without headings — break sections up with
                    subheadings where appropriate.
                </li>
                <li>
                    Do not rely on colour or position alone to communicate
                    meaning within list items.
                </li>
                <li>
                    Definition lists should only be used for pairs of related
                    terms and descriptions, not as a styling shortcut.
                </li>
            </ul>
        </article>
    );
}
