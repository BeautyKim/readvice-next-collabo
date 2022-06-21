import { HeadTitle, Product } from "@/components";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <HeadTitle title="Home"/>
      <Product />
    </>
    )
}
export default Home