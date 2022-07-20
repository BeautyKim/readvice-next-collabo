import { user } from "@/modules/apis"
import { Profile } from "@/components"
import { User } from "@/modules/types"
import { NextPage } from "next"
import { useEffect, useState } from "react"

const editProfilePage: NextPage = () => {
  const [ userInfo, setUserInfo ] = useState<User>({
    email:"", password: "", username: "", birth: "", gender: ""
  })

  useEffect(() => {
    user.userInfo().then( (res) => {
      setUserInfo(res.data)
      console.log(res.data)
    })
  },[])

  return (
    <>
      <Profile userInfo={userInfo}/>
    </>
  )
}
// export const getStaticProps = async() => {
//     const data = userInfoApi
//     return {
//         props: {
//             data: string
//         }
//     }
// } 

export default editProfilePage