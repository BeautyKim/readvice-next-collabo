
import { Chatbot, Footer, Header, SearchBar } from '@/components';
import { Layout } from '@/modules/types';
import Head from 'next/head';


const Layout = ({ children } : Layout) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Readvice</title>
      </Head>
      <div>
        <Header/>
        <main>
          {children}
        </main>
        <Chatbot />
        <Footer />
      </div>
    </>
  )
}
export default Layout