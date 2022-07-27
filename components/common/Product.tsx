import Link from "next/link"
import tw from "tailwind-styled-components"

const Product = () => {
    return(
        <section className="h-full m-20 space-y-3 columns-1">
            <article className="mx-10 text-center my-44">
                <h1 className="text-4xl font-black leading-10 tracking-tight text-gray-900 md:text-5xl">Your read advice</h1>
                <h2 className="p-4 text-md md:text-lg">나만을 위한 사서 리드바이스</h2>
            </article>
            <article className="container flex flex-col items-center px-6 pt-32 pb-32 mx-auto md:flex-row md:space-x-22">
                <LeftDiv>
                    <H1>읽고 싶은 책을 검색하면</H1>
                    <P>지금 당장 내 주변에서 대출 할 수 있는 <br/>도서관과 구매 가능한 온.오프라인 서점을 볼 수 있어요</P>
                </LeftDiv>
                <div className="md:w-1/2">
                    <img src="/images/bookWoman.svg" className="mb-10" alt="책읽는여자"/>
                </div>
            </article>
            <article className="container flex flex-col items-center px-4 pt-32 pb-32 mx-auto md:flex-row md:space-x-16">
                <div className="md:w-1/2">
                    <img src="/images/bookMan4.svg" className="mb-10" alt="책읽는남자"/>
                </div>
                <RightDiv>
                    <H1>나의 서재를 찍어서<br/>내 취향에 맞는 도서를 추천 받자</H1>
                    <P>직접 입력할 필요없이 사진 한 장이면 취향에 맞는 도서를 추천 해줘요</P>
                </RightDiv>
            </article>
            <article className="container flex flex-col items-center px-6 pt-24 pb-32 mx-auto md:flex-row md:space-x-16">
                <LeftDiv>
                    <H1>메모만 했는데 독서기록장이 뚝딱</H1>
                    <P>짧은 메모만으로도 멋있는 독서기록장이 자동으로 만들어져요<br/>이 독서기록장을 PDF 형식으로 책으로 만들어줘요</P>
                </LeftDiv>
                <div className="md:w-1/2">
                    <img src="/images/bookWoman4.svg" className="mb-10" alt="책읽는여자"/>
                </div>
            </article>
            <article className="container flex flex-col items-center px-6 pt-24 pb-32 mx-auto md:flex-row md:space-x-16">
                <div className="md:w-1/2">
                    <img src="/images/bookWoman6.svg" className="mb-10" alt="책읽는여자"/>
                </div>
                <RightDiv>
                    <H1>나만의 사서 리드봇</H1>
                    <P>챗봇 리드봇 대화를 즐겨보세요~ <br/> 당신에게 필요한 책을 추천해줘요.</P>
                </RightDiv>
            </article>
            <article className="text-center font-bold">
                <h1 className="mb-3">지금 바로 Readvice 이용하기</h1>
                <div className="font-black leading-8 tracking-tight text-gray-900 md:text-4xl sm:text-4">
                    <Link href="/users/join"><a>
                        <button
                            className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl" 
                            type="submit">회원가입</button></a>
                    </Link>
                </div>
            </article>
        </section>
    )
}
export default Product

const RightDiv = tw.div`
    flex
    flex-col
    items-start
    space-y-5
    md:w-1/2
`
const LeftDiv = tw.div`
    flex
    flex-col
    items-start
    space-y-5
    md:w-1/2
    text-right
`
const H1 = tw.h1`
    max-w-md
    text-xl
    font-bold
    md:text-4xl
`
const P = tw.p`
    text-md
    md:text-lg
`