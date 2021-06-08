import styled from 'styled-components';

const GameNumberStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 1.2rem 2rem 0; 
  height: 6rem;
  width: 6rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 100%;
  height: 100%;
  color: var(--white);
  font-size: 2rem;
  background-color: var(--number);
  cursor: pointer;
  transition: all 200ms;
`;

export const Checkbox = styled.input`
  position: absolute;
  width: 0;
  height: 0;

  &:checked ~ ${Label} {
    background-color: ${props => props.color};
  }
`;

export default GameNumberStyled;