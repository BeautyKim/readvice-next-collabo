import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const chatbotSliceType = "slice/chatbots";

export interface IChatbotState {
	value: number;
}

const initialState: IChatbotState = {
	value: 0
}

const chatbotSlice = createSlice({
	initialState,
    name: chatbotSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = chatbotSlice.actions;
export default chatbotSlice.reducer;