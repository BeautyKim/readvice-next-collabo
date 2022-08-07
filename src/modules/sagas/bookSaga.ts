import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { dataBookApi } from "@/modules/apis/book"
import { bookActions } from "@/modules/slices/bookSlice"
import { AxiosResponse } from "axios"

export function* fetchBook(){
    const { fetchBookSuccess, fetchBookFailure } = bookActions
    try{
        const response:AxiosResponse = yield call(dataBookApi)
        yield put(fetchBookSuccess(response.data))

    }catch(error){
        yield put(fetchBookFailure(error))
    }
}