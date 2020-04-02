import { put, call, take, fork, all } from 'redux-saga/effects';
import register from '../apis/register';
import { REGISTER_FETCH } from '../types/auth';
import { signedIn } from '../actions/authActions';

export function* fetchRegister(payload) {
  try {
    yield call(register, payload);
    yield put(signedIn());
  } catch(err) {
    //  Handle error with an action
  }
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
