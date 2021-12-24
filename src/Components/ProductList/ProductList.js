import PropTypes from 'prop-types';
import Product from '../Product/Product';
import s from './ProductList.module.css';

function ProductList({ products }) {
  return (
    <ul className={s.list}>
      {products.map(product => (
        <li className={s.listItem} key={product.id}>
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
