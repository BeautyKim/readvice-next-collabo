import loginImg from '@/public/images/login.png'
import Image from 'next/image'

export const Login = () => {
    return (
        <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-2">
            <div className="hidden sm:block">
                <Image src={loginImg} alt="로그인" className="object-contain w-full h-full"/>
            </div>
            <div className="flex flex-col justify-center bg-secondary-800">
                <form className='max-w[400px] w-full mx-auto bg-secondary-900 p-8 px-8 rounded-lg'>
                    <h2 className='font-bold text-center text-4x1 dark:text-white'>Login</h2>
                    <div className='flex flex-col py-2 text-secondary-400'>
                        <label>Email</label>
                        <input className='p-2 mt-2 rounded-lg bg-secondary-700 focus:border' type="text"/>
                    </div>
                    <div className='flex flex-col py-2 text-secondary-400'>
                        <label>Password</label>
                        <p><input type="checkbox"/> Remember Me</p>
                        <p>Forgot Password</p>
                    </div>
                </form>
            </div>

                <div className="p-6 md:p-20">
                    <h2 className="mb-5 font-mono text-4xl font-bold">Log In</h2>
                    <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                        Log in to your account to upload or download pictures, videos or music.
                    </p>
                    <input
                        type="text"
                        className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                        placeholder="Email address"/>
                    <input
                        type="text"
                        className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                        placeholder="Password"/>

                    <div
                        className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                        <div className="font-bold text-secondary-700">Forgot password</div>
                        <button
                            className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-secondary-700 shadow-primary-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                            <span>Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <line x1="13" y1="18" x2="19" y2="12"/>
                                <line x1="13" y1="6" x2="19" y2="12"/>
                            </svg>
                        </button>
                    </div>

                    <div className="mt-12 border-b border-b-gray-300"></div>

                    <p className="py-6 text-sm font-thin text-center text-gray-400">
                        or log in with
                    </p>

                    <div
                        className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                        <button
                            className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <img src="images/facebook.png" alt="" className="w-9"/>
                            <span className="font-thin">Facebook</span>
                        </button>
                        <button
                            className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <img src="images/google.png" alt="" className="w-10"/>
                            <span className="font-thin">Google</span>
                        </button>
                    </div>
                </div>
                <div
                    className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black group-hover:text-gray-600"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </div>
        </div>
    )
}

// export function Login() {     return (         <>             <form>
// <div className="mb-3 form-floating">                     <input
// type="email"                         className="form-control rounded-3"
// id="floatingInput"                         placeholder="name@example.com"/>
// <label htmlFor="floatingInput">Email address</label>                 </div>
// <div className="mb-3 form-floating">                     <input
// type="password"                         className="form-control rounded-3"
// id="floatingPassword"                         placeholder="Password"/>
// <label htmlFor="floatingPassword">Password</label>                 </div>
// <Link href="/common/loginHome"><button className="mb-2 w-100 btn btn-lg // rounded-3 btn-primary" type="submit">로그인</button></Link>
// <small className="text-muted">By clicking Sign up, you agree to the terms of
// use.</small>                 <hr className="my-4"/>                 <h2
// className="mb-3 fs-5 fw-bold">Or use a third-party</h2>
// <button                     className="py-2 mb-2 w-100 btn btn-outline-dark // rounded-3"                     type="submit">                     Sign up
// with GitHub                 </button>                 <button
// className="py-2 mb-2 w-100 btn btn-outline-primary rounded-3"
// type="submit">                     Sign up with Google
// </button>             </form>         </>     ) }