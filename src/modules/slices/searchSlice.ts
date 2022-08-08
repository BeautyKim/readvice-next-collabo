import { KakaoBook } from "@/modules/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type SearchState = {
	data: KakaoBook[]
    status: 'idle' | 'loading' | 'failed'
    error: null
}

const initialState: SearchState = {
    data: [],
	status: 'idle',
    error: null
}
export const searchSlice = createSlice({
    name: 'searchSlice',
	initialState,
    reducers: {
        // 이미지 결과 텍스트 받아오기
        getSearchRequest(state, action: PayloadAction<KakaoBook>){
            state.status = 'loading'
        },
        getSearchSuccess(state: SearchState, action: PayloadAction<Comment>){
            state.status = 'idle'
            state.data = []
        },
        getSearchFailure(state: SearchState, {payload: error}){
            state.status = 'failed'
            state.data.push(error)
        },
        // 이미지 보내기
        sendSearchRequest(state){
            state.status = 'loading'
        },
        sendSearchSuccess(state, {payload}){
            state.status = 'idle'
            state.data = payload
        },
        sendSearchFailure(state, {payload}){
            state.status = 'failed'
            state.error = payload
        },
        
        searchRequest(state, action){
            state.status = 'loading'
            state.data = action.payload.data
        },
        searchSuccess(state, action){
            state.status = 'idle'
            state.data = action.payload.data
        }

    }
})

const {reducer, actions} = searchSlice
export const { getSearchRequest, getSearchSuccess, getSearchFailure,
            sendSearchRequest, sendSearchSuccess, sendSearchFailure, searchSuccess} = searchSlice.actions;
export const searchAction = actions
export default reducer