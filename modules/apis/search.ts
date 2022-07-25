import axios from "axios"

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_REST_API_KEY

export const searchApi = async() => {
    try {
        const response = await axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
            headers: {
                "Authorization": `KakaoAK ${REST_API_KEY}`,
                "Content-Type": "application/json",
            }
        })
        return response.data

    }catch(error) {
        return error
    }
}