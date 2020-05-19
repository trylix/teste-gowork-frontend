import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';
import { FaBars } from 'react-icons/fa';

import container from '~/styles/Container';

import { ReactComponent as iconSvg } from '~/assets/svg/icon.svg';
import { ReactComponent as logoSvg } from '~/assets/svg/logo.svg';

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  background-color: #f2f2f2;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const Container = styled(container)`
  justify-content: space-between;
  align-items: center;

  @media (max-width: 610px) {
    justify-content: flex-start;
  }
`;

export const Logo = styled(Link)``;

export const Bars = styled(FaBars)`
  display: none;
  width: 29px;
  height: 29px;

  @media (max-width: 610px) {
    display: block;
  }
`;

export const Brand = styled(logoSvg)`
  display: none;
  margin-left: 26px;
  width: 116px;

  g {
    fill: #1878f3;
  }

  @media (max-width: 610px) {
    display: block;
  }
`;

export const Icon = styled(iconSvg)`
  @media (max-width: 610px) {
    display: none;
  }
`;

export const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 610px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  color: ${({ active }) => (active ? darken(0.1, '#1878f3') : '#474747')};
  font-weight: 500;
  margin-left: 30px;

  &:hover {
    color: #1878f3;
  }
`;
