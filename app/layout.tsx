import { BackgroundDots } from "@/src/components/backgroundDots";
import { Footer } from "@/src/components/footer";
import { NavBar } from "@/src/components/navbar";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Ethan Zitting";
const description = "My personal website. I build and maintain high-scale web products with real business impact.";

export const metadata: Metadata = {
    metadataBase: new URL("https://ethanzitting.com"),
    title,
    description,
    openGraph: {
        type: "website",
        url: "/",
        siteName: title,
        title,
        description,
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="antialiased relative flex flex-col min-h-screen max-w-275 px-4 mx-auto bg-background dark:bg-background-dark text-text dark:text-text-dark"
            >
                <BackgroundDots />
                <NavBar />
                {children}
                <Footer className="mt-auto" />
            </body>
        </html>
    );
}
