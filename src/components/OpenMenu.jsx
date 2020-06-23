import React from 'react';
import { ReactComponent as Menu } from '../icons/menu.svg';
const OpenMenu = () => {
  return (
    <button className="mobile-menu-icon" onClick={(e) => {
      document.querySelector('.header-menu').classList.add('flex');
      document.querySelector('.mobile-close-icon').classList.add('inline-block');
      document.querySelector('.mobile-menu-icon').classList.add('hide');
    }}>
      <Menu fill="#1A202C" />
    </button>
  )
}

export default OpenMenu;