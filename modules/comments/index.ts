import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const commentSliceType = "slice/comments";

export interface ICommentState {
	value: number;
}

const initialState: ICommentState = {
	value: 0
}

const commentSlice = createSlice({
	initialState,
    name: commentSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = commentSlice.actions;
export default commentSlice.reducer;