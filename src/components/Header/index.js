import React from 'react';
import { useLocation } from 'react-router-dom';

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

  const pages = [
    { page: '/dashboard', name: 'Início' },
    { page: '/offices', name: 'Unidades' },
    { page: '/plans', name: 'Planos' },
    { page: '/customers', name: 'Clientes' },
    { page: '/logout', name: 'Sair' },
  ];

  return (
    <Nav>
      <Container>
        <Bars />

        <Logo to="/dashboard">
          <Icon />
          <Brand />
        </Logo>

        <Menu>
          {pages.map(({ name, page }) => (
            <MenuItem to={page} active={page === location.pathname}>
              {name}
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </Nav>
  );
}
