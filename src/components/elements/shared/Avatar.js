import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/avatar.scss';

const Avatar = ({
  children,
  className,
  outlined,
  small,
  large,
  extraLarge,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'avatar',
        { 'avatar--outlined': outlined },
        { 'avatar--small': small },
        { 'avatar--large': large },
        { 'avatar--extra-large': extraLarge },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  outlined: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  extraLarge: PropTypes.bool,
};

export default Avatar;
