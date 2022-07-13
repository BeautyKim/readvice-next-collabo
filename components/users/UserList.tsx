import { useEffect, useState } from "react"
import { UserType } from "@/modules/users"
import { fetchUserApi } from "@/apis/userApi"

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
    <div>
        <h1>회원 목록</h1>
        <table className="min-w-full">
        <thead className="border-b">
            <tr>
                {userHeaderList}
            </tr>
        </thead>
        <tbody>
        {false && users.map((user: UserType) => 
         <tr className="border-b">
            <td key={user.email} 
                className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {user.username}
            </td>
            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
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
            </td>
         </tr>
         )}
         </tbody>
         </table>
    </div>
  )
}
