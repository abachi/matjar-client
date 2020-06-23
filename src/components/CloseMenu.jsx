import React from 'react';
import { ReactComponent as CloseIcon } from '../icons/close.svg';

const CloseMenu = () => {
  return (
    <button className="mobile-close-icon" onClick={(e) => {
      document.querySelector('.header-menu').classList.remove('flex');
      document.querySelector('.mobile-menu-icon').classList.remove('hide');
      document.querySelector('.mobile-close-icon').classList.remove('inline-block');
    }}>
      <CloseIcon fill="#1A202C" />
    </button>
  )
}

export default CloseMenu;