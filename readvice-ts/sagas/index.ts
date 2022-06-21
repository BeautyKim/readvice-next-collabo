import { all, fork } from 'redux-saga/effects';
import {
  watchJoin,
} from './userSaga';

export default function* rootSaga() {
  yield all([
    fork(watchJoin)
  ]);
}