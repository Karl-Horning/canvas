export default function introduction() {
    return (
        <article>
            <h1>Canvas Content Styling Guide</h1>

            <p>
                This course collects examples of HTML and CSS patterns that can
                be used to style content created with the Canvas Rich Content
                Editor (RCE). All examples have been tested in Canvas and are
                intended for everyday use when building pages, assignments, and
                other course content.
            </p>

            <p>
                The patterns shown here are based on Canvas' legacy style guide,
                available at
                <a href="https://canvas.instructure.com/styleguide">
                    https://canvas.instructure.com/styleguide
                </a>
                , with additional adjustments where needed to ensure that they
                work reliably in this Canvas instance.
            </p>

            <h2>About these styles</h2>

            <p>
                The Canvas style guide describes HTML and CSS components that
                were developed for use in Canvas prior to 2015. The
                <strong>
                    Canvas-provided CSS classes and JavaScript behaviours
                </strong>
                documented there are no longer actively maintained by
                Instructure, so their behaviour or appearance may change in
                future updates to Canvas.
            </p>

            <p>
                In this course, those legacy classes are combined with
                <strong>
                    modern HTML semantics, inline styles, and current
                    accessibility practices
                </strong>
                (for example, appropriate use of headings, ARIA attributes, and
                colour contrast). Inline styles are often the most reliable way
                to apply consistent visual styling in Canvas content and are
                recommended when used alongside accessible HTML.
            </p>

            <p>
                You can therefore think of these examples as:
                <strong>
                    modern HTML and accessibility patterns layered on top of
                    Canvas' legacy CSS utilities
                </strong>
                for authors working inside Canvas, rather than as a design
                system for new applications.
            </p>

            <h2>Scope of this guide</h2>

            <p>
                This guide focuses on patterns that work
                <strong>reliably</strong> in the Canvas RCE after saving. It is
                not an exhaustive list of everything Canvas allows. Many legacy
                classes, JavaScript behaviours, and older components are
                intentionally excluded if they are unstable, inaccessible, or
                inconsistent across browsers. Every example here has been
                curated for clarity, reliability, and practical use in course
                content.
            </p>

            <p>
                Because Canvas rewrites HTML when you save or switch between the
                Visual and HTML editors, examples in this guide use simple,
                widely supported HTML and inline CSS that survive Canvas'
                cleaning process. For complex patterns, it is often easiest to
                paste the code directly into the HTML editor.
            </p>

            <h2>When to use these patterns</h2>

            <p>Use the patterns in this course when you are:</p>

            <ul>
                <li>Creating or updating Canvas content in the RCE.</li>
                <li>
                    Structuring information with headings, lists, and tables.
                </li>
                <li>
                    Applying layout, spacing, and borders to make content easier
                    to read.
                </li>
                <li>
                    Adding Canvas-styled components such as buttons, alerts,
                    flash messages, and tabs.
                </li>
                <li>
                    Including icons or accessibility helpers to support users.
                </li>
            </ul>

            <p>
                <strong>Do not</strong> use these Canvas-specific classes as the
                basis for new standalone applications or LTI tools. For those,
                use a modern design system instead.
            </p>

            <h2>LTI tools and Instructure UI</h2>

            <p>
                If you are building an LTI tool (for example, with React.js) and
                want it to visually integrate with Canvas, you should use
                <a
                    href="https://instructure.design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instructure UI
                </a>
                rather than the legacy Canvas CSS documented here. Instructure
                UI is the actively maintained design system for Canvas and
                related products.
            </p>

            <h2>Using colour for headings</h2>

            <p>
                Imperial's visual identity pairs colour and typography to create
                different moods while maintaining accessible contrast. The
                examples below adapt three of these combinations for use as
                headings in Canvas. They are intended for short headings or
                banners rather than long paragraphs of text.
            </p>

            <h3>Mood 1 — Calm, scientific, trustworthy</h3>

            <p>
                A deep blue background paired with light text creates a cool,
                calm, analytical feel. This combination is suitable for
                high-level section headings.
            </p>

            <h2 className="bg-[#0000cd] text-[#ffd6e5] p-4 mb-2">
                Example heading
            </h2>

            <pre>
                <code>
                    &lt;h2 style=" background:#0000cd; color:#ffd6e5;
                    padding:1rem; "&gt; Example heading &lt;/h2&gt;
                </code>
            </pre>

            <h3>Mood 2 — Bold, forward-looking</h3>

            <p>
                A bright yellow background with slate-like grey text
                communicates energy and confidence. Use this for key
                announcements or stand-out sections.
            </p>

            <h2 className="bg-[#fff200] text-[#4b4f57] p-4 mb-2">
                Example heading
            </h2>

            <pre>
                <code>
                    &lt;h2 style=" background:#fff200; color:#4b4f57;
                    padding:1rem; "&gt; Example heading &lt;/h2&gt;
                </code>
            </pre>

            <h3>Mood 3 — Fresh, modern</h3>

            <p>
                A fresh green background with a dark navy text tone gives a
                contemporary, optimistic feel while preserving good contrast for
                headings.
            </p>

            <h2 className="bg-[#00e67a] text-[#111322] p-4 mb-2">
                Example heading
            </h2>

            <pre>
                <code>
                    &lt;h2 style=" background:#00e67a; color:#111322;
                    padding:1rem; "&gt; Example heading &lt;/h2&gt;
                </code>
            </pre>

            <h3>Optional variations</h3>

            <p>
                You can adapt the same colour combinations for smaller headings
                or simple banner blocks by changing the heading level or
                wrapping the text in a container:
            </p>

            <pre>
                <code>
                    &lt;h3 style=" background:#0000cd; color:#ffd6e5;
                    padding:0.75rem; "&gt; Subsection heading &lt;/h3&gt;
                    &lt;div style=" background:#fff200; color:#4b4f57;
                    padding:1.25rem; margin:1rem 0; "&gt; &lt;h2
                    style="margin:0;"&gt;Module introduction&lt;/h2&gt;
                    &lt;/div&gt;
                </code>
            </pre>

            <p>
                When creating your own colour combinations, always check
                contrast with a WCAG contrast checker and avoid using
                low-contrast pairings for text.
            </p>

            <p>
                For more detail on Imperial's colour palette and which
                combinations are suitable for text, see the
                <a href="https://canvas.imperial.ac.uk/courses/220/pages/imperials-colours">
                    Imperial's colours
                </a>
                page in this course.
            </p>

            <h2>How to use the examples</h2>

            <p>
                Each page follows a consistent pattern: a live example shown as
                it appears in Canvas, followed by a code block containing the
                HTML needed to recreate it. You can copy the code into the RCE
                (using the HTML view) and adapt it for your own content.
            </p>

            <p>
                Where possible, examples also include brief notes about
                accessibility, such as the use of
                <code>screenreader-only</code>, <code>aria-hidden="true"</code>,
                and appropriate heading levels.
            </p>
        </article>
    );
}
