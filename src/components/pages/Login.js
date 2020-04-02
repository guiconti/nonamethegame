import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AuthContainer from '../containers/AuthContainer';
import './styles/login.scss';

const Login = () => {
  return (
    <Grid container component="main" className="root" xs={12}>
      <Grid item xs={false} sm={4} md={7} className="image" />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <AuthContainer />
      </Grid>
    </Grid>
  );
};

export default Login;
