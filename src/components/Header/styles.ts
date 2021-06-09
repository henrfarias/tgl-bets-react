import styled from 'styled-components';
import { Button } from '../Button';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--border);

  @media(max-width: 430px) {
    flex-direction: column; 
  }
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0 1.1rem;
  margin: 0 auto 0 13rem; 
  font-size: 4.4rem;
  font-style: italic;
  height: 100%;

  @media(max-width: 768px) {
    margin-left: 3rem;
  }

  @media(max-width: 430px) {
    margin: 0;
  }
`;

export const Decoration = styled.div`
  position: absolute;
  bottom: -1.8rem;
  border-radius: 6px;
  height: 7px;
  width: 100%;
  background-color: var(--highlight-text);
`;

export const AccountButton = styled(Button)`
  height: auto;
  color: var(--strong-text);
  padding: 2.8rem;
  font-size: 2rem;

  @media(max-width: 430px) {
    margin-top: 2rem;
    width: 100%;
    border-bottom: 2px solid var(--border);
  }
`;

export const LogoutButton = styled(Button)`
  display: flex;
  height: auto;
  color: var(--strong-text);
  padding: 2.8rem;
  margin-right: 20rem;
  font-size: 2rem;

  img {
    margin-left: 2rem;
  }

  @media(max-width: 768px) {
    margin-right: 3rem;
  }

  @media(max-width: 430px) {
    margin-top: 2rem;
    text-align: center;
    padding-left: 8rem;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export default HeaderStyled;
