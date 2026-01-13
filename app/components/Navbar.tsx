'use client';

import Image from "next/image";
import Link from "next/link";
import {
  BsGithub,
  BsHouse,
} from "react-icons/bs";
import {
  FaJediOrder,
  FaLaravel,
  FaMediumM,
  FaRebel,
  FaUserClock,
} from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { useNavbar } from "../contexts/NavbarContext";
import { ColorModeSwitcher } from "./utils/ColorModeSwitcher";

function Navbar() {
  const { isOpen } = useNavbar();

  return (
    <div
      className={`${
        isOpen ? "w-screen" : "hidden"
      } justify-between lg:inline-flex items-center w-64 h-screen sticky top-0 left-0 flex-col space-y-4 py-5 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300`}
    >
      <div className="relative mx-auto border-8 border-gray-500 rounded-full w-28 h-28 border-opacity-60">
        <Image
          src="/gallery/me.JPG"
          fill
          className="rounded-full object-cover"
          alt="Calvin Magezi"
        />
      </div>
      <h1 className="text-2xl font-bold">Calvin Magezi</h1>
      
      {/* GitHub Link Only */}
      <div className="flex space-x-4 text-lg">
        <a 
          href="https://github.com/CalvinMagezi" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="socialIcon" />
        </a>
      </div>

      <ul className="flex flex-col flex-grow pt-10 space-y-6">
        <li>
          <Link href="/">
            <div className="navbarLink">
              <BsHouse className="text-2xl" />
              <h1>Home</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about-me">
            <div className="navbarLink">
              <FaUserClock className="text-2xl" />
              <h1>About Me</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/biography">
            <div className="navbarLink">
              <FaMediumM className="text-2xl" />
              <h1>Biography</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <div className="navbarLink">
              <FaJediOrder className="text-2xl" />
              <h1>Skills</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className="navbarLink">
              <FaLaravel className="text-2xl" />
              <h1>Projects</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <div className="navbarLink">
              <FaRebel className="text-2xl" />
              <h1>Blog</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="navbarLink">
              <RiContactsBookUploadFill className="text-2xl" />
              <h1>Contact Me</h1>
            </div>
          </Link>
        </li>
      </ul>

      <ColorModeSwitcher />

      <div className="w-full text-center">
        <h1>
          &copy; Copyright{" "}
          <strong>
            <span>calvinmagezi.com</span>
          </strong>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
