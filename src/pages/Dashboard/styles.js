import styled from 'styled-components';

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
