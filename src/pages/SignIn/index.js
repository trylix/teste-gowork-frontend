import React, { useRef } from 'react';

import * as Yup from 'yup';

import {
  Wrapper,
  Left,
  Right,
  Logo,
  Login,
  Welcome,
  LoginInput,
  Button,
} from './styles';

import Input from '~/components/Input';

export default function SignIn() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido!')
          .required('O campo e-mail não pode estar em branco.'),
        password: Yup.string()
          .min(6)
          .required('O campo e-mail não pode estar em branco.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Wrapper>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Login ref={formRef} onSubmit={handleSubmit}>
          <Welcome>Acessar sua conta</Welcome>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Seu email"
            component={LoginInput}
          />

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Sua palavra passe"
            component={LoginInput}
          />

          <Button>Login</Button>
        </Login>
      </Right>
    </Wrapper>
  );
}
