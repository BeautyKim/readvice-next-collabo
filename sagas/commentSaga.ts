import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { commentApi } from "@/apis/commentApi"
import { addComment, addCommentFailure, commentAction } from "@/modules/comments"
import { CommentState } from "@/types/comments"

function* writeComment(comment: CommentState){
    try{
        console.log(' 진행 3: saga내부 진입 성공  '+ JSON.stringify(comment))
        const response:any = commentApi.add(comment.payload)
        yield put(addComment)
        yield put(addComment(response.payload))
    }catch(error){
         console.log('진행 3: saga내부 진입 실패  ') 
         yield put(addCommentFailure(error))
    }
}
export function* watchWriteComment(){
    yield takeEvery(commentAction.addComment, writeComment)
}