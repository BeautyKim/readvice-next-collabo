import { HeadTitle } from "../common/HeadTitle"

export function LoginHome(){
    return(
        <div className="container">
            <HeadTitle title="Home"/>
            <section className="section1">
                <article className="mainBook">
                    <div className="mainDateTime">
                        <div className="mainTime">12:20 PM</div>
                        <div className="mainDay">월요일</div>
                        <div className="mainDate">June 20, 2022</div>
                    </div>
                    <div className="todayBook">
                        <h2>노홍주님을 위한 오늘의 책</h2>
                        <img src="http://image.yes24.com/goods/108887930/XL" alt="추천책" style={{width: 300}}/>
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <h1>알고리즘으로 추천된 북카드 컴포넌트 무한스크롤 예정</h1>
                </article>
            </section>
            <style jsx>{`
                .container {
                    margin: auto;
                }
                section {
                    height: 100%;
                    margin-top: 60px;
                }
                article {
                    height: 100%;
                }
                .mainBook {
                    background-color : #ffffffb9;
                    border-radius: 15px;
                    width: 100%;
                    height: 600px;
                    padding: 20px
                }
                .todayBook {
                }
            `}</style>
        </div>
    )
}
