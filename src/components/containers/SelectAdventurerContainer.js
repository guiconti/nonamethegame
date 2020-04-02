import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../elements/auth/LoginForm';
import RegisterForm from '../elements/auth/RegisterForm';
import { fetchRegister, fetchSignIn } from '../../actions/authActions';
import { getLoading } from '../../reducers/selectors';
import ListAdventurers from '../elements/adventurer/ListAdventurers';

const SelectAdventurerContainer = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ListAdventurers />
    </>
  );
};

export default SelectAdventurerContainer;
