import styled from 'styled-components';

import { darken } from 'polished';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 28vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 20px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 8px 0 #efefef;
  border-radius: 3px;
  transition: all ease 0.2s;

  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 145, 255, 0.3);
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.center ? 'center' : 'left')};
`;

export const Name = styled.div`
  color: #626262;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled(Link)`
  color: ${props => (props.delete ? '#ff3b30' : '#1878F3')};
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    color: ${props =>
      props.delete ? darken(0.2, '#ff3b30') : darken(0.2, '#1878F3')};
  }
`;
