import PropTypes from 'prop-types';

const Product = ({ url, title, price }) => {
  return (
    <div>
      <div>
        <img src={url} alt={title} width="320" />
      </div>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
};

Product.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
