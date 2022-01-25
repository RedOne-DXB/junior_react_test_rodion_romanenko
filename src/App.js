import React from 'react';
// import Product from "./Components/Product";
import ProductList from './Components/ProductList/ProductList';
import productItems from './productItems.json';
import Section from './Components/Section/Section';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
// import ProductPage from './Components/ProductPage/ProductPage';
import Modal from './Components/Modal/Modal';
import ModalCart from './Components/Modal/ModalCart';
import { Component } from 'react/cjs/react.production.min';
import IconButton from './IconButton/IconButton';
import { ReactComponent as CartIcon } from './icons/cart.svg';
import { ReactComponent as CurrencyIcon } from './icons/currency.svg';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <Header>
          <IconButton aria-label="Switch currency">
            <CurrencyIcon />
          </IconButton>
          <IconButton
            onClick={this.toggleModal}
            aria-label="Open shopping cart"
          >
            <CartIcon />
          </IconButton>
        </Header>
        <Section title="Category name">
          <ProductList products={productItems} />
          {/* <ProductPage /> */}
        </Section>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalCart />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
