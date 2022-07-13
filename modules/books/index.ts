import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface BookType {
    
}

export interface BookState {
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
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = bookSlice.actions;
export default bookSlice.reducer;