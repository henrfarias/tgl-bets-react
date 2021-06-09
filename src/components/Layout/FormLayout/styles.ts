import styled from 'styled-components';

const FormLayoutStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 7.96rem);

  @media(max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default FormLayoutStyled;