import styled from "styled-components";

interface saveButton {
  isDisabled: boolean;
}

const CartStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  width: 32rem;
  max-height: 50rem;
  border-radius: 10px;
  border: 1px solid var(--border-cart);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

  @media(max-width: 1200px) {
    margin: 3rem auto 0;
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  margin: 3.2rem 0 0 1.9rem;
  text-transform: uppercase;
`;

export const CartItems = styled.div`
  margin-top:1rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
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

export const CartTotal = styled.span`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-style: italic;
  color: var(--strong-text);
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 1.9rem;
`;

export const SaveCartButton = styled.button<saveButton>`
  margin-top: auto;
  font-size: 3.5rem;
  padding: 3rem 0;
  font-weight: bold;
  color: var(--button);
  background-color: var(--background-cart);
  border: 1px solid var(--border-cart);
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 200ms;

  &:hover {
    filter: ${props => props.isDisabled ? 'none' : 'brightness(0.9)'};
  }
`;

export default CartStyled;
