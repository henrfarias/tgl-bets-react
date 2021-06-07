import styled from 'styled-components';

const GameButtonStyled = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  background-color: transparent;
  margin-left: 2.5rem;
  padding: 0.9rem 0;
  border-radius: 100px;
  width: 11.3rem;
  cursor: pointer;

  &:hover {
    color: var(--white);
    background-color: ${(props) => props.color}; 
  }
`;

export default GameButtonStyled;