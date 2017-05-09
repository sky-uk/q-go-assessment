import { combineReducers } from 'redux-immutable';
import reducer from '../logic/reducer';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
  });
}
