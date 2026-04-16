export default function page() {
    return (
        <article>
            <h1>Progress and Status Indicators</h1>

            <p>
                Canvas includes a small set of legacy UI components that can be
                used to show progress, status, or key information. These
                patterns rely on older Canvas JavaScript enhancements (for
                example, <code>pill</code> and <code>ui-progressbar</code>)
                rather than modern HTML elements such as
                <code>&lt;progress&gt;</code>. They are supported within course
                content but may not behave consistently across all browsers.
            </p>

            <p>
                Where possible, this page also shows inline-style alternatives
                that do not depend on Canvas' legacy classes and are closer to
                modern accessibility practice.
            </p>

            <h2>Useful references</h2>

            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>&lt;progress&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>role="progressbar"</code>
                    </a>
                </li>
            </ul>

            <h2>Pill-style status indicators (Canvas class)</h2>

            <p>
                The <code>pill</code> class is a legacy Canvas pattern that
                creates a horizontal list of compact status indicators. This is
                useful for presenting summary information about an activity,
                such as its weighting, rules, or points.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>Example assignment settings:</p>

                <ul className="pill">
                    <li>30% of module mark</li>
                    <li>2 late submission rules</li>
                    <li>10 points total</li>
                </ul>
            </div>

            <pre>
                <code>
                    &lt;p&gt;Example assignment settings:&lt;/p&gt; &lt;ul
                    class="pill"&gt; &lt;li&gt;30% of module mark&lt;/li&gt;
                    &lt;li&gt;2 late submission rules&lt;/li&gt; &lt;li&gt;10
                    points total&lt;/li&gt; &lt;/ul&gt;
                </code>
            </pre>

            <p>
                The pill pattern is purely presentational. Screen readers will
                announce it as a normal list, so avoid using colour or position
                alone to convey meaning. Make sure the text inside each pill is
                self-explanatory.
            </p>

            <h3>Inline-only alternative: pill-style labels</h3>

            <p>
                If you prefer not to rely on the legacy <code>pill</code> class,
                you can create a similar effect using inline styles. This works
                in any context that allows inline CSS.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>Example assignment settings:</p>

                <p>
                    <span className="inline-block mx-1 mb-1 px-2 py-[0.15rem] rounded-full bg-[#eef4ff] text-[#111322] text-[0.85rem]">
                        30% of module mark
                    </span>

                    <span className="inline-block mx-1 mb-1 px-2 py-[0.15rem] rounded-full bg-[#eef4ff] text-[#111322] text-[0.85rem]">
                        2 late submission rules
                    </span>

                    <span className="inline-block mx-1 mb-1 px-2 py-[0.15rem] rounded-full bg-[#eef4ff] text-[#111322] text-[0.85rem]">
                        10 points total
                    </span>
                </p>
            </div>

            <pre>
                <code>
                    &lt;p&gt;Example assignment settings:&lt;/p&gt; &lt;p&gt;
                    &lt;span style=" display: inline-block; margin: 0 0.25rem
                    0.25rem 0; padding: 0.15rem 0.5rem; border-radius: 999px;
                    background: #eef4ff; color: #111322; font-size: 0.85rem; "
                    &gt; 30% of module mark &lt;/span&gt; &lt;span style="
                    display: inline-block; margin: 0 0.25rem 0.25rem 0; padding:
                    0.15rem 0.5rem; border-radius: 999px; background: #eef4ff;
                    color: #111322; font-size: 0.85rem; " &gt; 2 late submission
                    rules &lt;/span&gt; &lt;span style=" display: inline-block;
                    margin: 0 0.25rem 0.25rem 0; padding: 0.15rem 0.5rem;
                    border-radius: 999px; background: #eef4ff; color: #111322;
                    font-size: 0.85rem; " &gt; 10 points total &lt;/span&gt;
                    &lt;/p&gt;
                </code>
            </pre>

            <h2>Progress bar (Canvas legacy pattern)</h2>

            <p>
                Canvas includes a legacy progress bar built using
                <code>&lt;div&gt;</code> elements and enhanced by JavaScript.
                This displays a visual bar but does not behave like the semantic
                HTML <code>&lt;progress&gt;</code> element.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>Example: module completion status</p>

                <div
                    id="progressbar"
                    className="ui-progressbar ui-widget ui-widget-content ui-corner-all w-full h-6"
                    role="progressbar"
                    aria-label="Module completion progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={50}
                    aria-valuetext="50% complete"
                >
                    <div
                        className="ui-progressbar-value ui-widget-header ui-corner-left w-[50%] bg-[#0000cd]"
                    ></div>
                </div>

                <p>
                    <span className="screenreader-only">Module progress: </span>
                    <strong>50% complete</strong>
                </p>
            </div>

            <pre>
                <code>
                    &lt;p&gt;Example: module completion status&lt;/p&gt; &lt;div
                    id="progressbar" class="ui-progressbar ui-widget
                    ui-widget-content ui-corner-all" role="progressbar"
                    aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"
                    aria-valuetext="50% complete" style="width: 100%; height:
                    24px;" &gt; &lt;div class="ui-progressbar-value
                    ui-widget-header ui-corner-left" style="width: 50%;
                    background-color:#0000cd;"&gt; &lt;/div&gt; &lt;/div&gt;
                    &lt;p&gt; &lt;span class="screenreader-only"&gt;Module
                    progress: &lt;/span&gt; &lt;strong&gt;50%
                    complete&lt;/strong&gt; &lt;/p&gt;
                </code>
            </pre>

            <p>
                If you change the progress value, remember to update
                <code>aria-valuenow</code>, <code>aria-valuetext</code>, and the
                inner bar's <code>width</code> so they all stay in sync (for
                example, 75% would use <code>aria-valuenow="75"</code>,
                <code>aria-valuetext="75% complete"</code>, and
                <code>style="width: 75%;"</code>).
            </p>

            <h3>Inline-only alternative: semantic progressbar</h3>

            <p>
                You can create a simple, accessible progress indicator using
                only inline styles and ARIA attributes, without relying on
                Canvas' <code>ui-progressbar</code> classes. This will not
                animate automatically, but it is predictable and works wherever
                inline CSS is allowed.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p id="inline-progress-label">Reading progress:</p>

                <div
                    role="progressbar"
                    aria-labelledby="inline-progress-label"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={40}
                    aria-valuetext="40% complete"
                    className="w-full h-5 rounded-full border border-[#d0d4dd] bg-[#f5f7fb] overflow-hidden"
                >
                    <div className="w-[40%] h-full [background:linear-gradient(90deg,#0000cd,#4c9dcd)]"></div>
                </div>

                <p className="mt-2">
                    <strong>40% complete</strong> — 4 of 10 sections read.
                </p>
            </div>

            <pre>
                <code>
                    &lt;p id="inline-progress-label"&gt;Reading
                    progress:&lt;/p&gt; &lt;div role="progressbar"
                    aria-labelledby="inline-progress-label" aria-valuemin="0"
                    aria-valuemax="100" aria-valuenow="40" aria-valuetext="40%
                    complete" style=" width: 100%; height: 1.25rem;
                    border-radius: 999px; border: 1px solid #d0d4dd; background:
                    #f5f7fb; overflow: hidden; " &gt; &lt;div style=" width:
                    40%; height: 100%; background: linear-gradient(90deg,
                    #0000cd, #4c9dcd); " &gt;&lt;/div&gt; &lt;/div&gt; &lt;p
                    style="margin-top: 0.5rem"&gt; &lt;strong&gt;40%
                    complete&lt;/strong&gt; — 4 of 10 sections read. &lt;/p&gt;
                </code>
            </pre>

            <h2>Modern HTML reference (outside Canvas)</h2>

            <p>
                In modern HTML, progress is usually represented with the
                semantic <code>&lt;progress&gt;</code> element. However, in this
                Canvas instance the <code>&lt;progress&gt;</code> element is
                stripped out of Rich Content Editor HTML, so it is shown here
                only as a reference for web development outside Canvas.
            </p>

            <pre>
                <code>
                    &lt;!-- Example of semantic HTML, not supported in Canvas
                    content --&gt; &lt;label for="module-progress"&gt;Module
                    completion:&lt;/label&gt; &lt;progress id="module-progress"
                    value="0.5" max="1"&gt;50%&lt;/progress&gt;
                </code>
            </pre>

            <h2>Accessibility notes</h2>

            <p>Because these indicators are based on legacy Canvas patterns:</p>

            <ul>
                <li>
                    Behaviours may vary across browsers and devices, especially
                    for assistive technologies.
                </li>
                <li>
                    The legacy progress bar does not automatically announce
                    changes to screen readers; static values must be updated
                    manually.
                </li>
                <li>
                    Colour should never be the only way of communicating meaning
                    or status. Always include a text description of the current
                    value (for example, "40% complete — 4 of 10 sections read").
                </li>
                <li>
                    Inline-only patterns that use
                    <code>role="progressbar"</code>, <code>aria-valuenow</code>,
                    and visible text are often more robust and predictable than
                    JavaScript-enhanced widgets.
                </li>
            </ul>
        </article>
    );
}
