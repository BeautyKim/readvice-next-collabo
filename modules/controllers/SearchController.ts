import { Search } from "@/modules/types";
import { client } from "@/modules/controllers";

export class SearchController {
    async sendSearch(sendData: Search) : Promise<any> {
        try {
            await client.post('/Search', sendData)
        } catch (error) {
            return error;
        }
    }
}