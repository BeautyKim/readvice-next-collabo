import { Comment } from "@/modules/types";
import { AxiosResponse } from "axios";
import { client } from ".";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const comment = {
    add: async ( payload:{ comment: string }) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.post('/comment/addComment', payload, { headers })
            console.log(`서버 들어옴+${response.data}`)
            return response
        } catch( error ){
            return error;
        }
    },
    delete: async ( commentId: string) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.delete(`/comment/${commentId}`)
            console.log(`서버 들어옴+${JSON.stringify(response)}`)
            return response
        } catch( error ){
            return error;
        }
    },
    edit: async () => {
        try{
            const response: AxiosResponse<Comment[]> =
            await client.put(`/comment/editComment`)
            console.log(`서버 들어옴+${JSON.stringify(response)}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
    fetch: async () => {
        try{
            const response: AxiosResponse = await client.get('/comment/fetchComment', {headers})
            console.log(`서버 들어옴+${response.data}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
    get: async () => {
        try{
            const response: AxiosResponse = await client.get('/comment/fetchComment', {headers})
            console.log(`서버 들어옴+${response.data}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
}