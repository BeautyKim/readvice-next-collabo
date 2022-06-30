
import React, { ReactNode } from 'react';
import { Chatbot, Footer, Header, SearchBar } from '@/components';
import Head from 'next/head';


export interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Readvice</title>
      </Head>
      <div>
        <Header />
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