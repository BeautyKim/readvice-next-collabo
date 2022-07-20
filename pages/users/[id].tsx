import { user } from "@/modules/apis"
import { Profile } from "@/components"
import { User } from "@/modules/types"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface Props {
    profile: User[]
}

const ProfilePage = ({profile}: Props) => {

    const router = useRouter()
    const { query: { id } } = router

    const [ user, setUser ] = useState({})
    // useEffect(() => {
    //     userInfoApi() => {}
    // })

    return(
        <>
            {id}

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

