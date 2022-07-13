import "tailwindcss/tailwind.css";
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { RootState, wrapper } from "@/modules/store";
import { useSelector } from "react-redux";
import { UserState } from "@/modules/users";

function MyApp({ Component, pageProps }: AppProps) {

  return (pageProps && pageProps.pathname) === '/users/login' || 
    (pageProps && pageProps.pathname) === '/users/join' ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )       
}


export default wrapper.withRedux(MyApp)
