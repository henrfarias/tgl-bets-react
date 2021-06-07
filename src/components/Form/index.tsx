import React from 'react';
import IFormLayout from '../../Interfaces/IFormLayout';
import FormStyled from './styles';

const Form: React.FC<IFormLayout> = ({ children, title }) => {
  return (
    <FormStyled>
      <h2 className='title'>{title}</h2>
      {children}
    </FormStyled>
  );
};

export default Form;
