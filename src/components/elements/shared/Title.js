import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/title.scss';

const Title = ({ children, className, ...rest }) => {
  return (
    <h4 className={clsx('title', className)} {...rest}>
      {children}
    </h4>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
