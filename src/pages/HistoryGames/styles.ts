import styled from "styled-components";
import { Button } from "../../components/Button";

const HistoryGamesStyled = styled.section`
`;

export const Title = styled.h2`
  display: inline;
  strong {
    text-transform: uppercase;
    font-style: italic;
    font-size: 2.4rem;
  }
`;

export const FilterWrapper = styled.div`
  display: inline;
  margin-left: 4.5rem;

  span {
    font-size: 1.7rem;
    color: var(--text);
  }
`;

export const BetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
  max-height: 65vh;
  overflow-y: scroll; 

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: var(--border);
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--text);
    border-radius: 6px;
  }
`;

export const NewBetButton = styled(Button)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 2.4rem;
  font-style: italic;
  color: var(--highlight-text);
  height: 3rem;
  img {
    margin-left: 1.1rem;
  }
`;

export default HistoryGamesStyled;
