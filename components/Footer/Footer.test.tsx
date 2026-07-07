import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/nav", () => ({
    navStructure: [
        {
            type: "standalone",
            href: "/search",
            label: "Search",
            utility: true,
        },
        { type: "standalone", href: "/introduction", label: "Introduction" },
        {
            type: "group",
            label: "Canvas Components",
            items: [
                { href: "/buttons", label: "Buttons" },
                { href: "/alerts", label: "Alerts" },
            ],
        },
    ],
}));

describe("Footer", () => {
    afterEach(() => {
        cleanup();
        vi.useRealTimers();
        vi.resetModules();
    });

    it("renders non-utility standalone links but skips utility-only pages", async () => {
        const { default: Footer } = await import("./Footer");
        render(<Footer />);

        expect(
            screen.getByRole("link", { name: "Introduction" }),
        ).toBeInTheDocument();
        expect(
            screen.queryByRole("link", { name: "Search" }),
        ).not.toBeInTheDocument();
    });

    it("renders grouped sections with a label and each sub-link", async () => {
        const { default: Footer } = await import("./Footer");
        render(<Footer />);

        expect(screen.getByText("Canvas Components")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Buttons" })).toHaveAttribute(
            "href",
            "/buttons",
        );
        expect(screen.getByRole("link", { name: "Alerts" })).toHaveAttribute(
            "href",
            "/alerts",
        );
    });

    it("shows a single year when the current year equals the start year (2025)", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2025, 5, 1));
        vi.resetModules();
        const { default: Footer } = await import("./Footer");

        render(<Footer />);
        expect(screen.getByText("© 2025 Karl Horning")).toBeInTheDocument();
    });

    it("shows a year range when the current year is after the start year", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2027, 5, 1));
        vi.resetModules();
        const { default: Footer } = await import("./Footer");

        render(<Footer />);
        expect(
            screen.getByText("© 2025–2027 Karl Horning"),
        ).toBeInTheDocument();
    });

    it("gives the footer a stable id independent of hashed module classes", async () => {
        const { default: Footer } = await import("./Footer");
        const { container } = render(<Footer />);

        expect(container.querySelector("#site-footer")).toBeInTheDocument();
    });
});
