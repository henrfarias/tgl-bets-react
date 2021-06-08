import styled from "styled-components";

const GameWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  display: inline;
  font-size: 2.4rem;
  font-weight: normal;
  text-transform: uppercase;
  font-style: italic;
`;

export const ChooseGame = styled.div`
  margin-top: 3.3rem;

  h3 {
    font-size: 1.7rem;
    font-style: italic;
    margin-bottom: 2rem;
  }

  button {
    margin-left: 0;
    margin-right: 2.5rem;
  }
`;

export const Description = styled.div`
  font-size: 1.7rem;
  font-style: italic;

  h3 {
    margin-top: 2.8rem;
  }

  p {
    color: var(--text);
    margin-top: 0.5rem;
  }
`;

export const GameBoard = styled.div`
  display: flex;  
  flex-wrap: wrap;
  margin-top: 2.7rem;
`;

export const GameFunctions = styled.div`
  display: flex;
  margin-top: 2.4rem;
  margin-bottom: 14.55rem;
`;

const Button = styled.button`
  padding: 1.7rem 2.5rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms;
`;

export const ButtonFunction = styled(Button)`
  border: 1px solid var(--button);
  color: var(--button);
  background-color: transparent;
  
  &:first-child {
    margin-right: 2.5rem;  
  }

  &:hover {
    background-color: var(--button);
    color: var(--white);
  }
`;

export const AddToCart = styled(Button)`
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: var(--button);
  color: var(--white);
  border: none;

  img {
    margin-right: 1rem;
    pointer-events: none;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export default GameWrapper;
