import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import api from '../../services/axios';
import createId from '../../helpers/createId';
import notify from '../../helpers/toast';
import { loadGames } from '../../store/reducers/games.reducer';

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
import IGame from '../../Interfaces/IGame';
import IBet from '../../Interfaces/IBets';
import sortNumbers from '../../helpers/sortNumbers';
import 'react-toastify/dist/ReactToastify.css';
import { userLoggedIn } from '../../store/reducers/users.reducer';

const Game: React.FC = () => {
  const [gameNumbers, setGameNumbers] = useState<number[]>([]);
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<IBet[]>([]);
  const [currentGame, setCurrentGame] = useState<IGame>({
    id: 0,
    type: '',
    range: 0,
    price: 0,
    description: '',
    color: '',
    'min-cart-value': 0,
    'max-number': 0,
  });
  const history = useHistory();
  const dispatch = useAppDispatch();
  const gamesList = useAppSelector((state) => state.games);
  const username = useAppSelector((state) => state.user.username);

  const selectGame = (
    event: React.MouseEvent<HTMLButtonElement>,
    button: IGame
  ) => {
    const numberArray: number[] = [];
    setCurrentGame(button);
    for (let i = 1; i <= button.range; i++) {
      numberArray.push(i);
    }
    setChosenNumbers([]);
    setGameNumbers(numberArray);
  };

  const addNumber = (currentNumber: number) => {
    if (chosenNumbers.includes(currentNumber)) {
      setChosenNumbers(
        chosenNumbers.filter((number) => number !== currentNumber)
      );
      return;
    }
    if (chosenNumbers.length === currentGame['max-number']) {
      notify(
        'info',
        'Seu jogo está pronto! Você já escolheu o máximo de números possíveis.'
      );
      return;
    }
    setChosenNumbers((prevState) => [...prevState, currentNumber]);
  };

  const clearGame = () => {
    setChosenNumbers([]);
  };

  const completeGame = () => {
    const randomNumbers = [...chosenNumbers];
    while (randomNumbers.length < currentGame['max-number']) {
      let number = Math.ceil(Math.random() * currentGame.range);
      if (!randomNumbers.includes(number)) randomNumbers.push(number);
    }
    setChosenNumbers(randomNumbers);
  };

  const addToCart = () => {
    if (chosenNumbers.length === currentGame['max-number']) {
      const numbers = sortNumbers(chosenNumbers);
      const { color, price, type } = currentGame;
      setCartItems((prevState) => [
        ...prevState,
        { type, color, numbers, current_price: price, game_id: currentGame.id },
      ]);
      setChosenNumbers([]);
      notify('success', '🎉 Adicionado ao carrinho!');
      return;
    }
    notify(
      'error',
      `O jogo ainda não está pronto. Escolha ${currentGame['max-number']} números para adicionar ao carrinho.`
    );
  };

  const deleteItemHandler = (bet: IBet) => {
    const targetIndex = cartItems.indexOf(bet);
    setCartItems((prevState) =>
      prevState.filter((element, index) => index !== targetIndex)
    );
    notify('info', 'Item excluído com sucesso.');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('games');
      const games: IGame[] = await response.data.data;
      dispatch(loadGames(games));
    };
    if (!gamesList.length) fetchData();
  }, [dispatch, gamesList, history]);

  useEffect(() => {
    if(!sessionStorage.getItem('token')) {
      history.push('/')
      return;
    }
    try {
      const fetchUser = async () => {
        const response = await api.get('/users', {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        const user = response.data; 
        dispatch(userLoggedIn(user));
      }
      if(!username) fetchUser();
    } catch (err) {
      throw new Error(err.message);
    }
  }, [dispatch, history, username])

  return (
    <>
      <Layout>
        <GameWrapper>
          <Title>
            <strong>New Bet</strong> {currentGame.type ? 'for' : ''}{' '}
            <span>{currentGame.type}</span>
          </Title>
          <ChooseGame>
            <h3>Choose a game</h3>
            {gamesList.map((button) => {
              const active = button.type === currentGame.type;
              return (
                <GameButton
                  key={createId()}
                  game={button}
                  onClick={(event) => selectGame(event, button)}
                  current={active}
                />
              );
            })}
          </ChooseGame>
          <Description>
            {currentGame.type && <h3>Fill your bet</h3>}
            {currentGame.description && <p>{currentGame.description}</p>}
          </Description>
          <GameBoard>
            {gameNumbers.map((number) => (
              <GameNumber
                key={createId()}
                index={number}
                color={currentGame.color}
                addNumber={addNumber}
                defaultChecked={chosenNumbers.includes(number)}
              />
            ))}
          </GameBoard>
          {currentGame.type && (
            <GameFunctions>
              <ButtonFunction onClick={completeGame}>
                Complete Game
              </ButtonFunction>
              <ButtonFunction onClick={clearGame}>Clear Game</ButtonFunction>
              <AddToCart onClick={addToCart}>
                <img src='./icons/cart.svg' alt='adicionar ao carrinho' />
                Add to cart
              </AddToCart>
            </GameFunctions>
          )}
        </GameWrapper>
        <Cart
          cartItems={cartItems}
          onDelete={deleteItemHandler}
          minCartSave={currentGame['min-cart-value']}
        />
      </Layout>
    </>
  );
};

export default Game;
