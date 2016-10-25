// ------------------------------
// Depends
// ------------------------------
import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducers from '_shared/reducers';


export default function configureStore(history, initialState, middlewares) {
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        promiseMiddleware(),
        ...middlewares
      )
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('_shared/reducers', () => {
      store.replaceReducer(require('_shared/reducers'));
    });
  }

  return store;
}
