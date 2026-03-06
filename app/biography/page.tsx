import { Metadata } from "next";
import Resume from "../components/Resume";

export const metadata: Metadata = {
  title: "Biography & Resume | Calvin Magezi",
  description: "Calvin Magezi's professional biography and resume. CTO with 10+ years building web, mobile, and AI platforms across Africa and globally.",
  alternates: { canonical: "/biography" },
  openGraph: {
    title: "Biography & Resume | Calvin Magezi",
    description: "CTO with 10+ years building web, mobile, and AI platforms across Africa and globally.",
    type: "profile",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://calvinmagezi.vercel.app/biography",
  url: "https://calvinmagezi.vercel.app/biography",
  name: "Biography & Resume — Calvin Magezi",
  mainEntity: { "@id": "https://calvinmagezi.vercel.app/#person" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://calvinmagezi.vercel.app" },
      { "@type": "ListItem", position: 2, name: "Biography", item: "https://calvinmagezi.vercel.app/biography" },
    ],
  },
};

export default function BiographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <Resume />
    </>
  );
}