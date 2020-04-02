/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { HOME, LOGIN } from '../constants/routes';
import { hot } from 'react-hot-loader';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const App = () => {
  return (
    <Switch>
      <PrivateRoute exact path={HOME} component={Home} />
      <Route exact path={LOGIN} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
