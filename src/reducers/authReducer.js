import initialState from './initialState';
import objectAssign from 'object-assign';
import { SIGNED_IN, SIGNED_OUT, LOADING, LOADED, ERROR, CLEAR_ERROR } from '../types/auth';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case SIGNED_IN:
      return objectAssign({}, state, { signedIn: true, loading: false });
    case SIGNED_OUT:
      return objectAssign({}, state, { signedIn: false, loading: false });
    case LOADING:
      return objectAssign({}, state, { loading: true });
    case LOADED:
      return objectAssign({}, state, { loading: false });
    case ERROR:
      return objectAssign({}, state, { showError: true });
    case CLEAR_ERROR:
      return objectAssign({}, state, { showError: false, error: null });
    default:
      return state;
  }
}
