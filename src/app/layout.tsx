import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/sidebar/RightSidebar";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-spaceGrotestk",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dev overflow",
    description: "A place for developers to share their problems",
    icons: {
        icon: ["/assets/images/site-logo.svg"],
    },
};

export default function RootLayout({
    children,
    pageprops,
}: Readonly<{
    children: React.ReactNode;
    pageprops: any;
}>) {
    return (
        <ClerkProvider
            appearance={{
                elements: {
                    formButtonPrimary: "primary-gradient",
                    footerActionLink:
                        "primary-text-gradient hover:text-primary-500",
                },
            }}
        >
            <html lang="en">
                {" "}
                <ThemeProvider>
                    <body
                        className={`${inter.variable} ${spaceGrotesk.variable}`}
                    >
                        <Navbar />
                        <main className="flex">
                            <LeftSidebar />
                            <section className="ml-96 flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36">
                                {children}
                            </section>

                            <RightSidebar />
                        </main>
                    </body>
                </ThemeProvider>
            </html>
        </ClerkProvider>
    );
}
