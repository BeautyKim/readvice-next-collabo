import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '@/modules/users';
import { UserJoinType } from '@/types/users/join';
import { userJoinApi } from '@/pages/api/userApi';

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

export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}