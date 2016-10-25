'use strict';

// ------------------------------------
// Dependencies
// ------------------------------------
import '_client/assets/stylesheets/app.styl';
import React from 'react';
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

// ------------------------------------
// Prepare data
// ------------------------------------
const MOUNT_NODE = document.getElementById('app');
const logger = createLogger();
const store = storeConfigurator(browserHistory, {}, [logger]);
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
history.listen(location => {
  match({ routes, history, location }, (error, redirectLocation, renderProps) => {
    fetchComponentsData(
      store.dispatch,
      renderProps.components,
      renderProps.params
    );
  });
});

// ------------------------------------
// Render applciation
// ------------------------------------
render(routes, MOUNT_NODE);
