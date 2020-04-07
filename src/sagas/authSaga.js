import { put, call, take, fork, all } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import register from '../apis/register';
import signIn from '../apis/signIn';
import { REGISTER_FETCH, SIGN_IN_FETCH } from '../types/auth';
import { signedIn, loading, loaded, error } from '../actions/authActions';
import { changeRoute } from '../actions/navigationActions';
import { ADVENTURERS } from '../constants/routes';

export function* fetchRegister(payload) {
  yield put(loading());
  try {
    const response = yield call(register, payload);
    Cookies.set('session', response.data.session);
    yield put(signedIn());
    yield put(changeRoute(ADVENTURERS));
    yield put(loaded());
  } catch(err) {
    yield put(error(err));
    yield put(loaded());
  }
}

export function* fetchSignIn(payload) {
  yield put(loading());
  try {
    const response = yield call(signIn, payload);
    Cookies.set('session', response.data.session);
    yield put(signedIn());
    yield put(changeRoute(ADVENTURERS));
    yield put(loaded());
  } catch(err) {
    yield put(error(err));
    yield put(loaded());
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
