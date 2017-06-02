import { createSelector } from 'reselect';
import { selectTodos } from '../../logic/selectors';

export const selectItems = () => createSelector(
  selectTodos(),
  substate => substate.items
);
