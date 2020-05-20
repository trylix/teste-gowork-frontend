import React from 'react';
import { useLocation } from 'react-router-dom';
import { objectOf, array, any } from 'prop-types';

import history from '~/services/history';

import Modal from '~/components/Modal';
import useModal from '~/hooks/useModal';

import { Container, Header, Title, Action, Items } from './styles';

export default function List({ data, component }) {
  const location = useLocation();
  const { isShowing, toggle } = useModal();

  const pages = [
    {
      page: '/dashboard',
      title: 'Adicionados recentemente',
      action: 'Visualizar todas',
    },
    {
      page: '/offices',
      title: 'Unidades',
      action: 'Adicionar nova',
    },
    {
      page: '/plans',
      title: 'Planos',
      action: 'Adicionar novo',
    },
    {
      page: '/customers',
      title: 'Unidades',
      action: 'Adicionar novo',
    },
    {
      page: '/employees',
      title: 'Funcionários',
      action: 'Adicionar novo',
    },
  ];

  const currentPage = pages.find(({ page }) =>
    location.pathname.includes(page),
  );

  const Item = component;

  function navigate() {
    history.push('/offices');
  }

  return (
    <Container>
      <Header>
        <Title>{currentPage.title}</Title>
        {currentPage.page === '/dashboard' ? (
          <Action onClick={() => navigate()}>{currentPage.action}</Action>
        ) : (
          <Action onClick={toggle}>{currentPage.action}</Action>
        )}
      </Header>
      <Items>
        {data !== null ? (
          data.map(item => <Item key={item.id.toString()} data={item} />)
        ) : (
          <span>Loading...</span>
        )}
      </Items>
      <Modal isShowing={isShowing} hide={toggle} />
    </Container>
  );
}

List.propTypes = {
  data: objectOf(array).isRequired,
  component: objectOf(any).isRequired,
};
