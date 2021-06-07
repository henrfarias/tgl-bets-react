import React from 'react';
import IFormLayout from '../../../Interfaces/IFormLayout';
import Form from '../../Form';
import Slogan from '../Slogan';
import FormLayoutStyled from './styles';

const FormLayout: React.FC<IFormLayout> = ({ children, title }) => {
  return (
    <FormLayoutStyled>
      <Slogan />
      <Form title={title}>{children}</Form>
    </FormLayoutStyled>
  );
};

export default FormLayout;
