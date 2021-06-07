import React from 'react';
import SloganStyled from './styles';

const Slogan: React.FC = () => {
  return (
    <SloganStyled>
      <h1>
        The <br />
        greatest
        <br /> app
      </h1>
      <span>for</span>
      <strong>lottery</strong>
    </SloganStyled>
  );
};

export default Slogan;
