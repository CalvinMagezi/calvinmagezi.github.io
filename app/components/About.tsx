import Image from "next/image";
import { FaArrowRight, FaGithub } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden">
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
          <p className="font-medium">
            I&apos;m Calvin Magezi, CTO at Kolaborate and Co-founder/CTO at SiteSeer.
            Kolaborate is a digital platform connecting African tech professionals with 
            global opportunities and supporting refugee employment programs. SiteSeer is 
            an AI-powered construction project management platform transforming Africa&apos;s 
            $71.5B construction market through computer vision and predictive analytics.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <a
              href="https://github.com/CalvinMagezi/agent-hq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-5 py-4 font-bold text-center md:w-auto"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <FaGithub className="text-4xl" />
                <span>Agent-HQ</span>
                <FaArrowRight className="text-2xl" />
              </div>
            </a>
            <a
              href="https://kolaborate.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-5 py-4 font-bold text-center md:w-auto"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image src="/logos/kolaborate.png" width={150} height={60} alt="Kolaborate" />
                <span>Visit Kolaborate</span>
                <FaArrowRight className="text-2xl" />
              </div>
            </a>
            <a
              href="https://siteseer.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-5 py-4 font-bold text-center md:w-auto"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image src="/logos/ss-blue.png" width={150} height={60} alt="SiteSeer" />
                <span>Visit SiteSeer</span>
                <FaArrowRight className="text-2xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 hidden w-1/3 h-full md:block">
        <Image 
          className="object-cover w-full h-full" 
          src="/about.png" 
          fill
          alt="Calvin Magezi"
        />
      </div>
    </section>
  );
}

export default About;