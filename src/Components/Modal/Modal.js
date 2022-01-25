import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import Header from '../Header/Header';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  // componentDidMount() {
  //   console.log('Modal componentDidMount');
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   console.log('Modal componentWillUnmount');
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  // handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     console.log('Нажали ESC, нужно закрыть модалку');

  //     this.props.onClose();
  //   }
  // };

  // handleBackdropClick = event => {
  //   // console.log('Кликнули в бекдроп');

  //   // console.log('currentTarget: ', event.currentTarget);
  //   // console.log('target: ', event.target);

  //   if (event.currentTarget === event.target) {
  //     this.props.onClose();
  //   }
  // };

  // render() {
  //   return createPortal(
  //     <div className={s.backdrop}>
  //       <div className={s.content}>{this.props.children}</div>
  //     </div>,
  //     modalRoot,
  //   );
  // }

  render() {
    return (
      <div className={s.backdrop}>
        <div className={s.content}>{this.props.children}</div>
      </div>
      // modalRoot,
    );
  }
}
