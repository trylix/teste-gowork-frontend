import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from '~/store/modules/auth/actions';

import {
  Nav,
  Container,
  Bars,
  Brand,
  Logo,
  Icon,
  Menu,
  MenuItem,
} from './styles';

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();

  const pages = [
    { page: '/dashboard', name: 'Início' },
    { page: '/offices', name: 'Unidades' },
    { page: '/plans', name: 'Planos' },
    { page: '/customers', name: 'Clientes' },
    { page: '/logout', name: 'Sair' },
  ];

  function handleLogOut() {
    dispatch(logOut());
  }

  const serialize = (page, name) => {
    if (page === '/logout') {
      return <MenuItem onClick={handleLogOut}>{name}</MenuItem>;
    }

    return (
      <MenuItem to={page} active={page === location.pathname}>
        {name}
      </MenuItem>
    );
  };

  return (
    <Nav>
      <Container>
        <Bars />

        <Logo to="/dashboard">
          <Icon />
          <Brand />
        </Logo>

        <Menu>{pages.map(({ name, page }) => serialize(page, name))}</Menu>
      </Container>
    </Nav>
  );
}
