import { selectTodos } from '../selectors';
import { fromJS } from 'immutable';

describe('ItemsList Selectors', () => {
  it('selectItems should return items', () => {
    const mockData = fromJS({
      todos: {
        items: [],
      },
    });
    const result = selectTodos()(mockData);
    expect(result.toJS().items).toEqual([]);
  });
});
