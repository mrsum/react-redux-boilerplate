// ------------------------------------
// Styles
// ------------------------------------
import '_client/assets/stylesheets/app.styl';

// ------------------------------------
// Dependencies
// ------------------------------------
import React from 'react';
import { development } from '_config';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';

// ------------------------------------
// Helpers and middlewares
// ------------------------------------
import storeConfigurator from '_shared/helpers/store';
import createRoutes from '_shared/routes';
import fetchComponentsData from '_shared/helpers/fetchData';
import reload from '_client/helpers/reload';

// server middlewares
let storeMiddlewares = [];

if (window.__ENV__ === 'development') {
  // push middleware for redux
  storeMiddlewares.push(createLogger());

  // start to listen
  reload(development.websocket);
}

// ------------------------------------
// Prepare data
// ------------------------------------
const MOUNT_NODE = document.getElementById('app');
const store = storeConfigurator(browserHistory, window.__INITIAL_STATE__, storeMiddlewares);
const history = syncHistoryWithStore(browserHistory, store);
const routes = (
  <Provider store={store}>
    <Router history={history}>
      { /*  get shared routes */}
      { createRoutes() }
    </Router>
  </Provider>
);

// ------------------------------------
// Subscribe on location change
// ------------------------------------

// Server provides markup and data for first page
let needFetchData = false;

history.listen(location => {
  match({routes, history, location}, (error, redirectLocation, renderProps) => {
    needFetchData
      ? fetchComponentsData(store.dispatch, renderProps.components, renderProps.params)
      : needFetchData = true;
  });
});

// ------------------------------------
// Render applciation
// ------------------------------------
render(routes, MOUNT_NODE);

