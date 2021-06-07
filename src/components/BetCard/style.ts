import styled from 'styled-components';

const BetCardStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 3rem;
  padding-left: 2.1rem;

  strong {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text);
  }

  span {
    margin-bottom: 1.1rem;
    font-size: 1.7rem;
    color: var(--text);
  }

  h3 {
    font-size: 2rem;
    color: ${(props) => props.color};
  }
`;

export const CardDecoration = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 6px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
`;

export default BetCardStyled;