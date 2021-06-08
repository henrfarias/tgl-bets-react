import styled from 'styled-components';

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.2rem;
  box-shadow: 0px 3px 25px #00000014; 
  border-radius: 14px;
  border: 1px solid var(--border-form);
  overflow: hidden;

  a {
    align-self: flex-end;
    font-style: normal;
    font-size: 1.7rem;
    margin: 2.65rem 2.7rem 1rem 0;
    text-decoration: none;
    color: #C1C1C1;
    font-weight: normal;

    &:hover {
      color: var(--highlight-text);
    }

    &:active {
      color: #3454D1;
    }
  }
`;

export default CardStyled;