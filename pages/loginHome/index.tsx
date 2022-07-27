import LoginHome from "@/components/loginHome/LoginHome";
import { NextPage } from "next";
import { useEffect, useState } from "react";



interface Props{
  book: string
}


const LoginHomePage: NextPage<Props> = ({docs}: any) => {
  const [ userName, setUserName ] = useState('')
  // const { user } = 

  // useEffect(() => {
  //   user.userInfo().then((res)=> {
  //     setUserName(res.data)
  //   })
  // })
  
  return (
    <>
      <LoginHome userName={userName} /> 
    </>

  )
}

export default LoginHomePage