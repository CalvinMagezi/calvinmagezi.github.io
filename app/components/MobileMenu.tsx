'use client';

import React, { useState } from "react";
import { FaBars, FaLinkedin, FaRebel, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  BsFacebook,
  BsGithub,
  BsHouse,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { FaJediOrder, FaLaravel, FaMediumM, FaUserClock } from "react-icons/fa";
import { ColorModeSwitcher } from "./utils/ColorModeSwitcher";
import { RiContactsBookUploadFill } from "react-icons/ri";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed text-3xl z-50 top-4 right-4 lg:hidden text-white bg-black/50 p-2 rounded"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Calvin Magezi</h2>
            <button
              onClick={closeMenu}
              className="text-2xl p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              <FaTimes />
            </button>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto border-8 border-gray-500 rounded-full w-28 h-28 border-opacity-60 mb-4">
            <Image
              src="/profile1.jpeg"
              fill
              className="rounded-full object-cover"
              alt="Calvin Magezi"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center w-full my-3 space-x-4 text-lg justify-evenly">
            <a
              href="https://www.facebook.com/profile.php?id=100073695104661"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="socialIcon" />
            </a>
            <a 
              href="https://www.instagram.com/calvinmagezi/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="socialIcon" />
            </a>
            <a 
              href="https://twitter.com/CalvinMagezi" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter className="socialIcon" />
            </a>
            <a 
              href="https://github.com/CalvinMagezi" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="socialIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/calvin-magezi-639a53228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="socialIcon" />
            </a>
          </div>

          {/* Color Mode Switcher */}
          <div className="flex items-center justify-center w-full mt-2 mb-4">
            <ColorModeSwitcher />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col flex-grow pt-5 space-y-6">
            <li>
              <Link href="/" onClick={closeMenu}>
                <div className="navbarLink">
                  <BsHouse className="text-2xl" />
                  <h1>Home</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about-me" onClick={closeMenu}>
                <div className="navbarLink">
                  <FaUserClock className="text-2xl" />
                  <h1>About Me</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/biography" onClick={closeMenu}>
                <div className="navbarLink">
                  <FaMediumM className="text-2xl" />
                  <h1>Biography</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/skills" onClick={closeMenu}>
                <div className="navbarLink">
                  <FaJediOrder className="text-2xl" />
                  <h1>Skills</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={closeMenu}>
                <div className="navbarLink">
                  <FaLaravel className="text-2xl" />
                  <h1>Projects</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                <div className="navbarLink">
                  <FaRebel className="text-2xl" />
                  <h1>Blog</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                <div className="navbarLink">
                  <RiContactsBookUploadFill className="text-2xl" />
                  <h1>Contact Me</h1>
                </div>
              </Link>
            </li>
          </ul>

          {/* Footer */}
          <div className="w-full text-center mt-auto">
            <h1 className="text-sm">
              &copy; Copyright{" "}
              <strong>
                <span>calvinmagezi.com</span>
              </strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;