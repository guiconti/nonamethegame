import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/itemMenu.scss';

const ItemMenu = ({ active, options, top, left, onClickSeeMore, onCloseItemMenu, ...rest }) => {
  return (
    <>
      <div
        className={clsx('item-menu__close-listener', {
          'item-menu__close-listener--active': active,
        })}
        onClick={onCloseItemMenu}
        onContextMenu={onCloseItemMenu}
      />
      <div
        className={clsx('item-menu', { 'item-menu--active': active })}
        style={{ top, left }}
        {...rest}
      >
        <div className='item-menu__option' onClick={onClickSeeMore}>See more</div>
        {options &&
          options.map(option => (
            <div key={option} className='item-menu__option'>
              {option}
            </div>
          ))}
      </div>
    </>
  );
};

ItemMenu.propTypes = {
  active: PropTypes.bool,
  options: PropTypes.array,
  top: PropTypes.number,
  left: PropTypes.number,
  onClickSeeMore: PropTypes.func,
  onCloseItemMenu: PropTypes.func,
};

export default ItemMenu;
