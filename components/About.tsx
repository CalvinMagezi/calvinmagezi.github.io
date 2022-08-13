import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden ">
      <div className="absolute top-0 left-0 z-10 hidden mt-20 -ml-32 scale-110 blur-xl opacity-70 2xl:block">
        <div className="w-64 h-64 bg-gray-900 rounded-full opacity-70"></div>
      </div>
      <div className="relative z-20 flex items-center justify-center max-w-5xl px-10 py-24 mx-auto md:justify-start md:py-32">
        <div className="relative z-20 flex flex-col items-start max-w-md space-y-8">
          <p className="font-bold tracking-wider uppercase">About Me</p>
          <h1 className="text-5xl font-extrabold">
            Quick
            <br />
            Background
          </h1>
          <p className="font-medium ">
            I'm Calvin Magezi, founder and CEO of Magezi Tech Solutions (MTS).
            I'm a fullstack software developer who currently specializes in
            React and Laravel development. I have a passion for coding and
            learning new technologies.
          </p>
          <a
            href="https://magezi-tech.vercel.app"
            target="_blank"
            className="inline-block w-full px-5 py-4 font-bold text-center md:w-auto"
          >
            <Flex className="flex-col items-center justify-center space-y-2">
              <Image src="/logo-18.png" width="150" height="60" />
              <Text>Learn More</Text>
              <FaArrowRight className="text-2xl" />
            </Flex>
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 hidden w-1/3 h-full md:block">
        <img className="object-cover w-full h-full" src="/about.jpg" />
      </div>
    </section>
  );
}

export default About;
