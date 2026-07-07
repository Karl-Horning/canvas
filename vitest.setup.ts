import "@testing-library/jest-dom/vitest";

declare global {
    // eslint-disable-next-line no-var
    var IS_REACT_ACT_ENVIRONMENT: boolean;
}

// React 19 checks this flag before allowing act(...); Testing Library's own
// render/fireEvent handle it internally, but tests that import act directly
// (e.g. to flush a fake-timer async update) need it set explicitly.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
