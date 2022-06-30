import Link from "next/link"
import FormLayout from "../layout/FormLayout"

const Login: React.FC = () => {
    
    
    return (
        <FormLayout>
            <form>
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                        <div>
                            <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">Your read advice</h1>
                            <p
                                className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">안녕하세요! 리드바이스 입니다.😊</p>
                        </div>
                        <div className="space-y-4">
                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Email</span>
                                <input
                                    type="email"
                                    placeholder="Email Addres"
                                    className="block w-full px-4 py-3 text-sm border rounded-lg outline-none peer"/>
                                <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
                                Please provide a valid email address.
                                </p>
                            </label>
                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Password</span>
                                <input
                                    type="Password"
                                    placeholder="Password"
                                    className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                            </label>
                        </div>
                        <div className="mt-6 text-center">
                            <Link href='/loginHome/loginHome'><button className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl">Login</button></Link>
                            <p className="mt-4 text-sm">아직 회원이 아니신가요?  
                                <Link href='/users/join'><a className="underline cursor-pointer">
                                    Sign Up</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </FormLayout>
    )
}
export default Login