import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  <Head>
    {/* <link rel="icon" href={favicon.src} /> */}
    <title>キキボタン</title>
    <meta httpEquiv="Content-Language" content="ja" />
  </Head>;
  return <Component {...pageProps} />;
}
