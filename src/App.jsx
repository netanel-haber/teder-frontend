import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Room } from './pages/Room';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home className="container" />
        </Route>
        <Route path="/rooms/:roomId">
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
