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
    font-size: 6.5rem;
    line-height: 7.5rem;
  }

  span {
    background-color: var(--highlight-text);
    color: var(--white);
    border-radius: 100px;
    font-size: 2.2rem;
    text-transform: lowercase;
    padding: 0.5rem 5.7rem;
    margin: 3rem 0 2rem;
  }

  strong {
    font-size: 8.3rem;
    text-transform: uppercase;
    line-height: 8rem;
  }
`;

export default SloganStyled;
