import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import navigationSaga from './navigationSaga';
import adventurerSaga from './adventurerSaga';
import gameSaga from './gameSaga';
import itemSaga from './itemSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    navigationSaga(),
    adventurerSaga(),
    gameSaga(),
    itemSaga(),
  ]);
}
