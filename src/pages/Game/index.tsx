import React from "react";
import Cart from "../../components/Cart";
import GameButton from "../../components/GameButton";
import GameNumber from "../../components/GameNumber";
import Layout from "../../components/Layout";
import GameWrapper, { ChooseGame, Description, GameBoard, GameFunctions, ButtonFunction, AddToCart, Title } from "./styles";

const DUMMY_BUTTONS = [
  {
    type: "Lotofácil",
    color: "#7F3992",
    description:
      "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
  },
  {
    type: "Mega-Sena",
    color: "#01AC66",
    description:
      "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
  },
  {
    type: "Quina",
    color: "#F79C31",
    description:
      "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
  },
];

const Game: React.FC = () => {
  const numbers: number[] = [];
  
  for(let i = 0; i < 25; i++) {
    numbers.push(i + 1)
  }
  return (
    <Layout>
      <GameWrapper>
        <Title>
          <strong>New Bet</strong> for <span>Mega-Sena</span>
        </Title>
        <ChooseGame>
          <h3>Choose a game</h3>
          {DUMMY_BUTTONS.map((button) => (
            <GameButton key={button.type} game={button} />
          ))}
        </ChooseGame>
        <Description>
          <h3>Fill your bet</h3>
          <p>{DUMMY_BUTTONS[1].description}</p>
        </Description>
        <GameBoard>
          {numbers.map(number => <GameNumber key={number} index={number}/>)}
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
