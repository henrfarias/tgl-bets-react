import React from 'react';
import BetCardStyled, { CardDecoration } from './style';
import IBet from '../../Interfaces/IBets';


const BetCard: React.FC<{ bet: IBet }> = ({ bet }) => {
  return (
    <BetCardStyled color={bet.color}>
      <CardDecoration color={bet.color} />
      <strong>{bet.numbers.toString()}</strong>
      <span>
        {bet.date} - ({`R$${bet.price.toFixed(2)}`.replace('.', ',')})
      </span>
      <h3>{bet.type}</h3>
    </BetCardStyled>
  );
};

export default BetCard;
