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
