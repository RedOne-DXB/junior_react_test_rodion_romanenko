import React from 'react';
import img1 from './images/emptyCart.svg';
import s from './Product.module.css';

function CartImage() {
  return (
    <a href="../../../public/index.html" className={s.cartButton}>
      <img src={img1} alt="cart" />
    </a>
  );
}

export default CartImage;

// import React, { Component } from "react";
// import s from './Product.module.css';
// import img1 from './images/emptyCart.svg';

// class CartImage extends Component {

//     state = {
//         visible: false,
//     }

//     show = () => {
//         this.setState({visible: !this.state.visible});
//     }

//     render() {
//         return (
//             <a href="../../../public/index.html" className={s.cartButton} onMouseEnter={this.show}>
//       <img src={img1} alt="cart" />
//     </a>
//         )
//     }
// }

// export default CartImage;
