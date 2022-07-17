import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { userActions } from '@/modules/users'
import LoginHomeLayout from "../loginHome/FormLayout"
import Link from "next/link"
import { SEO } from "../common/SEO"
import { UserType } from "@/types/users"

const Join: React.FC = () => {
    const [user, setUser] =useState<UserType>({
        email:'', password:'', username:'', birth:'', gender:''
    })
    const dispatch = useDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user, [name]: value})
    }
    const checkPasswordHandler = () => {
        
    }

  return (
    <LoginHomeLayout>
        <SEO title="회원가입" />
        <form onSubmit={
            e=> {
                e.preventDefault()
                dispatch(userActions.joinRequest(user))
                setUser({ email:'', password:'', username:'', birth:'', gender:'' })
            }
        }>
            <div className="flex items-center justify-center min-h-screen">
                <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                    <div>
                        <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer"><Link href="/"><a>
                            Your read advice</a></Link></h1>
                        <p className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">
                            리드바이스와 함께하기</p>
                    </div>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="name@example.com"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <input
                        type="Password"
                        placeholder="비밀번호"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <input
                        type="Password"
                        placeholder="비밀번호 재확인"
                        id="cpassword"
                        name="cpassword"
                        onChange={checkPasswordHandler}
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="사용자 이름"
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <input
                        type="text"
                        id="birth"
                        name="birth"
                        placeholder="생년월일 8자리(ex: 19991212)"
                        pattern="[0-9]+"
                        maxLength={8}
                        onChange={handleChange}
                        className="peer block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <span className="hidden peer-invalid:block peer-invalid:text-red">
                        숫자만 입력해주세요
                    </span>
                </div>
                <div>
                    <div className="form-check form-check-inline">
                        <input type="radio" 
                            name="gender" 
                            id="male" 
                            value="male"
                            onChange={handleChange}
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="inline-block text-gray-800 form-check-label" 
                            htmlFor="male">남성</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" 
                            name="gender" 
                            id="female"
                            value="female"
                            onChange={handleChange}
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="inline-block text-gray-800 form-check-label"
                            htmlFor="female">여성</label>
                    </div>
                </div>
                <hr className="mb-3" />
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="aggrement" required />
                    <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
                    <div className="mt-6 text-center">
                        <button className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl" 
                            type="submit">Sign Up</button>
                    </div>
                </div>
                <hr className="my-4"/>
                <h2 className="mb-3 text-center fs-5 fw-bold">or</h2>
                <button className="py-2 mb-2 w-100 btn btn-outline-dark rounded-3" type="submit">
                    Sign up with GitHub
                </button>
                <button className="py-2 mb-2 w-100 btn btn-outline-primary rounded-3" type="submit">
                    Sign up with Google
                </button>
                </div>
            </div>
        </form>
    </LoginHomeLayout>
  );
}
export default Join