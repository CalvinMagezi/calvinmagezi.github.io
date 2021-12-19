import Image from "next/image";
import Link from "next/link";

import {
  BsFacebook,
  BsGithub,
  BsHouse,
  BsInstagram,
  BsQuestion,
  BsTwitter,
} from "react-icons/bs";

import {
  FaBars,
  FaJediOrder,
  FaLaravel,
  FaMediumM,
  FaRebel,
  FaRegMoon,
  FaRegSun,
  FaUserClock,
} from "react-icons/fa";

import { RiContactsBookUploadFill } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { navbarState } from "../atoms/navbarAtom";

import useDarkMode from "./utils/useDarkMode";

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const open = useRecoilValue(navbarState);

  return (
    <div
      className={`${
        open ? "" : "hidden"
      } justify-between lg:inline-flex items-center w-96 dark:bg-[whitesmoke] bg-gray-900 h-screen sticky top-0 left-0 flex-col space-y-4 py-5`}
    >
      <div className="w-28 h-28 relative mx-auto border-8 border-gray-500 border-opacity-60 rounded-full">
        <Image
          src="/profile1.jpeg"
          layout="fill"
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      <h1 className="text-white dark:text-indigo-800 font-bold text-2xl">
        Calvin Magezi
      </h1>
      {/* Social Icons */}
      <div className="flex space-x-4 text-lg text-white dark:text-indigo-800">
        <a
          href="https://www.facebook.com/profile.php?id=100073695104661"
          target="_blank"
        >
          <BsFacebook className="socialIcon" />
        </a>
        <a href="https://www.instagram.com/calvinmagezi/" target="_blank">
          <BsInstagram className="socialIcon" />
        </a>
        <a href="https://twitter.com/CalvinMagezi" target="_blank">
          <BsTwitter className="socialIcon" />
        </a>
        <a href="https://github.com/CalvinMagezi" target="_blank">
          <BsGithub className="socialIcon" />
        </a>
      </div>

      <ul className="flex flex-col space-y-6 pt-10 flex-grow">
        <li>
          <Link href="/#landing">
            <div className="navbarLink">
              <BsHouse className="text-2xl" />
              <h1>Landing</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <div className="navbarLink">
              <FaUserClock className="text-2xl" />
              <h1>About Me</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#resume">
            <div className="navbarLink">
              <FaMediumM className="text-2xl" />
              <h1>Resume</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#skills">
            <div className="navbarLink">
              <FaJediOrder className="text-2xl" />
              <h1>Skills</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <div className="navbarLink">
              <FaLaravel className="text-2xl" />
              <h1>Projects</h1>
            </div>
          </Link>
        </li>
        {/* <li>
          <Link href="/#services">
            <div className="navbarLink">
              <FaRebel className="text-2xl" />
              <h1>Services</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#faq">
            <div className="navbarLink">
              <BsQuestion className="text-2xl" />
              <h1>FAQ</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <div className="navbarLink">
              <RiContactsBookUploadFill className="text-2xl" />
              <h1>Contact Me</h1>
            </div>
          </Link>
        </li> */}
      </ul>

      {colorTheme === "light" ? (
        <button
          onClick={() => setTheme("light")}
          className="btn  text-3xl pb-10"
        >
          <FaRegMoon className="z-50 text-[whitesmoke] relative" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className=" btn z-50 text-gray-900 text-3xl pb-10"
        >
          <FaRegSun className="z-50 text-gray-900 relative" />
        </button>
      )}

      <div className="w-full text-center">
        <h1 className="  text-white dark:text-indigo-800">
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
