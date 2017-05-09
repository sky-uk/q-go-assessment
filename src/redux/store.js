import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore(initialState = {}) {
  const middlewares = [
  ];
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers();
        store.replaceReducer(nextReducers);
      });
    });
  }

  console.info('Redux: Store Initialised.');
  return store;
}
