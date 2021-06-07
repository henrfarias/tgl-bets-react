import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid var(--border);
  height: 8rem;
  font-size: 1.7rem;
  padding-left: 3rem;
  font-weight: bold;
  color: var(--strong-text);

  &::placeholder {
    font-weight: bold;
    font-style: italic;
    color: #9d9d9d;
  }

  &:focus {
    background-color: rgba(181, 196, 1, 0.2);
  }
`;

export default Input;
