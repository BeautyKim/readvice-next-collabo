import Login from "@/components/users/Login"
import { loginRequest } from "@/modules/users"
import { UserType } from "@/types/users"
import { NextPage } from "next"
import { memo, useState } from "react"
import { useDispatch } from "react-redux"

const LoginPage: NextPage = memo(() => { 
  const [ userLogin, setUserLogin ] = useState<UserType>({
    email:'', password: ''
  })
  const dispatch = useDispatch()

  const loginHandleChange = (e: React.FormEvent<HTMLInputElement> ) =>{
    e.preventDefault()
    const { name, value } = e.currentTarget;
    setUserLogin({...userLogin, [name]: value})
  }
  const loginHandleSubmit = (e: { preventDefault: () => void }) =>{
    e.preventDefault()
    dispatch(loginRequest(userLogin))
  }

  return (
      <Login handleChange={loginHandleChange} handleSubmit={loginHandleSubmit}/>
  )
})

LoginPage.getInitialProps = async (ctx) => {
  const pathname =ctx.pathname

  return { pathname }
}

export default LoginPage