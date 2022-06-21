import { HeadTitle } from "@/components";

export function Information() {

    return (
        <>
            <form>
            <HeadTitle title="내정보" />
                <div className="information">
                    <h1>내 정보 관리</h1>
                    <h6 >SNS 연결계정</h6>
                    <h3>성명</h3>
                    <input type="text" name="name" defaultValue="노홍주"/>
                    <h3>휴대폰 번호</h3>
                    <input type="text" name="phone" placeholder="010-1111-2222"/>
                    <button>인증하기</button>
                    <h3>이메일</h3>
                    <input type="text" name="email" defaultValue="hongju@Gmail.com"/>
                    <button >중복확인</button>
                    <h3>비밀번호 수정</h3>
                    <input type="text" name="password" defaultValue="*********"/>
                    <h3>비밀번호 확인</h3>
                    <input type="text" name="checkPassword" defaultValue="*********"/>
                    <button>수정하기</button>
                    <br/>
                    <button>회원탈퇴</button>
                </div>
                <style jsx>{`
                    .information{
                        padding-top: 50px;
                        text-align: center;
                    }
                `}</style>
            </form>
        </>
    );
}