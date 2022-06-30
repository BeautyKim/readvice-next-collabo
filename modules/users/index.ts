import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

//사용자 타입
export interface UserType {
    email: string, password: string, username: string, birth: string, gender: string
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
        }
    }
})

export const { joinRequest, joinSuccess, joinFailure } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer