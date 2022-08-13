import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/utils/Loader";
import { Toaster } from "react-hot-toast";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => {
      setLoading(true);
      NProgress.start();
    };
    const handleRouteDone = () => {
      setLoading(false);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  const theme = extendTheme({
    colors: {
      brand: {
        100: "#e5332c",
        200: "#28292b",
        300: "#e1af38",
        400: "#231f20",
        500: "#dfdfdf",
      },
    },
  });

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Toaster />
        {loading ? <Loader /> : <Component {...pageProps} />}
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
