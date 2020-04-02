import { put, take, fork, all } from 'redux-saga/effects';
import { CHANGE_ROUTE } from '../types/navigation';
import { push } from 'connected-react-router';

export function* changeRoute(payload) {
  yield put(push(payload));
}

function* watchChangeRoute() {
  while(true) {
    const { payload } = yield take(CHANGE_ROUTE);
    yield fork(changeRoute, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchChangeRoute),
  ]);
}
