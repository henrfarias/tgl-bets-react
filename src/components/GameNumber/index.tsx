import React from "react";
import GameNumberStyled, { Checkbox, Label } from "./styles";

const GameNumber: React.FC<{ index: number }> = ({ index }) => {
  return (
    <GameNumberStyled>
      <Checkbox type="checkbox" id={String(index)}/>
      <Label htmlFor={String(index)}>
        {index}
      </Label>
    </GameNumberStyled>
  );
};

export default GameNumber;
