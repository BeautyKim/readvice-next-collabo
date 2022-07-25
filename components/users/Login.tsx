import Link from "next/link"
import tw from "tailwind-styled-components"
import { SEO } from "../common/SEO"
import LoginHomeLayout from "../loginHome/FormLayout";
import GoogleLogin from "./GoogleLogin";

interface LoginProps {
    handleChange : (e : React.ChangeEvent<HTMLInputElement> ) => void;
    handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void;
}



export default function Login({handleChange, handleSubmit} : LoginProps){
    return (
        <LoginHomeLayout>
            <SEO title="로그인"/>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                        <div>
                            <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">
                                <Link href="/"><a>Your read advice</a></Link></h1>
                            <p className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">
                                안녕하세요! 리드바이스 입니다.😊</p>
                        </div>
                        <div>
                            <label className="block">
                                <LoginSpan>Email</LoginSpan>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Addres"
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                                <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
                                Please provide a valid email address.
                                </p>
                            </label>
                            <label className="block">
                                <LoginSpan>Password</LoginSpan>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                            </label>
                        </div>
                        
                        <div className="mt-5 text-center">
                            <button className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl" type="submit">Login</button>
                            <hr className="my-4"/>
                            <h2 className="mb-3 text-center fs-5 fw-bold">or</h2>
                                <div className="text-center">
                                    <GoogleLogin />
                                </div>
                            <button className="py-2 mb-2 w-100 btn btn-outline-primary rounded-3" type="submit">
                                Login with Google
                            </button>
                            <hr className="my-4"/>
                            <Link href="#">
                                <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800">Forgot Password?</a></Link>
                            <p className="mt-4 text-sm">아직 회원이 아니신가요?  
                                <Link href='/users/join'><a className="underline cursor-pointer">
                                    Sign Up</a></Link><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </LoginHomeLayout>
    )
}
const LoginSpan = tw.span`
    block
    text-sm
    font-medium
    text-slate-700
`