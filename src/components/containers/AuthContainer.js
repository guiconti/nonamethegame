import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailSelector, passwordSelector, showPasswordSelector } from '../../reducers/selectors';
import LoginForm from '../elements/auth/LoginForm'

const AuthContainer = () => {
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);
  const showPassword = useSelector(showPasswordSelector);
  const dispatch = useDispatch();

  return (
    <LoginForm />
  );
};

export default AuthContainer;
