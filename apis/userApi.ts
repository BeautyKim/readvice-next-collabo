import { UserType } from "@/types/users";
import {AxiosResponse} from "axios";
import { serverAxios } from ".";

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
            await serverAxios.post('/api/users/join', payload, { headers })
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
            await serverAxios.post('/api/users/login', payload, { headers })
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    
}
// 로그아웃
export const userLogOutApi = async() => {
    try{
        const response : AxiosResponse<AuthData> =
            await serverAxios.get('/api/users/logout', { headers })
    } catch(err){
        console.log(err)
        return err;
    }
    
}

export const getUserApi = async () => {
    try{
        await serverAxios.get<UserType>('/api/users/getUser')
    } catch(err) {
        console.log(err)
        return err}
}


// 회원리스트
export const fetchUserApi = async() => {
    try{
        await serverAxios.get<UserType[]>('/api/users/userList')
    } catch (err){
        console.log(err)
        return err
    }
}