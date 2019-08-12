import React from 'react';
import { Route, Switch } from 'react-router';

import NavBar from '../components/NavBar';
import Home from '../pages/Home';


const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default routes;