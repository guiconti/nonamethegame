import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../shared/Avatar';
import Title from '../shared/Title';
import Alert from '../shared/Alert';
import TextField from '../shared/TextField';
import Button from '../shared/Button';
import Link from '../shared/Link';
import {
  Grid
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './styles/loginForm.scss';

const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  toggleIsRegistering,
  loading,
  signIn,
  openError,
  onCloseError,
}) => {
  return (
    <div className="login">
      <Avatar outlined className="login__avatar">
        <LockOutlinedIcon fontSize="inherit" />
      </Avatar>
      <Title>
        Sign in
      </Title>
      {openError && (
        <Alert className="login__error" onClose={onCloseError} type="error">
          Invalid Email/Password
        </Alert>
      )}
      <form className="login__form" noValidate>
        <TextField 
          fullWidth
          required
          autoFocus
          outlined
          className="login__text-field"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            onCloseError();
          }}
        />
        <TextField
          fullWidth
          required
          outlined
          className="login__text-field"
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            onCloseError();
          }}
        />
        <Button
          type="submit"
          fullWidth
          className="login__submit"
          outlined
          loading={loading}
          disabled={loading}
          onClick={signIn}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link disabled={loading}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link disabled={loading} onClick={() => toggleIsRegistering(true)}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  toggleIsRegistering: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  openError: PropTypes.bool.isRequired,
  onCloseError: PropTypes.func.isRequired,
};

export default LoginForm;
