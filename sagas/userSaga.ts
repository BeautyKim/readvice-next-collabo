import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { joinSuccess, loginFailure, loginSuccess, logoutFailure, logoutSuccess, userAction } from '@/modules/users';
import { JoinType, LoginInput,  UserType } from '@/types/users';
import { joinApi, loginApi } from '@/apis/userApi';
import { AxiosResponse } from 'axios';


function* join(user: JoinType){
    try{
        console.log(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response: any = joinApi(user.payload)
        yield put(joinSuccess(response.payload))
        window.location.href = '/'
    }catch(error){
         console.log('진행 3: saga내부 join 실패  ') 
         yield put(userAction.joinFailure(error))
    }
}

function* login(action: {payload: LoginInput}){
    try{
        const response: AxiosResponse<UserType> = yield call(loginApi, action.payload)
        yield put(loginSuccess(response.data))
        console.log('login 성공~^^' + JSON.stringify(response.data))
        window.location.href = '/loginHome'
    }catch(error){
        console.log('진행 3: saga내부 join 실패  ') 
        yield put(loginFailure(error))
   }
}
function* logOut(){
    try{
        yield delay(1000)
        yield put(logoutSuccess)
        console.log('로그아웃 성공')
        window.location.href = '/'
    }catch(error){
        yield put(logoutFailure)
        console.log('로그아웃 실패')
    }
}



export function* watchJoin(){
    yield takeEvery(userAction.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userAction.loginRequest, login)
}
export function* watchLogOut(){
    yield takeLatest(userAction.logoutRequest, logOut)
}