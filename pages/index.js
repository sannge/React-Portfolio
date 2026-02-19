import Head from "next/head";
import Home from "../src/container/pages/Home/Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>San Nge - Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of San Nge, Software Engineer at Foxconn."
        />
      </Head>
      <Home />
    </>
  );
}
