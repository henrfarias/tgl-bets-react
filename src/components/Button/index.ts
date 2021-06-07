import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background: transparent;
  height: 11.9rem;
  font-size: 3.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const ForwardButton = styled(Button)`
  color: var(--strong-text);

  &::after {
    content: ' ' ' ' url('./icons/default-arrow-right.svg');
  }
`;

export const BackButton = styled(Button)`
  color: var(--strong-text);

  &::before {
    content: url('./icons/arrow-left.svg') ' ';
  }
`;

export const FormButton = styled(Button)`
  color: var(--highlight-text);

  &::after {
    content: ' ' url('./icons/arrow-right.svg');
  }
`;
