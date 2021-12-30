import React from 'react';
import img1 from './images/cart.svg';
import s from './Product.module.css';

function CartImage() {
  return (
    <a href="../../../public/index.html" className={s.cartButton}>
      <img src={img1} alt="cart" />
    </a>
  );
}

export default CartImage;
