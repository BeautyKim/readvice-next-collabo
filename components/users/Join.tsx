import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { userActions, UserType } from '@/modules/users'

const Join: React.FC = () => {
    const [user, setUser] =useState<UserType>({
        email:'', password:'', username:'', birth:'', gender:''
    })
    const dispatch = useDispatch()
    const handleChange = (e: { preventDefault: () => void; target: { name: any; value: any } }) =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user, [name]: value})
    }
  return (
    <>
        <form onSubmit={
            e=> {
                e.preventDefault()
                dispatch(userActions.joinRequest(user))
                setUser({ email:'', password:'', username:'', birth:'', gender:'' })
            }
        }>
            <div className="mb-3 form-floating">
                <input
                    type="email"
                    className="form-control rounded-3"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    onChange={handleChange}/>
                <label htmlFor="email">이메일</label>
            </div>
            <div className="mb-3 form-floating">
                <input
                    type="password"
                    className="form-control rounded-3"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}/>
                <label htmlFor="password">비밀번호</label>
            </div>
            <div className="mb-3 form-floating">
                <input
                    type="password"
                    className="form-control rounded-3"
                    id="RePassword"
                    name="RePassword"
                    placeholder="Password"/>
                <label htmlFor="RePassword">비밀번호 재확인</label>
            </div>
            <div className="mb-3 form-floating">
                <input
                    type="text"
                    className="form-control rounded-3"
                    id="username"
                    name="username"
                    placeholder="사용자 이름"
                    onChange={handleChange}/>
                <label htmlFor="username">사용자 이름</label>
            </div>
            <div className="mb-3 form-floating">
                <input
                    type="date"
                    className="form-control rounded-3"
                    id="birth"
                    name="birth"
                    placeholder="생일"
                    onChange={handleChange}/>
                <label htmlFor="birth">생년월일</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="male" value="option1" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="male">남성</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="female" value="option2" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="female">여성</label>
            </div>
            <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="aggrement" required />
            <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
          </div>
            <button className="mb-2 w-100 btn btn-lg rounded-3 btn-primary" type="submit">회원가입</button>
            <hr className="my-4"/>
            <h2 className="mb-3 fs-5 fw-bold">Or use a third-party</h2>
            <button className="py-2 mb-2 w-100 btn btn-outline-dark rounded-3" type="submit">
                Sign up with Twitter
            </button>
            <button className="py-2 mb-2 w-100 btn btn-outline-primary rounded-3" type="submit">
                Sign up with Google
            </button>
        </form>
    </>
  );
}
export default Join