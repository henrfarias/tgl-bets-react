import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/axios';

import { ForwardButton, FormButton } from '../../components/Button';
import LoadingSpinner from '../../components/LoadingSpinner';
import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';
import notify from '../../helpers/toast';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { isLoading, isntLoading } from '../../store/reducers/load.reducer';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.load);
  const history = useHistory();

  const signUpHandler = () => {
    history.push('/register');
  };

  const loginHandler = async () => {
    if (!email.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)) {
      notify('error', 'Digite um email válido.');
      return;
    }
    if (password.trim().length < 6) {
      notify('error', 'Senha inválida. Sua senha tem 6 ou mais caracteres.');
      return;
    }
    try {
      dispatch(isLoading());
      const response = await api.post('/login', {
        email: email,
        password: password,
      });
      sessionStorage.setItem('token', `${response.data.token}`);
      dispatch(isntLoading());
      history.push('/history-games');
    } catch (error) {
      dispatch(isntLoading());
      notify('error', `Credenciais inválidas`);
    }
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
        {loading ? (
          <LoadingSpinner />
        ) : (
          <FormButton onClick={loginHandler}>Log in</FormButton>
        )}
      </Card>
      <ForwardButton onClick={signUpHandler}>Sign Up</ForwardButton>
    </FormLayout>
  );
};

export default Login;
