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

export default function AboutMePage() {
  return (
    <>
      <About />
      <Background />
      <Clients />
    </>
  );
}