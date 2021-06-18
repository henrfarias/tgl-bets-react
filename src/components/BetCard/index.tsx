import React from 'react';
import BetCardStyled, { CardDecoration } from './style';
import IBet from '../../Interfaces/IBets';
import dateFormated from '../../helpers/dateFormated';
import arrayToString from '../../helpers/arrayToString';

const BetCard: React.FC<{ bet: IBet }> = ({ bet }) => {
  return (
    <BetCardStyled color={bet.game?.color}>
      <CardDecoration color={bet.game?.color} />
      <strong>{arrayToString(bet.numbers)}</strong>
      <span>
        {bet.created_at && dateFormated(bet.created_at)} - (
        {`R$${bet.current_price.toFixed(2)}`.replace('.', ',')})
      </span>
      <h3>{bet.game?.type}</h3>
    </BetCardStyled>
  );
};

export default BetCard;
