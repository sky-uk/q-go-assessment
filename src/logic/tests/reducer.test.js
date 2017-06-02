import reducer, { initialState } from '../reducer';
import { addItem } from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const mockAction = addItem('Test Content');
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id === 3);
    expect(result.items[2].content === 'Test Content');
  });
});
