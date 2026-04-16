/** Year the project was created. Used to build the copyright range. */
const START_YEAR = 2026;

/**
 * Site-wide footer for the Canvas Content Styling Guide.
 *
 * Displays a brief description of the project, a dynamic copyright range
 * linking to the author's GitHub profile, and a link to the source repository.
 *
 * The copyright year shows only the start year until a new calendar year
 * begins, at which point it extends to a range (e.g. 2026 – 2027).
 *
 * @returns The rendered footer element.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();
    const yearRange =
        currentYear > START_YEAR
            ? `${START_YEAR} — ${currentYear}`
            : `${START_YEAR}`;

    return (
        <footer className="border-t border-[#e5e7eb] px-6 py-4 text-sm text-[#4b5563]">
            <p className="m-0 text-center">
                A reference guide for styling content in Canvas LMS.
            </p>
            <p className="m-0 mt-1 text-center">
                &copy; {yearRange}{" "}
                <a
                    href="https://github.com/Karl-Horning"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Karl Horning
                </a>{" "}
                &mdash;{" "}
                <a
                    href="https://github.com/Karl-Horning/canvas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View source
                </a>
            </p>
        </footer>
    );
}
