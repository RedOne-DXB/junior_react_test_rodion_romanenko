// import React from "react";
// import Product from "./Components/Product";
import ProductList from './Components/ProductList';
import productItems from './productItems.json';
import Section from './Components/Section';
import Header from './Components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Section title="Category name">
        <ProductList products={productItems} />
      </Section>
    </div>
  );
}
