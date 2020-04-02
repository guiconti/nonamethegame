import { put, call, take, fork, all } from 'redux-saga/effects';
import register from '../apis/register';
import signIn from '../apis/signIn';
import { REGISTER_FETCH, SIGN_IN_FETCH } from '../types/auth';
import { signedIn, loading } from '../actions/authActions';
import { changeRoute } from '../actions/navigationActions';
import { ADVENTURERS } from '../constants/routes';

export function* fetchRegister(payload) {
  yield put(loading());
  try {
    yield call(register, payload);
    yield put(signedIn());
    yield put(changeRoute(ADVENTURERS));
  } catch(err) {
    //  Handle error with an action
  }
}

export function* fetchSignIn(payload) {
  yield put(loading());
  try {
    yield call(signIn, payload);
    yield put(signedIn());
    yield put(changeRoute(ADVENTURERS));
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

function* watchSignIn() {
  while(true) {
    const { payload } = yield take(SIGN_IN_FETCH);
    yield call(fetchSignIn, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchRegister),
    fork(watchSignIn),
  ]);
}
