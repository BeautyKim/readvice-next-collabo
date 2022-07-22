import { call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { joinRequest, joinSuccess, loginFailure, loginRequest, loginSuccess, logoutFailure, logoutSuccess, userAction } from '@/modules/slices';
import { User } from '@/modules/types';
import { user } from '@/modules/apis';


export function* watchJoin(){
    yield takeLatest(joinRequest, (action: {payload: User}) => {
        try{
            const response: any = user.join(action.payload)
            console.log(' 진행 3: saga내부 join 성공  '+ JSON.stringify(action.payload))
            put(joinSuccess(response.payload))
            window.location.href = '/'
        }catch(error){
             console.log('진행 3: saga내부 join 실패  ') 
            put(userAction.joinFailure(error))
        }
    })
}
export function* watchLogin(){
    yield takeLatest(loginRequest, (action: {payload: User}) => {
        try{
            const response: any = user.login(action.payload)
            put(loginSuccess(response.payload))
            console.log('진행 3: saga내부 login 성공' + JSON.stringify(response))
            console.log(JSON.stringify(response.data.token))
            // window.location.href = '/loginHome'
        }catch(error){
            console.log('진행 3: saga내부 login 실패  ') 
            put(loginFailure(error))
       }
    }
    )
}
export function* watchLogOut(){
    yield takeLatest(userAction.logoutRequest, () => {
        try{
            delay(1000)
            put(logoutSuccess)
            console.log('로그아웃 성공')
            window.location.href = '/'
        }catch(error){
            put(logoutFailure)
            console.log('로그아웃 실패')
        }
    })
}