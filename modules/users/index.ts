import { UserType } from '@/types/users'
import { createSlice, PayloadAction} from '@reduxjs/toolkit'


interface UserState{
    data: any
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
        joinRequest(state: UserState, action: PayloadAction<UserType>){
            state.status = 'loading';
            state.error = null;
            alert(`진행 2: 리듀서 내부 ${action.payload}`)
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

        // 로그인
        loginRequest(state: UserState, _action: PayloadAction<UserType>){
            state.status = 'loading';
            alert('진행 2: 리듀서 내부 ')
        },
        loginSuccess(state: UserState, action: PayloadAction<UserType>){
            state.status = 'idle'
            state.data = action.payload;
            state.isLoggined = true
            alert(`진행 : 로그인 데이터 ${state.data}`)
        },
        loginFailure(state, action: PayloadAction<{error: any}>){
            state.status = 'failed'
            state.error = action.payload
        },
        
        // 로그아웃
        logoutRequest(state: UserState) {
            state.status = 'loading';
            state.error = null;
        },
        logOutSuccess(state: UserState ){
            state.status = 'idle'
            state.data = null;
            window.location.href = '/loginHome'
        },
        logoutFailure(state: UserState, action: PayloadAction<{ error: any }>) {
            state.status = 'failed';
            state.error = action.payload;
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
export const { joinRequest, joinSuccess, joinFailure,
                loginRequest, loginSuccess, loginFailure,
                logoutRequest, logOutSuccess, logoutFailure,
                fetchRequest, fetchSuccess, fetchFailure } = userSlice.actions;
export const userActions = actions
export default reducer