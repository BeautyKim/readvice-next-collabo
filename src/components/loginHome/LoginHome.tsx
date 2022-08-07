import Link from "next/link"
import { SEO } from "@/components"

type Props = {
    userName: string | undefined
}

const LoginHome = ({userName} : Props) => {
    
    return(
        <div className="container">
            <SEO title="Home"/>
            <section className="section1">
                <article className="mainBook">
                    <div className="dayItem">
                        <div className="weather">
                            <h1>날씨</h1>
                        </div>
                        <div className="mainTime">
                            {/* <HomeClock /> */}
                        </div>
                    </div>
                    <div className="todayBook">
                        <h2>{userName}님을 위한 오늘의 책</h2>
                        <img src="http://image.yes24.com/goods/108887930/XL" alt="추천책" style={{width: 300}}/>
                    </div>
                </article>
            </section>
            <section>
                <article className="likeBook">
                    <div className="myBookPage">
                        <h4>찜한 책 목록</h4>
                    </div>
                    <div className="link">
                        <Link href='/comments/likeBooks'>더보기</Link>
                    </div>
                </article>
                <article className="likeBook">
                    <h4>알고리즘으로 추천된 북카드 컴포넌트 무한스크롤 예정</h4>
                </article>
            </section>
            <style jsx>{`
                .container {
                    margin-top: 60px;
                }
                section {
                    height: 100%;
                }
                article {
                    height: 100%;
                    margin-bottom: 20px;
                }
                .mainTime {

                }            
                .mainBook {
                    background-color : #ffffffb9;
                    border-radius: 15px;
                    width: 100%;
                    height: 600px;
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-around;
                    align-items: center;
                }
                .dayItem{
                    display: flex;
                    flex-direction: column;
                }
                .weather {
                    margin: 0 20px;
                }
                .likeBook {
                    background-color : #ffffffb9;
                    border-radius: 15px;
                    width: 100%;
                    height: 300px;
                    padding: 20px;
                }
                .link {
                    bottom: 0;
                    right: 0;
                }
                .weather {
                    text-align: center;
                }
            `}</style>
        </div>
    )
}
export default LoginHome