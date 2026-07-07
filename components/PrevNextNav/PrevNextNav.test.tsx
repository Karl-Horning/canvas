import { cleanup, render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { afterEach, describe, expect, it, vi } from "vitest";
import PrevNextNav from "./PrevNextNav";

vi.mock("next/navigation", () => ({
    usePathname: vi.fn(),
}));

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

describe("PrevNextNav", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders only a next link on the first page in the flattened order", () => {
        vi.mocked(usePathname).mockReturnValue("/introduction");
        render(<PrevNextNav />);

        expect(
            screen.queryByText("← Previous"),
        ).not.toBeInTheDocument();
        const next = screen.getByRole("link", { name: /Next →Buttons/ });
        expect(next).toHaveAttribute("href", "/buttons");
    });

    it("renders both prev and next links on a middle page", () => {
        vi.mocked(usePathname).mockReturnValue("/buttons");
        render(<PrevNextNav />);

        const prev = screen.getByRole("link", {
            name: /← PreviousIntroduction/,
        });
        expect(prev).toHaveAttribute("href", "/introduction");

        const next = screen.getByRole("link", { name: /Next →Alerts/ });
        expect(next).toHaveAttribute("href", "/alerts");
    });

    it("renders only a prev link on the last page in the flattened order", () => {
        vi.mocked(usePathname).mockReturnValue("/alerts");
        render(<PrevNextNav />);

        const prev = screen.getByRole("link", { name: /← PreviousButtons/ });
        expect(prev).toHaveAttribute("href", "/buttons");
        expect(screen.queryByText("Next →")).not.toBeInTheDocument();
    });

    it("excludes utility pages from the sequential order entirely", () => {
        vi.mocked(usePathname).mockReturnValue("/search");
        const { container } = render(<PrevNextNav />);

        expect(container.firstChild).toBeNull();
    });

    it("renders nothing for a path outside the portfolio navigation", () => {
        vi.mocked(usePathname).mockReturnValue("/");
        const { container } = render(<PrevNextNav />);

        expect(container.firstChild).toBeNull();
    });
});
