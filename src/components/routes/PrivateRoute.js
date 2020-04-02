import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getSignedIn } from '../../reducers/selectors';
import { LOGIN } from '../../constants/routes'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const signedIn = useSelector(getSignedIn);
  
  return (
    <Route
      {...rest}
      render={props =>
        signedIn ? <Component {...props} /> : <Redirect to={LOGIN} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any
};

export default PrivateRoute;
