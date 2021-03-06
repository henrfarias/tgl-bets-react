import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/axios';
import createId from '../../helpers/createId';
import notify from '../../helpers/toast';

import CartItem from '../CartItem';
import CartStyled, {
  CartItems,
  CartTotal,
  SaveCartButton,
  Title,
} from './styles';
import EmptyCart from '../EmptyCart';
import ICart from '../../Interfaces/ICart';

const Cart: React.FC<ICart> = ({ cartItems, onDelete, minCartSave }) => {
  const history = useHistory();
  let total = 0;

  const saveCartItems = async () => {
    if (total < minCartSave) {
      notify('error', `O valor mínimo de compra é R$${minCartSave}`);
      return;
    }
    if (minCartSave === 0) {
      notify('error', 'Escolha o jogo para começar.');
      return;
    }
    try {
      const bets = cartItems.map(bet => { 
        return {
          game_id: bet.game_id,
          numbers: JSON.stringify(bet.numbers),
          current_price: bet.current_price
        }
      })
      await api.post('/bets', {
          bets: bets  
      },
      {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      }
      );
      notify('success', '🎉 Jogos salvos!');
      history.push('/history-games');
    } catch (error) {
      notify('error', 'não foi possível fazer sua aposta, sinto muito. =(')
      console.log(error.message);
    }
  };

  return (
    <CartStyled>
      <Title>Cart</Title>
      <CartItems>
        {cartItems.length === 0 && <EmptyCart />}
        {cartItems.map((bet) => {
          total += bet.current_price;
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
