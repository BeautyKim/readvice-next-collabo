import { Profile } from "@/components"
import { User } from "@/modules/types"
import { useRouter } from "next/router"
import { useState } from "react"

interface Props {
    profile: User[]
}

const ProfilePage = () => {

    const router = useRouter()
    const { id } = router.query

    const [ user, setUser ] = useState({})
    // useEffect(() => {
    //     userInfoApi() => {}
    // })
    const UserInfo = () => {

    }

    return(
        <>
            {/* <Profile userInfo={id} /> */}
        </>
    )
}

// 빌드 될 때 실행
// export const getStaticProps: GetStaticProps = async() => {
//     // api
//     const { profile } = await userInfoApi()
//     const { id } = params
//     return {
//         props: {
//             profile
//         }
//     }
// }
export default ProfilePage

