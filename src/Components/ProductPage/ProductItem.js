import React, { Fragment } from 'react';
import s from './ProductPage.module.css';
// import productItems from '../../productItems.json';

// let products = productItems.map(product => console.log(product))

function ProductItem({ ...products }) {
  return (
    <Fragment>
      <div className={s.imageBody}>
        {/* <img src={product.url} alt={product.title}/> */}
      </div>
      <div className={s.contentBody}>
        <h2>Apollo</h2>
        <h3>Running Short</h3>
        <h4>Size:</h4>
        <div className={s.sizeBody}>
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
        </div>
        <h4>Price:</h4>
        {/* <p>{price}</p> */}
        <button>Add to cart</button>
        <p>
          Find stunning women's cocktail dresses and party dresses. Stand out in
          lace and metallic cocktail dresses and party dresses from all your
          favorite brands.
        </p>
      </div>
    </Fragment>
    // products.map(product => (

    // ))
  );
}

export default ProductItem;
