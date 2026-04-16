import CodeBlock from "@/components/CodeBlock";

export default function page() {
    return (
        <article>
            <h1>Draggable, Resizable, and Sortable Content</h1>

            <p>
                Canvas can add interactive behaviour to certain elements using
                its legacy <strong>enhanceable content</strong> system. When the
                page loads, Canvas runs its built-in JavaScript and looks for
                elements marked with classes such as{" "}
                <code>enhanceable_content draggable</code>,
                <code>resizable</code>, or <code>sortable</code>, and applies
                the corresponding interactions.
            </p>

            <p>
                These behaviours are handled by Canvas' own JavaScript and CSS.
                They cannot be recreated with inline styles alone, and you
                cannot add your own <code>&lt;script&gt;</code> to Rich Content
                Editor pages. The examples on this page work because Canvas
                enhances the markup automatically.
            </p>

            <h2>Useful references</h2>

            <p>
                For broader background on web drag-and-drop (outside Canvas),
                see:
            </p>

            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — HTML Drag and Drop API
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dragging Movements (Level AA)
                    </a>
                </li>
            </ul>

            <h2>Draggable content</h2>

            <p>
                A draggable element is created by applying{" "}
                <code>class="enhanceable_content draggable"</code> to a
                container. When Canvas processes the page, it enables
                drag-and-move behaviour within the element's parent area.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <div className="w-full h-50">
                    <div className="enhanceable_content draggable">
                        <div className="text-center bg-[#0000cd] text-white w-75 h-15">
                            <p className="p-3.75 m-0">
                                Drag this box around inside the area
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div style="width: 100%; height: 200px;">
  <div class="enhanceable_content draggable">
    <div style="
      text-align: center;
      background-color: #0000cd;
      color: #ffffff;
      width: 300px;
      height: 60px;
    ">
      <p style="padding: 15px; margin: 0;">
        Drag this box around inside the area
      </p>
    </div>
  </div>
</div>`}</CodeBlock>

            <h2>Resizable content</h2>

            <p>
                Applying <code>class="enhanceable_content resizable"</code> to a
                container allows Canvas to add a resize handle. Learners can
                resize the element directly in the page, typically by dragging a
                corner.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <div className="w-full h-50">
                    <div className="enhanceable_content resizable text-center bg-[#232333] text-white w-100 h-20">
                        <p className="p-3.75 m-0">
                            Resize this box using the handle in the corner
                        </p>
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div style="width: 100%; height: 200px;">
  <div class="enhanceable_content resizable" style="
    text-align: center;
    background-color: #232333;
    color: #ffffff;
    width: 400px;
    height: 80px;
  ">
    <p style="padding: 15px; margin: 0;">
      Resize this box using the handle in the corner
    </p>
  </div>
</div>`}</CodeBlock>

            <h2>Sortable lists</h2>

            <p>
                You can create a sortable list by adding{" "}
                <code>class="enhanceable_content sortable"</code> to a list
                container. Canvas enhances the list so that items can be
                rearranged by dragging them into a new order.
            </p>

            <div className="mb-4 bg-[#f9f9f9] dark:bg-[#1f2937] p-3">
                <p>
                    Drag the boxes below to change their order (behaviour may
                    vary slightly between browsers and devices):
                </p>

                <ul className="enhanceable_content sortable">
                    <li className="text-center bg-[#000080] text-white w-75 h-15 mb-2">
                        <p className="p-3.75 m-0">Box 1 — drag to re-order</p>
                    </li>
                    <li className="text-center bg-[#0000cd] text-white w-75 h-15 mb-2">
                        <p className="p-3.75 m-0">Box 2 — drag to re-order</p>
                    </li>
                    <li className="text-center bg-[#232333] text-white w-75 h-15">
                        <p className="p-3.75 m-0">Box 3 — drag to re-order</p>
                    </li>
                </ul>
            </div>

            <CodeBlock>{`<ul class="enhanceable_content sortable">
  <li style="
    text-align: center;
    background-color: #000080;
    color: #ffffff;
    width: 300px;
    height: 60px;
    margin-bottom: 0.5rem;
  ">
    <p style="padding: 15px; margin: 0;">Box 1 — drag to re-order</p>
  </li>
  <li style="
    text-align: center;
    background-color: #0000cd;
    color: #ffffff;
    width: 300px;
    height: 60px;
    margin-bottom: 0.5rem;
  ">
    <p style="padding: 15px; margin: 0;">Box 2 — drag to re-order</p>
  </li>
  <li style="
    text-align: center;
    background-color: #232333;
    color: #ffffff;
    width: 300px;
    height: 60px;
  ">
    <p style="padding: 15px; margin: 0;">Box 3 — drag to re-order</p>
  </li>
</ul>`}</CodeBlock>

            <h2>Accessibility notes</h2>

            <p>
                These interactions are provided by Canvas' legacy JavaScript and
                do not use modern, semantic drag-and-drop patterns. In
                particular:
            </p>

            <ul>
                <li>
                    Keyboard interaction and screen reader support are limited
                    compared to fully accessible drag-and-drop implementations.
                </li>
                <li>
                    Movement of elements may not be announced clearly by
                    assistive technologies.
                </li>
                <li>Behaviour on touch devices can vary between browsers.</li>
            </ul>

            <p>
                For important learning activities, ensure that the same
                information and tasks are available in a non-interactive format
                (for example, as an ordered list or a series of clearly labelled
                steps) so that all learners can participate.
            </p>
        </article>
    );
}
