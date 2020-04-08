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
import './styles/registerForm.scss';

const RegisterForm = ({
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
  toggleIsRegistering,
  loading,
  register,
  openError,
  onCloseError,
}) => {
  return (
    <div className="register">
      <Avatar outlined className="register__avatar">
        <LockOutlinedIcon fontSize="inherit" />
      </Avatar>
      <Title>
        Register
      </Title>
      {openError && (
        <Alert className="register__error" onClose={onCloseError} type="error">
          Email already in use
        </Alert>
      )}
      <form className="register__form" noValidate>
        <TextField
          required
          fullWidth
          outlined
          className="login__text-field"
          id="registerEmail"
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
          required
          fullWidth
          outlined
          className="login__text-field"
          name="password"
          label="Password"
          type="password"
          id="registerPassword"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            onCloseError();
          }}
        />
        <TextField
          required
          fullWidth
          outlined
          className="register__text-field"
          name="confirmPassword"
          label="Confirm password"
          type="password"
          id="confirmPassword"
          autoComplete="confirm-password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            onCloseError();
          }}
        />
        <Button
          type="submit"
          fullWidth
          className="register__submit"
          outlined
          loading={loading}
          disabled={loading}
          onClick={register}
        >
          Register
        </Button>
        <Grid container>
          <Grid item xs>
            <Link disabled={loading}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link disabled={loading} onClick={() => toggleIsRegistering(false)}>
              Already have an account? Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  toggleIsRegistering: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  openError: PropTypes.bool.isRequired,
  onCloseError: PropTypes.func.isRequired,
};

export default RegisterForm;
