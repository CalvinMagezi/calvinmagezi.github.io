'use client';

import { useNavbar } from "../contexts/NavbarContext";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

function Banner() {
  const { isOpen } = useNavbar();

  return (
    <section
      id="landing"
      className="relative flex flex-col justify-center w-full h-screen items-left"
      style={{
        backgroundImage: "url(" + "/profile2.jpeg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`absolute h-screen bg-black/30 ${
          isOpen ? "w-64" : "w-screen"
        }`}
      ></div>
      <h1 className="z-10 pl-10 text-5xl font-bold text-white">
        Calvin Magezi
      </h1>
      <p className="z-10 pt-5 pl-10 text-xl font-bold text-white">
        The Sky Is <strong>Not</strong> The Limit
      </p>
      <div className="z-10 pt-5 pl-10 text-xl font-bold text-white">
        <ReactTyped
          strings={[
            "CTO at Kolaborate...",
            "Co-founder at SiteSeer...",
            "AI & Construction Tech Leader...",
            "African Tech Ecosystem Builder...",
            "Full Stack Developer...",
            "Tech Entrepreneur...",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
      <Link href="/about-me" className="z-20">
        <div className="pt-5 pl-10">
          <button
            className="flex items-center space-x-2 px-4 py-2 text-white font-bold rounded transition-all duration-200 hover:scale-105 bg-red-600 hover:bg-red-700"
          >
            <FaStar />
            <span>Who Am I?</span>
          </button>
        </div>
      </Link>
      <Link href="/skills" className="z-20">
        <div className="pt-5 pl-10">
          <button
            className="flex items-center space-x-2 px-4 py-2 text-white font-bold rounded transition-all duration-200 hover:scale-105 bg-red-600 hover:bg-red-700"
          >
            <FaStar />
            <span>What Can I Do?</span>
          </button>
        </div>
      </Link>
      <Link href="/projects" className="z-20">
        <div className="pt-5 pl-10">
          <button
            className="flex items-center space-x-2 px-4 py-2 text-white font-bold rounded transition-all duration-200 hover:scale-105 bg-red-600 hover:bg-red-700"
          >
            <FaStar />
            <span>What Have I Done?</span>
          </button>
        </div>
      </Link>
    </section>
  );
}

export default Banner;