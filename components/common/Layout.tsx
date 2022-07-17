
import { Chatbot, Footer, Header, SearchBar } from '@/components';
import { LayoutProps } from '@/types/common';
import Head from 'next/head';


const Layout = ({ children } : LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Readvice</title>
      </Head>
      <div>
        <Header userId={undefined} />
        <SearchBar />
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