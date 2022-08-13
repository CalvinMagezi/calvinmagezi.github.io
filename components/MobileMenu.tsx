import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { FaBars, FaLinkedin, FaRebel } from "react-icons/fa";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="fixed text-3xl z-50 top-[1rem] right-[1rem] lg:hidden "
      >
        <FaBars />
      </button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Calvin Magezi</DrawerHeader>

          <DrawerBody>
            <div className="relative mx-auto border-8 border-gray-500 rounded-full w-28 h-28 border-opacity-60">
              <Image
                src="/profile1.jpeg"
                layout="fill"
                className="rounded-full"
                objectFit="cover"
              />
            </div>
            <div className="flex items-center w-full my-3 space-x-4 text-lg justify-evenly">
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
              <a
                href="https://www.linkedin.com/in/calvin-magezi-639a53228/"
                target="_blank"
              >
                <FaLinkedin className="socialIcon" />
              </a>
            </div>
            <Flex className="items-center justify-center w-full mt-2">
              <ColorModeSwitcher />
            </Flex>
            <ul className="flex flex-col flex-grow pt-5 space-y-6">
              <li>
                <Link href="/" passHref>
                  <div className="navbarLink">
                    <BsHouse className="text-2xl" />
                    <h1>Home</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about-me" passHref>
                  <div className="navbarLink">
                    <FaUserClock className="text-2xl" />
                    <h1>About Me</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/biography" passHref>
                  <div className="navbarLink">
                    <FaMediumM className="text-2xl" />
                    <h1>Biography</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/skills" passHref>
                  <div className="navbarLink">
                    <FaJediOrder className="text-2xl" />
                    <h1>Skills</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/projects" passHref>
                  <div className="navbarLink">
                    <FaLaravel className="text-2xl" />
                    <h1>Projects</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <div className="navbarLink">
                    <FaRebel className="text-2xl" />
                    <h1>Blog</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <div className="navbarLink">
                    <RiContactsBookUploadFill className="text-2xl" />
                    <h1>Contact Me</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <div className="w-full text-center">
              <h1 className="">
                &copy; Copyright{" "}
                <strong>
                  <span>calvinmagezi.com</span>
                </strong>
              </h1>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileMenu;
