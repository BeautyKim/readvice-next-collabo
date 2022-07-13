import axios, { AxiosResponse } from "axios";

const DATALIBRARY_API_KEY = process.env.NEXT_PUBLIC_DATALIBRARY_API_KEY

export const dataBookApi = async() =>{
    try {
        const response: AxiosResponse =
        await axios.get(`http://data4library.kr/api/loanItemSrch?authKey=${DATALIBRARY_API_KEY}&startDt=2022-07-10&endDt=2022-07-12`);
        return response.data;
    } catch(err) {
        return err
    }
} 
