import { SearchBar } from "@/components";
import Product from "@/components/common/Product";
import { NextPage } from "next";



const Home: NextPage = () => {


  return (
    <>
      <SearchBar />
      <Product />

    </>
    )
}


export default Home