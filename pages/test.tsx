import axios from "axios"
import { NextPage } from "next"
import { useEffect, useState } from "react"

const headers = {
  'Content-Type' : 'application/json',
}

const Test: NextPage = () => {
    const [ time, setTime ] = useState('')
    const sendData = { sendData :"next에서 보내는 post"}
    const testApi = {
        receive: async() => {
            try {
                const url = await axios.get('http://127.0.0.1:8000')
                return url.data
              } catch (err) {
                console.log(err)
                return err;
              }
        },
        send: async() => {
            try {
                const sendUrl = await axios.post('http://127.0.0.1:8000', {sendData}, {headers})
                console.log(sendUrl.data)
                return sendUrl.data
              } catch (err) {
                console.log(err)
                return err;
              }
        }
    }
    
    useEffect(() => {
        testApi.send().then((res) => {
            console.log(res)
        })
    })
  
    const promise = Promise.resolve(testApi.receive())
    useEffect(() => {
      promise.then((res) => {
        setTime(res.message)
        console.log(JSON.stringify(res))
      })
    })
  
    return (
      <>
        <h1 className="text-2xl font-bold text-center">현재시간: {time}</h1>
      </>
      )
  }
export default Test