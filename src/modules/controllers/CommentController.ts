import { Comment } from "@/modules/types";
import { client } from "@/modules/controllers";

export class CommentContainer {
    async sendComment(sendData: Comment) : Promise<any> {
        try {
            await client.post('/Comment', sendData)
        } catch (error) {
            return error;
        }
    }
    async getComment() : Promise<any> {
        try {
            const response = await client.get('/Comment')
            return response.data
        } catch (error) {
            return error;
        }
    }
}