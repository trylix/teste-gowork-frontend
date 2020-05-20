import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Info, Address, Text, Name } from './styles';

export default function Item({ data }) {
  return (
    <Container>
      <Image source={`http://localhost/storage/${data.image}`} />
      <Info>
        <Address>
          <Text>{data.city}</Text>
          <Text>{data.state}</Text>
        </Address>
        <Name>{data.name}</Name>
      </Info>
    </Container>
  );
}

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.array).isRequired,
};
