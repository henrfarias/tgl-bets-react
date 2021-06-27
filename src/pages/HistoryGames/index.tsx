import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadGames } from '../../store/reducers/games.reducer';

import BetCard from '../../components/BetCard';
import GameButton from '../../components/GameButton';
import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import api from '../../services/axios';

import HistoryGamesStyled, {
  BetsWrapper,
  FilterWrapper,
  NewBetButton,
  Title,
} from './styles';
import IGame from '../../Interfaces/IGame';
import IBet from '../../Interfaces/IBets';
import Empty from '../../components/Empty';
import { userLoggedIn } from '../../store/reducers/users.reducer';
import { isLoading, isntLoading } from '../../store/reducers/load.reducer';

const HistoryGames: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('');
  const [filteredGames, setFilteredGames] = useState<IBet[]>([]);
  const dispatch = useAppDispatch();
  const gamesList = useAppSelector((state) => state.games);
  const userLogged = useAppSelector((state) => state.user);
  const loading = useAppSelector((state) => state.load);
  const history = useHistory();
  const newBetHandler = () => {
    history.push('/game');
  };

  const filterHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    filter: string
  ) => {
    if (filter === currentFilter) return setCurrentFilter('');
    setCurrentFilter(filter);
  };

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      history.push('/');
      return;
    }
    try {
      dispatch(isLoading());
      const fetchUser = async () => {
        const response = await api.get('/users', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        const user = response.data;
        dispatch(userLoggedIn(user));
        dispatch(isntLoading());
      };
      fetchUser();
    } catch (err) {
      dispatch(isntLoading());
      throw new Error(err.message);
    }
  }, [dispatch, history]);

  useEffect(() => {
    if (!userLogged.email) return;
    const games =
      userLogged.bets?.filter((bet) => {
        if (currentFilter === '') return true;
        if (bet.game?.type === currentFilter) {
          return true;
        }
        return false;
      }) || [];
    setFilteredGames(games);
  }, [currentFilter, userLogged]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await api.get('games');
      const games: IGame[] = await response.data.data;
      dispatch(loadGames(games));
    };
    if (!gamesList.length) fetchGames();
  }, [dispatch, gamesList]);

  return (
    <Layout>
      <HistoryGamesStyled>
        <Title>
          <strong>Recent Games</strong>
        </Title>
        <FilterWrapper>
          <span>Filters</span>
          {gamesList.map((button) => {
            const active = button.type === currentFilter;
            return (
              <GameButton
                key={button.id}
                game={button}
                onClick={(event) => filterHandler(event, button.type)}
                current={active}
              />
            );
          })}
        </FilterWrapper>
       {
        loading ? 
          <LoadingSpinner /> :  
          <BetsWrapper>
              {filteredGames.length === 0 && <Empty />}
              {filteredGames.map((bet) => (
                <BetCard key={bet.id} bet={bet} />
              ))}
            </BetsWrapper>
       } 
      </HistoryGamesStyled>
        <NewBetButton onClick={newBetHandler}>
          New Bet <img src='./icons/arrow-right.svg' alt='New bet' />
        </NewBetButton>
    </Layout>
  );
};

export default HistoryGames;
