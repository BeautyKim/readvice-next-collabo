import { CommentType } from "@/types/comments";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CommentState {
	comments: CommentType[]
}

const initialState: CommentState = {
	comments: []
}

const commentSlice = createSlice({
    name: 'commentSlice',
	initialState,
    reducers: {
    	addComment(state: CommentState, action: PayloadAction<CommentType[]>){
            state.comments = action.payload;
        }
    }
})

const {reducer, actions} = commentSlice
export const { addComment } = commentSlice.actions;
export const commentAction = actions
export default reducer