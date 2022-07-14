import { useEffect, useState } from "react"
import { fetchUserApi } from "@/apis/userApi"
import { UserType } from "@/types/users"

export const UserList:React.FC = () => {
  const [ users, setUsers ] = useState<Array<UserType>>([])
  useEffect(() => {
    fetchUserApi().then((res: any) => {
        setUsers(res.data)
    })
  }, [])
  const userHeader = [ "이름", "이메일", "비밀번호", "생년월일", "성별"]
  const userHeaderList = userHeader.map((userHeader) => <th>{userHeader}</th>)

  console.log(`setUser` + JSON.stringify(users))

    return (
    <>
        <table className="min-w-full">
        <thead className="border-b">
            <tr>
                {userHeaderList}
            </tr>
        </thead>
        <tbody>
        {users && 
            <tr className="border-b">
                {users.map((user: UserType) => 
                    <><td key={user.email} className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.username}</td><td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                        {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {user.password}
                        </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {user.birth}
                        </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {user.gender}
                        </td></>
                )}
            </tr>
            }
         </tbody>
         </table>
    </>
  )
}
