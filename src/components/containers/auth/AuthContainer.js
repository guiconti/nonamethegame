import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../elements/auth/LoginForm';
import RegisterForm from '../../elements/auth/RegisterForm';
import { fetchRegister, fetchSignIn, clearError } from '../../../actions/authActions';
import { getAuthLoading, getAuthShowError } from '../../../reducers/selectors';

const AuthContainer = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, toggleIsRegistering] = useState(false);
  const loading = useSelector(getAuthLoading);
  const showError = useSelector(getAuthShowError);

  useEffect(() => {
    dispatch(clearError());
  }, []);

  const register = (e) => {
    e.preventDefault();
    dispatch(fetchRegister({ email, password }));
    if (showError) {
      dispatch(clearError());
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    dispatch(fetchSignIn({ email, password }));
    if (showError) {
      dispatch(clearError());
    }
  };

  const onCloseError = () => {
    if (showError) {
      dispatch(clearError());
    }
  };

  return (
    <>
      {isRegistering ? (
        <RegisterForm
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          toggleIsRegistering={toggleIsRegistering}
          loading={loading}
          register={register}
          openError={showError}
          onCloseError={onCloseError}
        />
      ) : (
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          toggleIsRegistering={toggleIsRegistering}
          loading={loading}
          signIn={signIn}
          openError={showError}
          onCloseError={onCloseError}
        />
      )}
    </>
  );
};

export default AuthContainer;
