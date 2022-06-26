import { GetServerSideProps } from "next"

export const getServerSidePaths: GetServerSideProps  = async () => {
    const xml2js = require('xml2js')
    const fs = require('fs')

    const url = await fetch(`http://data4library.kr/api/loanItemSrch?authKey=${process.env.NEXT_PUBLIC_DATALIBRARY}&startDt=2022-06-01&endDt=2022-06-25&age=30`)
    
    
   console.log(url)

    return(
        <div>
        </div>
    )
}
// bookname : 도서명 authors: 저자명 publisher: 출판사 isbn13: ISBN
// bookImageURL : 책표지 URL
