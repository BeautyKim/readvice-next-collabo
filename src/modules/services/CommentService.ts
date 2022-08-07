import { Comment } from "@/modules/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentState {
	data: Comment[]
    status: 'successed' | 'loading' | 'failed'
    error: null
}

export class CommentService {
    public createCommentSlice() {
        const initialState: CommentState = {
            data: [],
            status: 'loading',
            error: null
        }
    return {
        name: "commentSlice",
        initialState,
        reducers: {
            writeCommentRequest: (state: CommentState, action: PayloadAction<Comment>) => {
                state.status = "loading"
                state.data = [...state.data, action.payload]
                console.log(`한줄평 보냄${JSON.stringify(state.data)}`)
            }
            // writeCommentSuccess: () => {

            // }
            // writeCommentFailure: () => {

            // }


        }
    }
}
}