import React from 'react';
import { useHistory } from 'react-router';
import { FormButton, BackButton } from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  
  const backHistoryHandler = () => {
    history.goBack();
  };
  
  return (
    <FormLayout title='Reset password'>
      <Card>
        <Input type='email' placeholder='Email' />
        <FormButton>Send Link</FormButton>
      </Card>
      <BackButton onClick={backHistoryHandler}>Back</BackButton>
    </FormLayout>
  );
};

export default ResetPassword;