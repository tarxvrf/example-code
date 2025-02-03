import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Frame from "./PageFrame/Frame";

export default function App({ Component, pageProps }: AppProps) {
  return <Frame><Component {...pageProps} /></Frame>
}
