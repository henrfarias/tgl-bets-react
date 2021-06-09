import React from 'react';
import EmptyStyled from './styles';

const Empty: React.FC = () => {
  return (
    <EmptyStyled>
      <img src='./icons/empty.svg' alt='empty' />
      <p>Empty...</p>
    </EmptyStyled>
  );
}

export default Empty;