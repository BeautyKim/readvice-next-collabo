import "tailwindcss/tailwind.css";
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from "@/modules/store";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )       
}
export default wrapper.withRedux(MyApp)
