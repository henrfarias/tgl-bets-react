import styled from 'styled-components';

const LayoutStyled = styled.main`
  display: grid;
  grid-column-gap: 4rem;
  grid-template-columns: 2fr 1fr;
  margin: 7.35rem 13rem 0;
  min-height: calc(100vh - 7.96rem);

  @media(max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 768px) {
    margin: 2rem 4rem;
  }

  @media(max-width: 600px) {
    margin: 2rem 1rem;
  }
`;

export default LayoutStyled;