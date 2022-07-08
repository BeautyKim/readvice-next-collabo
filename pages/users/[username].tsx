import { SERVER } from "@/apis/userApi"
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



const Profile = () => {
    const router = useRouter()
    const [ user, setUser ] = useState({})
    useEffect(() => {
        axios.get(`${SERVER}/api/user`)
    })



    const { username } = router.query
    return(
        <h1>{ username }님 환영합니다</h1>
    )
}
export default Profile