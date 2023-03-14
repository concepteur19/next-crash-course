import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      Bienvenue
      <Component {...pageProps} />
    </Layout>
  );
}
