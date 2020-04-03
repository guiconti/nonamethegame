import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  CircularProgress,
  TextField,
  Link,
  Grid,
  Typography
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
  register
}) => {
  return (
    <div className="register">
      <Avatar className="register__avatar">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
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
          onChange={e => setEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="register__submit"
          disabled={loading}
          onClick={register}
        >
          {loading ? <CircularProgress /> : 'Register'}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link variant="body2" disabled={loading}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link variant="body2" disabled={loading} onClick={() => toggleIsRegistering(false)}>
              {'Already have an account? Sign In'}
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
  register: PropTypes.func.isRequired
};

export default RegisterForm;
