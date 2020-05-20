import styled from 'styled-components';
import { darken } from 'polished';

import { Form } from '@unform/web';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const Container = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #d8d8d8;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Close = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`;

export const ModalForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Action = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    color: #fff;
    background-color: #1878f3;
    font-weight: bold;
    border-radius: 3px;
    padding: 12px 18px;
    transition: all ease 0.2s;

    &:hover {
      background-color: ${darken(0.2, '#1878F3')};
    }
  }
`;
