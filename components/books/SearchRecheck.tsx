
export function SearchRecheck(){
    return(
        <form>
        <div>
            <h2>인식하신 책이 맞습니까?</h2>
            <img src="http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg"/> 
            <h3>작별인사 김영하</h3><input type="checkbox" checked />
            <img src="http://image.kyobobook.co.kr/images/book/large/610/l9788972773610.jpg"/>
            <h3>컬러애 물들다 밥 햄블리</h3><input type="checkbox" checked />
            <img src="http://image.kyobobook.co.kr/images/book/large/665/l9791166686665.jpg"/>
            <h3>저주토끼 정보라</h3><input type="checkbox" checked />
        </div>
        <style jsx>{`
            div {
              border: 1px solid gray;
              padding: 50px;
              margin: 20px;
              text-align : center;
              }
            img {
                display:block;
                margin: 0px auto;
            }
        `}</style>
        </form>
    )
    
}