import { userInfoApi } from "@/apis/userApi"
import { Profile } from "@/components"
import { UserType } from "@/types/users"
import { NextPage } from "next"
import { useEffect, useState } from "react"

const editProfilePage: NextPage = () => {
  const [ userInfo, setUserInfo ] = useState<UserType>({
    email:"", password: "", username: "", birth: "", gender: ""
  })

  useEffect(() => {
    userInfoApi().then((res) => {
      console.log(res)
      setUserInfo(userInfo)
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