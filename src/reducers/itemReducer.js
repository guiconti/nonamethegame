import initialState from './initialState';
import objectAssign from 'object-assign';
import { ITEMS_LIST_LOADING, ITEMS_LIST } from '../types/item';

export default function itemReducer(state = initialState.item, action) {
  switch (action.type) {
    case ITEMS_LIST_LOADING:
      return objectAssign({}, state, { listLoading: true });
    case ITEMS_LIST:
      return objectAssign({}, state, { listLoading: false, list: action.payload });
    default:
      return state;
  }
}
