import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { userLoggedOut } from '../../store/reducers/users.reducer';

import HeaderStyled, {
  Logo,
  Decoration,
  AccountButton,
  LogoutButton,
} from './styles';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const toAccountHandler = () => {
    history.push('/reset-password');
  };
  
  const toLogoutHandler = () => {
    sessionStorage.setItem('token', '');
    dispatch(userLoggedOut());
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
