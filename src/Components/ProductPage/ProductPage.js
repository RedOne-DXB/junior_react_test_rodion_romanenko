import React from 'react';
import ProductItem from './ProductItem';
import s from './ProductPage.module.css';
// import productItems from '../../productItems.json';

function ProductPage({ children }) {
  return (
    <div className={s.body}>
      {/* <ProductItem products={productItems} /> */}
      <ProductItem />
    </div>
  );
}

export default ProductPage;
