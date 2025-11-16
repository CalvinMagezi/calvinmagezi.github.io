import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Calvin Magezi - CTO | AI & Construction Tech Leader",
    template: "%s | Calvin Magezi"
  },
  description: "Ugandan tech leader and CTO at Kolaborate & SiteSeer. Specializing in AI-powered construction tech, African tech talent platforms, and innovative software solutions. Based in Uganda, serving global markets.",
  keywords: [
    "Calvin Magezi",
    "CTO",
    "Chief Technology Officer",
    "Kolaborate",
    "SiteSeer",
    "Construction Tech",
    "AI Developer",
    "Prop Tech",
    "Computer Vision",
    "Tech Leadership",
    "Uganda Tech",
    "African Tech",
    "Fullstack Developer",
    "Mobile App Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Tech Entrepreneur",
    "AI & ML",
    "Data Visualization",
    "RAG Chat",
    "Azure Infrastructure"
  ],
  authors: [{ name: "Calvin Magezi" }],
  creator: "Calvin Magezi",
  publisher: "Calvin Magezi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://calvinmagezi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calvinmagezi.vercel.app',
    title: 'Calvin Magezi - CTO | AI & Construction Tech Leader',
    description: 'Ugandan tech leader and CTO at Kolaborate & SiteSeer. Specializing in AI-powered construction tech and African tech talent platforms.',
    siteName: 'Calvin Magezi Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Calvin Magezi - Fullstack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calvin Magezi - CTO | AI & Construction Tech Leader',
    description: 'Ugandan tech leader and CTO at Kolaborate & SiteSeer. Specializing in AI-powered construction tech and African tech talent platforms.',
    images: ['/twitter-image'],
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
  verification: {
    google: 'your-google-verification-code-here',
  },
  category: 'technology',
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-screen min-h-screen`}
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
