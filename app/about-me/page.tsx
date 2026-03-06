import { Metadata } from "next";
import About from "../components/About";
import Background from "../components/Background";
import Clients from "../components/Clients";

export const metadata: Metadata = {
  title: "About Calvin Magezi",
  description: "Learn about Calvin Magezi — Ugandan CTO, tech entrepreneur, and AI builder. Co-founder of Kolaborate and SiteSeer, building the future of African tech from Kampala, Uganda.",
  alternates: { canonical: "/about-me" },
  openGraph: {
    title: "About Calvin Magezi",
    description: "Ugandan CTO and tech entrepreneur building AI-powered platforms for Africa.",
    type: "profile",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://calvinmagezi.vercel.app/about-me",
  url: "https://calvinmagezi.vercel.app/about-me",
  name: "About Calvin Magezi",
  mainEntity: { "@id": "https://calvinmagezi.vercel.app/#person" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://calvinmagezi.vercel.app" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://calvinmagezi.vercel.app/about-me" },
    ],
  },
};

export default function AboutMePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <About />
      <Background />
      <Clients />
    </>
  );
}