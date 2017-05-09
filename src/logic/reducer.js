import { fromJS } from 'immutable';
import { ADD_ITEM } from './constants';

export const initialState = fromJS({
  items: [
    { id: 1, content: 'Make sure items are completeable' },
    { id: 2, content: 'Add filters (Use HOC)' },
  ],
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return state.updateIn(['items'], arr => arr.push({
        id: arr.size + 1,
        content: action.content,
      }));
    default:
      return state;
  }
};

export default reducer;
