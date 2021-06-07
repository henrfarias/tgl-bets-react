import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Cart from '../../components/Cart';
import GameButton from '../../components/GameButton';
import GameNumber from '../../components/GameNumber';
import Layout from '../../components/Layout';
import GameWrapper, {
  ChooseGame,
  Description,
  GameBoard,
  GameFunctions,
  ButtonFunction,
  AddToCart,
  Title,
} from './styles';

const Game: React.FC = () => {
  const gamesList = useAppSelector((state) => state.games);
  const numbers: number[] = [];
  console.log(gamesList);
  for (let i = 0; i < 25; i++) {
    numbers.push(i + 1);
  }
  return (
    <Layout>
      <GameWrapper>
        <Title>
          <strong>New Bet</strong> for <span>Mega-Sena</span>
        </Title>
        <ChooseGame>
          <h3>Choose a game</h3>
          {gamesList.map((button) => (
            <GameButton key={button.type} game={button} />
          ))}
        </ChooseGame>
        <Description>
          <h3>Fill your bet</h3>
        </Description>
        <GameBoard>
          {numbers.map((number) => (
            <GameNumber key={number} index={number} />
          ))}
        </GameBoard>
        <GameFunctions>
          <ButtonFunction>Complete Game</ButtonFunction>
          <ButtonFunction>Clear Game</ButtonFunction>
          <AddToCart>Add to cart</AddToCart>
        </GameFunctions>
      </GameWrapper>
      <Cart />
    </Layout>
  );
};

export default Game;
