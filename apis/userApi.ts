import axios, {AxiosResponse} from "axios";

export const SERVER = 'http://127.0.0.1:8000'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
interface AuthData {
    access_token?: string;
    refresh_token?: string;
}


// 회원가입
export const userJoinApi = async (
    payload: {email: string, password: string, username: string, birth: string, gender: string}) => {
        try{
            const response : AxiosResponse<AuthData> =
            await axios.post(`${SERVER}/api/users/join`, payload, { headers })
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
}

// 로그인
export const userLoginApi = async (
    payload: {email: string, password: string}) => {
        try{
            const response : AxiosResponse<AuthData> =
            await axios.post(`${SERVER}/api/users/login`, payload, { headers })
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    
}

// 로그아웃
// export const userLogiOutApi =async (
//     payload: { email: string, password: string }) => {
//         try{
//             const 
//         }
    
// }