import { LoginType, LoginUserType, UserType } from '@/types/users'
import { createSlice, PayloadAction} from '@reduxjs/toolkit'


interface UserState{
    data: UserType[]
    status: 'idle' | 'loading' | 'failed'
    isLoggined: boolean
    error: null
}
const initialState: UserState = {
    data: [],
    status: 'idle',
    isLoggined: false,
    error: null
}


export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        // 회원가입
        joinRequest(state: UserState, action: PayloadAction<UserType>){
            alert(`진행 2: 리듀서 내부 ${action.payload}`)
            state.status = 'loading';
        },
        joinSuccess(state: UserState, action: PayloadAction<UserType>){
            state.status = 'idle'
            state.data = [...state.data, action.payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        // 로그인 및 로그아웃
        loginRequest(state, action: PayloadAction<LoginType>){
            state.status = 'loading';
            alert('진행 2: 리듀서 내부 ')
        },
        loginSuccess(state, action: PayloadAction<LoginUserType>){
            const newState = state.data.concat(action.payload)
            state.data = newState
            state.status = 'idle'
            state.isLoggined = true
            alert(`진행 : 로그인 데이터 ${state.data}`)
        },
        loginFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
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