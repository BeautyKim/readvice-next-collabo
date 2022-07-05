import axios from "axios"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import X2JS from "x2js"

export default function BookPage(){
    const [ bookData, setBookData ] = useState([])
    useEffect(() => {
        (async () => {
            const { results }:any = await (
                await fetch(
                    `http://data4library.kr/api/loanItemSrch?authKey=${process.env.NEXT_PUBLIC_DATALIBRARY_API_KEY}&startDt=2022-06-01&endDt=2022-06-25&age=30`
                    )).json()
                    setBookData(results)
                    console.log(setBookData)
        })()
    },[])


    return(
        <>
            <div>
                <button>확인</button>
            </div>
        </>
    )
}

// bookname : 도서명 authors: 저자명 publisher: 출판사 isbn13: ISBN
// bookImageURL : 책표지 URL
