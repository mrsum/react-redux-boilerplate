// ------------------------------
// Depends
// ------------------------------
import React from 'react';
import { Provider } from 'react-redux';
import ReactDomServer from 'react-dom/server';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// ------------------------------
// Libraries and helpers
// ------------------------------
import Html from '_server/layouts/Main';
import createRoutes from '_shared/routes';
import createStore from '_shared/helpers/store';
import fetchComponentsData from '_shared/helpers/fetchData';

// ------------------------------
// Koa middleware
// ------------------------------
export default async function(ctx) {
  // -----------------------------------
  // Prepare history, store and routes
  // -----------------------------------
  const location        = ctx.originalUrl;
  const memoryHistory   = createMemoryHistory(location);
  const store           = createStore(memoryHistory, {}, []);
  const history         = syncHistoryWithStore(memoryHistory, store);
  const routes          = createRoutes(history);

  // ------------------------------
  // Temporary variables
  // ------------------------------
  let component;
  let renderWait;

  // ------------------------------
  // Match routes
  // ------------------------------
  match({history, routes, location},  function(error, redirectLocation, renderProps) {
    if (error) {
      ctx.res.statusCode = 500;
      ctx.res.end(error.message);

      return;
    } else if (redirectLocation) {
      ctx.redirect(302, redirectLocation.pathname + redirectLocation.search);
      return;
    } else if (!renderProps) {
      ctx.res.statusCode = 404;
      ctx.res.end();

      return;
    }

    renderWait = fetchComponentsData(
      store.dispatch,
      renderProps.components,
      renderProps.params
    ).then(() => {
      component = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
    });
  });

  if (renderWait) {
    let html = await renderWait;
    ctx.body = '<!doctype html>\n' +
      ReactDomServer.renderToString(<Html component={component} store={store} />);
  }
}
