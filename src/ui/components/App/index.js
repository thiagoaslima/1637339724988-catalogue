import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import CSSReset from '@tds/core-css-reset'

import Home from '../Home';
import NotFound from '../NotFound';
import Watches from '../Watches';
import Iphones from '../Iphones';

const queryClient = new QueryClient();

const App = ({ history = createBrowserHistory() }) => (
  <QueryClientProvider client={queryClient}>
    <CSSReset />
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/watches">
          <Watches />
        </Route>
        <Route path="/iphones">
          <Iphones />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
