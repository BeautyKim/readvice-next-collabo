import axios from "axios";


export const serverAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})
