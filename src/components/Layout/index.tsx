import React from 'react';
import Header from '../Header';
import LayoutStyled from './style';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutStyled>{children}</LayoutStyled>
    </>
  );
};

export default Layout;
