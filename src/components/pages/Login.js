import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import AuthContainer from '../containers/auth/AuthContainer';
import './styles/login.scss';

const Login = () => {
  return (
    <Grid container component="main" className="login-page">
      <Grid item xs={false} sm={4} md={7} className="login-page__image" />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <AuthContainer />
      </Grid>
    </Grid>
  );
};

export default Login;
