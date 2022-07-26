import { User } from "@/modules/types";
import {AxiosResponse} from "axios";
import { accessClient, client } from ".";

interface AuthData {
    access_token?: string;
    refresh_token?: string;
}

// 회원가입
export const user = {
    join: async (payload: User) => {
        try{
            const response: any =
            await client.post('/users/join', payload)
            console.log(`진행5 : 회원가입 성공 `+ (JSON.stringify(response)))
            return response.data
        }catch(err){
            return err;
        }
    },
    login: async (payload: User) => {
        try{
            console.log(`로그인 정보 ${JSON.stringify(payload)}`)
            const response : AxiosResponse<any, User[]> =
            await accessClient.post('/users/login', payload)
            console.log(`진행5 : 로그인 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    },
    logout: async() => {
        try{
            await client.post('/users/logout')
            console.log('로그아웃 성공')
        } catch(err){
            console.log(err)
            return err;
        }
    },
    userInfo: async () => {
        try{
            const response : AxiosResponse = await client.get(`/users/join`)
            return response.data
        } catch(err) {
            console.log(err)
            return err}
    }

}