import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
    let originalTz: string | undefined;

    beforeEach(() => {
        originalTz = process.env.TZ;
    });

    afterEach(() => {
        process.env.TZ = originalTz;
    });

    it("renders the title as a heading and the reading time", () => {
        render(
            <PageHeader
                title="Buttons"
                date="2026-01-15"
                readingTime={4}
            />,
        );

        expect(
            screen.getByRole("heading", { name: "Buttons" }),
        ).toBeInTheDocument();
        expect(screen.getByText("4 min read")).toBeInTheDocument();
    });

    it("displays the date's day-of-month correctly in a negative-UTC-offset timezone", () => {
        // If the date were passed straight to `new Date(dateString)`, it would
        // parse as UTC midnight, which rolls back to the previous day in any
        // timezone behind UTC — exactly what this component's date-splitting
        // approach exists to avoid.
        process.env.TZ = "America/New_York";

        render(
            <PageHeader
                title="Buttons"
                date="2026-01-01"
                readingTime={1}
            />,
        );

        expect(screen.getByText("1 Jan 2026")).toBeInTheDocument();
    });

    it("displays the date's day-of-month correctly in a positive-UTC-offset timezone", () => {
        // The equivalent failure mode in the other direction: UTC midnight
        // rolling forward to the next day in timezones ahead of UTC.
        process.env.TZ = "Pacific/Auckland";

        render(
            <PageHeader
                title="Buttons"
                date="2026-01-31"
                readingTime={1}
            />,
        );

        expect(screen.getByText("31 Jan 2026")).toBeInTheDocument();
    });
});
