import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import IconGrid from "./IconGrid";

const names = ["add", "address-book", "info", "warning"];

describe("IconGrid", () => {
    const writeText = vi.fn().mockResolvedValue(undefined);

    beforeEach(() => {
        writeText.mockClear();
        Object.defineProperty(navigator, "clipboard", {
            value: { writeText },
            configurable: true,
        });
    });

    afterEach(() => {
        cleanup();
        vi.useRealTimers();
    });

    it("renders every icon and a plural count when there is no filter", () => {
        render(<IconGrid names={names} />);

        expect(screen.getByText("4 icons")).toBeInTheDocument();
        for (const name of names) {
            expect(screen.getByText(`icon-${name}`)).toBeInTheDocument();
        }
    });

    it("filters case-insensitively by substring", async () => {
        const user = userEvent.setup();
        render(<IconGrid names={names} />);

        await user.type(
            screen.getByRole("searchbox", { name: /filter icons/i }),
            "ADD",
        );

        expect(screen.getByText("2 icons")).toBeInTheDocument();
        expect(screen.getByText("icon-add")).toBeInTheDocument();
        expect(screen.getByText("icon-address-book")).toBeInTheDocument();
        expect(screen.queryByText("icon-info")).not.toBeInTheDocument();
    });

    it("uses a singular label when exactly one icon matches", async () => {
        const user = userEvent.setup();
        render(<IconGrid names={names} />);

        await user.type(
            screen.getByRole("searchbox", { name: /filter icons/i }),
            "warn",
        );

        expect(screen.getByText("1 icon")).toBeInTheDocument();
    });

    it("shows a no-results message quoting the query when nothing matches", async () => {
        const user = userEvent.setup();
        render(<IconGrid names={names} />);

        await user.type(
            screen.getByRole("searchbox", { name: /filter icons/i }),
            "zzz",
        );

        expect(screen.getByText("0 icons")).toBeInTheDocument();
        expect(
            screen.getByText((_, el) => el?.textContent === `No icons match “zzz”.`),
        ).toBeInTheDocument();
    });

    it("copies the full icon-prefixed class name and reverts the label after 2 seconds", async () => {
        vi.useFakeTimers();
        render(<IconGrid names={names} />);

        const button = screen.getByRole("button", { name: "Copy icon-info" });
        expect(button).toHaveTextContent("Copy");

        await act(async () => {
            fireEvent.click(button);
        });

        expect(writeText).toHaveBeenCalledWith("icon-info");
        expect(button).toHaveTextContent("Copied!");

        await act(async () => {
            await vi.advanceTimersByTimeAsync(2000);
        });
        expect(button).toHaveTextContent("Copy");
    });
});
