import { call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { search } from "@/modules/controllers"
import { getSearchFailure, getSearchRequest, getSearchSuccess } from '../slices/searchSlice'
import { KakaoBook } from '../types'

export function* watcSearch(){
    yield takeLatest(getSearchRequest, (action: {payload: KakaoBook}) => {
        try{
            const response: any = search.imageRes()
            console.log(' 진행 3: saga내부 진입 성공  '+ JSON.stringify(action.payload))
            put(getSearchSuccess(response.payload))
        }catch(error){
            console.log('진행 3: saga내부 진입 실패  ') 
            put(getSearchFailure(error))
        }
    })
}