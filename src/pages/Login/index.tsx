import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ForwardButton, FormButton } from '../../components/Button';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { login } from '../../store/reducers/userLogged.reducer';

import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';
import emailExists from '../../helpers/emailExists';
import notify from '../../helpers/toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const signUpHandler = () => {
    history.push('/register');
  };

  const loginHandler = async () => {
    const userLogged = emailExists(users, email);
    if (!email.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)) {
      notify('error', 'Digite um email válido.');
      return;
    }
    if (password.trim().length < 8) {
      notify('error', 'Sua senha precisa ter 8 ou mais caracteres.');
    }
    if (!userLogged.name) {
      notify('error', 'Usuário não encontrado.');
      return;
    }
    history.push('/history-games');
    dispatch(login({ id: userLogged.id, name: userLogged.name }));
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
    <FormLayout title='Authentication'>
      <Card>
        <Input onChange={changeEmailHandler} type='email' placeholder='Email' />
        <Input
          onChange={changePasswordHandler}
          type='password'
          placeholder='Password'
        />
        <Link to='/reset-password'>I forget my password</Link>
        <FormButton onClick={loginHandler}>Log in</FormButton>
      </Card>
      <ForwardButton onClick={signUpHandler}>Sign Up</ForwardButton>
    </FormLayout>
  );
};

export default Login;
