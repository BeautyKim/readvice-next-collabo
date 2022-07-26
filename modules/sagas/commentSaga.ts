import { call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { commentWrite } from "@/modules/apis"
import { addCommentRequest, addCommentFailure, addCommentSuccess } from "@/modules/slices"
import { Comment } from "@/modules/types"

export function* watchWriteComment(){
    yield takeLatest(addCommentRequest, (action: {payload: Comment} ) => {
        try{
            const response: any = commentWrite.add(action.payload)
            console.log(' 진행 3: saga내부 진입 성공  '+ JSON.stringify(action.payload))
            put(addCommentSuccess(response.payload))
        }catch(error){
            console.log('진행 3: saga내부 진입 실패  ') 
            put(addCommentFailure(error))
        }
    })
}