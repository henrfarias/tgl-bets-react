import React from 'react';
import GameButtonStyled from './styles';

interface IGameButton {
  type: string;
  color: string;
  description?: string;
}

const GameButton: React.FC<{game: IGameButton}> = ({ game }) => {
  return (
    <GameButtonStyled color={game.color}>
      {game.type}
    </GameButtonStyled>
  );
};

export default GameButton;