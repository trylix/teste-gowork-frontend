import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 8px 0 #efefef;
  border-radius: 3px;
  transition: all ease 0.2s;

  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 145, 255, 0.3);
  }

  @media (max-width: 990px) {
    margin-bottom: 36px;
  }

  @media (max-width: 610px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  background-image: url(${props => props.source});
  background-position: center;
  background-size: cover;
  background-repeat: none;

  @media (max-width: 610px) {
    width: 40%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 8px 18px;
`;

export const Address = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #002b37;
  font-weight: bold;

  @media (max-width: 610px) {
    margin: 0 0 8px 0;
  }
`;

export const Text = styled.span`
  margin-bottom: 12px;

  & + & {
    margin-left: 8px;
    padding-left: 8px;
    border-left: 0.5px solid #d8d8d8;
  }
`;

export const Name = styled.div`
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
