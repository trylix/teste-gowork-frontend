import React from 'react';
import { useLocation } from 'react-router-dom';
import { objectOf, array, any } from 'prop-types';

import {
  Container,
  Header,
  Title,
  Action,
  ChevronRight,
  Items,
} from './styles';

export default function List({ data, component }) {
  const location = useLocation();

  const pages = [
    {
      page: '/dashboard',
      title: 'Adicionados recentemente',
      action: 'Visualizar todas',
      link: '/offices',
      icon: <ChevronRight />,
    },
    {
      page: '/offices',
      title: 'Unidades',
      action: 'Adicionar nova',
      link: '/offices',
      icon: null,
    },
    {
      page: '/plans',
      title: 'Planos',
      action: 'Adicionar novo',
      link: '/offices',
      icon: null,
    },
    {
      page: '/customers',
      title: 'Unidades',
      action: 'Adicionar novo',
      link: '/offices',
      icon: null,
    },
    {
      page: '/employees',
      title: 'Unidades',
      action: 'Adicionar nova',
      link: '/offices',
      icon: null,
    },
  ];

  const currentPage = pages.find(({ page }) => page === location.pathname);

  const Item = component;

  return (
    <Container>
      <Header>
        <Title>{currentPage.title}</Title>
        <Action to={currentPage.link}>{currentPage.action}</Action>
      </Header>
      <Items>
        {data.map(item => (
          <Item key={item.id.toString()} data={item} />
        ))}
      </Items>
    </Container>
  );
}

List.propTypes = {
  data: objectOf(array).isRequired,
  component: objectOf(any).isRequired,
};
