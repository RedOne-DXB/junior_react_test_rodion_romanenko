// import React from "react";
// import Product from "./Components/Product";
// import ProductList from './Components/ProductList/ProductList';
// import productItems from './productItems.json';
import Section from './Components/Section/Section';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import ProductPage from './Components/ProductPage/ProductPage';
import Modal from './Components/Modal/Modal';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Section title="Category name">
          {/* <ProductList products={productItems} /> */}
          <ProductPage />
        </Section>
      </Container>
    );
  }
}

export default App;
