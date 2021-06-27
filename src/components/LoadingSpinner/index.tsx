import React from 'react';
import SpinnerStyled from './styles';

const LoadingSpinner: React.FC = () => {
  return <SpinnerStyled>
      <img src="./icons/spinner.svg" alt="loading" />
  </SpinnerStyled>
}

export default LoadingSpinner;