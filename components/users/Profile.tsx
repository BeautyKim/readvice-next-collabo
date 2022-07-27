import { SEO } from "@/components";
import { User } from "@/modules/types";

interface UserInfoType {
    userInfo: {
        username: string | string[] | undefined
        email: string | string[] | undefined
    }
}

export const Profile: React.FC<UserInfoType> = ({userInfo}) => {
    return (
        <>
            <SEO title="내정보" />
            <form className="flex items-center justify-center min-h-screen">
                <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                    <div>
                        <img src="/svg/김오십.svg" className="block h-24 mx-auto rounded-full sm:mx-0 sm:shrink-0" alt="유저사진"/>
                        <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">
                            {userInfo.username}
                        </h1>
                        <div className="flex justify-center space-x-4">
                        </div>
                    </div>
                    <div className="mt-5 space-y-6">
                        <div className="flex justify-start space-x-6">
                            <h3>이메일</h3>
                            <p>{userInfo.email}</p>
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