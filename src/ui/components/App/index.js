import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../Home';
import NotFound from '../NotFound';

const App = ({ history = createBrowserHistory() }) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
