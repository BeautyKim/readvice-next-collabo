import { Comment } from "@/modules/types";
import { AxiosResponse } from "axios";
import { client } from ".";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const commentWrite = {
    add: async ( payload: Comment ) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.post('/comments/write', payload)
            console.log(`한줄평 입력 성공+${JSON.stringify(response.data)}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
    delete: async ( comment: string) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.delete(`/comments/write`)
            console.log(`한줄평 삭제 성공+${JSON.stringify(response)}`)
            return response
        } catch( error ){
            return error;
        }
    },
    edit: async () => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.put(`/comments/write`)
            console.log(`한줄평 수정 성공+${JSON.stringify(response)}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
    get: async () => {
        try{
            const response: AxiosResponse = await client.get('/comments/write', {headers})
            console.log(`한줄평 가져오기 성공+${response.data}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
}