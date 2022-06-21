import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const bookSliceType = "slice/books";

export interface IBookState {
	value: number;
}

const initialState: IBookState = {
	value: 0
}

const bookSlice = createSlice({
	initialState,
    name: bookSliceType,
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