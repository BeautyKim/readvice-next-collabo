import Link from "next/link"
import css from "styled-jsx/css"

const styled = css`
    .contents {
        height: 100%;
        margin: 10% 15%;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .wrapper h1 {
        font-size: 40px;
    }
    .wrapper p {
        font-size: 20px;
    }
    .product0, .product1, .product2, .product3, .product4 {
        height: 500px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .product0 {
        background-image: url(/images/bookWoman.svg);
        background-size: 600px;
        background-position: 80% center;
        text-align: 40%;
    }
    .product1, .product3{
        text-align: right;
    }
    .product5 {
        text-align: center;
        margin: auto;
        margin-bottom: 10%;
    }
    .divButton {
        align-items: center;
    }
    .btn {
        font-size: 20px;
        padding: 15px 30px;
        background-color: white;
        color: rgb(51, 18, 110);
        border: 1px solid rgb(121, 91, 177);
        border-radius: 10px;
        letter-spacing: 4px;
        font-family: sans-serif;
        transition: all 0.4s;
    }
    .btn:focus {
        outline: none;
    }
    .btn:hover {
        border: rgb(121, 91, 177);
        background-color: rgb(121, 91, 177);
        color: white;
    }
`

export function Product(){
    return(
        <div className="contents">
            <section className="wrapper">
                <article className="product0">
                    <h1>Your read advice</h1>
                    <p>나만을 위한 사서 리드바이스</p>
                </article>
                <article className="product1">
                    <h1>읽고 싶은 책을 검색하면</h1>
                    <p>지금 당장 내 주변에서 대출 할 수 있는 도서관과<br/>구매 가능한 온.오프라인 서점을 볼 수 있어요</p>
                </article>
                <article className="product2">
                    <h1>나의 서재를 찍어서<br/>내 취향에 맞는 도서를 추천 받자</h1>
                    <p>직접 입력할 필요없이 사진 한 장이면 취향에 맞는 도서를 추천 해줘요</p>
                </article>
                <article className="product3">
                    <h1>메모만 했는데 독서기록장이 뚝딱</h1>
                    <p>짧은 메모만으로도 멋있는 독서기록장이 자동으로 만들어져요<br/>이 독서기록장을 PDF 형식으로 책으로 만들어줘요</p>
                </article>
                <article className="product4">
                    <h1>챗봇 최고야</h1>
                    <p>챗봇에 관한 설명~~~~~~</p>
                </article>
                <article className="product5">
                    <h1>지금 바로 Readvice 이용하기</h1>
                     <div className="divButton">
                        <Link href="/users/signup"><button className="btn">회원가입</button></Link>
                    </div>
                </article>
            </section>
            <style jsx>{styled}</style>
        </div>
    )
}