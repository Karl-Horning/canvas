import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Canvas Content Styling Guide",
    description: "A guide for styling content in Canvas LMS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex">
                <Sidebar />
                <main className="flex-1 min-w-0 flex flex-col">
                    <div className="flex-1 p-6">
                        <div className="max-w-3xl mx-auto">{children}</div>
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    );
}
