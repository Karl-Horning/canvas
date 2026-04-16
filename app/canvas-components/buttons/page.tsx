export default function page() {
    return (
        <article>
            <h1>Buttons</h1>

            <p>
                In this Canvas instance, actual{" "}
                <code>&lt;button&gt;</code> elements are removed from content
                created in the Rich Content Editor. Instead, links (
                <code>&lt;a&gt;</code>) are visually styled to look like
                buttons. This page shows:
            </p>

            <ul>
                <li>
                    Canvas' legacy button classes (such as{" "}
                    <code>btn btn-primary</code>).
                </li>
                <li>
                    Modern inline CSS examples for styling links as buttons.
                </li>
            </ul>

            <p>
                For navigation (moving to another page, opening a resource),
                links are semantically correct. For true "actions" (submitting a
                form, toggling a state) the ideal element would be a real{" "}
                <code>&lt;button&gt;</code>, but this is not available in this
                Canvas configuration.
            </p>

            <h2>Useful references</h2>

            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>&lt;a&gt;</code> (anchor) element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>button</code> role (when and how to use it)
                    </a>
                </li>
            </ul>

            <h2>Button styles (Canvas legacy classes)</h2>

            <p>
                Standard Canvas buttons use the base <code>btn</code> class
                combined with a contextual class such as{" "}
                <code>btn-primary</code> or <code>btn-success</code>. These
                classes come from a legacy Canvas style guide and may change in
                future, but still work in current pages.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>
                    <a className="btn btn-primary" href="#">
                        Primary button
                    </a>
                </p>
                <p>
                    <a className="btn btn-secondary" href="#">
                        Secondary button
                    </a>
                </p>
                <p>
                    <a className="btn btn-success" href="#">
                        Success button
                    </a>
                </p>
                <p>
                    <a className="btn btn-warning" href="#">
                        Warning button
                    </a>
                </p>
                <p>
                    <a className="btn btn-danger" href="#">
                        Danger button
                    </a>
                </p>
            </div>

            <pre>
                <code>
                    &lt;a class="btn btn-primary" href="#"&gt;Primary
                    button&lt;/a&gt; &lt;a class="btn btn-secondary"
                    href="#"&gt;Secondary button&lt;/a&gt; &lt;a class="btn
                    btn-success" href="#"&gt;Success button&lt;/a&gt; &lt;a
                    class="btn btn-warning" href="#"&gt;Warning button&lt;/a&gt;
                    &lt;a class="btn btn-danger" href="#"&gt;Danger
                    button&lt;/a&gt;
                </code>
            </pre>

            <h2>Button sizes (Canvas legacy classes)</h2>

            <p>
                You can adjust the size of a Canvas button by adding one of the
                optional size classes: <code>btn-large</code>,
                <code>btn-small</code>, or <code>btn-mini</code>.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>
                    <a className="btn btn-primary btn-large" href="#">
                        Primary button (large)
                    </a>
                </p>
                <p>
                    <a className="btn btn-primary btn-small" href="#">
                        Primary button (small)
                    </a>
                </p>
                <p>
                    <a className="btn btn-primary btn-mini" href="#">
                        Primary button (mini)
                    </a>
                </p>
            </div>

            <pre>
                <code>
                    &lt;a class="btn btn-primary btn-large" href="#"&gt;Primary
                    button&lt;/a&gt; &lt;a class="btn btn-primary btn-small"
                    href="#"&gt;Primary button&lt;/a&gt; &lt;a class="btn
                    btn-primary btn-mini" href="#"&gt;Primary button&lt;/a&gt;
                </code>
            </pre>

            <h2>Modern inline-styled links as buttons</h2>

            <p>
                If you prefer not to rely on Canvas' legacy classes, you can
                style links as buttons using inline CSS. This uses standard CSS
                properties such as <code>background-color</code>,{" "}
                <code>padding</code>, <code>border-radius</code>, and{" "}
                <code>display: inline-block;</code>.
            </p>

            <p>
                The examples below keep the default browser focus outline for
                keyboard users by not overriding the <code>outline</code>{" "}
                property.
            </p>

            <h3>Primary and secondary actions</h3>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p className="mb-2">
                    <a
                        href="#"
                        className="inline-block px-4 py-2 rounded-md bg-[#0000cd] text-white no-underline font-semibold"
                    >
                        Primary action
                    </a>
                </p>

                <p className="mb-0">
                    <a
                        href="#"
                        className="inline-block px-4 py-2 rounded-md border border-[#0000cd] text-[#0000cd] bg-white no-underline font-semibold"
                    >
                        Secondary action
                    </a>
                </p>
            </div>

            <pre>
                <code>
                    &lt;a href="#" style=" display: inline-block; padding:
                    0.5rem 1rem; border-radius: 0.375rem; background-color:
                    #0000cd; color: #ffffff; text-decoration: none; font-weight:
                    600; " &gt; Primary action &lt;/a&gt; &lt;a href="#" style="
                    display: inline-block; padding: 0.5rem 1rem; border-radius:
                    0.375rem; border: 1px solid #0000cd; color: #0000cd;
                    background-color: #ffffff; text-decoration: none;
                    font-weight: 600; " &gt; Secondary action &lt;/a&gt;
                </code>
            </pre>

            <h3>Full-width call-to-action</h3>

            <p>
                A full-width call-to-action link can be created using{" "}
                <code>display: block;</code> and{" "}
                <code>text-align: center;</code>. This works well for important
                actions on mobile screens.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <a
                    href="#"
                    className="block px-4 py-3 rounded-lg bg-[#008080] text-white text-center no-underline font-semibold"
                >
                    Full-width call to action
                </a>
            </div>

            <pre>
                <code>
                    &lt;a href="#" style=" display: block; padding: 0.75rem
                    1rem; border-radius: 0.5rem; background-color: #008080;
                    color: #ffffff; text-align: center; text-decoration: none;
                    font-weight: 600; " &gt; Full-width call to action
                    &lt;/a&gt;
                </code>
            </pre>

            <h3>Subtle text-style button</h3>

            <p>
                Sometimes you may want a link that looks more like a subtle
                control than a bold button. The example below uses a simple
                underline and colour, without a filled background.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <a
                    href="#"
                    className="inline-block py-1 text-[#0000cd] underline font-medium"
                >
                    Subtle action link
                </a>
            </div>

            <pre>
                <code>
                    &lt;a href="#" style=" display: inline-block; padding:
                    0.25rem 0; color: #0000cd; text-decoration: underline;
                    font-weight: 500; " &gt; Subtle action link &lt;/a&gt;
                </code>
            </pre>

            <h2>Accessibility notes</h2>

            <ul>
                <li>
                    Use these styles for navigation actions (for example, "View
                    assignment", "Open resource"), where a link is the correct
                    HTML element.
                </li>
                <li>
                    Avoid adding <code>role="button"</code> to links unless you
                    also handle keyboard activation exactly like a real button
                    (which usually requires JavaScript).
                </li>
                <li>
                    Do not remove the focus outline. The inline examples here
                    avoid overriding <code>outline</code> so that keyboard users
                    can still see which element is focused.
                </li>
                <li>
                    Ensure colour contrast between background and text meets at
                    least WCAG AA for the size of text you are using.
                </li>
            </ul>
        </article>
    );
}
