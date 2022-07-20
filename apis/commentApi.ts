import { CommentType } from "@/types/comments";
import { AxiosResponse } from "axios";
import { server } from ".";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

// export const addCommentApi = async (
//     payload:{ comment: string }) => {
//     try{
//         const response: AxiosResponse<CommentType[]> =
//         await server.post('/api/comment/addComment', payload, { headers })
//         return response.data
//         } catch(err){
//             return err;
//         }
// }
export const commentApi = {
    add: async ( payload:{ comment: string }) => {
        try{
            const response: AxiosResponse<CommentType[]> =
            await server.post('/api/comment/addComment', payload, { headers })
            console.log(`서버 들어옴+${response.data}`)
        } catch( error ){
            return error;
        }
    },
    delete: async ( commentId: string) => {
        try{
            const response: AxiosResponse<CommentType[]> =
            await server.delete(`/api/comment/${commentId}`)
            console.log(`서버 들어옴+${response.data}`)
        } catch( error ){
            return error;
        }
    },
    fetch: async () => {
        try{
            const response: AxiosResponse<CommentType[]> =
            await server.get('/api/comment/fetchFetch')
            console.log(`서버 들어옴+${response.data}`)
        } catch( error ){
            return error;
        }
    },
    

}