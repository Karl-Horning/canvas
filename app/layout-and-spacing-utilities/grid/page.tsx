import CodeBlock from "@/components/CodeBlock";

export default function page() {
    return (
        <article>
            <h1>Grid</h1>

            <p>
                Canvas includes a legacy responsive grid system based on rows
                and columns. Columns adapt to different screen sizes using
                classes such as <code>col-xs-12</code> (full width on small
                screens) and <code>col-md-4</code> (four columns wide on medium
                screens). These classes are part of Canvas' older CSS and still
                work in this Canvas instance, but they may change in future if
                the underlying theme is updated.
            </p>

            <p>
                You can also build layouts using native CSS Grid directly in
                inline styles. This does not rely on Canvas' legacy CSS. Support
                depends on the learner's browser, but current browsers handle
                CSS Grid well.
            </p>

            <h2>Useful references</h2>
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — CSS Grid Layout
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN — CSS grid properties reference
                    </a>
                </li>
                <li>
                    <a
                        href="https://css-tricks.com/snippets/css/complete-guide-grid/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CSS-Tricks — A Complete Guide to Grid
                    </a>
                </li>
                <li>
                    <a
                        href="https://caniuse.com/css-grid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Can I use — CSS Grid Layout
                    </a>
                </li>
            </ul>

            <h2>Two-column layout (Canvas legacy grid)</h2>

            <p>
                This example shows an 8/12 main column and a 4/12 side column
                using Canvas' grid classes. On small screens they stack
                vertically. Backgrounds are added here for visibility.
            </p>

            <div className="content-box mb-4">
                <div className="grid-row">
                    <div className="col-xs-12 col-md-8">
                        <div className="bg-[#eef] p-3">
                            <h5>Main column (8/12)</h5>
                            <p>
                                Uses <code>col-xs-12 col-md-8</code>. Full width
                                on small screens.
                            </p>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <div className="bg-[#eef] p-3">
                            <h5>Side column (4/12)</h5>
                            <p>
                                Uses <code>col-xs-12 col-md-4</code>. Stacks
                                below on smaller screens.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div class="content-box">
  <div class="grid-row">
    <div class="col-xs-12 col-md-8">
      <div style="background: #eef; padding: 0.75rem;">
        <h5>Main column (8/12)</h5>
        <p>Uses <code>col-xs-12 col-md-8</code>. Full width on small screens.</p>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div style="background: #eef; padding: 0.75rem;">
        <h5>Side column (4/12)</h5>
        <p>Uses <code>col-xs-12 col-md-4</code>. Stacks below on smaller screens.</p>
      </div>
    </div>
  </div>
</div>`}</CodeBlock>

            <h2>Three-column layout (Canvas legacy grid)</h2>

            <p>
                This layout uses three equal-width columns (
                <code>col-xs-12 col-md-4</code>). On smaller screens each column
                becomes full width and stacks vertically.
            </p>

            <div className="content-box mb-4">
                <div className="grid-row">
                    <div className="col-xs-12 col-md-4">
                        <div className="bg-[#eef] p-3">
                            <p>
                                <strong>Column 1</strong>
                            </p>
                            <p>
                                Uses <code>col-xs-12 col-md-4</code>.
                            </p>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <div className="bg-[#eef] p-3">
                            <p>
                                <strong>Column 2</strong>
                            </p>
                            <p>
                                Also uses <code>col-xs-12 col-md-4</code>.
                            </p>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <div className="bg-[#eef] p-3">
                            <p>
                                <strong>Column 3</strong>
                            </p>
                            <p>Same width as the others.</p>
                        </div>
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div class="content-box">
  <div class="grid-row">
    <div class="col-xs-12 col-md-4">
      <div style="background: #eef; padding: 0.75rem;">
        <p><strong>Column 1</strong></p>
        <p>Uses <code>col-xs-12 col-md-4</code>.</p>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div style="background: #eef; padding: 0.75rem;">
        <p><strong>Column 2</strong></p>
        <p>Also uses <code>col-xs-12 col-md-4</code>.</p>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div style="background: #eef; padding: 0.75rem;">
        <p><strong>Column 3</strong></p>
        <p>Same width as the others.</p>
      </div>
    </div>
  </div>
</div>`}</CodeBlock>

            <h2>Nested grid (Canvas legacy grid)</h2>

            <p>
                A column can contain its own grid. In this example, the nested
                columns use <code>col-xs-6</code>, so they remain side by side
                at 50% width each. The Canvas legacy grid is fixed to its
                predefined breakpoints; you cannot change how the grid behaves
                using inline styles alone.
            </p>

            <div className="content-box mb-4">
                <div className="grid-row">
                    <div className="col-xs-12 col-md-8">
                        <div className="bg-[#eef] p-3">
                            <h5>Main column with nested content</h5>
                            <p>This column contains a nested grid:</p>

                            <div className="grid-row">
                                <div className="col-xs-6">
                                    <div className="bg-[#def] p-2">
                                        Nested 1 (6/12)
                                    </div>
                                </div>

                                <div className="col-xs-6">
                                    <div className="bg-[#def] p-2">
                                        Nested 2 (6/12)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <div className="bg-[#eef] p-3">
                            <h5>Side column</h5>
                            <p>This column sits beside the nested example.</p>
                        </div>
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div class="content-box">
  <div class="grid-row">
    <div class="col-xs-12 col-md-8">
      <div style="background: #eef; padding: 0.75rem;">
        <h5>Main column with nested content</h5>
        <p>This column contains a nested grid:</p>
        <div class="grid-row">
          <div class="col-xs-6">
            <div style="background: #def; padding: 0.5rem;">Nested 1 (6/12)</div>
          </div>
          <div class="col-xs-6">
            <div style="background: #def; padding: 0.5rem;">Nested 2 (6/12)</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div style="background: #eef; padding: 0.75rem;">
        <h5>Side column</h5>
        <p>This column sits beside the nested example.</p>
      </div>
    </div>
  </div>
</div>`}</CodeBlock>

            <h2>Full-width section (Canvas legacy grid)</h2>

            <p>
                A full-width row can be created using <code>col-xs-12</code>.
                The example below uses a highlighted background for visibility.
            </p>

            <div className="content-box mb-4">
                <div className="grid-row">
                    <div className="col-xs-12">
                        <div className="bg-[#def] p-4">
                            <strong>Full-width section</strong> using{" "}
                            <code>col-xs-12</code>.
                        </div>
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div class="content-box">
  <div class="grid-row">
    <div class="col-xs-12">
      <div style="background: #def; padding: 1rem;">
        <strong>Full-width section</strong> using <code>col-xs-12</code>.
      </div>
    </div>
  </div>
</div>`}</CodeBlock>

            <h2>Modern CSS Grid with inline styles</h2>

            <p>
                You can also build layouts using native CSS Grid directly in
                inline styles. This does not rely on Canvas' legacy CSS and
                gives you more control over how content wraps on different
                screen sizes.
            </p>

            <p>
                The examples below use the same pattern:{" "}
                <code>display: grid</code>,{" "}
                <code>grid-template-columns</code>{" "}
                with <code>repeat(auto-fit, minmax(...))</code>, and a{" "}
                <code>gap</code> between items.
            </p>

            <h3>Two-column responsive grid (inline styles)</h3>

            <p>
                This example uses <code>auto-fit</code> and{" "}
                <code>minmax</code>{" "}
                so that columns wrap when there is not enough space. On wider
                screens you will see two columns; on narrow screens they stack.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mb-4">
                <div className="bg-[#eef] p-3">
                    <h5>Main content</h5>
                    <p>
                        This is the first column. It uses CSS Grid with inline
                        styles and a minimum width of 260px.
                    </p>
                </div>
                <div className="bg-[#def] p-3">
                    <h5>Supporting content</h5>
                    <p>
                        When the available width is too small for two 260px
                        columns, the items stack vertically.
                    </p>
                </div>
            </div>

            <CodeBlock>{`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
  <div style="background: #eef; padding: 0.75rem;">
    <h5>Main content</h5>
    <p>
      This is the first column. It uses CSS Grid with inline styles
      and a minimum width of 260px.
    </p>
  </div>
  <div style="background: #def; padding: 0.75rem;">
    <h5>Supporting content</h5>
    <p>
      When the available width is too small for two 260px columns,
      the items stack vertically.
    </p>
  </div>
</div>`}</CodeBlock>

            <h3>Auto-fit card layout (inline styles)</h3>

            <p>
                This grid uses <code>auto-fit</code> and <code>minmax</code> so
                that cards wrap automatically, showing two or more columns on
                wider screens and a single column on small screens.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 mb-4">
                <div className="bg-[#eef] p-3">
                    <h5>Card 1</h5>
                    <p>Responsive card using CSS Grid.</p>
                </div>
                <div className="bg-[#eef] p-3">
                    <h5>Card 2</h5>
                    <p>The grid fits as many cards per row as space allows.</p>
                </div>
                <div className="bg-[#eef] p-3">
                    <h5>Card 3</h5>
                    <p>On narrow screens, these cards stack vertically.</p>
                </div>
            </div>

            <CodeBlock>{`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
  <div style="background: #eef; padding: 0.75rem;">
    <h5>Card 1</h5>
    <p>Responsive card using CSS Grid.</p>
  </div>
  <div style="background: #eef; padding: 0.75rem;">
    <h5>Card 2</h5>
    <p>The grid fits as many cards per row as space allows.</p>
  </div>
  <div style="background: #eef; padding: 0.75rem;">
    <h5>Card 3</h5>
    <p>On narrow screens, these cards stack vertically.</p>
  </div>
</div>`}</CodeBlock>

            <h3>Header / main / aside layout (inline styles)</h3>

            <p>
                This layout uses a simple wrapper for the header and a nested
                CSS Grid for the main and aside areas. The inner grid uses{" "}
                <code>auto-fit</code> and <code>minmax</code>, so the main and
                aside sections wrap in a similar way to the card example.
            </p>

            <div className="mb-4">
                <div className="bg-[#ddeeff] p-3 mb-4">
                    <strong>Header area</strong> — this block always spans the
                    full width above the content grid.
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
                    <div className="bg-[#eef] p-3">
                        <h5>Main content</h5>
                        <p>
                            This is the main content area. On wider screens it
                            appears beside the side panel.
                        </p>
                    </div>

                    <div className="bg-[#def] p-3">
                        <h5>Side panel</h5>
                        <p>
                            This section sits next to the main content when
                            there is enough space, and stacks below on narrow
                            screens.
                        </p>
                    </div>
                </div>
            </div>

            <CodeBlock>{`<div>
  <div style="background: #ddeeff; padding: 0.75rem; margin-bottom: 1rem;">
    <strong>Header area</strong> — this block always spans the full width above the content grid.
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
    <div style="background: #eef; padding: 0.75rem;">
      <h5>Main content</h5>
      <p>This is the main content area. On wider screens it appears beside the side panel.</p>
    </div>
    <div style="background: #def; padding: 0.75rem;">
      <h5>Side panel</h5>
      <p>
        This section sits next to the main content when there is enough space,
        and stacks below on narrow screens.
      </p>
    </div>
  </div>
</div>`}</CodeBlock>

            <h2>Accessibility notes</h2>

            <ul>
                <li>
                    Keep the reading order in the HTML logical (top to bottom,
                    left to right). Do not rely on visual column position alone
                    to convey meaning.
                </li>
                <li>
                    Avoid very complex nested grids with many columns. They can
                    become difficult to read on small screens and for screen
                    reader users.
                </li>
                <li>
                    Test layouts in Student View and on different screen sizes
                    to confirm that columns stack in a readable order and that
                    content does not become cramped.
                </li>
                <li>
                    Use headings and clear labels within grid items so that the
                    structure is understandable even if columns stack into a
                    single column.
                </li>
            </ul>
        </article>
    );
}
