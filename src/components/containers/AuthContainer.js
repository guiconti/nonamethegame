import React, { useState } from 'react';
import LoginForm from '../elements/auth/LoginForm';
import RegisterForm from '../elements/auth/RegisterForm';

const AuthContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, toggleIsRegistering] = useState(false);

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
        />
      ) : (
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          toggleIsRegistering={toggleIsRegistering}
        />
      )}
    </>
  );
};

export default AuthContainer;
