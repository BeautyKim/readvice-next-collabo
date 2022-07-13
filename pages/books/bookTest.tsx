import axios from "axios";
import { NextPage } from "next"

const BOOK_API_KEY = process.env.NEXT_PUBLIC_DATALIBRARY_API_KEY

interface BookType {
    bookname: string;
    authors: string;
    publisher: string;
}
interface Props {
    getBookData: BookType[]
}

const bookTest: NextPage<Props> = ({getBookData}) => {
    
  return (
    <>
        <h1>안뇽 책api 연습하는곳이얌~~</h1>
        {getBookData}
    </>
  )
}


export async function getStaticProps() {
    try {
        const response = await axios.get<BookType>(
            `http://data4library.kr/api/loanItemSrch?authKey=${BOOK_API_KEY}&startDt=2022-07-01&endDt=2022-07-11&age=20;30;40;50;60;-1&format=json`)
        const books = response.data
        console.log(books)
        return {
            props: {
                getBookData: books
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export default bookTest