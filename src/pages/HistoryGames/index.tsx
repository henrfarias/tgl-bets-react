import React, { useEffect, useState } from 'react';
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
import IBet from '../../Interfaces/IBets';
import Empty from '../../components/Empty';

const HistoryGames: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('');
  const [filteredGames, setFilteredGames] = useState<IBet[]>([]);
  const dispatch = useAppDispatch();
  const gamesList = useAppSelector((state) => state.games);
  const userLoggedinId = useAppSelector((state) => state.logged.id);
  const userLogged = useAppSelector((state) =>
    state.users.find((user) => user.id === userLoggedinId)
  );
  const history = useHistory();

  const newBetHandler = () => {
    history.push('/game');
  };

  const filterHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    filter: string
  ) => {
    if(filter === currentFilter) 
      return setCurrentFilter('');
    setCurrentFilter(filter);
  };

  useEffect(() => {
    const games = userLogged?.history.filter((bet) => {
      if(currentFilter === '')
        return true;
      if(bet.type === currentFilter) {
        return true;
      }
      return false; 
    }) || [];
    setFilteredGames(games);
  }, [currentFilter, userLogged])

  useEffect(() => {
    const { id, name } = JSON.parse(localStorage.getItem('logged')!);
    dispatch(login({ id, name }));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./games.json');
      const data: ITypes = await res.json();
      const games = data.types;
      dispatch(loadGames(games));
    };
    if (!gamesList.length) fetchData();
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
                key={createId()}
                game={button}
                onClick={(event) => filterHandler(event, button.type)}
                current={active}
              />
            );
          })}
        </FilterWrapper>
        <BetsWrapper>
          {filteredGames.length === 0 && <Empty />}
          {filteredGames.map((bet) => (
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
