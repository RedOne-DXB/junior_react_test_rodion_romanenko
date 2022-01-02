import PropTypes from 'prop-types';
import s from './Product.module.css';
import React, { useState } from 'react';
import CartImage from './Image';
// import img1 from './images/emptyCart.svg';

// class Product extends Component {

//   state = {
//             visible: false,
//         }

//         show = () => {
//             this.setState({visible: true});
//         }
//         hide = () => {
//           this.setState({visible: false});
//         }

// render() {

//   const {url, title, price} = this.props

//   return (
//     <div className={[s.container]} onMouseEnter={this.show} onMouseLeave={this.hide}>
//       <a href="./public/index.html" className={s.imageWrapper}>
//         <img src={url} alt={title} width="320" />
//       </a>
//       <CartImage />
//       <div className={s.content}>
//         <div className={s.title}>{title}</div>
//         <div className={s.price}>{price}</div>
//       </div>
//     </div>
//   );
// }

// };

const Product = ({ url, title, price }) => {
  const [isShown, setIsShown] = useState(false);
  const toggleHover = () => setIsShown(!isShown);
  const containerClass = isShown ? `${s.containerHovered}` : `${s.container}`;

  return (
    <div
      className={containerClass}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <a href="./public/index.html" className={s.imageWrapper}>
        <img src={url} alt={title} width="320" />
      </a>
      {isShown && <CartImage />}
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
