import { client, kakaoBook } from "../controllers"
import { Search } from "../types"


export const search = {
    kakao: async (searchProps: Search) => {
        const { query } = searchProps
        try {
            const response = await kakaoBook.get(`/v3/search/book?query=${query}?target=title`)
            return response.data
        } catch (err) {
            return err
        }
    },
    imageRes: async () => {
        try {
            const response = await client.get('/search/img')
            return response.data
        } catch (err) {
            return err
        }
    }
}