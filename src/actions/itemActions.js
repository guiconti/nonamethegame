import { ITEMS_LIST_LOADING, FETCH_ITEMS_LIST, ITEMS_LIST } from '../types/item';

export function itemsListLoading() {
  return {
    type: ITEMS_LIST_LOADING,
  };
}

export function fetchItemsList() {
  return {
    type: FETCH_ITEMS_LIST,
  };
}

export function itemsList(payload) {
  return {
    type: ITEMS_LIST,
    payload,
  };
}
