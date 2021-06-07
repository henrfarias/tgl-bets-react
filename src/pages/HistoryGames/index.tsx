import React from 'react';
import { useHistory } from 'react-router-dom';
import BetCard from '../../components/BetCard';
import GameButton from '../../components/GameButton';
import Layout from '../../components/Layout';
import HistoryGamesStyled, {
  BetsWrapper,
  FilterWrapper,
  NewBetButton,
  Title,
} from './styles';

const DUMMY_BUTTONS = [
  {
    type: 'Lotofácil',
    color: '#7F3992',
  },
  {
    type: 'Mega-Sena',
    color: '#01AC66',
  },
  {
    type: 'Quina',
    color: '#F79C31',
  },
];

const DUMMY_BETS = [
  {
    type: 'Lotofácil',
    numbers: [1, 2, 4, 6, 10, 20, 21, 25],
    price: 2.5,
    date: '2020-11-10',
    color: '#7F3992',
  },
  {
    type: 'Mega-Sena',
    numbers: [1, 2, 4, 6, 10, 20, 21, 25],
    price: 2.5,
    date: '2021-01-04',
    color: '#01AC66',
  },
  {
    type: 'Quina',
    numbers: [1, 2, 4, 6, 10, 20, 21, 25],
    price: 2.5,
    date: '2021-04-04',
    color: '#F79C31',
  },
];

const HistoryGames: React.FC = () => {
  const history = useHistory();

  const newBetHandler = () => {
    history.push('/game');
  };

  return (
    <Layout>
      <HistoryGamesStyled>
        <Title>
          <strong>Recent Games</strong>
        </Title>
        <FilterWrapper>
          <span>Filters</span>
          {DUMMY_BUTTONS.map((button) => (
            <GameButton game={button} />
          ))}
        </FilterWrapper>
        <BetsWrapper>
          {DUMMY_BETS.map((bet) => (
            <BetCard bet={bet} />
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
