import styled from 'styled-components';

const SloganStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  font-style: italic;

  h1 {
    text-transform: capitalize;
    font-size: 6.5em;
    line-height: 7.5rem;
  }

  span {
    background-color: var(--highlight-text);
    color: var(--white);
    border-radius: 100px;
    font-size: 2.2em;
    text-transform: lowercase;
    padding: 0.5rem 5.7rem;
    margin: 3rem 0 2rem;
  }

  strong {
    font-size: 8.3em;
    text-transform: uppercase;
    line-height: 8rem;
  }

  @media(max-width: 1000px) {
    height: 100vh;
  }

  @media(max-width: 400px) {
    font-size: 0.75rem;
    
    h1 {
      line-height: 6rem;
    }
  }
`;

export default SloganStyled;
