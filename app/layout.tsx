import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavbarProvider } from "./contexts/NavbarContext";
import MainLayout from "./components/layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL = "https://calvinmagezi.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Calvin Magezi - CTO & Tech Entrepreneur | Uganda",
    template: "%s | Calvin Magezi"
  },
  description: "Calvin Magezi is a Ugandan CTO, tech entrepreneur, and AI builder. Co-founder of Kolaborate (Africa's talent platform) and SiteSeer (AI construction tech). Based in Kampala, Uganda.",
  keywords: [
    "Calvin Magezi",
    "Calvin Magezi Uganda",
    "Calvin Magezi CTO",
    "Calvin Magezi Kolaborate",
    "Calvin Magezi SiteSeer",
    "Calvin Magezi developer",
    "Calvin Magezi tech entrepreneur",
    "CTO Uganda",
    "Chief Technology Officer Uganda",
    "Ugandan tech entrepreneur",
    "Kolaborate",
    "SiteSeer",
    "Chamuka",
    "African tech leader",
    "Uganda software engineer",
    "Kampala developer",
    "AI builder Africa",
    "Construction tech Africa",
    "PropTech Uganda",
    "TypeScript developer",
    "Next.js developer",
    "AI agent systems",
    "local-first software",
    "fullstack developer Uganda",
    "tech entrepreneur East Africa",
  ],
  authors: [{ name: "Calvin Magezi", url: BASE_URL }],
  creator: "Calvin Magezi",
  publisher: "Calvin Magezi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Calvin Magezi - CTO & Tech Entrepreneur | Uganda',
    description: 'Calvin Magezi is a Ugandan CTO and tech entrepreneur building AI-powered platforms for Africa. Co-founder of Kolaborate and SiteSeer.',
    siteName: 'Calvin Magezi',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Calvin Magezi - CTO & Tech Entrepreneur',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calvin Magezi - CTO & Tech Entrepreneur | Uganda',
    description: 'Calvin Magezi is a Ugandan CTO and tech entrepreneur building AI-powered platforms for Africa.',
    images: ['/twitter-image'],
    creator: '@calvinmagezi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

// JSON-LD: Person schema — the most important signal for "Calvin Magezi" searches on Google and AI
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Calvin Magezi",
  url: BASE_URL,
  image: `${BASE_URL}/profile1.jpeg`,
  jobTitle: "Chief Technology Officer",
  description: "Ugandan CTO and tech entrepreneur building AI-powered platforms for Africa. Co-founder of Kolaborate and SiteSeer, based in Kampala, Uganda.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Kolaborate Platforms Limited",
      description: "Africa's Engine for Global-Ready Digital Talent",
    },
    {
      "@type": "Organization",
      name: "SiteSeer",
      description: "AI-powered construction technology platform",
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Software Engineering",
    "TypeScript",
    "Next.js",
    "Construction Technology",
    "PropTech",
    "African Tech Ecosystem",
    "AI Agent Systems",
    "Local-First Software",
  ],
  nationality: { "@type": "Country", name: "Uganda" },
  homeLocation: { "@type": "Place", name: "Kampala, Uganda" },
  sameAs: [
    "https://github.com/CalvinMagezi",
    "https://twitter.com/CalvinMagezi",
    "https://www.linkedin.com/in/calvin-magezi-639a53228/",
    "https://www.instagram.com/calvinmagezi/",
    "https://www.facebook.com/profile.php?id=100073695104661",
    `${BASE_URL}/biography`,
    `${BASE_URL}/about-me`,
  ],
};

// JSON-LD: WebSite schema — enables Sitelinks search box in Google
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Calvin Magezi",
  description: "Personal website of Calvin Magezi — CTO and tech entrepreneur from Uganda",
  author: { "@id": `${BASE_URL}/#person` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#7C3AED" />
        <meta name="color-scheme" content="light dark" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased flex flex-col w-screen min-h-screen`}
      >
        <NavbarProvider>
          <MainLayout>
            {children}
          </MainLayout>
          <Toaster />
        </NavbarProvider>
        <Analytics />
      </body>
    </html>
  );
}
