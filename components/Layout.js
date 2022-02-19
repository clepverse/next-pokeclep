import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PokeClep</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
