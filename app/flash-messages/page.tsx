import CodeBlock from "@/components/CodeBlock";

export default function page() {
    return (
        <article>
            <h1>Flash Messages</h1>

            <p>
                Canvas provides legacy flash message classes (such as{" "}
                <code>ic-flash-info</code>) that visually emphasise information,
                success states, and warnings. These examples show how those
                classes render in this Canvas instance, followed by modern
                inline-style alternatives that do not rely on Canvas&apos;
                legacy CSS.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>role=&quot;status&quot;</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>role=&quot;alert&quot;</code>
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>aria-live</code> (live regions)
                    </a>
                </li>
            </ul>

            <h2>Canvas legacy flash message classes</h2>

            <p>
                These examples use Canvas&apos; built-in <code>ic-flash-*</code>{" "}
                classes with icons. They are part of an older design system but
                still work in current Canvas content.
            </p>

            <div className="ic-flash-info mb-4 flex gap-1" role="status">
                <div className="ic-flash__icon" aria-hidden="true">
                    <i className="icon-info"></i>
                </div>

                <div className="ic-flash__content">
                    <strong>Info:</strong> This is an <code>ic-flash-info</code>{" "}
                    message.
                </div>
            </div>

            <div className="ic-flash-success mb-4 flex gap-1" role="status">
                <div className="ic-flash__icon" aria-hidden="true">
                    <i className="icon-check"></i>
                </div>

                <div className="ic-flash__content">
                    <strong>Success:</strong> This is an{" "}
                    <code>ic-flash-success</code> message.
                </div>
            </div>

            <div className="ic-flash-warning mb-4 flex gap-1" role="alert">
                <div className="ic-flash__icon" aria-hidden="true">
                    <i className="icon-warning"></i>
                </div>
                <div className="ic-flash__content">
                    <strong>Warning:</strong> This is an{" "}
                    <code>ic-flash-warning</code> message.
                </div>
            </div>

            <CodeBlock>{`<div class="ic-flash-info" role="status">
  <div class="ic-flash__icon" aria-hidden="true">
    <i class="icon-info"></i>
  </div>
  <div class="ic-flash__content">
    <strong>Info:</strong> This is an info message.
  </div>
</div>`}</CodeBlock>

            <CodeBlock>{`<div class="ic-flash-success" role="status">
  <div class="ic-flash__icon" aria-hidden="true">
    <i class="icon-check"></i>
  </div>
  <div class="ic-flash__content">
    <strong>Success:</strong> This is a success message.
  </div>
</div>`}</CodeBlock>

            <CodeBlock>{`<div class="ic-flash-warning" role="alert">
  <div class="ic-flash__icon" aria-hidden="true">
    <i class="icon-warning"></i>
  </div>
  <div class="ic-flash__content">
    <strong>Warning:</strong> This is a warning message.
  </div>
</div>`}</CodeBlock>

            <h2>Modern inline-style flash messages</h2>

            <p>
                You can recreate the flash message pattern using only inline
                CSS. This makes your design independent of Canvas&apos; legacy
                CSS while keeping a clear icon + text layout. The examples use a
                simple two-column flex layout.
            </p>

            <div
                role="status"
                className="mb-4 p-4 rounded-md bg-[#e8f2ff] dark:bg-[#1e3a5f] [border-left:6px_solid_#4c9dcd]"
            >
                <div className="flex gap-3 items-start">
                    <div
                        aria-hidden="true"
                        className="shrink-0 w-7 h-7 rounded-full bg-[#4c9dcd] flex items-center justify-center text-white font-bold text-[0.9rem]"
                    >
                        i
                    </div>
                    <div>
                        <strong>Info:</strong> This is an informational flash
                        message using inline styles only.
                    </div>
                </div>
            </div>

            <div
                role="status"
                className="mb-4 p-4 rounded-md bg-[#e8f8ea] dark:bg-[#14532d] [border-left:6px_solid_#2d8a3b]"
            >
                <div className="flex gap-3 items-start">
                    <div
                        aria-hidden="true"
                        className="shrink-0 w-7 h-7 rounded-full bg-[#2d8a3b] flex items-center justify-center text-white font-bold text-[0.9rem]"
                    >
                        ✓
                    </div>
                    <div>
                        <strong>Success:</strong> Your changes have been saved
                        successfully.
                    </div>
                </div>
            </div>

            <div
                role="alert"
                className="mb-4 p-4 rounded-md bg-[#fff7e6] dark:bg-[#431407] [border-left:6px_solid_#cc7a00]"
            >
                <div className="flex gap-3 items-start">
                    <div
                        aria-hidden="true"
                        className="shrink-0 w-7 h-7 rounded-full bg-[#cc7a00] flex items-center justify-center text-white font-bold text-[0.9rem]"
                    >
                        !
                    </div>
                    <div>
                        <strong>Warning:</strong> Please review this information
                        before continuing.
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div role="status" style="padding: 1rem; border-radius: 0.375rem; background: #e8f2ff; border-left: 6px solid #4c9dcd;">
  <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
    <div aria-hidden="true" style="width: 1.75rem; height: 1.75rem; border-radius: 999px; background: #4c9dcd; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 700; font-size: 0.9rem; flex-shrink: 0;">
      i
    </div>
    <div>
      <strong>Info:</strong> This is an informational flash message.
    </div>
  </div>
</div>`}</CodeBlock>

            <CodeBlock>{`<div role="status" style="padding: 1rem; border-radius: 0.375rem; background: #e8f8ea; border-left: 6px solid #2d8a3b;">
  <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
    <div aria-hidden="true" style="width: 1.75rem; height: 1.75rem; border-radius: 999px; background: #2d8a3b; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 700; font-size: 0.9rem; flex-shrink: 0;">
      ✓
    </div>
    <div>
      <strong>Success:</strong> Your changes have been saved successfully.
    </div>
  </div>
</div>`}</CodeBlock>

            <CodeBlock>{`<div role="alert" style="padding: 1rem; border-radius: 0.375rem; background: #fff7e6; border-left: 6px solid #cc7a00;">
  <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
    <div aria-hidden="true" style="width: 1.75rem; height: 1.75rem; border-radius: 999px; background: #cc7a00; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 700; font-size: 0.9rem; flex-shrink: 0;">
      !
    </div>
    <div>
      <strong>Warning:</strong> Please review this information before continuing.
    </div>
  </div>
</div>`}</CodeBlock>

            <h2>Accessibility notes</h2>
            <ul>
                <li>
                    Use <code>role=&quot;status&quot;</code> for neutral or
                    positive updates that should be announced politely by
                    assistive technologies.
                </li>
                <li>
                    Use <code>role=&quot;alert&quot;</code> only for urgent
                    issues that need immediate attention (for example, errors
                    that block progress).
                </li>
                <li>
                    Icon elements in these examples are marked{" "}
                    <code>aria-hidden=&quot;true&quot;</code> so that screen
                    readers do not announce them twice; the meaningful label is
                    in the text (for example, <strong>Warning:</strong>).
                </li>
                <li>
                    Ensure colour contrast between text and background meets at
                    least WCAG AA for the text size used.
                </li>
                <li>
                    Do not rely on colour alone to convey meaning. Include a
                    text label such as &quot;Info&quot;, &quot;Success&quot;, or
                    &quot;Warning&quot; at the start of each message.
                </li>
            </ul>
        </article>
    );
}
