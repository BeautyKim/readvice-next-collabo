import "tailwindcss/tailwind.css";
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "@/modules/store";

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
// MyApp.getInitialProps = async (context: { ctx: any; Component: any; }) => {
//   const { ctx, Component } = context;
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = (await Component.getInitialProps(ctx)) || {};

//     return { pageProps };
//   }
// };
export default wrapper.withRedux(MyApp)
