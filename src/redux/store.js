import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore(initialState = {}) {
  const middlewares = [
  ];
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers();
        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
