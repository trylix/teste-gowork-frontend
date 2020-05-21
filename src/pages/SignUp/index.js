import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

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
  name: Yup.string().required('Seu nome não pode estar em branco.'),
  email: Yup.string()
    .email('E-mail inválido!')
    .required('O campo e-mail não pode estar em branco.'),
  password: Yup.string()
    .min(6, 'A senha deve possuir no mínimo 6 digitos')
    .required('O campo senha não pode estar em branco.'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Content schema={schema} onSubmit={handleSubmit}>
      <Welcome>Acessar sua conta</Welcome>

      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Seu nome"
        component={StyledInput}
      />

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
        <Register to="/">Voltar</Register>
        <Login>{loading ? 'Aguarde...' : 'Cadastrar'}</Login>
      </Action>
    </Content>
  );
}
