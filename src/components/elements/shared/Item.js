import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/item.scss';

const Item = ({ children, className, xs, sm, md, lg, xl, justifySelf, alignSelf, ...rest }) => {
  return (
    <div
      className={clsx(
        'item',
        { ['item-' + xs]: xs },
        { ['item-sm-' + sm]: sm },
        { ['item-md-' + md]: md },
        { ['item-lg-' + lg]: lg },
        { ['item-xl-' + xl]: xl },
        className
      )}
      style={{
        'justify-self': justifySelf,
        'align-self': alignSelf,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  justifySelf: PropTypes.string,
  alignSelf: PropTypes.string,
};

export default Item;
