import styled from "styled-components";

const CartItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3.2rem;
  min-height: 5rem; 
`;

export const DeleteCartItem = styled.button`
  width: 5rem;
  height: 100%;
  padding: 1.2rem 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 200ms; 

  img {
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const TypeBet = styled.h2`
  display: inline;
  margin-right: 1rem; 
  font-size: 1.6rem;
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.1rem 1rem 0;
  border-left: 4px solid ${(props) => props.color};
  border-radius: 4px;
  padding-left: 1.1rem;

  & ${TypeBet} {
    color: ${(props) => props.color};
  }
`;

export const NumbersOfBet = styled.h3`
  font-size: 1.5rem;
`;

export const Price = styled.span`
  font-size: 1.6rem;
  color: var(--strong-text);
`;

export const InfoBet = styled.div`
  display: flex;
  flex: 1;
  margin-top: 0.6rem;
  align-items: center;
`;

export default CartItemStyled;
