import Join from "@/components/users/Join"
import { NextPage } from "next"
import { memo } from "react"

const JoinPage: NextPage = memo(() => {
  return (
      <Join />
  )
})
JoinPage.getInitialProps = async (ctx) => {
  const pathname =ctx.pathname

  return { pathname }
}

export default JoinPage