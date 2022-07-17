import { CommentType } from "@/types/comments";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CommentState {
	data: CommentType[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CommentState = {
    data: [],
	status: 'idle'
}

const commentSlice = createSlice({
    name: 'commentSlice',
	initialState,
    reducers: {
    	addComment(state: CommentState, action: PayloadAction<CommentType>){
            state.status = 'idle';
            state.data.push(action.payload);
        },
        removeComment(state: CommentState, {payload}){
            state.status = 'loading';
    }
})

const {reducer, actions} = commentSlice
export const { addComment, removeComment } = commentSlice.actions;
export const commentAction = actions
export default reducer