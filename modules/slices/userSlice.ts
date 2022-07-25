import { User } from 'modules/types'
import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type UserState = {
    data: User[]
    status: 'idle' | 'loading' | 'failed'
    isLoggined: boolean
    error: any
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
        joinRequest(state, action: PayloadAction<User>){
            state.status = 'loading';
            state.error = null;
            console.log(`진행 2: 리듀서 내부 ${action.payload}`)
        },
        joinSuccess(state: UserState, action: PayloadAction<User>){
            state.status = 'idle'
            state.data = [...state.data, action.payload]
            console.log(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },

        // 로그인
        loginRequest(state, action: PayloadAction<User>){
            state.status = 'loading';
            console.log(`진행 2: 리듀서 내부 ${state}`)
        },
        loginSuccess(state, action: PayloadAction<User>){
            state.status = 'idle'
            state.data = state.data.concat(action.payload)
            state.isLoggined = true
            console.log(`진행 : 로그인 데이터 ${state.data}`)
        },
        loginFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
        },
        // 토큰

        // 로그아웃
        logoutRequest(state: UserState) {
            state.status = 'loading';
            state.error = null;
        },
        logoutSuccess(state: UserState ){
            state.status = 'idle'
            window.location.href = '/'
        },
        logoutFailure(state: UserState, action: PayloadAction<{ error: any }>) {
            state.status = 'failed';
            state.error = action.payload;
        },

        // 회원정보
        setUserInfo(state: UserState) {
            state.status = 'idle';
            state
        }

    }
})

const {reducer, actions} = userSlice
export const { joinRequest, joinSuccess, joinFailure,
                loginRequest, loginSuccess, loginFailure,
                logoutRequest, logoutSuccess, logoutFailure } = userSlice.actions;
export const userAction = actions
export default reducer