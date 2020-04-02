import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.scss';

const Header = ({ children, ...rest }) => {
  return (
    <h1 className="header" {...rest}>
      {children}
    </h1>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
