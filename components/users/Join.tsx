import { SubmitHandler, useForm} from "react-hook-form"
import LoginHomeLayout from "../loginHome/FormLayout"
import Link from "next/link"
import { SEO } from "../common/SEO"
import { User } from "@/modules/types"
import { useRef } from "react"
import tw from "tailwind-styled-components"
import { useDispatch } from "react-redux"
import { joinRequest } from "@/modules/slices"
import { current } from "@reduxjs/toolkit"


// react-hook-form 사용한 회원가입 로직
const Join: React.FC = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors }  } = useForm<User>()
    const onSubmit: SubmitHandler<User> = data => {
        dispatch(joinRequest(data))
        console.log(`리액트에 입력된 회원정보 : ${data}`)};
    
    const passwordRef = useRef<string | null | undefined>(null)
    passwordRef.current = watch("password")
    
  return (
    <LoginHomeLayout>
        <SEO title="회원가입" />
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("email", { 
                            required: true,
                            maxLength: 30,
                            pattern: {
                                value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                                message: "이메일 형식에 맞게 입력해주세요"
                            }
                        })}
                        type="email"
                        placeholder="name@example.com"
                        id="email"
                        name="email"
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    {errors.email && <P>{errors.email.message}</P>}
                    <input
                        {...register("password", { 
                            required: true, 
                            minLength: {
                                value: 8,
                                message: "8자 이상 입력해주세요"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                                message: "영문, 숫자를 혼용하여 입력해주세요"
                            }
                        })}
                        type="password"
                        placeholder="비밀번호(영문, 숫자 8자리 이상)"
                        id="password"
                        name="password"
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    {errors.password && <P>{errors.password.message}</P>}
                    <input
                        {...register("cpassword", { 
                            required: true,
                            validate: (value) => value === passwordRef.current,
                         })}
                        type="password"
                        placeholder="비밀번호 재확인"
                        id="cpassword"
                        name="cpassword"
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    {errors.cpassword && <P>비밀번호가 일치하지 않습니다</P>}
                    <input
                        {...register("username", { 
                            required: true, 
                            maxLength: {
                                value: 20,
                                message: "20자 이하로 입력해주세요"
                            }
                        })}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="사용자 이름"
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    {errors.username && <P>{errors.username.message}</P>}
                    <input
                        {...register("birth", { 
                            required: true, 
                            maxLength: {
                                value: 8,
                                message: "생년월일 8자리까지 입력해주세요"
                            },
                            minLength:{
                                value: 8,
                                message:"생년월일 8자리까지 입력해주세요"  
                            },
                            pattern: {
                                value: /^[0-9]+$/,
                                message:"숫자만 입력해주세요"
                            }
                        })}
                        type="text"
                        id="birth"
                        name="birth"
                        placeholder="생년월일 8자리(ex: 19991212)"
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none peer"/>
                        {errors.birth && <P>{errors.birth.message}</P>}
                </div>
                <div>
                    <div className="form-check form-check-inline">
                        <input
                            {...register("gender")} 
                            type="radio" 
                            name="gender" 
                            id="male" 
                            value="male"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="inline-block text-gray-800 form-check-label" 
                            htmlFor="male">남성</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            {...register("gender")}
                            type="radio" 
                            name="gender" 
                            id="female"
                            value="female"
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
            </div>
            </div>
        </form>
    </LoginHomeLayout>
  );
}
export default Join

const P = tw.p`
    text-red
`