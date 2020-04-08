import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/link.scss';

const Link = ({
  children,
  className,
  large,
  small,
  ...rest
}) => {
  return (
    <a
      className={clsx(
        'link',
        className,
        { 'link--large': large },
        { 'link--small': small }
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
};

export default Link;
