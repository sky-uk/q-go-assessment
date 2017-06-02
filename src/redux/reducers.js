import { combineReducers } from 'redux';
import reducer from '../logic/reducer';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
  });
}
