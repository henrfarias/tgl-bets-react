import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadGames } from '../../store/reducers/games.reducer';
import createId from '../../helpers/createId';

import BetCard from '../../components/BetCard';
import GameButton from '../../components/GameButton';
import Layout from '../../components/Layout';
import HistoryGamesStyled, {
  BetsWrapper,
  FilterWrapper,
  NewBetButton,
  Title,
} from './styles';
import ITypes from '../../Interfaces/ITypes';
import { login } from '../../store/reducers/userLogged.reducer';

const DUMMY_BETS = [
  {
    id: 12121212,
    type: 'Lotofácil',
    numbers: [1, 2, 4, 6, 10, 20, 21, 25].toString(),
    price: 2.5,
    date: '2020-11-10',
    color: '#7F3992',
  },
  {
    id: 232323232,
    type: 'Mega-Sena',
    numbers: [1, 2, 4, 6, 10, 20, 21, 25].toString(),
    price: 2.5,
    date: '2021-01-04',
    color: '#01AC66',
  },
  {
    id: 454545454,
    type: 'Quina',
    numbers: [1, 2, 4, 6, 10, 20, 21, 25].toString(),
    price: 2.5,
    date: '2021-04-04',
    color: '#F79C31',
  },
];

const HistoryGames: React.FC = () => {
  const dispatch = useAppDispatch();
  const gamesList = useAppSelector((state) => state.games); 
  const history = useHistory();

  const newBetHandler = () => {
    history.push('/game');
  };

  useEffect(() => {
    const {id, name} = JSON.parse(localStorage.getItem('logged')!) ; 
    dispatch(login({id, name}));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./games.json')
      const data: ITypes = await res.json();
      const games = data.types;
      (dispatch(loadGames(games)));
    }
    if(!gamesList.length)
      fetchData();
  }, [dispatch, gamesList])

  return (
    <Layout>
      <HistoryGamesStyled>
        <Title>
          <strong>Recent Games</strong>
        </Title>
        <FilterWrapper>
          <span>Filters</span>
          {gamesList.map((button) => (
            <GameButton key={createId()} game={button} />
          ))}
        </FilterWrapper>
        <BetsWrapper>
          {DUMMY_BETS.map((bet) => (
            <BetCard key={createId()} bet={bet} />
          ))}
        </BetsWrapper>
      </HistoryGamesStyled>
      <NewBetButton onClick={newBetHandler}>
        New Bet <img src='./icons/arrow-right.svg' alt='New bet' />
      </NewBetButton>
    </Layout>
  );
};

export default HistoryGames;
