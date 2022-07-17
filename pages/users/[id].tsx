import { userInfoApi } from "@/apis/userApi"
import { Profile } from "@/components"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



const ProfilePage = () => {
    const router = useRouter()
    const { query: {id} } = router

    // const [ user, setUser ] = useState({})
    // useEffect(() => {
    //     userInfoApi()
    //     .then(res => {
    //         setUser()
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    return(
        <>
            {id}
            <Profile />
        </>
    )
}
export default ProfilePage