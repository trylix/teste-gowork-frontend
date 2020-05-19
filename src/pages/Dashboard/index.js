import React from 'react';

import officeImage from '~/assets/img/office.png';

import {
  Container,
  Welcome,
  Logo,
  Message,
  ListItems,
  ListHeader,
  Title,
  Action,
  ChevronRight,
  Item,
  ItemImage,
  ItemInfo,
  ItemAddress,
  Address,
  ListScroll,
  ItemName,
} from './styles';

function Dashboard() {
  return (
    <Container>
      <Welcome>
        <Logo />
        <Message>
          Gerenciar suas unidades de coworking ficou mais fácil!
        </Message>
      </Welcome>

      <ListItems>
        <ListHeader>
          <Title>Adicionados recentemente</Title>
          <Action>
            Ver todos <ChevronRight />
          </Action>
        </ListHeader>

        <ListScroll>
          <Item>
            <ItemImage src={officeImage} />
            <ItemInfo>
              <ItemAddress>
                <Address>Rio de Janeiro</Address>
                <Address>RJ</Address>
              </ItemAddress>
              <ItemName>Escritório Copacabana</ItemName>
            </ItemInfo>
          </Item>

          <Item>
            <ItemImage src={officeImage} />
            <ItemInfo>
              <ItemAddress>
                <Address>Rio de Janeiro</Address>
                <Address>RJ</Address>
              </ItemAddress>
              <ItemName>Escritório Copacabana</ItemName>
            </ItemInfo>
          </Item>

          <Item>
            <ItemImage src={officeImage} />
            <ItemInfo>
              <ItemAddress>
                <Address>Rio de Janeiro</Address>
                <Address>RJ</Address>
              </ItemAddress>
              <ItemName>Escritório Copacabana</ItemName>
            </ItemInfo>
          </Item>

          <Item>
            <ItemImage src={officeImage} />
            <ItemInfo>
              <ItemAddress>
                <Address>Rio de Janeiro</Address>
                <Address>RJ</Address>
              </ItemAddress>
              <ItemName>Escritório Copacabana</ItemName>
            </ItemInfo>
          </Item>
        </ListScroll>
      </ListItems>
    </Container>
  );
}

export default Dashboard;
