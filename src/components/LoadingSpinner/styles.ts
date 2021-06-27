import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(-360deg);
  }
`;

const SpinnerStyled = styled.div`
  padding: 3rem 0;
  animation: ${spin} linear 1s infinite;
`;



export default SpinnerStyled;