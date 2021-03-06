import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/header.scss';

const Header = ({ children, className, ...rest }) => {
  return (
    <h1 className={clsx('header', className)} {...rest}>
      {children}
    </h1>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Header;
