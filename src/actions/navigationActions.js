import { CHANGE_ROUTE } from '../types/navigation';

export function changeRoute(payload) {
  return {
    type: CHANGE_ROUTE,
    payload,
  };
}
