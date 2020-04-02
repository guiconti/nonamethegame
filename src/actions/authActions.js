import { SIGNED_IN, SIGNED_OUT, REGISTER_FETCH } from '../types/auth';

export function signedIn() {
  return {
    type: SIGNED_IN,
  };
}

export function signedOut() {
  return {
    type: SIGNED_OUT,
  };
}

export function fetchRegister(payload) {
  return {
    type: REGISTER_FETCH,
    payload,
  };
}

