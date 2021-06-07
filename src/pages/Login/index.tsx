import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ForwardButton, FormButton } from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Layout/Card';
import FormLayout from '../../components/Layout/FormLayout';

const Login: React.FC = () => {
  const history = useHistory();

  const signUpHandler = () => {
    history.push('/register');
  };

  const loginHandler = async () => {

  };

  return (
    <FormLayout title="Authentication">
      <Card>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Link to="/reset-password">I forget my password</Link>
        <FormButton onClick={loginHandler}>Log in</FormButton>
      </Card>
      <ForwardButton onClick={signUpHandler}>Sign Up</ForwardButton>
    </FormLayout>
  );
};

export default Login;
