
import { Footer, Header, SearchBar } from '@/components';
import { Layout } from '@/modules/types';
import Head from 'next/head';
import ChatbotModal from '../chatbots/ChatbotModal';


const Layout = ({ children } : Layout) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Readvice</title>
      </Head>
      <div>
        <Header/>
        <SearchBar />
        <main>
          {children}
        </main>
        <ChatbotModal />
        <Footer />
      </div>
    </>
  )
}
export default Layout