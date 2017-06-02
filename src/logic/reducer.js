import { ADD_ITEM } from './constants';

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable' },
    { id: 2, content: 'Add filters (Use HOC)' },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const oldItems = state.items;
      const newItems = [...oldItems, {
        id: oldItems.length + 1,
        content: action.content,
      }];
      return Object.assign({}, state, {
        items: newItems,
      });
    default:
      return state;
  }
};

export default reducer;
