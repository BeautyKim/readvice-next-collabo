import Join from "@/components/users/Join"
import { NextPage } from "next"

const JoinPage: NextPage = () => {
  return (
      <Join />
  )
}
JoinPage.getInitialProps = async (ctx) => {
  const pathname =ctx.pathname

  return { pathname }
}

export default JoinPage