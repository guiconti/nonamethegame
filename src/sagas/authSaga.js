import { put, call, take, fork, all } from 'redux-saga/effects';
import register from '../apis/register';
import { receiveExample } from '../actions/barActions';
import { REGISTER_FETCH } from '../types/auth';

export function* fetchRegister(payload) {
  const value = yield call(register, payload.value);
  yield put(receiveExample(value));
}

function* watchRegister() {
  while(true) {
    const { payload } = yield take(REGISTER_FETCH);
    yield call(fetchRegister, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchRegister),
  ]);
}
