import initialState from './initialState';
import objectAssign from 'object-assign';
import {
  ADVENTURERS_LIST_LOADING,
  ADVENTURER_CREATION_LOADING,
  ADVENTURER_CREATION_LOADED,
  ADVENTURER_LOADING,
  ADVENTURER_LOADED,
  ADVENTURERS_LIST,
  ADVENTURER_INFO,
  UPDATE_POSITION,
  UPDATE_INVENTORY,
} from '../types/adventurer';

export default function adventurerReducer(state = initialState.adventurer, action) {
  switch (action.type) {
    case ADVENTURERS_LIST_LOADING:
      return objectAssign({}, state, { listLoading: true });
    case ADVENTURER_CREATION_LOADING:
      return objectAssign({}, state, { creationLoading: true });
    case ADVENTURER_CREATION_LOADED:
      return objectAssign({}, state, { creationLoading: true });
    case ADVENTURER_LOADING:
      return objectAssign({}, state, { infoLoading: true });
    case ADVENTURER_LOADED:
      return objectAssign({}, state, { infoLoading: false });
    case ADVENTURERS_LIST:
      return objectAssign({}, state, {
        listLoading: false,
        userAdventurers: action.payload,
      });
    case ADVENTURER_INFO:
      return objectAssign({}, state, {
        _id: action.payload._id ? action.payload._id : state._id,
        name: action.payload.name ? action.payload.name : state.name,
        level: action.payload.level ? action.payload.level : state.level,
        class: action.payload.class ? action.payload.class : state.class,
        race: action.payload.race ? action.payload.race : state.race,
        info: action.payload,
      });
    case UPDATE_POSITION:
      return objectAssign({}, state, {
        position: action.payload,
      });
    case UPDATE_INVENTORY:
      return objectAssign({}, state, { inventory: action.payload });
    default:
      return state;
  }
}
