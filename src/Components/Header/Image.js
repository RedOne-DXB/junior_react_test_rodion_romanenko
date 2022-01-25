import React from 'react';
import img1 from './images/logo.svg';
import img2 from './images/currency.svg';
import img3 from './images/cart.svg';
import s from './Header.module.css';

function LogoImage() {
  return (
    <div>
      <img src={img1} alt="logo" />
    </div>
  );
}

function CurrencyImage() {
  return (
    <div>
      <img src={img2} alt="currency switch" />
    </div>
  );
}

function CartImage() {
  return (
    <a href="../../../public/index.html" className={s.cartButton}>
      <img src={img3} alt="cart" />
    </a>
  );
}

export { LogoImage, CartImage, CurrencyImage };

// export default Image;
