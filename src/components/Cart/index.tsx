import React from "react";
import CartItem from "../CartItem";
import CartStyled, { CartItems, CartTotal, SaveCartButton, Title } from "./styles";

const DUMMY_BETS = [
  {
    type: "Lotofácil",
    numbers: [1, 2, 4, 6, 10, 20, 21, 25],
    price: 2.5,
    color: "#7F3992",
  },
  {
    type: "Mega-Sena",
    numbers: [1, 2, 4, 6, 10, 20, 21, 25],
    price: 2.5,
    color: "#01AC66",
  },
  {
    type: "Quina",
    numbers: [1, 2, 4, 6, 10, 20, 21, 25],
    price: 2.5,
    color: "#F79C31",
  },
];

const DUMMY_TOTAL = 7.5;

const Cart: React.FC = () => {
  return (
    <CartStyled>
      <Title>Cart</Title>
      <CartItems>
        {DUMMY_BETS.map((bet) => (
          <CartItem key={Math.random() * 1000} bet={bet} />
        ))}
      </CartItems>
      <CartTotal>
        <strong>Cart</strong> total: R$
        {DUMMY_TOTAL.toFixed(2).replace(".", ",")}
      </CartTotal>
      <SaveCartButton>Save <img src="./icons/green-arrow-right.svg" alt="Salvar carrinho" /></SaveCartButton>
    </CartStyled>
  );
};

export default Cart;
