// import React, {useState} from 'react';
import HeaderNavTabs from '../HeaderNavTabs/HeaderNavTabs';
import { LogoImage, CartImage, CurrencyImage } from './Image';
import Modal from '../Modal/Modal';
// import App from '../../App';

import s from './Header.module.css';
import { useState } from 'react';

function Header({ children }) {
  const [isShown, setIsShown] = useState(false);
  const toggleHover = () => setIsShown(!isShown);

  return (
    <header className={s.header}>
      <div className={s.tabContainer}>
        <HeaderNavTabs />
        <LogoImage />
        <div className={s.buttonWrapper}>
          <CurrencyImage />
          <CartImage onClick={toggleHover} />
          {toggleHover && <Modal />}
        </div>
      </div>
    </header>
  );
}

export default Header;

// state = {
//   showModal: false
// }

// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };
