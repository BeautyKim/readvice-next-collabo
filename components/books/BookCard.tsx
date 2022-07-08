import Link from "next/link"
const DATALIBRARY_API_KEY = process.env.NEXT_PUBLIC_DATALIBRARY_API_KEY

const BookCard = ({ photo }: any) => {
    const url = `http://data4library.kr/api/loanItemSrch?authKey=${DATALIBRARY_API_KEY}1&startDt=2022-07-01&endDt=2022-07-04&region=31&addCode=2&format=json`
    

    return(
        <>
            
        </>
    )
}
export default BookCard