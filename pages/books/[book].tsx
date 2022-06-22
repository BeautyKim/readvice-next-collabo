import { GetStaticProps } from "next"

export const getStaticPaths: GetStaticProps  = async () => {
    const res = await fetch(`http://data4library.kr/api/loanItemSrch?authKey=${process.env.NEXT_PUBLIC_DATALIBRARY}&startDt=2022-06-01&endDt=2022-06-21&region=11`)
    
    const data = await res.text()
    let pareXML = new DOMParser()
    let xmlDoc = pareXML.parseFromString(data, "text/xml")
    
    // const paths = data.map((card: any) => {
    //     return{
    //         params: {}
    //     }
    // })

    return(
        <div>
        </div>
    )
}