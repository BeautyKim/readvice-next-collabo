import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import FormLayout from "../layout/FormLayout"
import tw from "tailwind-styled-components"
import { SEO } from "../common/SEO"

const Login: React.FC = () => {
    const [ Userlogin, setUserLogin ] = useState({
        email:'', password: ''
    })
    const dispatch = useDispatch()
    const handleChange = (e: { preventDefault: () => void; target: { name: any; value: any } }) =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUserLogin({...Userlogin, [name]: value})
    }

    const LoginSpan = tw.span`
        block
        text-sm
        font-medium
        text-slate-700
    `
    
    return (
        <FormLayout>
            <SEO title="로그인"/>
            <form>
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
                                    type="Password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                            </label>
                        </div>
                        <div className="mt-5 text-center">
                            <button className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl" type="submit">Login</button>
                            <p className="mt-4 text-sm">아직 회원이 아니신가요?  
                                <Link href='/users/join'><a className="underline cursor-pointer">
                                    Sign Up</a>
                                </Link><br/>
                                <Link href='/loginHome/loginHome'><a>로그인 했다 치고 로그인 화면으로 가기</a></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </FormLayout>
    )
}
export default Login