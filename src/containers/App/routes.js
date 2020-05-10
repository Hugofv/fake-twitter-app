import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Home from '../Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
