import { CommentType } from "@/types/comments";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CommentState {
	data: CommentType[]
    status: 'idle' | 'loading' | 'failed'
    error: null
}

const initialState: CommentState = {
    data: [],
	status: 'idle',
    error: null
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
        fetchCommentRequest(state){
            console.log(`한줄평 불러오기`)
            state.status = 'loading'
        },
        fetchCommentSuccess(state, {payload}){
            state.status = 'idle'
            state.data = payload
            console.log(`한줄평 받아오기 성공${JSON.stringify(state.data)}`)
        },
        fetchCommentFailure(state, {payload}){
            state.status = 'failed'
            state.error = payload
            console.log(`한줄평 받아오기 실패`)
        }

    }
})

const {reducer, actions} = commentSlice
export const { addComment, addCommentFailure, editComment,
    fetchCommentRequest, fetchCommentSuccess, fetchCommentFailure } = commentSlice.actions;
export const commentAction = actions
export default reducer