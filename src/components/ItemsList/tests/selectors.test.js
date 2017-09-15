import { selectItems } from '../selectors';

describe('ItemsList Selectors', () => {
  it('selectItems should return items', () => {
    const mockData = {
      todos: {
        items: [
          { id: 1, content: 'Test Item 1' },
          { id: 2, content: 'Test Item 2' },
        ],
      },
    };
    const result = selectItems()(mockData);
    expect(result).toHaveLength(2);
  });
});
