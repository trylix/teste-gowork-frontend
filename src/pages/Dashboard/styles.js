import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

import { ReactComponent as logoSvg } from '~/assets/svg/logo.svg';

import container from '~/styles/Container';

export const Container = styled(container)`
  flex-direction: column;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 610px) {
    display: none;
  }
`;

export const Logo = styled(logoSvg)`
  margin-top: 16px;

  g {
    fill: #1878f3;
  }

  @media (max-width: 990px) {
    width: 40%;
  }
`;

export const Message = styled.p`
  margin-top: 16px;
  font-size: 2rem;

  @media (max-width: 1080px) {
    font-size: 1.6rem;
  }

  @media (max-width: 990px) {
    font-size: 1.2rem;
  }

  @media (max-width: 710px) {
    font-size: 1.1rem;
  }
`;

export const ListItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  margin-top: 28px;

  @media (max-width: 610px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;

  @media (max-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const Action = styled(Link)`
  display: flex;
  align-items: center;
  color: #484848;
  padding: 0 8px;

  &:hover {
    color: #1878f3;
  }

  @media (max-width: 610px) {
    margin-top: 8px;
  }
`;

export const ChevronRight = styled(FaChevronRight)`
  margin-left: 8px;
  padding-bottom: 1.5px;
  width: 6px;
`;

export const ListScroll = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
    margin-top: 8px;
  }
`;

export const Item = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    margin-bottom: 36px;
  }

  @media (max-width: 610px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const ItemImage = styled.img`
  width: 100%;

  @media (max-width: 610px) {
    width: 40%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 610px) {
    padding: 0 8px;
  }
`;

export const ItemAddress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #002b37;
  font-weight: bold;
  margin: 8px 0;

  @media (max-width: 610px) {
    margin: 0 0 8px 0;
  }
`;

export const Address = styled.div`
  & + & {
    margin-left: 8px;
    padding-left: 8px;
    border-left: 0.5px solid #d8d8d8;
  }
`;

export const ItemName = styled.div`
  color: #484848;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  &:hover {
    color: #1878f3;
  }

  @media (max-width: 475px) {
    font-size: 1rem;
  }
`;
