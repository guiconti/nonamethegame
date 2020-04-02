import initialState from './initialState';
import objectAssign from 'object-assign';
import { SIGNED_IN, SIGNED_OUT, LOADING } from '../types/auth';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case SIGNED_IN:
      return objectAssign({}, state, { signedIn: true, loading: false });
    case SIGNED_OUT:
      return objectAssign({}, state, { signedIn: false, loading: false });
    case LOADING:
      return objectAssign({}, state, { loading: true });
    default:
      return state;
  }
}
