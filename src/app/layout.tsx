import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sean Mangin — Web Developer & IT Support",
  description:
    "I build fast, modern websites and AI-powered tools for businesses that want to stand out online.",
  metadataBase: new URL("https://seanmangin.com"),
  openGraph: {
    title: "Sean Mangin — Web Developer & IT Support",
    description:
      "I build fast, modern websites and AI-powered tools for businesses that want to stand out online.",
    type: "website",
    url: "https://seanmangin.com",
    siteName: "Sean Mangin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Mangin — Web Developer & IT Support",
    description:
      "I build fast, modern websites and AI-powered tools for businesses that want to stand out online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
