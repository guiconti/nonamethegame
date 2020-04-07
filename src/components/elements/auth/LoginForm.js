import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import {
  Avatar,
  TextField,
  Link,
  Grid,
  Typography
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
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
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
          transparent
          loading={loading}
          disabled={loading}
          onClick={signIn}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link variant="body2" disabled={loading}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link variant="body2" disabled={loading} onClick={() => toggleIsRegistering(true)}>
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
