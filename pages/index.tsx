import MainLayout from "@/components/layouts/MainLayout";
import MobileMenu from "@/components/MobileMenu";
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
  return (
    <MainLayout>
      <Banner />
    </MainLayout>
  );
}
