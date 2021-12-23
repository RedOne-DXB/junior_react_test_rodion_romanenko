import PropTypes from 'prop-types';
import Product from './Product';

function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Product
            url={product.url}
            title={product.title}
            price={product.price}
          />
        </li>
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ProductList;
