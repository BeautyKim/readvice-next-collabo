import { createSlice, PayloadAction} from '@reduxjs/toolkit'

//사용자 타입
export interface UserType {
    email: string, password: string, username?: string, birth?: string, gender?: string
}

export interface UserState{
    data: UserType[]
    status: 'idle' | 'loading' | 'failed'
}
const initialState: UserState = {
    data: [],
    status: 'idle'
}


export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        // 회원가입
        joinRequest(state: UserState, _payload){
            state.status = 'loading';
            alert('진행 2: 리듀서 내부 ')
            
        },
        joinSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        // 로그인 및 로그아웃
        loginRequest(state: UserState, _payload){
            state.status = 'loading';
            alert('진행 2: 리듀서 내부 ')
            
        },
        loginSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 로그인 데이터 ${state.data}`)
        },
        loginFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        logOutSuccess(state: UserState ){
            state.status = 'failed'
            localStorage.clear()
            window.location.href = '/loginHome'
        },
        // 회원리스트
        fetchRequest(state: UserState){
            state.status = 'loading'
        },
        fetchSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        fetchFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }

    }
})

const {reducer, actions} = userSlice
export const { joinRequest, joinSuccess, joinFailure, loginRequest, loginSuccess, loginFailure,
                logOutSuccess, fetchRequest, fetchSuccess, fetchFailure } = userSlice.actions;
export const userActions = actions
export default reducer