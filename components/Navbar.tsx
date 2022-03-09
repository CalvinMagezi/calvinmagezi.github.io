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
import { ColorModeSwitcher } from "./utils/ColorModeSwitcher";

function Navbar() {
  const open = useRecoilValue(navbarState);

  return (
    <div
      className={`${
        open ? " w-screen" : "hidden"
      } justify-between lg:inline-flex items-center w-96 h-screen sticky top-0 left-0 flex-col space-y-4 py-5`}
    >
      <div className="relative mx-auto border-8 border-gray-500 rounded-full w-28 h-28 border-opacity-60">
        <Image
          src="/profile1.jpeg"
          layout="fill"
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold ">Calvin Magezi</h1>
      {/* Social Icons */}
      <div className="flex space-x-4 text-lg ">
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

      <ul className="flex flex-col flex-grow pt-10 space-y-6">
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

      <ColorModeSwitcher />

      <div className="w-full text-center">
        <h1 className="">
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
