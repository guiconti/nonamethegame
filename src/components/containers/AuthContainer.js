import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../elements/auth/LoginForm';
import RegisterForm from '../elements/auth/RegisterForm';
import { fetchRegister, fetchSignIn } from '../../actions/authActions';

const AuthContainer = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, toggleIsRegistering] = useState(false);

  const register = (e) => {
    e.preventDefault();
    dispatch(fetchRegister({ email, password }));
  }
  
  const signIn = (e) => {
    e.preventDefault();
    dispatch(fetchSignIn({ email, password }));
  }

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
          register={register}
        />
      ) : (
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          toggleIsRegistering={toggleIsRegistering}
          signIn={signIn}
        />
      )}
    </>
  );
};

export default AuthContainer;
