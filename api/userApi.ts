import { UserType } from "@/types/users/join";
import axios, {AxiosResponse} from "axios";
const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const userJoinApi = async (
    payload: {email: string, password: string, userName: string, birth: number, gender: string}) => {
        try{
            const response : AxiosResponse<unknown, UserType[]> =
            await axios.post(`${SERVER}/user/join`, payload, { headers })
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    }