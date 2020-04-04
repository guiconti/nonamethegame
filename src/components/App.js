/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Game from './pages/Game';
import Login from './pages/Login';
import Adventurers from './pages/Adventurers';
import CreateAdventurer from './pages/CreateAdventurer';
import NotFound from './pages/NotFound';
import { HOME, ADVENTURERS, NEW_ADVENTURER, LOGIN } from '../constants/routes';
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
      <PrivateRoute exact path={HOME} component={Game} />
      <PrivateRoute exact path={ADVENTURERS} component={Adventurers} />
      <PrivateRoute exact path={NEW_ADVENTURER} component={CreateAdventurer} />
      <Route exact path={LOGIN} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
