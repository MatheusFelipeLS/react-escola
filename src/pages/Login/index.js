import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/globalStyles';
import { Form } from './styled';
import * as actions from '../../store/modulos/auth/action';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmail(email) || password.length < 6 || password.length > 50) {
      toast.error('Email e/ou senha inválido(s).');
      return;
    }

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
