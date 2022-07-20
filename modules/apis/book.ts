import axios, { AxiosResponse } from "axios";

export const DATALIBRARY_API_KEY = process.env.NEXT_PUBLIC_DATALIBRARY_API_KEY

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS"
}

export const dataBookApi = async() =>{
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DATALIBRARY_URL}/api/loanItemSrch?authKey=${DATALIBRARY_API_KEY}&startDt=2022-07-10&endDt=2022-07-12&format=json`);
        console.log(response.data)
    } catch(err) {
        return err
    }
} 
