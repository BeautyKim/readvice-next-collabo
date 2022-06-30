import Link from "next/link"
import FormLayout from "../layout/FormLayout"

export function Login() {
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
                            <input
                                type="text"
                                placeholder="Email Addres"
                                className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                            <input
                                type="text"
                                placeholder="Password"
                                className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                        </div>
                        <div className="mt-6 text-center">
                            <Link href='/loginHome/loginHome'><button className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl">Login</button></Link>
                            <p className="mt-4 text-sm">Already Have An Account?
                                <Link href='/users/join'><a className="underline cursor-pointer">
                                    Sign In</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </FormLayout>
    )
}