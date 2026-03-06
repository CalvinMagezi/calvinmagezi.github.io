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

export default function BiographyPage() {
  return <Resume />;
}