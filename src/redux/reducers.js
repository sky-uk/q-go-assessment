import { combineReducers } from 'redux';
import reducer from '../logic/todos';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
  });
}
