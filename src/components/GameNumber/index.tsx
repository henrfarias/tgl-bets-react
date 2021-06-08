import React from 'react';
import GameNumberStyled, { Checkbox, Label } from './styles';

const GameNumber: React.FC<{
  index: number;
  color: string;
  defaultChecked: boolean;
  addNumber: (number: number) => void;
}> = ({ index, color, addNumber, defaultChecked }) => {
  const onClickHandler = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const currentNumber = +event.currentTarget.textContent!; 
    addNumber(currentNumber);
  };

  return (
    <GameNumberStyled>
      <Checkbox
        type='checkbox'
        id={String(index)}
        color={color}
        defaultChecked={defaultChecked}
      />
      <Label htmlFor={String(index)} onClick={onClickHandler}>
        {index}
      </Label>
    </GameNumberStyled>
  );
};

export default GameNumber;
