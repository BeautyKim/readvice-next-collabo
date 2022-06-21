
import React, { ReactNode } from 'react';
import { Chatbot, Footer, Header, SearchBar } from '@/components';


interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <>
      <Header />
      <SearchBar />
      <main>{children}</main>
      <Chatbot />
      <Footer />
    </>
  )
}
export default Layout