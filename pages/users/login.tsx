import Login from "@/components/users/Login"
import { NextPage } from "next"
import { memo } from "react"

const LoginPage: NextPage = memo(() => {
  return (
      <Login />
  )
})

LoginPage.getInitialProps = async (ctx) => {
  const pathname =ctx.pathname

  return { pathname }
}

export default LoginPage