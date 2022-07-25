import { Comment } from "@/modules/types";
import { AxiosResponse } from "axios";
import { client } from ".";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const commentWrite = {
    add: async ( payload:{ comment: string }) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.post('/comments/write', payload, { headers })
            console.log(`서버 들어옴+${response.data}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
    delete: async ( commentId: string) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.delete(`/comments/write`)
            console.log(`서버 들어옴+${JSON.stringify(response)}`)
            return response
        } catch( error ){
            return error;
        }
    },
    edit: async () => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.put(`/comments/write`)
            console.log(`서버 들어옴+${JSON.stringify(response)}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
    get: async () => {
        try{
            const response: AxiosResponse = await client.get('/comments/write', {headers})
            console.log(`서버 들어옴+${response.data}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
}