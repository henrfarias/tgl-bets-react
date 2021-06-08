import React from "react";
import IBets from "../../Interfaces/IBets";
import CartItemStyled, {
  CartBody,
  DeleteCartItem,
  InfoBet,
  NumbersOfBet,
  Price,
  TypeBet,
} from "./styles";

const CartItem: React.FC<{ bet: IBets, onDelete: (id: number) => void }> = ({ bet, onDelete }) => {
  return (
    <CartItemStyled>
      <DeleteCartItem onClick={() => onDelete(bet.id)}>
        <img src="./icons/trash.svg" alt="Deletar item" />
      </DeleteCartItem>
      <CartBody color={bet.color}>
        <NumbersOfBet>{bet.numbers}</NumbersOfBet>
        <InfoBet>
          <TypeBet>{bet.type}</TypeBet>
          <Price>R${bet.price.toFixed(2).replace(".", ",")}</Price>
        </InfoBet>
      </CartBody>
    </CartItemStyled>
  );
};

export default CartItem;
