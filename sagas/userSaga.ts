import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '@/modules/users';
import { UserJoinType, UserLoginType } from '@/types/users';
import { userJoinApi, userLoginApi } from '@/apis/userApi';

function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinType = yield userJoinApi(user.payload)
        yield put(userActions.joinSuccess(response))
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
    }catch(error){
        alert('진행 3: saga내부 join 실패  ') 
        yield put(userActions.loginFailure(error))
   }
}

export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}

export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}