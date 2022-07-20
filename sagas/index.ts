import { all, fork } from 'redux-saga/effects';
import {
  watchJoin,
  watchLogin,
  watchLogOut,
} from './userSaga';
import {
  watchWriteComment
} from './commentSaga'

export default function* rootSaga() {
  yield all([
    fork(watchJoin),
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchWriteComment)
  ]);
}