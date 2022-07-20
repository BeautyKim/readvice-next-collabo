import { call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { comment } from "@/modules/apis"
import { addComment, addCommentFailure, commentAction } from "@/modules/slices"
import { Comment } from "@/modules/types"

export function* watchWriteComment(){
    yield takeLatest(commentAction.addComment, (action: {payload: Comment} ) => {
        try{
            const response: any = comment.add(action.payload)
            console.log(' 진행 3: saga내부 진입 성공  '+ JSON.stringify(action.payload))
            put(addComment(response.payload))
        }catch(error){
            console.log('진행 3: saga내부 진입 실패  ') 
            put(addCommentFailure(error))
        }
    })
}