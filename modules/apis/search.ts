import { kakaoBook } from "."
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
    }
}