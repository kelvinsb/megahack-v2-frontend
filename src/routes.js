import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MyCard from './pages/MyCard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/MyCard" component={MyCard} />
      </Switch>
    </BrowserRouter>
  );
}
