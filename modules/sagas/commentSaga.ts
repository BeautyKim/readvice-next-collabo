import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { CommentContainer } from '@/modules/controllers/CommentController'
import { commentWrite } from "@/modules/controllers"
import { Comment } from "@/modules/types"

export function* watchWriteComment(){
    yield () => {
        
    }
}