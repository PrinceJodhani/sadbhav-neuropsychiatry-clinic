import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buildNav } from "@/components/Header/nav";
import MobileActionBar from "@/components/MobileActionBar";
import ScrollToTop from "@/components/ScrollToTop";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "../styles/index.css";
import { Providers } from "./providers";
import type { Metadata, Viewport } from "next";
import reviewsData from "../../public/reviews.json";

// Fonts are self-hosted and preloaded by next/font: no render-blocking request to Google Fonts.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Fraunces (SIL OFL) static 72pt optical-size cut, latin subset: ~41 KB for both
// styles instead of ~270 KB for the full variable font.
const display = localFont({
  src: [
    { path: "./fonts/fraunces-72pt-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/fraunces-72pt-italic.woff2", weight: "400", style: "italic" },
  ],
  display: "swap",
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

const siteUrl = "https://psychiatristinsurat.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Psychiatrist in Surat | Dr. Jash Ajmera, Sadbhav Clinic",
    template: "%s | Dr. Jash Ajmera",
  },
  description: `Psychiatrist in Surat: Dr. Jash Ajmera (MBBS, DPM) at Sadbhav Neuropsychiatry Clinic, Vesu. In person in Surat & Ankleshwar and online. Rated ${reviewsData.place_info.rating}★.`,
  applicationName: "Sadbhav Neuropsychiatry Clinic",
  authors: [{ name: "Dr. Jash Ajmera", url: siteUrl }],
  creator: "Dr. Jash Ajmera",
  publisher: "Sadbhav Neuropsychiatry Clinic",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Health",
  keywords: [
    "psychiatrist in surat",
    "best psychiatrist in surat",
    "psychiatrist in vesu surat",
    "top psychiatrist in surat",
    "Dr Jash Ajmera",
    "Sadbhav Neuropsychiatry Clinic",
    "psychiatrist near me surat",
    "mental health doctor surat",
    "depression treatment surat",
    "anxiety treatment surat",
    "OCD treatment surat",
    "bipolar disorder treatment surat",
    "psychiatrist in gujarat",
    "neuropsychiatrist surat",
    "psychotherapist in surat",
  ],
  manifest: "/images/sadbhav/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/images/sadbhav/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/sadbhav/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/sadbhav/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
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
  verification: {
    google: "3qDat_WFqV5e8yN7FV2Sr2Qc7m6SLUg4Z2xYJO0U2kQ",
    // Bing Webmaster Tools
    other: { "msvalidate.01": "EFEC1F0B87EE9E3FD365BFC02F2835BD" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sadbhav Neuropsychiatry Clinic",
    title: "Best Psychiatrist in Surat | Dr. Jash Ajmera",
    description:
      "Leading psychiatrist in Surat (Vesu) offering expert, confidential mental health care at Sadbhav Neuropsychiatry Clinic. Depression, anxiety, OCD, bipolar disorder & more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Psychiatrist in Surat | Dr. Jash Ajmera",
    description:
      "Leading psychiatrist in Surat offering expert mental health care at Sadbhav Neuropsychiatry Clinic. Book an appointment today.",
    creator: "@ajmerajash",
  },
  appleWebApp: {
    capable: true,
    title: "Dr. Jash Ajmera",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0A171B" },
  ],
};

// Site-wide structured data: WebSite identity + on-site search action.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Sadbhav Neuropsychiatry Clinic – Dr. Jash Ajmera",
  alternateName: "Best Psychiatrist in Surat",
  description:
    "Official website of Dr. Jash Ajmera, a leading psychiatrist in Surat at Sadbhav Neuropsychiatry Clinic.",
  inLanguage: "en-IN",
  publisher: { "@id": `${siteUrl}/#clinic` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blogs?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en-IN"
      className={`${sans.variable} ${display.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>

      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Header nav={buildNav()} />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <MobileActionBar />
        </Providers>
      </body>
    </html>
  );
}
