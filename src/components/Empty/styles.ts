import styled from 'styled-components';

const EmptyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--text);

  img {
    margin: 2rem 0;
    filter: opacity(0.4);
  }
`;

export default EmptyStyled;
