import PropTypes from 'prop-types';
import s from './Product.module.css';

const Product = ({ url, title, price }) => {
  return (
    <div className={s.container}>
      <a href="./public/index.html" className={s.imageWrapper}>
        <img src={url} alt={title} width="320" />
      </a>
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
