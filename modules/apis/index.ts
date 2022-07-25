import axios from "axios";

// 인증 필요없는 axios 
export const client = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        "Content-Type" : "application/json"
    }
})
// 인증 axios
export const accessClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        "Content-Type" : "application/json",
        Authorization: "JWT fefege...",
    }
})


export * from './book';
export * from './comment';
export * from './user';
export * from './googleOauthApi';
export * from './search';

