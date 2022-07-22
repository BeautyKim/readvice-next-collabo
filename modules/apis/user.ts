import { User } from "@/modules/types";
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
export const user = {
    join: async (payload: User) => {
        try{
            const response: any =
            await server.post('/users/join', payload, { headers })
            console.log(`진행5 : 회원가입 성공 `+ (response.data))
            return response.data
        }catch(err){
            return err;
        }
    },
    login: async (payload: {email: string, password: string}) => {
        try{
            console.log(`로그인 정보 ${JSON.stringify(payload)}`)
            const response : AxiosResponse<any, User[]> =
            await server.post('/users/login', payload, { headers })
            console.log(`진행5 : 로그인 성공 + ${JSON.stringify(response.data)}`)

            return response.data
        }catch(err){
            return err;
        }
    },
    logout: async() => {
        try{
            await server.post('/users/logout', { headers })
            console.log('로그아웃 성공')
        } catch(err){
            console.log(err)
            return err;
        }
    },
    userInfo: async () => {
        try{
            const response : AxiosResponse = await server.get(`/users/getUser`, { headers })
            return response.data
        } catch(err) {
            console.log(err)
            return err}
    }

}