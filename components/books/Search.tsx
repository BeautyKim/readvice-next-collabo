import { HeadTitle } from "@/components";
import Link from "next/link";

export function Search(){
    return(
        <div>
        <HeadTitle title="검색"/>
        <div className="center">
        </div>
        <p><Link href="/books/searchDetail"><img src="http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg"/></Link>
        작별인사 김영하 복복서가 12,600원 | eBook 10,000원
        </p>
        <p><img src="http://image.kyobobook.co.kr/images/book/large/610/l9788972773610.jpg"/>
        컬러애 물들다 밥 햄블리 리드리드 16,800원 | eBook 15,120원
        </p>
        <p><img src="http://image.kyobobook.co.kr/images/book/large/665/l9791166686665.jpg"/>
        저주토끼 정보라 아작 14,800원 | eBook 13,320원
        </p>

        <style jsx>{`
        .center {
                text-align : center;
              }
            img {
              width : 10%;
              height: 10%;
            }
            p {
              border: 1px solid gray;
              padding: 50px;
              margin: 20px;
              background: #ffff;
              }
        `}</style>
        </div>
    )
}