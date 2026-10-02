import Image from "next/image";

interface TimelineImage {
  src: string;
  alt: string;
}

interface TimelineEntry {
  date: string;
  title: string;
  body: string;
  image?: TimelineImage;
}

const TIMELINE: TimelineEntry[] = [
  {
    date: "2011-2015",
    title: "Brookhouse International Schools Kenya",
    body: "At Brookhouse I participated in the Round Square International Conference in Jordan, Harvard People to People conference in Boston and captained the Rugby, Hockey and Basketball teams.",
  },
  {
    date: "2015 - 2016",
    title: "Segi University, Malaysia",
    body: "I undertook a 9 month Pre-medicine course, but soon found out that medicine was not my calling so I turned towards Software Development",
  },
  {
    date: "2017 - 2020",
    title: "Nelson Mandela University, Port Elizabeth",
    body: "I completed my first working web application in my first year of university. I studied databases and algorithms, programming in C#. I was mentored by Tolu Kush, a software developer in the UK. I built and published 7 websites in my 3rd year of university. I dropped out before my final year of university.",
  },
  {
    date: "2020 - 2021",
    title: "FREELANCE DEVELOPER",
    body: "I developed and designed the Yesero Mugenyi Foundation Website, managed up to 5 projects and tasks at a given time while under pressure. I was recommended by and consulted with clients on the most appropriate software for their company. I created 4+ software designs and proposals a month for clients for 4 consecutive 3 consecutive months.",
  },
  {
    date: "2021",
    title: "LEAD DEVELOPER AT MSIMBO IT",
    body: "Assisted in the development of The Big Quiz Show Kenya. A live quiz engine that ran on KTN for 7 weeks. Lead developer in the development of Bidleo and Bidchapchap, online reverse auction platforms. Lead development on Captains Terrace Point of Sales System. Assisted in the development of Supamall, Escrow and other projects Msimbo IT is developing.",
  },
  {
    date: "September 2021",
    title: "FOUNDED MTS",
    body: "In September of 2021 I decided that I was ready to try take on the challenge of running my own company. So I founded MTS and put together a team of like minded individuals focused on creating unique solutions and building scalable digital infrastructure and custom software products across the region.",
  },
  {
    date: "December 2021",
    title: "MOVED TO DUBAI",
    body: "In December 2021 I relocated from Nairobi to Dubai. The trip was initially set to find an investor for one of our upcoming products, but I subsequently remained in Dubai to expand business networks, engage regional partners, and explore international market opportunities.",
  },
  {
    date: "February 2022",
    title: "APPOINTED CTO OF EPITOME CONCIERGE KAMPALA",
    body: "I had been working with the epitome concierge kampala for some time, and due to the value I brought to the table I was offered shares in the company that I enthusiastically took up along with the title of CTO. The co-founder Joel Sengendo is a good friend of mine which had me even more excited to embark on this journey",
  },
  {
    date: "June 2022",
    title: "CO FOUNDED FLYKEY",
    body: "In June of 2022, me alongside 3 other individuals founded a drone technology solutions company known as Flykey. Flykey is focussed mainly on drone solutions within the agricultural sector, however we do venture into fields such as security and surveillance.",
  },
  {
    date: "August 2022",
    title: "APPOINTED HEAD OF TECHNOLOGY AT WALL BRICK REAL ESTATE",
    body: "In August 2022 I was appointed the head of technology and digital marketing at wall brick real estate, a real estate company based and operating within Dubai. I was given the duties of designing and maintaining systems that would aid the real estate company, including their web application.",
  },
  {
    date: "2023",
    title: "CIGONA TECHNOLOGIES & MAJOR PROJECTS",
    body: "Joined Cigona Technologies as a full stack developer for 8 months, working on Propa (real estate management application) and GoSoft (smart water meter mobile app). Also closed MTS contract to rebuild Grain Industries Limited website and developed Praxis business hub prototype.",
  },
  {
    date: "Early 2024",
    title: "MULTIPLE CLIENT PROJECTS",
    body: "Built Tikima events management platform, developed Mariam Ndagira's personal website, and created the Ortus Capital Africa website (now Oakstone Capital). Each project showcased different aspects of modern web development and client needs.",
  },
  {
    date: "March 2024",
    title: "CO-FOUNDED SITESEER",
    body: "Started working with Shawn Muraya on SiteSeer, an AI-powered construction project management platform. By November 2024, I became a shareholder and co-founder, helping transform Africa's $71.5B construction market through computer vision and predictive analytics.",
  },
  {
    date: "June 2024",
    title: "REBUILT KOLABORATE PLATFORM",
    body: "Single-handedly rebuilt the Kolaborate platform from the ground up, working alongside the Kolaborate design team. This project laid the foundation for my future role as CTO and demonstrated my ability to handle large-scale platform development.",
  },
  {
    date: "August 2024",
    title: "RELOCATION TO UGANDA & REGIONAL EXPANSION",
    body: "Made the strategic decision to relocate operations to Uganda, positioning closer to the rapidly growing East African tech ecosystem while continuing engineering leadership on SiteSeer and scaling regional partnerships.",
  },
  {
    date: "January 2025",
    title: "APPOINTED CTO AT KOLABORATE",
    body: "Pearl Gakazi, CEO of Kolaborate, invited me to join as CTO during a lunch meeting. This role allows me to lead technology strategy for a platform connecting African tech professionals with global opportunities and supporting refugee employment programs.",
  },
  {
    date: "March 2025",
    title: "ELEVATING WOMEN WITH TECH PROGRAM",
    body: "Created and launched the \"Elevating Women With Tech\" program through Kolaborate - a Software as CSR initiative developing software for 5 women at a time at no cost using advanced development tools, promoting gender equality in tech.",
  },
  {
    date: "September 2025",
    title: "HORNETS NEST SHOW SUCCESS",
    body: "Out of 6 participants on the Hornets Nest show (Uganda's version of Shark Tank), I was the only individual to walk away with offers from two investors, demonstrating the value and potential of my tech ventures.",
  },
  {
    date: "October 2025",
    title: "MAJOR PROJECT LEADERSHIP",
    body: "Leading two significant projects at Kolaborate: the GROW project mobile app development and augmenting Total Energies Uganda's development team to create frameworks for deploying data visualization dashboards and RAG chat tools within Azure infrastructure.",
  },
  {
    date: "February 2026",
    title: "FOUNDED AGENT-HQ",
    body: "Founded Agent-HQ, a local-first AI agent orchestration platform where an Obsidian vault serves as the shared memory and knowledge base for multiple AI agents. Features a multi-agent architecture with real-time event-driven workflows, cross-device vault sync, and specialized harnesses for Claude, Gemini, and OpenCode.",
    image: { src: "/timeline/agent-hq-orchestration.png", alt: "Abstract illustration of a central hub connected to several AI agent nodes around a shared memory layer" },
  },
  {
    date: "September 2026",
    title: "CHAMUKA DRAWIT: DESKTOP EARLY ACCESS, CLI AND VS CODE",
    body: "Chamuka DrawIt, the AI-assisted diagramming product I co-develop, now has a desktop app in early access for registered testers, alongside a VS Code extension and a CLI that run on Windows and macOS.",
    image: { src: "/timeline/chamuka-drawit-surfaces.png", alt: "Abstract illustration of one diagram canvas shared between a desktop window, a code editor and a terminal" },
  },
];

const IMAGE_WIDTH = 1920;
const IMAGE_HEIGHT = 1080;

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const isLeft = index % 2 === 0;
  const side = isLeft
    ? "xl:mr-auto xl:pl-0 xl:pr-10 xl:text-right"
    : "xl:ml-auto xl:pl-10 xl:text-left";
  const dot = isLeft ? "xl:left-auto xl:-right-[7px]" : "xl:-left-[7px]";

  return (
    <li className={`relative w-full pl-8 mb-10 text-left xl:w-1/2 ${side}`}>
      <span
        aria-hidden="true"
        className={`absolute top-5 -left-[7px] h-3 w-3 rounded-full bg-[#FFC100] ${dot}`}
      />
      <p className="mb-2 text-base text-[#FFC100]">{entry.date}</p>
      <h4 className="mb-3 text-lg font-bold md:text-2xl">{entry.title}</h4>
      <p className="text-sm leading-snug md:text-base">{entry.body}</p>
      {entry.image && (
        <Image
          src={entry.image.src}
          alt={entry.image.alt}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 60vw, 90vw"
          className="w-full h-auto mt-4 rounded-lg border border-[#FFC100]/40"
        />
      )}
    </li>
  );
}

function Resume() {
  return (
    <section id="resume">
      <div className="py-8">
        <div className="container flex flex-col items-start mx-auto lg:flex-row">
          <div className="flex flex-col w-full px-8 mt-2 lg:sticky lg:top-36 lg:w-1/3">
            <p className="ml-2 text-[#FFC100] uppercase tracking-loose">
              Summary
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Calvin Magezi
            </p>
            <p className="mb-4 text-sm md:text-base">
              Innovative tech leader and software developer with 7+ years experience.
              Currently CTO at Kolaborate and Co-founder/CTO at SiteSeer, driving
              innovation in African tech talent platforms and AI-powered construction technology.
            </p>
            <ul className="flex flex-col space-y-2">
              <li>Kampala, Uganda</li>
              <li>+256 770-773-552</li>
              <li>hello@calvinmagezi.com</li>
            </ul>
            <div className="flex flex-col space-y-3 mt-5">
              <a
                href="https://kolaborate.africa"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent hover:bg-[#FFC100] text-[#FFC100] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent transition-colors"
              >
                <Image 
                  src="/logos/kolaborate.png" 
                  width={150} 
                  height={60}
                  alt="Kolaborate Logo"
                />
              </a>
              <a
                href="https://siteseer.tech"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent hover:bg-[#FFC100] text-[#FFC100] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent transition-colors"
              >
                <Image 
                  src="/logos/ss-blue.png" 
                  width={150} 
                  height={60}
                  alt="SiteSeer Logo"
                />
              </a>
            </div>
          </div>
          <div className="w-full px-8 mt-10 lg:mt-0 lg:w-2/3 lg:px-10">
            <ol className="relative ml-1.5 border-l-2 border-[#FFC100] xl:ml-0 xl:border-l-0 xl:before:absolute xl:before:inset-y-0 xl:before:left-1/2 xl:before:w-0.5 xl:before:-translate-x-1/2 xl:before:bg-[#FFC100] xl:flex xl:flex-col">
              {TIMELINE.map((entry, index) => (
                <TimelineItem key={entry.date + entry.title} entry={entry} index={index} />
              ))}
            </ol>
            <Image
              className="mx-auto mt-8"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              width={400}
              height={300}
              alt="Timeline decoration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
