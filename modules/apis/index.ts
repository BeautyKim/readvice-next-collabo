import axios from "axios";

const SERVER = process.env.NEXT_PUBLIC_SERVER_URL
// 인증 필요없는 axios 
export const client = axios.create({
    baseURL: `${SERVER}`,
    headers: {
        "Content-Type" : "application/json"
    }
})
// 인증 axios
export const accessClient = axios.create({
    baseURL: SERVER,
    headers: {
        "Content-Type" : "application/json",
        Authorization: "JWT fefege...",
    }
})

// 카카오 검색
export const kakaoBook = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_KAKAOMAP_SEARCH_URL}`,
    headers: {
        "Content-Type" : "application/json",
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAOMAP_REST_API_KEY}`
    }
})


export * from './book';
export * from './comment';
export * from './user';
export * from './googleOauthApi';
export * from './search';

