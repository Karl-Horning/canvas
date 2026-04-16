export default function page() {
    return (
        <article>
            <h1>Alerts</h1>

            <p>
                Canvas includes several legacy alert classes such as
                <code>alert-info</code>, <code>alert-success</code>, and
                <code>alert-error</code>. These still work but rely on older
                Canvas styling. Below are examples using those classes, followed
                by modern inline-style alternatives you can use anywhere.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>role="alert"</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>role="status"</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WCAG contrast guidance
                    </a>
                </li>
            </ul>

            <h2>Canvas legacy alert classes</h2>

            <p>
                These examples use the built-in Canvas alert classes. They work,
                but are part of an older theme system and may change in future.
            </p>

            <div className="alert alert-info mb-4" role="status">
                <strong>Info:</strong> This is an
                <code>alert alert-info</code> message.
            </div>

            <div className="alert alert-success mb-4" role="status">
                <strong>Success:</strong> This is an
                <code>alert alert-success</code> message.
            </div>

            <div className="alert alert-error mb-4" role="alert">
                <strong>Error:</strong> This is an
                <code>alert alert-error</code> message.
            </div>

            <pre>
                <code>
                    &lt;div class="alert alert-info" role="status"&gt;
                    &lt;strong&gt;Info:&lt;/strong&gt; This is an info alert.
                    &lt;/div&gt; &lt;div class="alert alert-success"
                    role="status"&gt; &lt;strong&gt;Success:&lt;/strong&gt; This
                    is a success alert. &lt;/div&gt; &lt;div class="alert
                    alert-error" role="alert"&gt;
                    &lt;strong&gt;Error:&lt;/strong&gt; This is an error alert.
                    &lt;/div&gt;
                </code>
            </pre>

            <h2>Modern inline-style alerts</h2>

            <p>
                Inline CSS offers more predictable results and does not depend
                on Canvas' legacy styles. These examples use
                <code>padding</code>, <code>border-radius</code>,
                <code>background-color</code>, and <code>border-left</code> to
                create accessible alert boxes.
            </p>

            <p>
                Use <code>role="status"</code> for neutral or success messages,
                and <code>role="alert"</code> for critical errors.
            </p>

            <div
                role="status"
                className="mb-4 p-4 rounded-md bg-[#e8f2ff] [border-left:6px_solid_#4c9dcd]"
            >
                <strong>Info:</strong> This is an inline-styled information
                alert.
            </div>

            <div
                role="status"
                className="mb-4 p-4 rounded-md bg-[#e8f8ea] [border-left:6px_solid_#2d8a3b]"
            >
                <strong>Success:</strong> Action completed successfully.
            </div>

            <div
                role="alert"
                className="mb-4 p-4 rounded-md bg-[#fdeaea] [border-left:6px_solid_#cb2d6f]"
            >
                <strong>Error:</strong> Something has gone wrong and needs
                attention.
            </div>

            <pre>
                <code>
                    &lt;div role="status" style=" padding: 1rem; border-radius:
                    0.375rem; background: #e8f2ff; border-left: 6px solid
                    #4c9dcd; " &gt; &lt;strong&gt;Info:&lt;/strong&gt;
                    Inline-styled information alert. &lt;/div&gt; &lt;div
                    role="status" style=" padding: 1rem; border-radius:
                    0.375rem; background: #e8f8ea; border-left: 6px solid
                    #2d8a3b; " &gt; &lt;strong&gt;Success:&lt;/strong&gt; Action
                    completed successfully. &lt;/div&gt; &lt;div role="alert"
                    style=" padding: 1rem; border-radius: 0.375rem; background:
                    #fdeaea; border-left: 6px solid #cb2d6f; " &gt;
                    &lt;strong&gt;Error:&lt;/strong&gt; Something has gone
                    wrong. &lt;/div&gt;
                </code>
            </pre>

            <h2>Accessibility notes</h2>
            <ul>
                <li>
                    <code>role="alert"</code> should only be used for urgent,
                    time-sensitive errors.
                </li>
                <li>
                    <code>role="status"</code> is appropriate for neutral or
                    positive updates.
                </li>
                <li>Keep a clear visual distinction between alert types.</li>
                <li>Maintain colour contrast of at least AA for all text.</li>
                <li>
                    Avoid removing or overriding the browser's focus outline so
                    keyboard users can navigate reliably.
                </li>
            </ul>
        </article>
    );
}
