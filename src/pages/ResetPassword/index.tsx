import React, { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/axios';
import notify from '../../helpers/toast';

import { FormButton, BackButton } from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';

const ResetPassword: React.FC = () => {
  const [emailEntered, setEmailEntered] = useState('');
  const history = useHistory();

  const inputEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailEntered(event.target.value);
  };

  const requestHandler = async () => {
    if (!emailEntered.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)) {
      notify('error', 'Digite um email válido.');
      return;
    }
    try {
      await api
        .post('/forgot-password', {
          email: emailEntered,
        })
        history.push('/');
        notify(
          'info',
          'Um email foi enviado para você, utilize o link para alterar sua senha.'
        );
    } catch (error) {
      notify('error', `Este email não está cadastrado no sistema =(`);
    }
  };

  const backHistoryHandler = () => {
    history.goBack();
  };

  return (
    <FormLayout title='Reset password'>
      <Card>
        <Input type='email' placeholder='Email' onChange={inputEmailHandler} />
        <FormButton onClick={requestHandler}>Send Link</FormButton>
      </Card>
      <BackButton onClick={backHistoryHandler}>Back</BackButton>
    </FormLayout>
  );
};

export default ResetPassword;
