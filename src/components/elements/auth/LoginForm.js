import React from 'react';
import PropTypes from 'prop-types';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Link from '../shared/Link';
import {
  Avatar,
  TextField,
  Grid
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
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
      <Avatar className="login__avatar">
        <LockOutlinedIcon />
      </Avatar>
      <Title>
        Sign in
      </Title>
      {openError && (
        <Alert className="login__error" onClose={onCloseError} severity="error">
          Invalid Email/Password
        </Alert>
      )}
      <form className="login__form" noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            onCloseError();
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
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
