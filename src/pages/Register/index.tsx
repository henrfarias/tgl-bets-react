import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { registerUser } from '../../store/reducers/users.reducer';

import { FormButton, BackButton } from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';
import emailExists from '../../helpers/emailExists';
import createId from '../../helpers/createId';
import IUser from '../../Interfaces/IUser';
import notify from '../../helpers/toast';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const backHistoryHandler = () => {
    history.goBack();
  };

  const registerHandler = () => {
    if (password.trim().length < 8) {
      notify('error', 'Sua senha precisa ter 8 ou mais caracteres.');
      return;
    }

    if (
      name.trim() === '' ||
      !email.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)
    ) {
      notify('error', 'Preencha corretamente os dados.');
      return;
    }
    const newUser: IUser = {
      id: createId(),
      name,
      email,
      password,
      history: [],
    };
    if (emailExists(users, newUser.email).name) {
      notify('error', 'Email existente.');
      return;
    }

    dispatch(registerUser(newUser));
    history.push('/');
    notify('success', 'Usuário cadastrado.');
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
