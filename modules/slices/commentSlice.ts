import { Comment } from "@/modules/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type CommentState = {
	data: Comment[]
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
        addCommentRequest(state: CommentState, action: PayloadAction<Comment>){
            state.status = 'loading'
        },
        addCommentSuccess(state: CommentState, action: PayloadAction<Comment>){
            state.status = 'idle'
            state.data = [...state.data, action.payload]
        },
        addCommentFailure(state: CommentState, {payload: error}){
            state.status = 'failed'
            state.data.push(error)
        },
        editComment(state, action){
            const { id, text } = action.payload;
            state.data = state.data.map(comment => comment === id
                ? { ...comment,
                    text} : comment);
        },
        removeComment(state, action){
            const id = action.payload
            state.data = state.data.filter( comment => comment !== id)
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
export const { addCommentRequest, addCommentSuccess, addCommentFailure, editComment,
    fetchCommentRequest, fetchCommentSuccess, fetchCommentFailure } = commentSlice.actions;
export const commentAction = actions
export default reducer