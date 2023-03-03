import "../styles/globals.scss";
import React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../public/css/range.css";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Script src="/js/icons.js"></Script>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
