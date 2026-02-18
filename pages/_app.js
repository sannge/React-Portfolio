import '../styles/globals.css'
import Layout from '../src/container/Layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
