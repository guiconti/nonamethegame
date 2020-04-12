import { put, call, take, fork, all } from 'redux-saga/effects';
import {
  FETCH_ITEMS_LIST,
} from '../types/item';
import { itemsListLoading, itemsList } from '../actions/itemActions';
import listItems from '../apis/listItems';

export function* fetchListItems() {
  yield put(itemsListLoading());
  try {
    const response = yield call(listItems);
    const itemsHashmap = {};
    for (let i = 0; i < response.data.length; i++) {
      itemsHashmap[response.data[i]._id] = response.data[i];
    }
    yield put(itemsList(itemsHashmap));
  } catch (err) {
    //  Handle error with an action
  }
}

function* watchFetchListItems() {
  while (true) {
    yield take(FETCH_ITEMS_LIST);
    yield call(fetchListItems);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchListItems),
  ]);
}
