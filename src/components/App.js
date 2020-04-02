/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Adventurers from './pages/Adventurers';
import NotFound from './pages/NotFound';
import { HOME, ADVENTURERS, LOGIN } from '../constants/routes';
import Cookies from 'js-cookie';
import { signedIn, signedOut } from '../actions/authActions';
import { hot } from 'react-hot-loader';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Cookies.get('session')) {
      dispatch(signedOut());
    } else {
      dispatch(signedIn());
    }
  }, []);

  return (
    <Switch>
      <PrivateRoute exact path={HOME} component={Home} />
      <PrivateRoute exact path={ADVENTURERS} component={Adventurers} />
      <Route exact path={LOGIN} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
