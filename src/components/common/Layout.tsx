
import React from 'react';
import { Footer, Header } from '@/components';
import { Layout } from '@/modules/types';
import Head from 'next/head';
import ChatbotModal from '../chatbots/ChatbotModal';


const Layout = ({ children } : Layout) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Header/>
        <main>
          {children}
        </main>
        <ChatbotModal />
        <Footer />
    </>
  )
}
export default Layout