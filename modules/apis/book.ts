import axios, { AxiosResponse } from "axios";
import { client } from ".";

export const DATALIBRARY_API_KEY = process.env.NEXT_PUBLIC_DATALIBRARY_API_KEY


export const dataBookApi = async() =>{
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DATALIBRARY_URL}/api/loanItemSrch?authKey=${DATALIBRARY_API_KEY}&startDt=2022-07-10&endDt=2022-07-12&format=json`);
        console.log(response.data)
    } catch(err) {
        return err
    }
}

export const book = {
    list: async () => {
        try {
            const response = await client.get('/books/api_book')
            return response.data()
        }catch (err) {
            return err
        }
    }
}