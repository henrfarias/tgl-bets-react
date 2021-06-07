import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderStyled, {
  Logo,
  Decoration,
  AccountButton,
  LogoutButton,
} from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const toAccountHandler = () => {
    history.push('/reset-password');
  };

  const toLogoutHandler = () => {
    history.push('/');
  };

  return (
    <HeaderStyled>
      <Logo>
        TGL <Decoration />
      </Logo>
      <AccountButton onClick={toAccountHandler}>Account</AccountButton>
      <LogoutButton onClick={toLogoutHandler}>
        Logout <img src='./icons/default-arrow-right.svg' alt='Logout' />
      </LogoutButton>
    </HeaderStyled>
  );
};

export default Header;
