import '@/styles/globals.css'
import Layout from '@/components/common/Layout'
import type { AppContext, AppProps } from 'next/app'
import { wrapper } from "@/modules/store";
import { userInfoApi } from "@/apis/userApi";
import axios from "axios";
import { END } from "redux-saga";

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
// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
//   const cookie = req ? req.headers.cookie : '';
//   axios.defaults.headers.Cookie = cookie;
//   if (req && cookie ) {
//     axios.defaults.headers.Cookie = cookie;
//   }
//   store.dispatch(END);
//   await store.sagaTask.toPromise();
// })

export default wrapper.withRedux(MyApp)
