import Product from "@/components/common/Product";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [ time, setTime ] = useState('')

  const api = async() => {
    try {
      const url = await axios.get('http://127.0.0.1:8000')
      console.log(JSON.stringify(url))
      return url.data
    } catch (err) {
      console.log(err)
      return err;
    }
  }

  const promise = Promise.resolve(api())
  useEffect(() => {
    promise.then((res) => {
      setTime(res.message)
      console.log(res)
    })
  })

  return (
    <>
      <div>현재시간 :{time}</div>
      <Product />
    </>
    )
}


export default Home