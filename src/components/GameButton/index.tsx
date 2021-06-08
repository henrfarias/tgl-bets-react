import React from 'react';
import GameButtonStyled from './styles';

interface IGameButton {
  type: string;
  color: string;
  description?: string;
}

const GameButton: React.FC<{
  game: IGameButton;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  current?: boolean;
}> = ({ game, current, onClick }) => {
  return (
    <GameButtonStyled current={current} color={game.color} onClick={onClick}>
      {game.type}
    </GameButtonStyled>
  );
};

export default GameButton;
