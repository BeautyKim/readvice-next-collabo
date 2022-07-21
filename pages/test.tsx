import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const test = () => {
    const [ time, setTime ] = useState('')

    const testApi = {
        receive: async() => {
            try {
                const url = await axios.get('http://127.0.0.1:8000')
                console.log(JSON.stringify(url))
                return url.data
              } catch (err) {
                console.log(err)
                return err;
              }
        },
        send: async() => {
            try {
                const url = await axios.post('http://127.0.0.1:8000', {
                    params: { message: 'next에서 보내는 post'}
                })
                console.log(JSON.stringify(url))
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
        console.log(res)
      })
    })
  
    return (
      <>
        <h1 className="text-2xl font-bold text-center">현재시간: {time}</h1>
      </>
      )
  }
export default test