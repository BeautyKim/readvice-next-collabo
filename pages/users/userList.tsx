import { SERVER } from "@/apis/userApi";
import UserList from "@/components/users/UserList"
import { UserType } from "@/types/users";
import axios from "axios";
import { NextPage } from "next"
import Link from "next/link";
import { useEffect, useState } from "react";

// const UserListPage: NextPage = () => {
  
//   const columns = ["이름", "이메일", "비밀번호","생년월일", "성별"];
//   const [ user, setUser] = useState<UserType>({
//     email:'', password:'', username:'', birth:'', gender:''}
//   )
//   useEffect(()=>{
//     axios.get(`${SERVER}/api/user`).then(res=>{
//       setUser(res.data.users)
//     }).catch(err=>{})
//   },[])
//   return (
//     <table>
//       <thead>
//           <tr>
//               <th colSpan={5}><h1>회원목록</h1></th>
//           </tr>
//       </thead>
//       <tbody>
//             <tr>
//                 {columns.map((column, index) => (
//                       <td key={index} >{column}</td>
//                 ))}
//               </tr>
//               { data.length == 0  ?<tr >
//                                     <td colSpan={} >데이터가 없습니다</td>
//                                     </tr>
//               :data.map((user) => (
//               <tr key={user.email} >
//                 <td >
//                   <Link href={{pathname:`/user/[userid]`,
//                               query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
//                     <a>{user.email}</a>
//                   </Link>
//                 </td>
//                 <td >{user.username}</td>
//                 <td >{user.email}</td>
//                 <td >{user.password}</td>
//                 <td >{user.birth}</td>
//                 <td >{user.gender}</td>
//               </tr>
//           ))}
          
//       </tbody>
//     </table>
//   )
// }

// export default UserListPage