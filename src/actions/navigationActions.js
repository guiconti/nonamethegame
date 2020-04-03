import { CHANGE_ROUTE, RETURN_ROUTE } from '../types/navigation';

export function changeRoute(payload) {
  return {
    type: CHANGE_ROUTE,
    payload,
  };
}

export function returnRoute() {
  return {
    type: RETURN_ROUTE
  };
}
