import { selectItems } from '../selectors';
import { fromJS } from 'immutable';

describe('ItemsList Selectors', () => {
  it('selectItems should return items', () => {
    const mockData = fromJS({
      todos: {
        items: [
          { id: 1, content: 'Test Item 1'},
          { id: 2, content: 'Test Item 2'},
        ],
      },
    });
    const result = selectItems()(mockData);
    expect(result).toHaveLength(2);
  });
});
