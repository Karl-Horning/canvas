import CodeBlock from "@/components/CodeBlock";

export default function page() {
    return (
        <article>
            <h1>Tabs</h1>

            <p>
                Canvas can convert simple lists into interactive tabbed panels
                using its legacy <strong>enhanceable content</strong> system.
                When the page loads, Canvas runs JavaScript that looks for
                elements with <code>enhanceable_content tabs</code> and turns
                them into tabs.
            </p>

            <p>
                This behaviour depends on Canvas&apos; own JavaScript and CSS. It
                cannot be recreated with inline styles alone — the examples
                below work only because Canvas enhances the markup for you.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WAI-ARIA Authoring Practices: Tabs pattern
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN: <code>role=&quot;tab&quot;</code> and related roles
                    </a>
                </li>
            </ul>

            <p>
                In this guide, ARIA attributes are not added manually to the
                tab markup. Canvas manages the interactive behaviour internally,
                and manually adding partial ARIA patterns could conflict with or
                duplicate what Canvas injects.
            </p>

            <h2>Canvas-enhanced tabs example</h2>

            <p>
                The structure below shows the minimum HTML needed for Canvas to
                create tabs. A list of links defines the tab labels, and each
                link points to a corresponding panel by ID.
            </p>

            <div className="enhanceable_content tabs mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-4">
                <ul>
                    <li>
                        <a href="#tab-one">Overview</a>
                    </li>
                    <li>
                        <a href="#tab-two">Details</a>
                    </li>
                    <li>
                        <a href="#tab-three">Further support</a>
                    </li>
                </ul>

                <div id="tab-one">
                    <h4>Overview</h4>
                    <p>
                        Use this tab for a short summary or introduction. Canvas
                        will show this panel when the page first loads.
                    </p>
                </div>

                <div id="tab-two">
                    <h4>Details</h4>
                    <p>
                        Place more detailed information here — for example,
                        step-by-step instructions or criteria.
                    </p>
                </div>

                <div id="tab-three">
                    <h4>Further support</h4>
                    <p>
                        This tab can be used for links to help, FAQs, or related
                        resources without cluttering the main content.
                    </p>
                </div>
            </div>

            <CodeBlock>{`<div class="enhanceable_content tabs">
  <ul>
    <li><a href="#tab-one">Overview</a></li>
    <li><a href="#tab-two">Details</a></li>
    <li><a href="#tab-three">Further support</a></li>
  </ul>

  <div id="tab-one">
    <h4>Overview</h4>
    <p>Use this tab for a short summary or introduction.</p>
  </div>

  <div id="tab-two">
    <h4>Details</h4>
    <p>Place more detailed information here — for example, steps or criteria.</p>
  </div>

  <div id="tab-three">
    <h4>Further support</h4>
    <p>Use this tab for links to help, FAQs, or related resources.</p>
  </div>
</div>`}</CodeBlock>

            <h2>Accessibility notes</h2>

            <ul>
                <li>
                    The tab behaviour and ARIA attributes are handled by Canvas&apos;
                    own scripts. The raw HTML will appear as a list of links and
                    sections if enhancement fails.
                </li>
                <li>
                    Avoid adding your own <code>role=&quot;tab&quot;</code>,{" "}
                    <code>role=&quot;tablist&quot;</code>, or related attributes unless
                    you are building a fully custom tabs pattern outside Canvas&apos;
                    enhancement system.
                </li>
                <li>
                    Ensure that important instructions are not hidden only in a
                    non-default tab; some learners may miss them if they do not
                    explore all tabs.
                </li>
                <li>
                    For simpler show/hide content that does not require tabbed
                    navigation, consider native{" "}
                    <code>&lt;details&gt;</code> /{" "}
                    <code>&lt;summary&gt;</code> instead, as shown on the
                    Typography page.
                </li>
            </ul>
        </article>
    );
}
