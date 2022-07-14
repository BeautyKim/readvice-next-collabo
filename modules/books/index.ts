import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface BookType {
    isbn13: number,
    bookname: string,
    authors: string,
    bookImageURL: string,
}
export interface BookState{
    data: BookType[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: BookState = {
    data: [],
    status: 'idle'
}

export const bookSlice = createSlice({
    name: 'bookSlice',
	initialState,
    reducers: {
    	fetchBookRequest(state: BookState){
            state.status = 'loading'
        },
        fetchBookSuccess(state: BookState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        fetchBookFailure(state: BookState, {payload}){
            state.status = 'failed'
            state.data = payload
        }

    }
})

const {reducer, actions} = bookSlice
export const { fetchBookRequest, fetchBookSuccess, fetchBookFailure } = bookSlice.actions;
export const bookActions = actions
export default reducer;