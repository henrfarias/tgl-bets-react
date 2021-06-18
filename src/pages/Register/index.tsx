import React, { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/axios';

import { FormButton, BackButton } from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';
import notify from '../../helpers/toast';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const backHistoryHandler = () => {
    history.goBack();
  };

  const registerHandler = async () => {
    if (password.trim().length < 6) {
      notify('error', 'Sua senha precisa ter 6 ou mais caracteres.');
      return;
    }
    if (
      name.trim() === '' ||
      !email.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)
    ) {
      notify('error', 'Insira um email válido.');
      return;
    }
    try {
      await api.post('/register', {
        username: name,
        email: email,
        password: password
      });
      history.push('/');
      notify('success', 'Usuário cadastrado.');
    } catch (error) {
      notify('error', `deu ruim`);
    }
  };

  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  return (
    <FormLayout title='Registration'>
      <Card>
        <Input onChange={changeNameHandler} type='text' placeholder='Name' />
        <Input onChange={changeEmailHandler} type='email' placeholder='Email' />
        <Input
          onChange={changePasswordHandler}
          type='password'
          placeholder='Password'
        />
        <FormButton onClick={registerHandler}>Register</FormButton>
      </Card>
      <BackButton onClick={backHistoryHandler}>Back</BackButton>
    </FormLayout>
  );
};

export default Register;
