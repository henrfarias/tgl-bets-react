import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useHistory } from 'react-router-dom';
import createId from '../../helpers/createId';
import notify from '../../helpers/toast';

import IBets from '../../Interfaces/IBets';
import CartItem from '../CartItem';
import CartStyled, {
  CartItems,
  CartTotal,
  SaveCartButton,
  Title,
} from './styles';
import { addGamesInHistory } from '../../store/reducers/users.reducer';
import EmptyCart from '../EmptyCart';

const Cart: React.FC<{
  cartItems: IBets[];
  onDelete: (id: number) => void;
  minCartSave: number;
}> = ({ cartItems, onDelete, minCartSave }) => {
  const history = useHistory();
  const currentUserId = useAppSelector((state) => state.logged.id);
  const dispatch = useAppDispatch();
  let total = 0;

  const saveCartItems = () => {
    if (total < minCartSave) {
      notify('error' ,`O valor mínimo de compra é R$${minCartSave}`);
      return;
    }
    if (minCartSave === 0) {
      notify('error', 'Escolha o jogo para começar.');
      return;
    }
    dispatch(addGamesInHistory({ id: currentUserId, bets: cartItems }));
    history.push('/history-games');
  };

  return (
    <CartStyled>
      <Title>Cart</Title>
      <CartItems>
        {cartItems.length === 0 && <EmptyCart />}
        {cartItems.map((bet) => {
          total += bet.price;
          return <CartItem key={createId()} bet={bet} onDelete={onDelete} />;
        })}
      </CartItems>
      <CartTotal>
        <strong>Cart</strong> total: R$
        {total.toFixed(2).replace('.', ',')}
      </CartTotal>
      <SaveCartButton
        onClick={saveCartItems}
        isDisabled={minCartSave === 0 || total < minCartSave}
      >
        Save <img src='./icons/green-arrow-right.svg' alt='Salvar carrinho' />
      </SaveCartButton>
    </CartStyled>
  );
};

export default Cart;
