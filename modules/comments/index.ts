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
    	addComment(state, action){
            state.status = 'loading'
            state.data.push(action.payload);
        },
        addCommentFailure(state, {payload: error}){
            state.status = 'failed'
            state.data.push(error)
        },
        editComment(state, action){
            const { id, text } = action.payload;
            state.data = state.data.map(comment => comment.id === id
                ? { ...comment,
                    text} : comment);
        },
        removeComment(state, action){
            const id = action.payload
            state.data = state.data.filter( comment => comment.id !== id)
        },

    }
})

const {reducer, actions} = commentSlice
export const { addComment, addCommentFailure, editComment, removeComment } = commentSlice.actions;
export const commentAction = actions
export default reducer