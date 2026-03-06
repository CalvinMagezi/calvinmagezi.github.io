'use client';

import { useNavbar } from "../contexts/NavbarContext";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import { FaStar, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

const GALLERY_IMAGES = [
  "/gallery/ceecdba2-0f44-43dc-86c0-950e54132050.JPG",
  "/gallery/33984e7d-d646-4a21-bf91-a46513dc1098.JPG",
  "/gallery/IMG_0765.JPG",
];

function Banner() {
  const { isOpen } = useNavbar();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
        setIsTransitioning(false);
      }, 1000); // Fade out duration
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="landing"
      className="relative flex flex-col justify-center w-full h-screen items-left overflow-hidden"
    >
      {/* Background images with crossfade */}
      {GALLERY_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex && !isTransitioning
            ? "opacity-100"
            : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div
        className={`absolute h-screen bg-black/40 ${isOpen ? "w-64" : "w-screen"
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
      <a
        href="https://github.com/CalvinMagezi/agent-hq"
        target="_blank"
        rel="noopener noreferrer"
        className="z-20"
      >
        <div className="pt-5 pl-10">
          <button
            className="flex items-center space-x-2 px-4 py-2 text-white font-bold rounded transition-all duration-200 hover:scale-105 bg-gray-800 hover:bg-gray-900 border border-white/30"
          >
            <FaGithub />
            <span>Agent-HQ</span>
          </button>
        </div>
      </a>
    </section>
  );
}

export default Banner;
