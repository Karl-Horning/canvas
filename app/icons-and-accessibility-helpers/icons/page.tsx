export default function page() {
    return (
        <article>
            <h1>Icons</h1>

            <p>
                Canvas includes a legacy icon set that can be used inside course
                content by applying icon classes such as{" "}
                <code>icon-info</code>, <code>icon-warning</code>, or{" "}
                <code>icon-check</code> to an inline element. These icons are
                provided by Canvas' own CSS and icon font; you do not need to
                upload images to use them.
            </p>

            <p>
                The examples on this page show how to use Canvas icons alongside
                text in an accessible way. A full reference list of available
                icon classes is provided at the end of the page for quick copy
                and paste.
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
                        MDN — <code>role="img"</code> and labelling icons
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
                <code>&lt;span&gt;</code>. In Canvas' own styles, icons are
                usually treated as decorative and hidden from screen readers
                using <code>aria-hidden="true"</code>.
            </p>

            <p>
                Icons should almost always be accompanied by visible text so
                that all learners can understand their meaning, even if the icon
                does not load or is not recognised.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>
                    <i className="icon-info" aria-hidden="true"></i>
                    <strong>Information:</strong> Submissions are due by Friday
                    at 17:00.
                </p>

                <p>
                    <i className="icon-warning" aria-hidden="true"></i>
                    <strong>Warning:</strong> Late work may receive a reduced
                    mark.
                </p>

                <p>
                    <i className="icon-check" aria-hidden="true"></i>
                    <strong>Completed:</strong> You have already submitted this
                    assignment.
                </p>
            </div>

            <pre>
                <code>
                    &lt;p&gt; &lt;i className="icon-info"
                    aria-hidden="true"&gt;&lt;/i&gt;
                    &lt;strong&gt;Information:&lt;/strong&gt; Submissions are
                    due by Friday at 17:00. &lt;/p&gt; &lt;p&gt; &lt;i
                    className="icon-warning" aria-hidden="true"&gt;&lt;/i&gt;
                    &lt;strong&gt;Warning:&lt;/strong&gt; Late work may receive
                    a reduced mark. &lt;/p&gt; &lt;p&gt; &lt;i
                    className="icon-check" aria-hidden="true"&gt;&lt;/i&gt;
                    &lt;strong&gt;Completed:&lt;/strong&gt; You have already
                    submitted this assignment. &lt;/p&gt;
                </code>
            </pre>

            <h2>Icons with extra meaning</h2>

            <p>
                If an icon is conveying information that is not already present
                in the visible text, you should include an accessible label. In
                most cases it is simpler to include this label as visible text
                next to the icon. If you must rely on the icon alone, use{" "}
                <code>role="img"</code> with an <code>aria-label</code>:
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>
                    <i
                        className="icon-warning"
                        role="img"
                        aria-label="Important update"
                    ></i>
                    <strong>Important:</strong> The deadline for this activity
                    has changed.
                </p>
            </div>

            <pre>
                <code>
                    &lt;p&gt; &lt;i className="icon-warning" role="img"
                    aria-label="Important update" &gt;&lt;/i&gt;
                    &lt;strong&gt;Important:&lt;/strong&gt; The deadline for
                    this activity has changed. &lt;/p&gt;
                </code>
            </pre>

            <p>
                In many cases you can avoid extra ARIA by simply including clear
                visible text next to a decorative icon and hiding the icon from
                assistive technology using <code>aria-hidden="true"</code>.
            </p>

            <h2>Purely decorative icons</h2>

            <p>
                When an icon is purely decorative (for example, a star next to a
                heading or a small arrow indicating movement), it should be
                hidden from screen readers. This prevents noisy or confusing
                announcements.
            </p>

            <div className="mb-4 bg-[#f9f9f9] p-3">
                <p>
                    <i className="icon-star-light" aria-hidden="true"></i>
                    Recommended reading for this week.
                </p>

                <p>
                    <i className="icon-arrow-right" aria-hidden="true"></i>
                    Proceed to the next activity.
                </p>
            </div>

            <pre>
                <code>
                    &lt;p&gt; &lt;i className="icon-star-light"
                    aria-hidden="true"&gt;&lt;/i&gt; Recommended reading for
                    this week. &lt;/p&gt; &lt;p&gt; &lt;i
                    className="icon-arrow-right"
                    aria-hidden="true"&gt;&lt;/i&gt; Proceed to the next
                    activity. &lt;/p&gt;
                </code>
            </pre>

            <h2>Full icon reference</h2>

            <p>
                The list below shows the full set of icon classes available in
                this Canvas instance (for example, <code>icon-info</code>,
                <code>icon-warning</code>, and many others). You can copy and
                paste from this list when building your own content.
            </p>

            <div className="flex flex-wrap -m-2 mb-4">
                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-a11y" aria-hidden="true"></i>
                    <div>
                        <code>icon-a11y</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-add-folder" aria-hidden="true"></i>
                    <div>
                        <code>icon-add-folder</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-add-media" aria-hidden="true"></i>
                    <div>
                        <code>icon-add-media</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-add" aria-hidden="true"></i>
                    <div>
                        <code>icon-add</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-address-book" aria-hidden="true"></i>
                    <div>
                        <code>icon-address-book</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-admin-tools" aria-hidden="true"></i>
                    <div>
                        <code>icon-admin-tools</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-admin" aria-hidden="true"></i>
                    <div>
                        <code>icon-admin</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-ai" aria-hidden="true"></i>
                    <div>
                        <code>icon-ai</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-alerts" aria-hidden="true"></i>
                    <div>
                        <code>icon-alerts</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-analytics" aria-hidden="true"></i>
                    <div>
                        <code>icon-analytics</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-android" aria-hidden="true"></i>
                    <div>
                        <code>icon-android</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-annotate" aria-hidden="true"></i>
                    <div>
                        <code>icon-annotate</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-announcement" aria-hidden="true"></i>
                    <div>
                        <code>icon-announcement</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-apple" aria-hidden="true"></i>
                    <div>
                        <code>icon-apple</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-archive" aria-hidden="true"></i>
                    <div>
                        <code>icon-archive</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-double-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-double-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-arrow-double-start"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-arrow-double-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-down" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-down</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-nest" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-nest</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-open-down" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-open-down</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-open-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-open-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-open-start" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-open-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-open-up" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-open-up</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-start" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-arrow-up" aria-hidden="true"></i>
                    <div>
                        <code>icon-arrow-up</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-assignment" aria-hidden="true"></i>
                    <div>
                        <code>icon-assignment</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-attach-media" aria-hidden="true"></i>
                    <div>
                        <code>icon-attach-media</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-audio-off" aria-hidden="true"></i>
                    <div>
                        <code>icon-audio-off</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-audio" aria-hidden="true"></i>
                    <div>
                        <code>icon-audio</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-award" aria-hidden="true"></i>
                    <div>
                        <code>icon-award</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-bank" aria-hidden="true"></i>
                    <div>
                        <code>icon-bank</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-blueprint-lock" aria-hidden="true"></i>
                    <div>
                        <code>icon-blueprint-lock</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-blueprint" aria-hidden="true"></i>
                    <div>
                        <code>icon-blueprint</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-bold" aria-hidden="true"></i>
                    <div>
                        <code>icon-bold</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-bookmark" aria-hidden="true"></i>
                    <div>
                        <code>icon-bookmark</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-box" aria-hidden="true"></i>
                    <div>
                        <code>icon-box</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-bullet-list-alpha"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-bullet-list-alpha</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-bullet-list-circle-outline"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-bullet-list-circle-outline</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-bullet-list-roman"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-bullet-list-roman</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-bullet-list-square"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-bullet-list-square</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-bullet-list" aria-hidden="true"></i>
                    <div>
                        <code>icon-bullet-list</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-button-and-icon-maker"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-button-and-icon-maker</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-calculator-desmos"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-calculator-desmos</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-calculator" aria-hidden="true"></i>
                    <div>
                        <code>icon-calculator</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-calendar-add" aria-hidden="true"></i>
                    <div>
                        <code>icon-calendar-add</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-calendar-clock" aria-hidden="true"></i>
                    <div>
                        <code>icon-calendar-clock</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-calendar-day" aria-hidden="true"></i>
                    <div>
                        <code>icon-calendar-day</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-calendar-days" aria-hidden="true"></i>
                    <div>
                        <code>icon-calendar-days</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-calendar-month" aria-hidden="true"></i>
                    <div>
                        <code>icon-calendar-month</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-calendar-reserved"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-calendar-reserved</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-canvas-logo" aria-hidden="true"></i>
                    <div>
                        <code>icon-canvas-logo</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-certified" aria-hidden="true"></i>
                    <div>
                        <code>icon-certified</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-chart-line" aria-hidden="true"></i>
                    <div>
                        <code>icon-chart-line</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-chart-pie" aria-hidden="true"></i>
                    <div>
                        <code>icon-chart-pie</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-chart-scatter" aria-hidden="true"></i>
                    <div>
                        <code>icon-chart-scatter</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-chat" aria-hidden="true"></i>
                    <div>
                        <code>icon-chat</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-check-dark" aria-hidden="true"></i>
                    <div>
                        <code>icon-check-dark</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-check-mark-indeterminate"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-check-mark-indeterminate</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-check-mark" aria-hidden="true"></i>
                    <div>
                        <code>icon-check-mark</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-check-plus" aria-hidden="true"></i>
                    <div>
                        <code>icon-check-plus</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-check" aria-hidden="true"></i>
                    <div>
                        <code>icon-check</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-circle-arrow-down"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-circle-arrow-down</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-circle-arrow-up" aria-hidden="true"></i>
                    <div>
                        <code>icon-circle-arrow-up</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-clear-text-formatting"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-clear-text-formatting</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-clock" aria-hidden="true"></i>
                    <div>
                        <code>icon-clock</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-closed-captioning-off"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-closed-captioning-off</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-closed-captioning-on"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-closed-captioning-on</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-closed-captioning"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-closed-captioning</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-cloud-download" aria-hidden="true"></i>
                    <div>
                        <code>icon-cloud-download</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-cloud-lock" aria-hidden="true"></i>
                    <div>
                        <code>icon-cloud-lock</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-cloud-upload" aria-hidden="true"></i>
                    <div>
                        <code>icon-cloud-upload</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-code" aria-hidden="true"></i>
                    <div>
                        <code>icon-code</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-collapse" aria-hidden="true"></i>
                    <div>
                        <code>icon-collapse</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-collection-save" aria-hidden="true"></i>
                    <div>
                        <code>icon-collection-save</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-collection" aria-hidden="true"></i>
                    <div>
                        <code>icon-collection</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-comment" aria-hidden="true"></i>
                    <div>
                        <code>icon-comment</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-comments-off" aria-hidden="true"></i>
                    <div>
                        <code>icon-comments-off</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-comments-on" aria-hidden="true"></i>
                    <div>
                        <code>icon-comments-on</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-commons" aria-hidden="true"></i>
                    <div>
                        <code>icon-commons</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-compass" aria-hidden="true"></i>
                    <div>
                        <code>icon-compass</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-complete" aria-hidden="true"></i>
                    <div>
                        <code>icon-complete</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-compose" aria-hidden="true"></i>
                    <div>
                        <code>icon-compose</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-configure" aria-hidden="true"></i>
                    <div>
                        <code>icon-configure</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-copy" aria-hidden="true"></i>
                    <div>
                        <code>icon-copy</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-courses" aria-hidden="true"></i>
                    <div>
                        <code>icon-courses</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-crop" aria-hidden="true"></i>
                    <div>
                        <code>icon-crop</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-dashboard" aria-hidden="true"></i>
                    <div>
                        <code>icon-dashboard</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-deactivate-user" aria-hidden="true"></i>
                    <div>
                        <code>icon-deactivate-user</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-discussion-check" aria-hidden="true"></i>
                    <div>
                        <code>icon-discussion-check</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-discussion-new" aria-hidden="true"></i>
                    <div>
                        <code>icon-discussion-new</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-discussion-reply-2"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-discussion-reply-2</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-discussion" aria-hidden="true"></i>
                    <div>
                        <code>icon-discussion</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-document" aria-hidden="true"></i>
                    <div>
                        <code>icon-document</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-download" aria-hidden="true"></i>
                    <div>
                        <code>icon-download</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-drag-handle" aria-hidden="true"></i>
                    <div>
                        <code>icon-drag-handle</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-drop-down" aria-hidden="true"></i>
                    <div>
                        <code>icon-drop-down</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-duplicate" aria-hidden="true"></i>
                    <div>
                        <code>icon-duplicate</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-edit" aria-hidden="true"></i>
                    <div>
                        <code>icon-edit</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-educators" aria-hidden="true"></i>
                    <div>
                        <code>icon-educators</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-elevate-logo" aria-hidden="true"></i>
                    <div>
                        <code>icon-elevate-logo</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-email" aria-hidden="true"></i>
                    <div>
                        <code>icon-email</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-empty" aria-hidden="true"></i>
                    <div>
                        <code>icon-empty</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-eportfolio" aria-hidden="true"></i>
                    <div>
                        <code>icon-eportfolio</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-equation" aria-hidden="true"></i>
                    <div>
                        <code>icon-equation</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-equella" aria-hidden="true"></i>
                    <div>
                        <code>icon-equella</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-essay" aria-hidden="true"></i>
                    <div>
                        <code>icon-essay</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-exit-full-screen" aria-hidden="true"></i>
                    <div>
                        <code>icon-exit-full-screen</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-expand-items" aria-hidden="true"></i>
                    <div>
                        <code>icon-expand-items</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-expand-start" aria-hidden="true"></i>
                    <div>
                        <code>icon-expand-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-expand" aria-hidden="true"></i>
                    <div>
                        <code>icon-expand</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-export-content" aria-hidden="true"></i>
                    <div>
                        <code>icon-export-content</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-export" aria-hidden="true"></i>
                    <div>
                        <code>icon-export</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-external-link" aria-hidden="true"></i>
                    <div>
                        <code>icon-external-link</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-eye" aria-hidden="true"></i>
                    <div>
                        <code>icon-eye</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-facebook-boxed" aria-hidden="true"></i>
                    <div>
                        <code>icon-facebook-boxed</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-facebook" aria-hidden="true"></i>
                    <div>
                        <code>icon-facebook</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-fast-forward" aria-hidden="true"></i>
                    <div>
                        <code>icon-fast-forward</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-feedback" aria-hidden="true"></i>
                    <div>
                        <code>icon-feedback</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-file-locked" aria-hidden="true"></i>
                    <div>
                        <code>icon-file-locked</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-files-copyright" aria-hidden="true"></i>
                    <div>
                        <code>icon-files-copyright</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-files-creative-commons"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-files-creative-commons</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-files-fair-use" aria-hidden="true"></i>
                    <div>
                        <code>icon-files-fair-use</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-files-obtained-permission"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-files-obtained-permission</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-files-public-domain"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-files-public-domain</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-filmstrip" aria-hidden="true"></i>
                    <div>
                        <code>icon-filmstrip</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-filter" aria-hidden="true"></i>
                    <div>
                        <code>icon-filter</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-flag" aria-hidden="true"></i>
                    <div>
                        <code>icon-flag</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-folder-locked" aria-hidden="true"></i>
                    <div>
                        <code>icon-folder-locked</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-folder" aria-hidden="true"></i>
                    <div>
                        <code>icon-folder</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-forward" aria-hidden="true"></i>
                    <div>
                        <code>icon-forward</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-full-screen" aria-hidden="true"></i>
                    <div>
                        <code>icon-full-screen</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-github" aria-hidden="true"></i>
                    <div>
                        <code>icon-github</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-give-award" aria-hidden="true"></i>
                    <div>
                        <code>icon-give-award</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-gradebook-export" aria-hidden="true"></i>
                    <div>
                        <code>icon-gradebook-export</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-gradebook-import" aria-hidden="true"></i>
                    <div>
                        <code>icon-gradebook-import</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-gradebook" aria-hidden="true"></i>
                    <div>
                        <code>icon-gradebook</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-grid-view" aria-hidden="true"></i>
                    <div>
                        <code>icon-grid-view</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-group-dark-new" aria-hidden="true"></i>
                    <div>
                        <code>icon-group-dark-new</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-group-new" aria-hidden="true"></i>
                    <div>
                        <code>icon-group-new</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-group" aria-hidden="true"></i>
                    <div>
                        <code>icon-group</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-hamburger" aria-hidden="true"></i>
                    <div>
                        <code>icon-hamburger</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-header" aria-hidden="true"></i>
                    <div>
                        <code>icon-header</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-heart" aria-hidden="true"></i>
                    <div>
                        <code>icon-heart</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-highlighter" aria-hidden="true"></i>
                    <div>
                        <code>icon-highlighter</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-home" aria-hidden="true"></i>
                    <div>
                        <code>icon-home</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-hour-glass" aria-hidden="true"></i>
                    <div>
                        <code>icon-hour-glass</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-image" aria-hidden="true"></i>
                    <div>
                        <code>icon-image</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-immersive-reader" aria-hidden="true"></i>
                    <div>
                        <code>icon-immersive-reader</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-impact-logo" aria-hidden="true"></i>
                    <div>
                        <code>icon-impact-logo</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-import-content" aria-hidden="true"></i>
                    <div>
                        <code>icon-import-content</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-import" aria-hidden="true"></i>
                    <div>
                        <code>icon-import</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-important-dates" aria-hidden="true"></i>
                    <div>
                        <code>icon-important-dates</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-inbox" aria-hidden="true"></i>
                    <div>
                        <code>icon-inbox</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-indent-2" aria-hidden="true"></i>
                    <div>
                        <code>icon-indent-2</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-indent" aria-hidden="true"></i>
                    <div>
                        <code>icon-indent</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-info-borderless" aria-hidden="true"></i>
                    <div>
                        <code>icon-info-borderless</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-info" aria-hidden="true"></i>
                    <div>
                        <code>icon-info</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-instructure-logo" aria-hidden="true"></i>
                    <div>
                        <code>icon-instructure-logo</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-integrations" aria-hidden="true"></i>
                    <div>
                        <code>icon-integrations</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-invitation" aria-hidden="true"></i>
                    <div>
                        <code>icon-invitation</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-italic" aria-hidden="true"></i>
                    <div>
                        <code>icon-italic</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-keyboard-shortcuts"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-keyboard-shortcuts</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-launch" aria-hidden="true"></i>
                    <div>
                        <code>icon-launch</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-learnplatform" aria-hidden="true"></i>
                    <div>
                        <code>icon-learnplatform</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-life-preserver" aria-hidden="true"></i>
                    <div>
                        <code>icon-life-preserver</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-like" aria-hidden="true"></i>
                    <div>
                        <code>icon-like</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-line-reader" aria-hidden="true"></i>
                    <div>
                        <code>icon-line-reader</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-link" aria-hidden="true"></i>
                    <div>
                        <code>icon-link</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-linkedin" aria-hidden="true"></i>
                    <div>
                        <code>icon-linkedin</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-list-view" aria-hidden="true"></i>
                    <div>
                        <code>icon-list-view</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-lock" aria-hidden="true"></i>
                    <div>
                        <code>icon-lock</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-lti" aria-hidden="true"></i>
                    <div>
                        <code>icon-lti</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mark-as-read" aria-hidden="true"></i>
                    <div>
                        <code>icon-mark-as-read</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-marker" aria-hidden="true"></i>
                    <div>
                        <code>icon-marker</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-masquerade" aria-hidden="true"></i>
                    <div>
                        <code>icon-masquerade</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mastery-logo" aria-hidden="true"></i>
                    <div>
                        <code>icon-mastery-logo</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mastery-paths" aria-hidden="true"></i>
                    <div>
                        <code>icon-mastery-paths</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-materials-required"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-materials-required</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mature" aria-hidden="true"></i>
                    <div>
                        <code>icon-mature</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-media" aria-hidden="true"></i>
                    <div>
                        <code>icon-media</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-message" aria-hidden="true"></i>
                    <div>
                        <code>icon-message</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mic-off" aria-hidden="true"></i>
                    <div>
                        <code>icon-mic-off</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mic" aria-hidden="true"></i>
                    <div>
                        <code>icon-mic</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-mini-arrow-double"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-mini-arrow-double</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mini-arrow-down" aria-hidden="true"></i>
                    <div>
                        <code>icon-mini-arrow-down</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mini-arrow-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-mini-arrow-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mini-arrow-start" aria-hidden="true"></i>
                    <div>
                        <code>icon-mini-arrow-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-mini-arrow-up" aria-hidden="true"></i>
                    <div>
                        <code>icon-mini-arrow-up</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-minimize" aria-hidden="true"></i>
                    <div>
                        <code>icon-minimize</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-module" aria-hidden="true"></i>
                    <div>
                        <code>icon-module</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-more" aria-hidden="true"></i>
                    <div>
                        <code>icon-more</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-move-down-bottom" aria-hidden="true"></i>
                    <div>
                        <code>icon-move-down-bottom</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-move-down" aria-hidden="true"></i>
                    <div>
                        <code>icon-move-down</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-move-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-move-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-move-start" aria-hidden="true"></i>
                    <div>
                        <code>icon-move-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-move-up-top" aria-hidden="true"></i>
                    <div>
                        <code>icon-move-up-top</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-move-up" aria-hidden="true"></i>
                    <div>
                        <code>icon-move-up</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-ms-excel" aria-hidden="true"></i>
                    <div>
                        <code>icon-ms-excel</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-ms-ppt" aria-hidden="true"></i>
                    <div>
                        <code>icon-ms-ppt</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-ms-word" aria-hidden="true"></i>
                    <div>
                        <code>icon-ms-word</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-muted" aria-hidden="true"></i>
                    <div>
                        <code>icon-muted</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-next-unread" aria-hidden="true"></i>
                    <div>
                        <code>icon-next-unread</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-no" aria-hidden="true"></i>
                    <div>
                        <code>icon-no</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-not-graded" aria-hidden="true"></i>
                    <div>
                        <code>icon-not-graded</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-note" aria-hidden="true"></i>
                    <div>
                        <code>icon-note</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-notepad" aria-hidden="true"></i>
                    <div>
                        <code>icon-notepad</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-numbered-list" aria-hidden="true"></i>
                    <div>
                        <code>icon-numbered-list</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-off" aria-hidden="true"></i>
                    <div>
                        <code>icon-off</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-open-folder" aria-hidden="true"></i>
                    <div>
                        <code>icon-open-folder</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-outcomes" aria-hidden="true"></i>
                    <div>
                        <code>icon-outcomes</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-outdent" aria-hidden="true"></i>
                    <div>
                        <code>icon-outdent</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-outdent2" aria-hidden="true"></i>
                    <div>
                        <code>icon-outdent2</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-oval-half" aria-hidden="true"></i>
                    <div>
                        <code>icon-oval-half</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-page-down" aria-hidden="true"></i>
                    <div>
                        <code>icon-page-down</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-page-up" aria-hidden="true"></i>
                    <div>
                        <code>icon-page-up</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-paint" aria-hidden="true"></i>
                    <div>
                        <code>icon-paint</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-paperclip" aria-hidden="true"></i>
                    <div>
                        <code>icon-paperclip</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-partial" aria-hidden="true"></i>
                    <div>
                        <code>icon-partial</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-pause" aria-hidden="true"></i>
                    <div>
                        <code>icon-pause</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-pdf" aria-hidden="true"></i>
                    <div>
                        <code>icon-pdf</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-peer-graded" aria-hidden="true"></i>
                    <div>
                        <code>icon-peer-graded</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-peer-review" aria-hidden="true"></i>
                    <div>
                        <code>icon-peer-review</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-permissions" aria-hidden="true"></i>
                    <div>
                        <code>icon-permissions</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-pin" aria-hidden="true"></i>
                    <div>
                        <code>icon-pin</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-pinterest" aria-hidden="true"></i>
                    <div>
                        <code>icon-pinterest</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-play" aria-hidden="true"></i>
                    <div>
                        <code>icon-play</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-plus" aria-hidden="true"></i>
                    <div>
                        <code>icon-plus</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-post-to-sis" aria-hidden="true"></i>
                    <div>
                        <code>icon-post-to-sis</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-predictive" aria-hidden="true"></i>
                    <div>
                        <code>icon-predictive</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-prerequisite" aria-hidden="true"></i>
                    <div>
                        <code>icon-prerequisite</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-printer" aria-hidden="true"></i>
                    <div>
                        <code>icon-printer</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-progress" aria-hidden="true"></i>
                    <div>
                        <code>icon-progress</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-protractor" aria-hidden="true"></i>
                    <div>
                        <code>icon-protractor</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-publish" aria-hidden="true"></i>
                    <div>
                        <code>icon-publish</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-question" aria-hidden="true"></i>
                    <div>
                        <code>icon-question</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-quiz-instructions"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-quiz-instructions</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-quiz-stats-avg" aria-hidden="true"></i>
                    <div>
                        <code>icon-quiz-stats-avg</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-quiz-stats-cronbachs-alpha"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-quiz-stats-cronbachs-alpha</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-quiz-stats-deviation"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-quiz-stats-deviation</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-quiz-stats-high" aria-hidden="true"></i>
                    <div>
                        <code>icon-quiz-stats-high</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-quiz-stats-low" aria-hidden="true"></i>
                    <div>
                        <code>icon-quiz-stats-low</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-quiz-stats-time" aria-hidden="true"></i>
                    <div>
                        <code>icon-quiz-stats-time</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-quiz-title" aria-hidden="true"></i>
                    <div>
                        <code>icon-quiz-title</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-quiz" aria-hidden="true"></i>
                    <div>
                        <code>icon-quiz</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-record" aria-hidden="true"></i>
                    <div>
                        <code>icon-record</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-refresh" aria-hidden="true"></i>
                    <div>
                        <code>icon-refresh</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-remove-bookmark" aria-hidden="true"></i>
                    <div>
                        <code>icon-remove-bookmark</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-remove-from-collection"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-remove-from-collection</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-remove-link" aria-hidden="true"></i>
                    <div>
                        <code>icon-remove-link</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-replied" aria-hidden="true"></i>
                    <div>
                        <code>icon-replied</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-reply-2" aria-hidden="true"></i>
                    <div>
                        <code>icon-reply-2</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-reply-all-2" aria-hidden="true"></i>
                    <div>
                        <code>icon-reply-all-2</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-reply" aria-hidden="true"></i>
                    <div>
                        <code>icon-reply</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-reset" aria-hidden="true"></i>
                    <div>
                        <code>icon-reset</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-review-screen" aria-hidden="true"></i>
                    <div>
                        <code>icon-review-screen</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-rewind" aria-hidden="true"></i>
                    <div>
                        <code>icon-rewind</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-rotate-left" aria-hidden="true"></i>
                    <div>
                        <code>icon-rotate-left</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-rotate-right" aria-hidden="true"></i>
                    <div>
                        <code>icon-rotate-right</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-rss" aria-hidden="true"></i>
                    <div>
                        <code>icon-rss</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-rubric-dark" aria-hidden="true"></i>
                    <div>
                        <code>icon-rubric-dark</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-rubric" aria-hidden="true"></i>
                    <div>
                        <code>icon-rubric</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-ruler" aria-hidden="true"></i>
                    <div>
                        <code>icon-ruler</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-save" aria-hidden="true"></i>
                    <div>
                        <code>icon-save</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-screen-capture" aria-hidden="true"></i>
                    <div>
                        <code>icon-screen-capture</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-search-ai" aria-hidden="true"></i>
                    <div>
                        <code>icon-search-ai</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-search" aria-hidden="true"></i>
                    <div>
                        <code>icon-search</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-settings" aria-hidden="true"></i>
                    <div>
                        <code>icon-settings</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-shape-oval" aria-hidden="true"></i>
                    <div>
                        <code>icon-shape-oval</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-shape-polygon" aria-hidden="true"></i>
                    <div>
                        <code>icon-shape-polygon</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-shape-rectangle" aria-hidden="true"></i>
                    <div>
                        <code>icon-shape-rectangle</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-share" aria-hidden="true"></i>
                    <div>
                        <code>icon-share</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-single-metric" aria-hidden="true"></i>
                    <div>
                        <code>icon-single-metric</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-sis-imported" aria-hidden="true"></i>
                    <div>
                        <code>icon-sis-imported</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-sis-not-synced" aria-hidden="true"></i>
                    <div>
                        <code>icon-sis-not-synced</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-sis-synced" aria-hidden="true"></i>
                    <div>
                        <code>icon-sis-synced</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-skype" aria-hidden="true"></i>
                    <div>
                        <code>icon-skype</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-sort" aria-hidden="true"></i>
                    <div>
                        <code>icon-sort</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-speed-grader" aria-hidden="true"></i>
                    <div>
                        <code>icon-speed-grader</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-standards" aria-hidden="true"></i>
                    <div>
                        <code>icon-standards</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-star-light" aria-hidden="true"></i>
                    <div>
                        <code>icon-star-light</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-star" aria-hidden="true"></i>
                    <div>
                        <code>icon-star</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-stats" aria-hidden="true"></i>
                    <div>
                        <code>icon-stats</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-stop" aria-hidden="true"></i>
                    <div>
                        <code>icon-stop</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-strikethrough" aria-hidden="true"></i>
                    <div>
                        <code>icon-strikethrough</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-student-view" aria-hidden="true"></i>
                    <div>
                        <code>icon-student-view</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-studio" aria-hidden="true"></i>
                    <div>
                        <code>icon-studio</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-subaccounts" aria-hidden="true"></i>
                    <div>
                        <code>icon-subaccounts</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-subtitles" aria-hidden="true"></i>
                    <div>
                        <code>icon-subtitles</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-syllabus" aria-hidden="true"></i>
                    <div>
                        <code>icon-syllabus</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-cell-select-all"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-cell-select-all</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-delete-column"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-delete-column</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-table-delete-row" aria-hidden="true"></i>
                    <div>
                        <code>icon-table-delete-row</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-delete-table"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-delete-table</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-insert-column-after"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-insert-column-after</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-insert-column-before"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-insert-column-before</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-insert-row-above"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-insert-row-above</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-insert-row-after"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-insert-row-after</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-left-header"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-left-header</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-merge-cells"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-merge-cells</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-row-properties"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-row-properties</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-table-split-cells"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-table-split-cells</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-table-top-header" aria-hidden="true"></i>
                    <div>
                        <code>icon-table-top-header</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-table" aria-hidden="true"></i>
                    <div>
                        <code>icon-table</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-tag" aria-hidden="true"></i>
                    <div>
                        <code>icon-tag</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-target" aria-hidden="true"></i>
                    <div>
                        <code>icon-target</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-text-background-color"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-text-background-color</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-text-centered" aria-hidden="true"></i>
                    <div>
                        <code>icon-text-centered</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-text-color" aria-hidden="true"></i>
                    <div>
                        <code>icon-text-color</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-text-direction-ltr"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-text-direction-ltr</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-text-direction-rtl"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-text-direction-rtl</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-text-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-text-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-text-start" aria-hidden="true"></i>
                    <div>
                        <code>icon-text-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-text-subscript" aria-hidden="true"></i>
                    <div>
                        <code>icon-text-subscript</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-text-superscript" aria-hidden="true"></i>
                    <div>
                        <code>icon-text-superscript</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-text" aria-hidden="true"></i>
                    <div>
                        <code>icon-text</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-textarea" aria-hidden="true"></i>
                    <div>
                        <code>icon-textarea</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-timer" aria-hidden="true"></i>
                    <div>
                        <code>icon-timer</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-toggle-end" aria-hidden="true"></i>
                    <div>
                        <code>icon-toggle-end</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-toggle-start" aria-hidden="true"></i>
                    <div>
                        <code>icon-toggle-start</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-trash" aria-hidden="true"></i>
                    <div>
                        <code>icon-trash</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-trouble" aria-hidden="true"></i>
                    <div>
                        <code>icon-trouble</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-twitter" aria-hidden="true"></i>
                    <div>
                        <code>icon-twitter</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-unarchive" aria-hidden="true"></i>
                    <div>
                        <code>icon-unarchive</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-underline" aria-hidden="true"></i>
                    <div>
                        <code>icon-underline</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-unlock" aria-hidden="true"></i>
                    <div>
                        <code>icon-unlock</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-unmuted" aria-hidden="true"></i>
                    <div>
                        <code>icon-unmuted</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-unpublished" aria-hidden="true"></i>
                    <div>
                        <code>icon-unpublished</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-updown" aria-hidden="true"></i>
                    <div>
                        <code>icon-updown</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-upload" aria-hidden="true"></i>
                    <div>
                        <code>icon-upload</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-user" aria-hidden="true"></i>
                    <div>
                        <code>icon-user</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-video-camera-off" aria-hidden="true"></i>
                    <div>
                        <code>icon-video-camera-off</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-video-camera" aria-hidden="true"></i>
                    <div>
                        <code>icon-video-camera</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-video" aria-hidden="true"></i>
                    <div>
                        <code>icon-video</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i
                        className="icon-warning-borderless"
                        aria-hidden="true"
                    ></i>
                    <div>
                        <code>icon-warning-borderless</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-warning" aria-hidden="true"></i>
                    <div>
                        <code>icon-warning</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-windows" aria-hidden="true"></i>
                    <div>
                        <code>icon-windows</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-wordpress" aria-hidden="true"></i>
                    <div>
                        <code>icon-wordpress</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-x" aria-hidden="true"></i>
                    <div>
                        <code>icon-x</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-zipped" aria-hidden="true"></i>
                    <div>
                        <code>icon-zipped</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-zoom-in" aria-hidden="true"></i>
                    <div>
                        <code>icon-zoom-in</code>
                    </div>
                </div>

                <div className="w-37.5 m-2 p-2 text-center bg-[#f9f9f9]">
                    <i className="icon-zoom-out" aria-hidden="true"></i>
                    <div>
                        <code>icon-zoom-out</code>
                    </div>
                </div>
            </div>

            <h2>Accessibility notes</h2>

            <ul>
                <li>
                    Do not rely on colour or icon shape as the only way of
                    communicating meaning. Always include clear text
                    descriptions.
                </li>
                <li>
                    Use <code>aria-hidden="true"</code> on purely decorative
                    icons so they are ignored by screen readers.
                </li>
                <li>
                    If an icon itself carries meaning and there is no visible
                    text explaining it, provide an accessible name using{" "}
                    <code>aria-label</code> and (optionally){" "}
                    <code>role="img"</code>.
                </li>
                <li>
                    Remember that these icons are part of Canvas' legacy
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
