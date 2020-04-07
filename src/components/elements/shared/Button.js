import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import LoadingIcon from './LoadingIcon';
import './styles/button.scss';

const Button = ({ children, fullWidth, transparent, className, loading, large, small, ...rest }) => {
  return (
    <button
      className={clsx(
        'button',
        className,
        { 'button--full-width': fullWidth },
        { 'button--transparent': transparent },
        { 'button--loading': loading },
        { 'button--large': large },
        { 'button--small': small }
      )}
      {...rest}
    >
      {loading ? <LoadingIcon transparent large small /> : <> {children} </>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  transparent: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
};

export default Button;
