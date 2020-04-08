import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../shared/Avatar';
import Title from '../shared/Title';
import Button from '../shared/Button';
import Link from '../shared/Link';
import {
  TextField,
  Grid
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
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
        <Alert className="register__error" onClose={onCloseError} severity="error">
          Email already in use
        </Alert>
      )}
      <form className="register__form" noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
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
          variant="outlined"
          margin="normal"
          required
          fullWidth
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
          variant="outlined"
          margin="normal"
          required
          fullWidth
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
