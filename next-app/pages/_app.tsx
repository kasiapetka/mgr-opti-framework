import type { AppProps } from "next/app";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
import "../style/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
