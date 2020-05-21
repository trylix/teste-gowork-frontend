import styled from 'styled-components';

import { ReactComponent as logoSvg } from '~/assets/svg/logo.svg';
import bgLogin from '~/assets/img/bg-login.png';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;

  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 20px 0px;

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const Left = styled(Section)`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0px;
  background-image: url(${bgLogin});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 145, 255, 0.3);
    z-index: 1;
  }

  @media (max-width: 1040px) {
    background-position: 0% 47%;
  }
`;

export const Right = styled(Section)`
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;

export const Logo = styled(logoSvg)`
  margin-top: 20px;
  width: 199px;
  z-index: 2;
`;
