import "./global.css";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "chiwai | Portfolio",
    template: "%s | chiwai",
  },
  description:
    "The portfolio of John Chiwai, an actuarial graduate and data professional specializing in full-stack development and Gen AI.",
  openGraph: {
    title: "John Chiwai | Portfolio",
    description:
      "The portfolio of John Chiwai, an actuarial graduate and data professional specializing in full-stack development and Gen AI.",
    url: baseUrl,
    siteName: "chiwai | Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-zinc-900 bg-zinc-50 dark:text-zinc-100 dark:bg-zinc-950",
        spaceGrotesk.variable,
        dmSans.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto min-h-screen flex flex-col font-sans selection:bg-teal-500 selection:text-white">
        <Navbar />
        <main className="flex-1 min-w-0 mt-6 px-2 md:px-0 flex flex-col">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
