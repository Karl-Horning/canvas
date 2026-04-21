/**
 * @fileoverview Icons page explaining how to use Canvas icon classes
 * accessibly in course content.
 */

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { generatePageMetadata, generatePageJsonLd } from "@/lib/siteMetadata";
import { meta } from "./meta";

export const metadata = generatePageMetadata(meta);

/**
 * Renders the Icons page.
 *
 * Covers basic icon usage, icons that carry meaning, purely decorative icons,
 * and accessibility notes. Code examples show `aria-hidden`, `role="img"`, and
 * `aria-label` patterns as they appear in the Canvas Rich Content Editor.
 *
 * @return The icons article.
 */

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
                Canvas includes a legacy icon set that can be used inside course
                content by applying icon classes such as <code>icon-info</code>,{" "}
                <code>icon-warning</code>, or <code>icon-check</code> to an
                inline element. These icons are provided by Canvas&apos; own CSS
                and icon font; you do not need to upload images to use them.
            </p>

            <p>
                The examples on this page show how to use Canvas icons alongside
                text in an accessible way. A full reference list of available
                icon classes is provided on the{" "}
                <Link href="/icons-and-accessibility-helpers/full-legacy-icons-reference">
                    Full Legacy Icons Reference
                </Link>{" "}
                page.
            </p>

            <h2>Useful references</h2>

            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>aria-hidden</code> (hiding decorative icons
                        from screen readers)
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — <code>role=&quot;img&quot;</code> and labelling
                        icons
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/tutorials/images/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI — Images concepts (icons, decorative images, and
                        text alternatives)
                    </a>
                </li>
            </ul>

            <h2>Basic icon usage</h2>

            <p>
                To display a Canvas icon, add the appropriate icon class to an
                inline element such as <code>&lt;i&gt;</code> or{" "}
                <code>&lt;span&gt;</code>. In Canvas&apos; own styles, icons are
                usually treated as decorative and hidden from screen readers
                using <code>aria-hidden=&quot;true&quot;</code>.
            </p>

            <p>
                Icons should almost always be accompanied by visible text so
                that all learners can understand their meaning, even if the icon
                does not load or is not recognised.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    <i className="icon-info pr-1" aria-hidden="true"></i>
                    <strong>Information:</strong> Submissions are due by Friday
                    at 17:00.
                </p>

                <p>
                    <i className="icon-warning pr-1" aria-hidden="true"></i>
                    <strong>Warning:</strong> Late work may receive a reduced
                    mark.
                </p>

                <p>
                    <i className="icon-check pr-1" aria-hidden="true"></i>
                    <strong>Completed:</strong> You have already submitted this
                    assignment.
                </p>
            </div>

            <CodeBlock>{`<p>
  <i class="icon-info" aria-hidden="true"></i>
  <strong>Information:</strong> Submissions are due by Friday at 17:00.
</p>`}</CodeBlock>

            <CodeBlock>{`<p>
  <i class="icon-warning" aria-hidden="true"></i>
  <strong>Warning:</strong> Late work may receive a reduced mark.
</p>`}</CodeBlock>

            <CodeBlock>{`<p>
  <i class="icon-check" aria-hidden="true"></i>
  <strong>Completed:</strong> You have already submitted this assignment.
</p>`}</CodeBlock>

            <h2>Icons with extra meaning</h2>

            <p>
                If an icon is conveying information that is not already present
                in the visible text, you should include an accessible label. In
                most cases it is simpler to include this label as visible text
                next to the icon. If you must rely on the icon alone, use{" "}
                <code>role=&quot;img&quot;</code> with an{" "}
                <code>aria-label</code>:
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    <i
                        className="icon-warning pr-1"
                        role="img"
                        aria-label="Important update"
                    ></i>
                    <strong>Important:</strong> The deadline for this activity
                    has changed.
                </p>
            </div>

            <CodeBlock>{`<p>
  <i class="icon-warning" role="img" aria-label="Important update"></i>
  <strong>Important:</strong> The deadline for this activity has changed.
</p>`}</CodeBlock>

            <p>
                In many cases you can avoid extra ARIA by simply including clear
                visible text next to a decorative icon and hiding the icon from
                assistive technology using{" "}
                <code>aria-hidden=&quot;true&quot;</code>.
            </p>

            <h2>Purely decorative icons</h2>

            <p>
                When an icon is purely decorative (for example, a star next to a
                heading or a small arrow indicating movement), it should be
                hidden from screen readers. This prevents noisy or confusing
                announcements.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    <i className="icon-star-light pr-1" aria-hidden="true"></i>
                    Recommended reading for this week.
                </p>

                <p>
                    <i className="icon-arrow-right pr-1" aria-hidden="true"></i>
                    Proceed to the next activity.
                </p>
            </div>

            <CodeBlock>{`<p>
  <i class="icon-star-light" aria-hidden="true"></i>
  Recommended reading for this week.
</p>`}</CodeBlock>

            <CodeBlock>{`<p>
  <i class="icon-arrow-right" aria-hidden="true"></i>
  Proceed to the next activity.
</p>`}</CodeBlock>

            <h2>Accessibility notes</h2>

            <ul>
                <li>
                    Do not rely on colour or icon shape as the only way of
                    communicating meaning. Always include clear text
                    descriptions.
                </li>
                <li>
                    Use <code>aria-hidden=&quot;true&quot;</code> on purely
                    decorative icons so they are ignored by screen readers.
                </li>
                <li>
                    If an icon itself carries meaning and there is no visible
                    text explaining it, provide an accessible name using{" "}
                    <code>aria-label</code> and (optionally){" "}
                    <code>role=&quot;img&quot;</code>.
                </li>
                <li>
                    Remember that these icons are part of Canvas&apos; legacy
                    styling. They may change appearance if Canvas updates its
                    icon font or removes certain classes.
                </li>
            </ul>

            <p>
                For critical information (for example, assessment rules, safety
                warnings, or key dates), the text must always stand on its own,
                even if icons or styling are not available.
            </p>
        </article>
    );
}
