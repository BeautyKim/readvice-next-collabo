import { Comment } from "@/modules/types";
import { AxiosResponse } from "axios";
import { server } from ".";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const comment = {
    add: async ( payload:{ comment: string }) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await server.post('/comment/addComment', payload, { headers })
            console.log(`서버 들어옴+${response.data}`)
        } catch( error ){
            return error;
        }
    },
    delete: async ( commentId: string) => {
        try{
            const response: AxiosResponse<Comment[]> =
            await server.delete(`/comment/${commentId}`)
            console.log(`서버 들어옴+${response.data}`)
        } catch( error ){
            return error;
        }
    },
    fetch: async () => {
        try{
            const response: AxiosResponse = await server.get('/comment/getComment', {headers})
            console.log(`서버 들어옴+${response.data}`)
            return response.data
        } catch( error ){
            return error;
        }
    },
}