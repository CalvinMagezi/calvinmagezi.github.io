import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/utils/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loader />;

  Router.events.on("routeChangeStart", (url) => {
    // console.log("Router is changing");
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    // console.log("Router changing is complete");
    setLoading(false);
  });

  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
