import React from 'react';
import EmptyCartStyled from './styles';

// import { Container } from './styles';

const EmptyCart: React.FC = () => {
  return (
    <EmptyCartStyled>
      <img src='./icons/empty-cart.svg' alt='Carrinho vazio' />
      <p>O carrinho está vazio.</p>
    </EmptyCartStyled>
  );
}

export default EmptyCart;