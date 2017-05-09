import { ADD_ITEM } from './constants';

export function addItem(content) {
  return { type: ADD_ITEM, content };
}
