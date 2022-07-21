import axios from "axios";

// axios 
export const server = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'JWT fefege..'
    }
})


export * from './book';
export * from './comment';
export * from './user';
export * from './googleOauthApi';

