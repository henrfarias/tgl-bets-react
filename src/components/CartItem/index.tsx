import React from "react";
import arrayToString from "../../helpers/arrayToString";
import IBet from "../../Interfaces/IBets";
import IBets from "../../Interfaces/IBets";
import CartItemStyled, {
  CartBody,
  DeleteCartItem,
  InfoBet,
  NumbersOfBet,
  Price,
  TypeBet,
} from "./styles";

const CartItem: React.FC<{ bet: IBets, onDelete: (bet: IBet) => void }> = ({ bet, onDelete }) => {
  return (
    <CartItemStyled>
      <DeleteCartItem onClick={() => onDelete(bet)}>
        <img src="./icons/trash.svg" alt="Deletar item" />
      </DeleteCartItem>
      <CartBody color={bet.color}>
        <NumbersOfBet>{arrayToString(bet.numbers)}</NumbersOfBet>
        <InfoBet>
          <TypeBet>{bet.type}</TypeBet>
          <Price>R${bet.price.toFixed(2).replace(".", ",")}</Price>
        </InfoBet>
      </CartBody>
    </CartItemStyled>
  );
};

export default CartItem;
