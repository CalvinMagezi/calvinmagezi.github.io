import Head from "next/head";
import { FaBars } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { navbarState } from "../atoms/navbarAtom";
import About from "../components/About";
import Background from "../components/Background";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import Facts from "../components/Facts";
import MobileApps from "../components/MobileApps";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Skills from "../components/Skills";

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
    <div className="flex flex-col w-screen min-h-screen ">
      <Head>
        <title>Calvin Magezi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          content="Ugandan software developer based in Dubai"
          name="description"
        />
        <meta
          content="Fullstack Developer, Mobile App Developer, Blockchain Developer"
          name="keywords"
        />
        <link href="/favicon.ico" rel="icon" />
        <link href="/favicon.ico" rel="apple-touch-icon"></link>
      </Head>
      <button
        onClick={toggleMenu}
        className="fixed text-3xl z-50 top-[1rem] right-[1rem] lg:hidden "
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
          <MobileApps />
        </div>
      </div>
    </div>
  );
}
