import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { BottomNav } from "./components/bottom-nav";
import { baseUrl } from "./sitemap";

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
      suppressHydrationWarning
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=document.documentElement;if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <main className="flex-1 [&>section#home]:pt-0 pt-16">{children}</main>
        <Footer />
        <BottomNav />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
