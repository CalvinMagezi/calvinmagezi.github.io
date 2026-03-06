import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Calvin Magezi",
  description: "Get in touch with Calvin Magezi — CTO and tech entrepreneur based in Kampala, Uganda. Available for collaborations, partnerships, and speaking opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Calvin Magezi",
    description: "Get in touch with Calvin Magezi — CTO and tech entrepreneur based in Kampala, Uganda.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://calvinmagezi.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://calvinmagezi.vercel.app/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ContactClient />
    </>
  );
}
