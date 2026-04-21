import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
    AUTHOR_NAME,
    AUTHOR_URL,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_TITLE,
    SITE_URL,
} from "@/lib/config";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        type: "website",
    },
    twitter: {
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
    },
};

const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    author: {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
    },
};

export default function Home() {
    return (
        <>
            <JsonLd data={homeJsonLd} />
            <div className="home-hero">
                <h1>Canvas Content Styling Guide</h1>
                <p className="home-subtitle">
                    Style your Canvas courses with HTML and CSS — no prior
                    coding experience needed
                </p>
                <p>
                    A practical reference for administrative staff in further
                    and higher education who want to make their Canvas course
                    pages look clear, consistent, and professional. Every
                    example is ready to copy and paste directly into the Canvas
                    Rich Content Editor.
                </p>
            </div>

            <section>
                <h2>What you will find here</h2>
                <p>
                    The guide starts with the basics — headings, lists, and
                    tables — and gradually introduces layout, colour, components
                    such as buttons and tabs, and accessibility techniques. Each
                    section covers both Canvas&apos;s own built-in CSS classes
                    and modern inline styles, so the examples work regardless of
                    how your institution has configured Canvas.
                </p>
                <p>
                    Every code block has a copy button, and where a topic goes
                    deeper than this guide covers, there is a link to the
                    relevant MDN documentation.
                </p>
                <Link href="/introduction" className="home-cta">
                    Start with the Introduction →
                </Link>
            </section>
        </>
    );
}
