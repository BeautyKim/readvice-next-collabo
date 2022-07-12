import "tailwindcss/tailwind.css";
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { RootState, wrapper } from "@/modules/store";
import { useSelector } from "react-redux";
import { UserState } from "@/modules/users";

function MyApp({ Component, pageProps }: AppProps) {
  // const isLogin = useSelector((state: RootState) => state.user.isLogin)

  return (pageProps && pageProps.pathname) === '/users/login' || 
    (pageProps && pageProps.pathname) === '/users/join' ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )       
}
// MyApp.getInitialProps =async (ctx: AppContext) => {
//   const myAppInitialProps = await MyApp.getInitialProps(ctx)
//   // const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie); //쿠키 받아오는 코드

  
// }


export default wrapper.withRedux(MyApp)
