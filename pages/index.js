import Head from 'next/head'
import Home from '../src/container/pages/Home/Home'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>San Nge - IT Manager & Software Engineer</title>
        <meta name="description" content="Portfolio of San Nge, IT Manager and Software Engineer at Foxconn." />
      </Head>
      <Home />
    </>
  )
}
