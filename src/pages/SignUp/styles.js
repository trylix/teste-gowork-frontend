import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { darken } from 'polished';
import { Form } from '@unform/web';

export const Content = styled(Form)`
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

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 20px;
  border: 1px solid ${props => (props.error ? '#FF3B30' : '#dfe2e6')};
  padding: 14px;

  ::placeholder {
    color: ${props => (props.error ? '#FF3B30' : '#484848')};
  }

  & + & {
    margin-top: 16px;
  }

  @media (max-width: 530px) {
    width: 80%;
  }
`;

export const Action = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Login = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 2 - 16px);
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
`;

export const Register = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 2 - 16px);
  color: #1878f3;
  background-color: #ffffff;
  font-weight: bold;
  border: 1px solid #1878f3;
  border-radius: 20px;
  padding: 14px 0px;
  margin-top: 24px;
  transition: all ease 0.5s;

  &:hover {
    background-color: ${darken(0.1, '#ffffff')};
  }

  @media (max-width: 530px) {
    width: 80%;
  }
`;
