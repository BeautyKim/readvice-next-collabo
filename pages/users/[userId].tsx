import { SERVER } from "@/apis/userApi"
import { Profile } from "@/components"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface User{
    id: number
    name: string
}
type ProfileProps = {
    id?: User
    errors?: string
}



const ProfilePage = () => {
    const router = useRouter()
    const [ user, setUser ] = useState({})
    useEffect(() => {
        axios.get(`${SERVER}/api/user/login${userid}`)
        .then(res => {
            setUser(res.data.user)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const { userid } = router.query
    return(
        <>
            {userid}
            <Profile />
        </>
    )
}
export default ProfilePage