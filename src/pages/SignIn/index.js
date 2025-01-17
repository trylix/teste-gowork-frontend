import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';

import { logInRequest } from '~/store/modules/auth/actions';

import {
  Content,
  Welcome,
  StyledInput,
  Login,
  Register,
  Action,
} from './styles';

import Input from '~/components/Input';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido!')
    .required('O campo e-mail não pode estar em branco.'),
  password: Yup.string()
    .min(6)
    .required('O campo senha não pode estar em branco.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    dispatch(logInRequest(email, password));
  }

  return (
    <Content schema={schema} onSubmit={handleSubmit}>
      <Welcome>Acessar sua conta</Welcome>

      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Seu email"
        component={StyledInput}
      />

      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Sua palavra passe"
        component={StyledInput}
      />

      <Action>
        <Register to="/register">Registre-se</Register>
        <Login>{loading ? 'Aguarde...' : 'Login'}</Login>
      </Action>
    </Content>
  );
}
