import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/avatar.scss';

const Avatar = ({
  children,
  className,
  outlined,
  color,
  large,
  small,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'avatar',
        className,
        { 'avatar--outlined': outlined },
        { 'avatar--large': large },
        { 'avatar--small': small }
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
  color: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
};

export default Avatar;
