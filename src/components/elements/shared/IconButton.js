import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/iconButton.scss';

const IconButton = ({
  children,
  className,
  large,
  small,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'icon-button',
        className,
        { 'icon-button--large': large },
        { 'icon-button--small': small }
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
};

export default IconButton;
