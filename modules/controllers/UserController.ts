import { User } from "@/modules/types";
import { accessClient } from "@/modules/controllers";

export class UserController {
    async join(joinData: User) : Promise<any> {
        try {
            await accessClient.post('/User', joinData)
        } catch (error) {
            return error;
        }
    }

}