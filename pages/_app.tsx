import "tailwindcss/tailwind.css";
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "@/modules/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )       
}
export default wrapper.withRedux(MyApp)
