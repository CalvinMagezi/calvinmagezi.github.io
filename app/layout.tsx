import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarProvider } from "./contexts/NavbarContext";
import MainLayout from "./components/layouts/MainLayout";
import { Toaster } from "react-hot-toast";

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
    default: "Calvin Magezi - Fullstack Developer",
    template: "%s | Calvin Magezi"
  },
  description: "Ugandan software developer based in Dubai. Expert in fullstack web development, mobile app development, and blockchain technology. Building innovative solutions with modern technologies.",
  keywords: [
    "Calvin Magezi",
    "Fullstack Developer",
    "Mobile App Developer", 
    "Blockchain Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Dubai Developer",
    "Uganda Developer",
    "Frontend Developer",
    "Backend Developer"
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
    title: 'Calvin Magezi - Fullstack Developer',
    description: 'Ugandan software developer based in Dubai. Expert in fullstack web development, mobile app development, and blockchain technology.',
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
    title: 'Calvin Magezi - Fullstack Developer',
    description: 'Ugandan software developer based in Dubai. Expert in fullstack web development, mobile app development, and blockchain technology.',
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
      </body>
    </html>
  );
}
