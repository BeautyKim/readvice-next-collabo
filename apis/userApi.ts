import { UserType } from "@/types/users";
import {AxiosResponse} from "axios";
import { server } from ".";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
interface AuthData {
    access_token?: string;
    refresh_token?: string;
}

// 회원가입
export const joinApi = async (
    payload: {email: string, password: string, username: string, birth: string, gender: string}) => {
        try{
            const response: AxiosResponse<any, UserType[]> =
            await server.post('/api/users/join', payload, { headers })
            if(response.data.message == "SUCCESS") { console.log('회원가입 성공') }
            return response.data
        }catch(err){
            return err;
        }
}

// 로그인
export const loginApi = async (
    payload: {email: string, password: string}) => {
        try{
            console.log(`로그인 정보 ${JSON.stringify(payload)}`)
            const response : AxiosResponse<any, UserType[]> =
            await server.post('/api/users/login', payload, { headers })
            console.log(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)

            return response.data
        }catch(err){
            return err;
        }
    
}
// 로그아웃
export const logOutApi = async() => {
    try{
        const response : AxiosResponse<AuthData> =
            await server.post('/api/users/logout', { headers })
    } catch(err){
        console.log(err)
        return err;
    }
}
// 로그인 유저 정보
export const userInfoApi = async () => {
    try{
        const response : AxiosResponse = await server.get(`/api/users/getUser`, { headers })
        return response.data
    } catch(err) {
        console.log(err)
        return err}
}
