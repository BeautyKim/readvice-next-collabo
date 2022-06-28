import axios from "axios"
import { GetStaticProps } from "next"
import { useState } from "react"
import X2JS from "x2js"

export const getStaticProps: GetStaticProps  = async () => {
    const x2js = new X2JS()
    const req = await axios.get(`http://data4library.kr/api/loanItemSrch?authKey=${process.env.NEXT_PUBLIC_DATALIBRARY}&startDt=2022-06-01&endDt=2022-06-25&age=30`)
    const jsonObj = x2js.js2xml(req)

   console.log(jsonObj)

    return(
        <div>
        </div>
    )
}
// bookname : 도서명 authors: 저자명 publisher: 출판사 isbn13: ISBN
// bookImageURL : 책표지 URL
