import React from 'react';
import BetCardStyled, { CardDecoration } from './style';
import IBet from '../../Interfaces/IBets';
import dateFormated from '../../helpers/dateFormated';
import arrayToString from '../../helpers/arrayToString';

const BetCard: React.FC<{ bet: IBet }> = ({ bet }) => {
  return (
    <BetCardStyled color={bet.color}>
      <CardDecoration color={bet.color} />
      <strong>{arrayToString(bet.numbers)}</strong>
      <span>
        {bet.date && dateFormated(bet.date)} - (
        {`R$${bet.price.toFixed(2)}`.replace('.', ',')})
      </span>
      <h3>{bet.type}</h3>
    </BetCardStyled>
  );
};

export default BetCard;
