import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function routes() {
  const routeItems = [
    {
      path: '/',
      component: Page1,
    },
    {
      path: '/page-2',
      component: Page2,
    },
  ];

  return (
    <Switch>
      {routeItems.map((route) => (
        <Route
          exact
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default routes;
