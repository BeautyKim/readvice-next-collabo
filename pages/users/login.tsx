import Login from "@/components/users/Login"
import { loginRequest } from "@/modules/slices"
import { User } from "@/modules/types"
import { NextPage } from "next"
import { useState } from "react"
import { useDispatch } from "react-redux"

const LoginPage: NextPage = () => { 
  const [ userLogin, setUserLogin ] = useState<User>({email:'', password: ''})
  const dispatch = useDispatch()

  const loginHandleChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    e.preventDefault()
    const { name, value } = e.currentTarget;
    setUserLogin({...userLogin, [name]: value})
  }
  const loginHandleSubmit = (e: React.FormEvent<HTMLFormElement> ) =>{
    e.preventDefault()
    dispatch(loginRequest(userLogin))
  }

  return (
      <Login handleChange={loginHandleChange} handleSubmit={loginHandleSubmit}/>
  )
}
LoginPage.getInitialProps = async (ctx) => {
  const pathname =ctx.pathname

  return { pathname }
}

export default LoginPage