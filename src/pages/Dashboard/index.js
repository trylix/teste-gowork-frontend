import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { storeOffices } from '~/store/modules/offices/actions';

import { Office } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container, Welcome, Logo, Message } from './styles';

function Dashboard() {
  const offices = useSelector(state => state.offices);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadOffices() {
      const response = await api.get('offices');

      dispatch(storeOffices(response.data));
    }

    loadOffices();
  }, [dispatch]);

  return (
    <Container>
      <Welcome>
        <Logo />
        <Message>
          Gerenciar suas unidades de coworking ficou mais fácil!
        </Message>
      </Welcome>

      <List data={offices} component={Office} />
    </Container>
  );
}

export default Dashboard;
