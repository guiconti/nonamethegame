import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import navigationSaga from './navigationSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    navigationSaga(),
  ]);
}
