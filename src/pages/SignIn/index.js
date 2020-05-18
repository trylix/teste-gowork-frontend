import React from 'react';

import {
  Wrapper,
  Left,
  Right,
  Logo,
  Login,
  Welcome,
  Input,
  Button,
} from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    // TODO: autenticação
  }

  return (
    <Wrapper>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Login onSubmit={handleSubmit}>
          <Welcome>Acessar sua conta</Welcome>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Seu e-mail"
          />

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Sua palavra-passa"
          />

          <Button>Login</Button>
        </Login>
      </Right>
    </Wrapper>
  );
}
