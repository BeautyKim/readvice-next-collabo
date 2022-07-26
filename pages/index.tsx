import Chatbot from "@/components/chatbots/Chatbot";
import Product from "@/components/common/Product";
import { NextPage } from "next";



const Home: NextPage = () => {


  return (
    <>
      
      <Product />
      <Chatbot />
    </>
    )
}


export default Home