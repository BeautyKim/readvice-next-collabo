import { useRouter } from "next/router"

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
    const { username } = router.query
    return(
        <h1>{ username }님 환영합니다</h1>
    )
}
export default Profile