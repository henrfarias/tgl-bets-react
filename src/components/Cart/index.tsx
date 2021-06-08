import React from "react";
import createId from "../../helpers/createId";
import IBets from "../../Interfaces/IBets";
import CartItem from "../CartItem";
import CartStyled, { CartItems, CartTotal, SaveCartButton, Title } from "./styles";

const Cart: React.FC<{cartItems: IBets[], onDelete: (id: number) => void}> = ({ cartItems, onDelete }) => {
  let total = 0;
  return (
    <CartStyled>
      <Title>Cart</Title>
      <CartItems>
        {cartItems.map((bet) => {
          total += bet.price;
          return <CartItem key={createId()} bet={bet} onDelete={onDelete} />
        })}
      </CartItems>
      <CartTotal>
        <strong>Cart</strong> total: R$
        {total.toFixed(2).replace(".", ",")}
      </CartTotal>
      <SaveCartButton>Save <img src="./icons/green-arrow-right.svg" alt="Salvar carrinho" /></SaveCartButton>
    </CartStyled>
  );
};

export default Cart;
