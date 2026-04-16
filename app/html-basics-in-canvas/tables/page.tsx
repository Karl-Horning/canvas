import CodeBlock from "@/components/CodeBlock";

export default function page() {
    return (
        <article>
            <h1>Tables</h1>

            <p>
                Tables in Canvas are created using standard HTML{" "}
                <code>&lt;table&gt;</code> markup. Canvas also provides a set of
                legacy utility classes (such as <code>ic-Table</code> and{" "}
                <code>ic-Table--striped</code>) that control visual styling.
                These classes are still supported in this Canvas instance, but
                are not actively maintained by Instructure and may change in
                future updates.
            </p>

            <p>
                You can safely combine these legacy classes with inline CSS to
                improve readability and accessibility, or use inline CSS alone
                if you prefer a fully self-contained, modern HTML approach.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — HTML <code>&lt;table&gt;</code> element
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — Table accessibility guide
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/tutorials/tables/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI — Tables Tutorial
                    </a>
                </li>
            </ul>

            <h2>Default table (Canvas legacy classes)</h2>

            <p>
                The base <code>ic-Table</code> class applies Canvas' default
                table styling without stripes or hover effects. This class comes
                from Canvas' legacy CSS, but is still useful for quickly
                applying a consistent table style.
            </p>

            <table className="ic-Table mb-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email address</th>
                        <th>Section</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alex Rivers</td>
                        <td>alex.rivers@example.com</td>
                        <td>Advanced students</td>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <td>Jamie Patel</td>
                        <td>jamie.patel@example.com</td>
                        <td>Advanced students</td>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <td>Morgan Lee</td>
                        <td>morgan.lee@example.com</td>
                        <td>Advanced students</td>
                        <td>Student</td>
                    </tr>
                </tbody>
            </table>

            <CodeBlock>{`<table class="ic-Table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email address</th>
      <th>Section</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alex Rivers</td>
      <td>alex.rivers@example.com</td>
      <td>Advanced students</td>
      <td>Student</td>
    </tr>
    <tr>
      <td>Jamie Patel</td>
      <td>jamie.patel@example.com</td>
      <td>Advanced students</td>
      <td>Student</td>
    </tr>
    <tr>
      <td>Morgan Lee</td>
      <td>morgan.lee@example.com</td>
      <td>Advanced students</td>
      <td>Student</td>
    </tr>
  </tbody>
</table>`}</CodeBlock>

            <h2>Striped table (Canvas legacy classes)</h2>

            <p>
                Add <code>ic-Table--striped</code> for alternating row stripes
                and <code>ic-Table--hover-row</code> to highlight rows on hover.
                These classes are part of Canvas' legacy utility CSS, but are
                still available for course content.
            </p>

            <table className="ic-Table ic-Table--hover-row ic-Table--striped mb-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email address</th>
                        <th>Section</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alex Rivers</td>
                        <td>alex.rivers@example.com</td>
                        <td>Advanced students</td>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <td>Jamie Patel</td>
                        <td>jamie.patel@example.com</td>
                        <td>Advanced students</td>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <td>Morgan Lee</td>
                        <td>morgan.lee@example.com</td>
                        <td>Advanced students</td>
                        <td>Student</td>
                    </tr>
                </tbody>
            </table>

            <CodeBlock>{`<table class="ic-Table ic-Table--hover-row ic-Table--striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email address</th>
      <th>Section</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alex Rivers</td>
      <td>alex.rivers@example.com</td>
      <td>Advanced students</td>
      <td>Student</td>
    </tr>
    <tr>
      <td>Jamie Patel</td>
      <td>jamie.patel@example.com</td>
      <td>Advanced students</td>
      <td>Student</td>
    </tr>
    <tr>
      <td>Morgan Lee</td>
      <td>morgan.lee@example.com</td>
      <td>Advanced students</td>
      <td>Student</td>
    </tr>
  </tbody>
</table>`}</CodeBlock>

            <h2>Condensed striped table (Canvas legacy classes)</h2>

            <p>
                Add <code>ic-Table--condensed</code> to reduce vertical spacing.
                This can be useful when displaying tables with many rows.
            </p>

            <table className="ic-Table ic-Table--striped ic-Table--hover-row ic-Table--condensed mb-4">
                <thead>
                    <tr>
                        <th>Column A</th>
                        <th>Column B</th>
                        <th>Column C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1, A</td>
                        <td>Row 1, B</td>
                        <td>Row 1, C</td>
                    </tr>
                    <tr>
                        <td>Row 2, A</td>
                        <td>Row 2, B</td>
                        <td>Row 2, C</td>
                    </tr>
                    <tr>
                        <td>Row 3, A</td>
                        <td>Row 3, B</td>
                        <td>Row 3, C</td>
                    </tr>
                </tbody>
            </table>

            <CodeBlock>{`<table class="ic-Table ic-Table--striped ic-Table--hover-row ic-Table--condensed">
  <thead>
    <tr>
      <th>Column A</th>
      <th>Column B</th>
      <th>Column C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, A</td>
      <td>Row 1, B</td>
      <td>Row 1, C</td>
    </tr>
    <tr>
      <td>Row 2, A</td>
      <td>Row 2, B</td>
      <td>Row 2, C</td>
    </tr>
    <tr>
      <td>Row 3, A</td>
      <td>Row 3, B</td>
      <td>Row 3, C</td>
    </tr>
  </tbody>
</table>`}</CodeBlock>

            <h2>Modern accessible table (inline CSS only)</h2>

            <p>
                You can also create tables using standard HTML and inline CSS
                without relying on Canvas' legacy classes. The example below
                demonstrates a more accessible pattern, including:
            </p>

            <ul>
                <li>
                    a <code>&lt;caption&gt;</code> describing the table
                </li>
                <li>
                    <code>scope="col"</code> and <code>scope="row"</code> to
                    help screen readers understand headers
                </li>
                <li>
                    clear borders and zebra striping defined with inline CSS
                </li>
            </ul>

            <table className="border-collapse w-full mb-4 text-[0.95rem]">
                <caption className="text-left font-bold py-2">
                    Example: Module weekly activities
                </caption>

                <thead>
                    <tr className="bg-[#f0f0f0]">
                        <th
                            scope="col"
                            className="border border-[#ccc] p-2 text-left"
                        >
                            Week
                        </th>
                        <th
                            scope="col"
                            className="border border-[#ccc] p-2 text-left"
                        >
                            Topic
                        </th>
                        <th
                            scope="col"
                            className="border border-[#ccc] p-2 text-left"
                        >
                            Activities
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="bg-white">
                        <th
                            scope="row"
                            className="border border-[#ccc] p-2 text-left"
                        >
                            1
                        </th>
                        <td className="border border-[#ccc] p-2">
                            Introduction to the module
                        </td>
                        <td className="border border-[#ccc] p-2">
                            Welcome video, syllabus quiz
                        </td>
                    </tr>

                    <tr className="bg-[#f9f9f9]">
                        <th
                            scope="row"
                            className="border border-[#ccc] p-2 text-left"
                        >
                            2
                        </th>
                        <td className="border border-[#ccc] p-2">
                            Research basics
                        </td>
                        <td className="border border-[#ccc] p-2">
                            Reading task, short discussion post
                        </td>
                    </tr>

                    <tr className="bg-white">
                        <th
                            scope="row"
                            className="border border-[#ccc] p-2 text-left"
                        >
                            3
                        </th>
                        <td className="border border-[#ccc] p-2">
                            Literature searching
                        </td>
                        <td className="border border-[#ccc] p-2">
                            Video demonstration, practice worksheet
                        </td>
                    </tr>
                </tbody>
            </table>

            <CodeBlock>{`<table style="border-collapse: collapse; width: 100%; margin-bottom: 1rem; font-size: 0.95rem;">
  <caption style="text-align: left; font-weight: bold; padding: 0.5rem 0;">
    Example: Module weekly activities
  </caption>
  <thead>
    <tr style="background: #f0f0f0;">
      <th scope="col" style="border: 1px solid #ccc; padding: 0.5rem;">Week</th>
      <th scope="col" style="border: 1px solid #ccc; padding: 0.5rem;">Topic</th>
      <th scope="col" style="border: 1px solid #ccc; padding: 0.5rem;">Activities</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #ffffff;">
      <th scope="row" style="border: 1px solid #ccc; padding: 0.5rem;">1</th>
      <td style="border: 1px solid #ccc; padding: 0.5rem;">Introduction to the module</td>
      <td style="border: 1px solid #ccc; padding: 0.5rem;">Welcome video, syllabus quiz</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <th scope="row" style="border: 1px solid #ccc; padding: 0.5rem;">2</th>
      <td style="border: 1px solid #ccc; padding: 0.5rem;">Research basics</td>
      <td style="border: 1px solid #ccc; padding: 0.5rem;">Reading task, short discussion post</td>
    </tr>
    <tr style="background: #ffffff;">
      <th scope="row" style="border: 1px solid #ccc; padding: 0.5rem;">3</th>
      <td style="border: 1px solid #ccc; padding: 0.5rem;">Literature searching</td>
      <td style="border: 1px solid #ccc; padding: 0.5rem;">Video demonstration, practice worksheet</td>
    </tr>
  </tbody>
</table>`}</CodeBlock>

            <h2>Accessibility notes</h2>

            <p>
                Tables should only be used for data that is genuinely tabular
                (for example, timetables, mark schemes, or comparisons). Avoid
                using tables purely for layout, as this can create significant
                barriers for screen reader users and learners on small screens.
            </p>

            <p>For accessible tables:</p>

            <ul>
                <li>
                    Always include a clear heading or{" "}
                    <code>&lt;caption&gt;</code>{" "}
                    explaining what the table shows.
                </li>
                <li>
                    Use <code>&lt;th&gt;</code> for header cells, and add{" "}
                    <code>scope="col"</code> for column headers and{" "}
                    <code>scope="row"</code> for row headers where appropriate.
                </li>
                <li>
                    Keep table structures as simple as possible. Avoid nested
                    tables or heavily merged cells unless absolutely necessary.
                </li>
                <li>
                    Do not rely on colour alone to communicate meaning within a
                    table — include text labels or symbols as well.
                </li>
            </ul>
        </article>
    );
}
