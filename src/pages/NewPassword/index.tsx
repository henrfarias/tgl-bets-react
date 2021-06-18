import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from '../../services/axios';
import notify from '../../helpers/toast';

import { FormButton, BackButton } from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';

const NewPassword: React.FC = () => {
  const [passwordEntered, setPasswordEntered] = useState('');
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  const history = useHistory();

  const inputPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordEntered(event.target.value);
  };

  const requestHandler = async () => {
    console.log(token);
    if(passwordEntered.length < 8) {
      notify('error', 'Sua senha precisa de 8 ou mais caracteres');
      return;
    }
    await axios.put('/forgot-password', {
      password: passwordEntered,
      token: token,
    });
    history.push('/');
    notify(
      'success',
      'Sua senha foi alterada.'
    );
  };
  const backHistoryHandler = () => {
    history.goBack();
  };

  return (
    <FormLayout title='Reset password'>
      <Card>
        <Input
          type='password'
          placeholder='Password'
          onChange={inputPasswordHandler}
        />
        <FormButton onClick={requestHandler}>Reset</FormButton>
      </Card>
      <BackButton onClick={backHistoryHandler}>Back</BackButton>
    </FormLayout>
  );
};

export default NewPassword;
