import Head from "next/head";
import About from "../components/About";
import Background from "../components/Background";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import Facts from "../components/Facts";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Skills from "../components/Skills";

import { FaBars } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { navbarState } from "../atoms/navbarAtom";

export default function Home() {
  const [open, setOpen] = useRecoilState(navbarState);

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="flex flex-col w-screen  min-h-screen dark:bg-[whitesmoke] bg-gray-900 text-white dark:text-indigo-800">
      <Head>
        <title>Calvin Magezi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={toggleMenu}
        className="fixed text-3xl z-50 top-[1rem] right-[1rem] lg:hidden text-white dark:text-indigo-800"
      >
        <FaBars />
      </button>

      <div className="flex">
        {/* Left Column */}
        <Navbar />
        <div className="">
          <Banner />
          <About />
          <Background />
          <Clients />
          <Resume />
          <Facts />
          <Skills />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
