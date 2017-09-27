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
    expect(result.items).toHaveLength(4);
    expect(result.items[3].id === 4);
    expect(result.items[3].content === 'Test Content');
  });
});
