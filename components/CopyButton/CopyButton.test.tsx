import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CopyButton from "./CopyButton";

describe("CopyButton", () => {
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

    it("writes the given text to the clipboard when clicked", async () => {
        render(<CopyButton text="<div class='btn'>Click me</div>" />);

        await act(async () => {
            fireEvent.click(screen.getByRole("button", { name: /copy/i }));
        });

        expect(writeText).toHaveBeenCalledWith(
            "<div class='btn'>Click me</div>",
        );
    });

    it("shows 'Copied!' after clicking, then reverts to 'Copy' after 2 seconds", async () => {
        vi.useFakeTimers();
        render(<CopyButton text="some code" />);

        const button = screen.getByRole("button", { name: /copy/i });
        expect(button).toHaveTextContent("Copy");

        await act(async () => {
            fireEvent.click(button);
        });
        expect(button).toHaveTextContent("Copied!");

        await act(async () => {
            await vi.advanceTimersByTimeAsync(2000);
        });
        expect(button).toHaveTextContent("Copy");
    });
});
