export default function page() {
    return (
        <article>
            <h1>Additional Examples</h1>

            <p>
                This page collects extra patterns that you can copy, paste, and
                adapt in Canvas. All examples use semantic HTML and inline
                styles so they work within the Rich Content Editor. They are
                intended as starting points for common course content layouts.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN Web Docs — HTML Reference
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN Web Docs — CSS Reference
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/tips/writing/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI — Writing for Web Accessibility
                    </a>
                </li>
            </ul>

            <h2>Learning outcomes card</h2>

            <p>
                A simple card for listing learning outcomes at the top of a page
                or module. The heading and list are grouped in a lightly shaded
                box.
            </p>

            <div className="mb-4 bg-[#f5f5f5] px-5 py-4 border border-[#dddddd] rounded-lg">
                <h3 className="mt-0 mb-2">
                    By the end of this activity you should be able to:
                </h3>
                <ul className="m-0 pl-5">
                    <li>Describe the key stages in the workflow.</li>
                    <li>Explain the main advantages and limitations.</li>
                    <li>Apply the method to a simple example.</li>
                </ul>
            </div>

            <pre>
                <code>
                    &lt;div style=" margin-bottom: 1rem; background: #f5f5f5;
                    padding: 1rem 1.25rem; border: 1px solid #dddddd;
                    border-radius: 0.5rem; " &gt; &lt;h3 style="margin-top: 0;
                    margin-bottom: 0.5rem"&gt; By the end of this activity you
                    should be able to: &lt;/h3&gt; &lt;ul style="margin: 0;
                    padding-left: 1.25rem"&gt; &lt;li&gt;Describe the key stages
                    in the workflow.&lt;/li&gt; &lt;li&gt;Explain the main
                    advantages and limitations.&lt;/li&gt; &lt;li&gt;Apply the
                    method to a simple example.&lt;/li&gt; &lt;/ul&gt;
                    &lt;/div&gt;
                </code>
            </pre>

            <h2>Assessment summary panel</h2>

            <p>
                A compact panel summarising key information about an assessment.
                Uses a simple two-column layout on larger screens and a stacked
                layout on narrow screens.
            </p>

            <div className="mb-4 border border-[#dddddd] rounded-lg px-5 py-4 bg-white">
                <h3 className="mt-0 mb-3">Assessment summary</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-6 gap-y-3">
                    <div>
                        <p className="m-0 text-[0.9rem] text-[#555555]">
                            Due date
                        </p>
                        <p className="mt-[0.1rem] mb-0">
                            <strong>Friday 15 November, 16:00</strong>
                        </p>
                    </div>
                    <div>
                        <p className="m-0 text-[0.9rem] text-[#555555]">
                            Weighting
                        </p>
                        <p className="mt-[0.1rem] mb-0">
                            <strong>30% of module mark</strong>
                        </p>
                    </div>
                    <div>
                        <p className="m-0 text-[0.9rem] text-[#555555]">
                            Format
                        </p>
                        <p className="mt-[0.1rem] mb-0">
                            Short written report (1500-2000 words)
                        </p>
                    </div>
                    <div>
                        <p className="m-0 text-[0.9rem] text-[#555555]">
                            Submission
                        </p>
                        <p className="mt-[0.1rem] mb-0">
                            Upload as a single PDF via Canvas
                        </p>
                    </div>
                </div>
            </div>

            <pre>
                <code>
                    &lt;div style=" margin-bottom: 1rem; border: 1px solid
                    #dddddd; border-radius: 0.5rem; padding: 1rem 1.25rem;
                    background: #ffffff; " &gt; &lt;h3 style="margin-top: 0;
                    margin-bottom: 0.75rem"&gt; Assessment summary &lt;/h3&gt;
                    &lt;div style=" display: grid; grid-template-columns:
                    repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem 1.5rem; "
                    &gt; &lt;div&gt; &lt;p style="margin: 0; font-size: 0.9rem;
                    color: #555555"&gt; Due date &lt;/p&gt; &lt;p style="margin:
                    0.1rem 0 0"&gt; &lt;strong&gt;Friday 15 November,
                    16:00&lt;/strong&gt; &lt;/p&gt; &lt;/div&gt; &lt;div&gt;
                    &lt;p style="margin: 0; font-size: 0.9rem; color:
                    #555555"&gt; Weighting &lt;/p&gt; &lt;p style="margin:
                    0.1rem 0 0"&gt; &lt;strong&gt;30% of module
                    mark&lt;/strong&gt; &lt;/p&gt; &lt;/div&gt; &lt;div&gt;
                    &lt;p style="margin: 0; font-size: 0.9rem; color:
                    #555555"&gt; Format &lt;/p&gt; &lt;p style="margin: 0.1rem 0
                    0"&gt; Short written report (1500-2000 words) &lt;/p&gt;
                    &lt;/div&gt; &lt;div&gt; &lt;p style="margin: 0; font-size:
                    0.9rem; color: #555555"&gt; Submission &lt;/p&gt; &lt;p
                    style="margin: 0.1rem 0 0"&gt; Upload as a single PDF via
                    Canvas &lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                </code>
            </pre>

            <h2>Call-to-action strip (link styled as a button)</h2>

            <p>
                A full-width strip with a short message and a prominent link
                styled as a button. This can be used to point learners to the
                next activity or an important resource.
            </p>

            <div className="mb-4 px-5 py-4 bg-[#0000cd] text-white rounded-lg flex flex-wrap items-center justify-between gap-3">
                <p className="m-0 text-base">
                    Ready to continue? Work through the next activity to apply
                    these ideas in practice.
                </p>
                <a
                    href="#"
                    className="inline-block px-[1.1rem] py-[0.6rem] bg-white text-[#0000cd] no-underline rounded-full font-semibold text-[0.95rem]"
                >
                    Go to the next activity
                </a>
            </div>

            <pre>
                <code>
                    &lt;div style=" margin-bottom: 1rem; padding: 1rem 1.25rem;
                    background: #0000cd; color: #ffffff; border-radius: 0.5rem;
                    display: flex; flex-wrap: wrap; align-items: center;
                    justify-content: space-between; gap: 0.75rem; " &gt; &lt;p
                    style="margin: 0; font-size: 1rem"&gt; Ready to continue?
                    Work through the next activity to apply these ideas in
                    practice. &lt;/p&gt; &lt;a href="#" style=" display:
                    inline-block; padding: 0.6rem 1.1rem; background: #ffffff;
                    color: #0000cd; text-decoration: none; border-radius: 999px;
                    font-weight: 600; font-size: 0.95rem; " &gt; Go to the next
                    activity &lt;/a&gt; &lt;/div&gt;
                </code>
            </pre>

            <h2>Side-by-side text and notes</h2>

            <p>
                A two-column layout where the main explanation appears on the
                left and supporting notes or tips appear on the right. On narrow
                screens, the columns stack vertically.
            </p>

            <div className="mb-4 grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-4">
                <div className="px-5 py-4 border border-[#dddddd] rounded-lg bg-white">
                    <h3 className="mt-0 mb-3">Main explanation</h3>
                    <p className="mt-0">
                        Use this area for the primary content, such as a worked
                        example, step-by-step explanation, or short case study.
                    </p>
                    <p>
                        Keep paragraphs short and use headings or lists to break
                        up dense information.
                    </p>
                </div>
                <aside className="px-5 py-4 border border-[#dddddd] rounded-lg bg-[#f5f5f5]">
                    <h3 className="mt-0 mb-3">Notes and tips</h3>
                    <ul className="m-0 pl-5">
                        <li>Highlight common mistakes or misconceptions.</li>
                        <li>Provide quick reminders of key definitions.</li>
                        <li>Link to related resources or further reading.</li>
                    </ul>
                </aside>
            </div>

            <pre>
                <code>
                    &lt;div style=" margin-bottom: 1rem; display: grid;
                    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap:
                    1rem; " &gt; &lt;div style=" padding: 1rem 1.25rem; border:
                    1px solid #dddddd; border-radius: 0.5rem; background:
                    #ffffff; " &gt; &lt;h3 style="margin-top: 0; margin-bottom:
                    0.75rem"&gt; Main explanation &lt;/h3&gt; &lt;p
                    style="margin-top: 0"&gt; Use this area for the primary
                    content, such as a worked example, step-by-step explanation,
                    or short case study. &lt;/p&gt; &lt;p&gt; Keep paragraphs
                    short and use headings or lists to break up dense
                    information. &lt;/p&gt; &lt;/div&gt; &lt;aside style="
                    padding: 1rem 1.25rem; border: 1px solid #dddddd;
                    border-radius: 0.5rem; background: #f5f5f5; " &gt; &lt;h3
                    style="margin-top: 0; margin-bottom: 0.75rem"&gt; Notes and
                    tips &lt;/h3&gt; &lt;ul style="margin: 0; padding-left:
                    1.25rem"&gt; &lt;li&gt;Highlight common mistakes or
                    misconceptions.&lt;/li&gt; &lt;li&gt;Provide quick reminders
                    of key definitions.&lt;/li&gt; &lt;li&gt;Link to related
                    resources or further reading.&lt;/li&gt; &lt;/ul&gt;
                    &lt;/aside&gt; &lt;/div&gt;
                </code>
            </pre>

            <h2>Resource cards grid</h2>

            <p>
                A responsive grid of cards for key resources or readings. The
                layout uses CSS Grid with <code>auto-fit</code> and{" "}
                <code>minmax()</code> to adapt to different screen sizes.
            </p>

            <div className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                <div className="border border-[#dddddd] rounded-lg px-4 py-[0.9rem] bg-white">
                    <h3 className="mt-0 mb-2 text-[1.05rem]">Core reading</h3>
                    <p className="mt-0 mb-2">
                        Introduction to the main concepts covered in this week.
                    </p>
                    <a href="#" className="font-semibold">
                        View article
                    </a>
                </div>

                <div className="border border-[#dddddd] rounded-lg px-4 py-[0.9rem] bg-white">
                    <h3 className="mt-0 mb-2 text-[1.05rem]">Worked example</h3>
                    <p className="mt-0 mb-2">
                        Step-by-step example showing how to apply the method.
                    </p>
                    <a href="#" className="font-semibold">
                        Open example
                    </a>
                </div>

                <div className="border border-[#dddddd] rounded-lg px-4 py-[0.9rem] bg-white">
                    <h3 className="mt-0 mb-2 text-[1.05rem]">
                        Optional extension
                    </h3>
                    <p className="mt-0 mb-2">
                        Extra material if you would like to explore further.
                    </p>
                    <a href="#" className="font-semibold">
                        Explore more
                    </a>
                </div>
            </div>

            <pre>
                <code>
                    &lt;div style=" margin-bottom: 1rem; display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1rem; " &gt; &lt;div style=" border: 1px solid #dddddd;
                    border-radius: 0.5rem; padding: 0.9rem 1rem; background:
                    #ffffff; " &gt; &lt;h3 style="margin-top: 0; margin-bottom:
                    0.5rem; font-size: 1.05rem"&gt; Core reading &lt;/h3&gt;
                    &lt;p style="margin-top: 0; margin-bottom: 0.5rem"&gt;
                    Introduction to the main concepts covered in this week.
                    &lt;/p&gt; &lt;a href="#" style="font-weight: 600"&gt;View
                    article&lt;/a&gt; &lt;/div&gt; &lt;div style=" border: 1px
                    solid #dddddd; border-radius: 0.5rem; padding: 0.9rem 1rem;
                    background: #ffffff; " &gt; &lt;h3 style="margin-top: 0;
                    margin-bottom: 0.5rem; font-size: 1.05rem"&gt; Worked
                    example &lt;/h3&gt; &lt;p style="margin-top: 0;
                    margin-bottom: 0.5rem"&gt; Step-by-step example showing how
                    to apply the method. &lt;/p&gt; &lt;a href="#"
                    style="font-weight: 600"&gt;Open example&lt;/a&gt;
                    &lt;/div&gt; &lt;div style=" border: 1px solid #dddddd;
                    border-radius: 0.5rem; padding: 0.9rem 1rem; background:
                    #ffffff; " &gt; &lt;h3 style="margin-top: 0; margin-bottom:
                    0.5rem; font-size: 1.05rem"&gt; Optional extension
                    &lt;/h3&gt; &lt;p style="margin-top: 0; margin-bottom:
                    0.5rem"&gt; Extra material if you would like to explore
                    further. &lt;/p&gt; &lt;a href="#" style="font-weight:
                    600"&gt;Explore more&lt;/a&gt; &lt;/div&gt; &lt;/div&gt;
                </code>
            </pre>

            <h2>Resource cards grid with images</h2>

            <p>
                This version adds thumbnail images to each resource card using
                external placeholder image URLs. Replace the image sources and
                alt text with your own content when you are ready.
            </p>

            <div className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                <div className="border border-[#dddddd] rounded-lg bg-white overflow-hidden">
                    <img
                        src="https://placehold.co/400x225?text=Core+reading"
                        alt="Illustrative placeholder image for core reading"
                        className="block w-full h-auto"
                    />
                    <div className="px-4 py-[0.9rem]">
                        <h3 className="mt-0 mb-2 text-[1.05rem]">
                            Core reading
                        </h3>
                        <p className="mt-0 mb-2">
                            Introduction to the main concepts covered in this
                            week.
                        </p>
                        <a href="#" className="font-semibold">
                            View article
                        </a>
                    </div>
                </div>

                <div className="border border-[#dddddd] rounded-lg bg-white overflow-hidden">
                    <img
                        src="https://placehold.co/400x225?text=Worked+example"
                        alt="Illustrative placeholder image for a worked example"
                        className="block w-full h-auto"
                    />
                    <div className="px-4 py-[0.9rem]">
                        <h3 className="mt-0 mb-2 text-[1.05rem]">
                            Worked example
                        </h3>
                        <p className="mt-0 mb-2">
                            Step-by-step example showing how to apply the
                            method.
                        </p>
                        <a href="#" className="font-semibold">
                            Open example
                        </a>
                    </div>
                </div>

                <div className="border border-[#dddddd] rounded-lg bg-white overflow-hidden">
                    <img
                        src="https://placehold.co/400x225?text=Optional+extension"
                        alt="Illustrative placeholder image for an optional extension resource"
                        className="block w-full h-auto"
                    />
                    <div className="px-4 py-[0.9rem]">
                        <h3 className="mt-0 mb-2 text-[1.05rem]">
                            Optional extension
                        </h3>
                        <p className="mt-0 mb-2">
                            Extra material if you would like to explore further.
                        </p>
                        <a href="#" className="font-semibold">
                            Explore more
                        </a>
                    </div>
                </div>
            </div>

            <pre>
                <code>
                    &lt;div style=" margin-bottom: 1rem; display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1rem; " &gt; &lt;div style=" border: 1px solid #dddddd;
                    border-radius: 0.5rem; background: #ffffff; overflow:
                    hidden; " &gt; &lt;img
                    src="https://via.placeholder.com/400x225?text=Core+reading"
                    alt="Illustrative placeholder image for core reading"
                    style="display:block; width:100%; height:auto;" /&gt;
                    &lt;div style="padding: 0.9rem 1rem"&gt; &lt;h3
                    style="margin:0 0 .5rem; font-size:1.05rem;"&gt;Core
                    reading&lt;/h3&gt; &lt;p style="margin:0 0 .5rem;"&gt;
                    Introduction to the main concepts covered in this week.
                    &lt;/p&gt; &lt;a href="#" style="font-weight:600;"&gt;View
                    article&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;div style="
                    border: 1px solid #dddddd; border-radius: 0.5rem;
                    background: #ffffff; overflow: hidden; " &gt; &lt;img
                    src="https://via.placeholder.com/400x225?text=Worked+example"
                    alt="Illustrative placeholder image for a worked example"
                    style="display:block; width:100%; height:auto;" /&gt;
                    &lt;div style="padding: 0.9rem 1rem"&gt; &lt;h3
                    style="margin:0 0 .5rem; font-size:1.05rem;"&gt;Worked
                    example&lt;/h3&gt; &lt;p style="margin:0 0 .5rem;"&gt;
                    Step-by-step example showing how to apply the method.
                    &lt;/p&gt; &lt;a href="#" style="font-weight:600;"&gt;Open
                    example&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;div style="
                    border: 1px solid #dddddd; border-radius: 0.5rem;
                    background: #ffffff; overflow: hidden; " &gt; &lt;img
                    src="https://via.placeholder.com/400x225?text=Optional+extension"
                    alt="Illustrative placeholder image for an optional
                    extension resource" style="display:block; width:100%;
                    height:auto;" /&gt; &lt;div style="padding: 0.9rem 1rem"&gt;
                    &lt;h3 style="margin:0 0 .5rem;
                    font-size:1.05rem;"&gt;Optional extension&lt;/h3&gt; &lt;p
                    style="margin:0 0 .5rem;"&gt; Extra material if you would
                    like to explore further. &lt;/p&gt; &lt;a href="#"
                    style="font-weight:600;"&gt;Explore more&lt;/a&gt;
                    &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                </code>
            </pre>
        </article>
    );
}
