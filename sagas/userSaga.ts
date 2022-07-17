import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { joinSuccess, loginFailure, loginSuccess, userActions } from '@/modules/users';
import { LoginType, LoginUserType, UserJoinType } from '@/types/users';
import { fetchUserApi, userJoinApi, userLoginApi } from '@/apis/userApi';
import { AxiosAdapter, AxiosResponse } from 'axios';


function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response: any = userJoinApi(user.payload)
        yield put(joinSuccess(response.payload))
        window.location.href = '/'
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}

function* login(action: {payload: LoginType}){
    try{
        alert('login 성공~^^' + JSON.stringify(action.payload))
        const response: LoginUserType =  yield call (userLoginApi, action.payload)
        yield put(loginSuccess(response))
        window.location.href = '/loginHome'
    }catch(error){
        alert('진행 3: saga내부 join 실패  ') 
        yield put(loginFailure(error))
   }
}
// function* logOut(user: UserLoginType){
//     try{
//         alert('로그아웃 성공')
//     }catch(error){
//         yield put(userActions)
//     }
// }


export function* fetchUser(){
    const { fetchSuccess, fetchFailure } = userActions
    try{
        const response:AxiosResponse = yield call(fetchUserApi)
        yield put(fetchSuccess(response.data))
    }catch(error){
        yield put(fetchFailure(error))
    }
}

export function* watchJoin(){
    yield takeEvery(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}
