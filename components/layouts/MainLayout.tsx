import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import MobileMenu from "../MobileMenu";
import Navbar from "../Navbar";

function MainLayout({ children }: React.PropsWithChildren<{}>) {
  const bg = useColorModeValue("brand.500", "brand.400");
  const color = useColorModeValue("brand.400", "brand.500");
  return (
    <Box bg={bg} color={color} className="flex flex-col w-screen min-h-screen ">
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
      <MobileMenu />

      <div className="flex">
        <Navbar />
        <div className="flex-grow">{children}</div>
      </div>
    </Box>
  );
}

export default MainLayout;
