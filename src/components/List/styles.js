import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;

  @media (max-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const Action = styled.a`
  color: #484848;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    color: #1878f3;
  }

  @media (max-width: 610px) {
    margin-top: 8px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 22px;
  margin-top: 28px;

  @media (max-width: 610px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
    margin-top: 8px;
  }
`;
