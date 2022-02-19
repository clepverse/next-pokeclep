import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="font-helv">
      <Head>
        <title>PokeClep</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-70">{children}</main>
      <Footer />
    </div>
  );
}
