import CodeBlock from "@/components/CodeBlock";

export default function page() {
    return (
        <article>
            <h1>Accessibility Helpers</h1>

            <p>
                Canvas includes a small set of utility classes that support
                accessibility. The most useful is{" "}
                <code>screenreader-only</code>, which lets you provide extra
                information to screen reader users without affecting the visual
                layout.
            </p>

            <h2>Useful references</h2>

            <p>
                These resources explain best practices for visually hidden text,
                labelling, and accessible naming:
            </p>

            <ul>
                <li>
                    <a
                        href="https://www.a11yproject.com/posts/how-to-hide-content/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The A11Y Project — How to hide content
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>aria-label</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://webaim.org/techniques/aria/#label"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WebAIM — ARIA labels and naming
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/tutorials/forms/labels/#note-on-hiding-elements"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI — Techniques for hiding form labels accessibly
                    </a>
                </li>
            </ul>

            <h2>screenreader-only</h2>

            <p>
                The <code>screenreader-only</code> class hides text visually but
                keeps it available to assistive technologies. This is ideal for:
            </p>

            <ul>
                <li>Clarifying link destinations.</li>
                <li>Providing text equivalents for icons.</li>
                <li>Adding extra labelling for context.</li>
            </ul>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    <span className="screenreader-only">
                        This sentence is only read by screen readers.
                    </span>
                    <span>This sentence is visible to everyone.</span>
                </p>

                <p>
                    <a href="#">
                        Submit assignment
                        <span className="screenreader-only">
                            for Week 3: Data Analysis
                        </span>
                    </a>
                </p>
            </div>

            <CodeBlock>{`<p>
  <span class="screenreader-only">
    This sentence is only read by screen readers.
  </span>
  <span>This sentence is visible to everyone.</span>
</p>
<p>
  <a href="#">
    Submit assignment
    <span class="screenreader-only">for Week 3: Data Analysis</span>
  </a>
</p>`}</CodeBlock>

            <h2>Accessibility notes</h2>

            <p>
                The <code>screenreader-only</code> class is similar to visually
                hidden utilities used across modern web frameworks. When using
                it:
            </p>

            <ul>
                <li>Do not hide information that sighted users also need.</li>
                <li>
                    Avoid duplicating text in both visible and hidden forms.
                </li>
                <li>Keep hidden labels short, focused, and task-relevant.</li>
            </ul>

            <p>
                Combined with semantic HTML, this utility can help make your
                Canvas pages clearer and more accessible without changing the
                visual presentation.
            </p>
        </article>
    );
}
