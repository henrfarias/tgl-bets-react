import styled from 'styled-components';

interface currentButton {
  current?: boolean; 
};

const GameButtonStyled = styled.button<currentButton>`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.current ? 'var(--white)' : props.color};
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.current ? props.color : 'transparent'};
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