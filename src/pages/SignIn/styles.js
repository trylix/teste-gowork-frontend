import styled from 'styled-components';

import { darken } from 'polished';
import { Form } from '@unform/web';

import unformInput from '~/components/Input';

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

export const Login = styled(Form)`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 15px;
  margin: 0 auto;

  @media (max-width: 1040px) {
    width: 40%;
    min-width: 360px;
  }

  @media (max-width: 530px) {
    width: 100%;
    min-width: auto;
  }
`;

export const Welcome = styled.h1`
  font-size: 1.7em;
  font-weight: bold;
  margin-bottom: 1.7rem;

  @media (max-width: 530px) {
    font-size: 1.2rem;
  }
`;

export const Input = styled(unformInput)`
  width: 100%;
  border-radius: 20px;
  border: 1px solid #dfe2e6;
  padding: 14px;

  & + & {
    margin-top: 16px;
  }

  @media (max-width: 530px) {
    width: 80%;
  }
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #ffffff;
  background-color: #1878f3;
  font-weight: bold;
  border-radius: 20px;
  padding: 14px 0px;
  margin-top: 24px;
  box-shadow: 0px 8px 20px rgba(0, 145, 255, 0.3);
  transition: all ease 0.5s;

  &:hover {
    background-color: ${darken(0.2, '#1878f3')};
  }

  @media (max-width: 530px) {
    width: 80%;
  }
`;
