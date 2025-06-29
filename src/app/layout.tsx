import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"], // Add weights as needed
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Nishant Charitable Trust",
    description:
        "Nishant Charitable Trust exists to rescue children from all forms of exploitation by engaging and sustaining them in education.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased w-full min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
