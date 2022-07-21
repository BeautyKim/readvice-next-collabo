import axios from "axios"
import { useEffect, useState } from "react"

const test = () => {
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
        <h1>현재시간: {time}</h1>
      </>
      )
  }
export default test