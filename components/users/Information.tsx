import { SEO } from "@/components";

export function Information() {

    return (
        <>
            <SEO title="내정보" />
            <form className="flex items-center justify-center min-h-screen">
                <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                    <div>
                        <img src="/svg/김오십.svg" className="block h-24 mx-auto rounded-full sm:mx-0 sm:shrink-0"/>
                        <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">
                            김오십
                        </h1>
                        <p className="text-center">SNS계정 연결하기</p>
                        <div className="flex justify-center space-x-4">
                            <img src="/social-icons/google.png" className="block h-5" />
                            <img src="/social-icons/github.svg" className="block h-5" />
                        </div>
                    </div>
                    <div className="mt-5 space-y-6">
                        <div className="flex justify-start space-x-6">
                            <h3>이메일</h3>
                            <p>fifty@gmail.com</p>
                        </div>
                        <div className="flex justify-start space-x-2">
                            <h3>휴대폰 번호</h3>
                            <input
                                    type="text"
                                    placeholder="010-xxxx-xxxx"
                                    className="block w-full px-3 text-sm border rounded-lg outline-none"/>
                            <button>변경</button>
                        </div>
                        <div className="flex justify-start space-x-6">
                            <h3>비밀번호</h3>
                            <input
                                    type="Password"
                                    placeholder="Password"
                                    className="block w-full px-3 text-sm border rounded-lg outline-none"/>
                        </div>
                        <div className="flex justify-start space-x-6">
                            <h3>비밀번호 중복확인</h3>
                            <input
                                    type="Password"
                                    placeholder="Password"
                                    className="block w-full px-3 text-sm border rounded-lg outline-none"/>
                            <button >중복확인</button>
                        </div>
                        
                        
                    </div>
                    <div className="flex justify-center mt-6 space-x-6">
                        <button>수정하기</button>
                        <button>회원탈퇴</button>
                    </div>
                </div>
            </form>
        </>
    );
}