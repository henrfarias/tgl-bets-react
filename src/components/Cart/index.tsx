import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import createId from '../../helpers/createId';

import IBets from '../../Interfaces/IBets';
import CartItem from '../CartItem';
import CartStyled, {
  CartItems,
  CartTotal,
  SaveCartButton,
  Title,
} from './styles';
import { addGamesInHistory } from '../../store/reducers/users.reducer';

const Cart: React.FC<{
  cartItems: IBets[];
  onDelete: (id: number) => void;
  minCartSave: number;
}> = ({ cartItems, onDelete, minCartSave }) => {
  const currentUserId = useAppSelector((state) => state.logged.id);
  const dispatch = useAppDispatch();
  let total = 0;

  const saveCartItems = () => {
    if (total < minCartSave) {
      console.log(`O valor mínimo de compra é ${minCartSave}`);
      return;
    }
    dispatch(addGamesInHistory({id: currentUserId, bets: cartItems}));
  };

  return (
    <CartStyled>
      <Title>Cart</Title>
      <CartItems>
        {cartItems.map((bet) => {
          total += bet.price;
          return <CartItem key={createId()} bet={bet} onDelete={onDelete} />;
        })}
      </CartItems>
      <CartTotal>
        <strong>Cart</strong> total: R$
        {total.toFixed(2).replace('.', ',')}
      </CartTotal>
      <SaveCartButton onClick={saveCartItems}>
        Save <img src='./icons/green-arrow-right.svg' alt='Salvar carrinho' />
      </SaveCartButton>
    </CartStyled>
  );
};

export default Cart;
