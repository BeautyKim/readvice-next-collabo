import "tailwindcss/tailwind.css";
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { wrapper } from "@/modules/store";
import { getUserApi } from "@/apis/userApi";

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
// MyApp.getInitialProps = async ( context: AppContext ) => {
//   const appInitialProps:any = await MyApp.getInitialProps(context);
//   const { store } = context.ctx;
//   const { isLogged } = store.getState().user;
//   try {
//     if ( !isLogged && cookieObject..access_token) {
//       axios.defaults.headers.cookie = cookieObject.access_token;
//       const { data } = await getUserApi()
//   } catch (err) {
//     console.log(err);
//   }
//   return { ...appInitialProps }
// }


export default wrapper.withRedux(MyApp)
