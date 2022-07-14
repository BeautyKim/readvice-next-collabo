import { DATALIBRARY_API_KEY } from "@/apis/bookApi";
import { NextPage } from "next"

const bookListTest: NextPage = (book: any) => {
  return (
  <>
    <h1>{book.bookname}</h1>
  </>

  )
}

export async function getStaticProps(){
    const res = await fetch(`http://data4library.kr/api/loanItemSrch?authKey=${DATALIBRARY_API_KEY}&startDt=2022-07-10&endDt=2022-07-12&format=json`)
    const data = await res.json();
    return {
        props: {
            book: data
        }
    }    
}

export default bookListTest