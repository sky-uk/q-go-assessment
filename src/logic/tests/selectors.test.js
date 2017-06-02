import { selectTodos } from '../selectors';

describe('ItemsList Selectors', () => {
  it('selectItems should return items', () => {
    const mockData = {
      todos: {
        items: [],
      },
    };
    const result = selectTodos()(mockData);
    expect(result.items).toEqual([]);
  });
});
