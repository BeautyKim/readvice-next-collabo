import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '@/modules/users';
import { UserJoinType, UserLoginType } from '@/types/users';
import { fetchUserApi, userJoinApi, userLoginApi } from '@/apis/userApi';
import { AxiosAdapter, AxiosResponse } from 'axios';

function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinType = yield userJoinApi(user.payload)
        yield put(userActions.joinSuccess(response))
        window.location.href = '/'
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}

function* login(user: UserLoginType){
    try{
        alert('login 성공~^^' + JSON.stringify(user))
        const response: UserLoginType = yield userLoginApi(user.payload)
        yield put(userActions.loginSuccess(response))
        window.location.href = '/loginHome'
    }catch(error){
        alert('진행 3: saga내부 join 실패  ') 
        yield put(userActions.loginFailure(error))
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
    yield takeLatest(userActions.joinRequest, join)
}

export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}
