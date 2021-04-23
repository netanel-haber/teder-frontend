import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home className="container" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
