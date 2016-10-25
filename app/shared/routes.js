'use strict';

// Depends
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layout
import MainLayout from '_shared/containers/Layouts/Main';

// Pages
import IndexPage from '_shared/containers/Pages/Index';
import TrackPage from '_shared/containers/Pages/Track';

/**
 * Create routes
 * @param  {[type]} history [description]
 * @return {[type]}         [description]
 */
export default function() {
  return (
    <Route path='/' component={MainLayout}>
      <IndexRoute component={IndexPage} />
      <Route path='/track/*' component={TrackPage} />
    </Route>
  );
}
