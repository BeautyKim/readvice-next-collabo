import Product from "@/components/common/Product";
import { NextPage } from "next";
import Head from "next/head";



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Readvice</title>
      </Head>
      <Product />
    </>
    )
}
export default Home