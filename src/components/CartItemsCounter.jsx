import React from 'react';
import { ReactComponent as CartIcon } from '../icons/cart.svg';

const CloseMenu = ({ items }) => {
  return (
    <>
      <span>
        <CartIcon stroke="#1a202c" />
      </span>
      {items.length > 0 && <span className="items-quantity">{items.length}</span>}
    </>
  )
}

export default CloseMenu;