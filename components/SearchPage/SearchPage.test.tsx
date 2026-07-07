import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import SearchPage from "./SearchPage";

vi.mock("@/lib/searchIndex", () => ({
    searchIndex: [
        {
            title: "Buttons",
            description: "Style links as buttons in Canvas.",
            content: "btn btn-primary legacy Canvas classes",
            keywords: ["button", "link"],
            slug: "buttons",
        },
        {
            title: "Alerts",
            description: "Show info, success, and error alerts.",
            content: "alert alert-info alert-success",
            keywords: ["alert", "notice"],
            slug: "alerts",
        },
    ],
}));

describe("SearchPage", () => {
    afterEach(() => {
        cleanup();
    });

    it("shows no results list until at least two characters are typed", async () => {
        const user = userEvent.setup();
        render(<SearchPage />);

        await user.type(screen.getByRole("searchbox"), "b");

        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    it("shows a matching page's title and description as a link once query length exceeds one character", async () => {
        const user = userEvent.setup();
        render(<SearchPage />);

        await user.type(screen.getByRole("searchbox"), "button");

        const link = screen.getByRole("link", { name: /Buttons/ });
        expect(link).toHaveAttribute("href", "/buttons");
        expect(screen.getByText(/Style links as buttons/)).toBeInTheDocument();
        expect(screen.queryByText("Alerts")).not.toBeInTheDocument();
    });

    it("shows a no-results message when nothing matches", async () => {
        const user = userEvent.setup();
        render(<SearchPage />);

        await user.type(screen.getByRole("searchbox"), "zzzzz");

        expect(screen.getByText("No results found.")).toBeInTheDocument();
    });
});
