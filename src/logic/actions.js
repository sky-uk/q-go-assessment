import { ADD_ITEM } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};
