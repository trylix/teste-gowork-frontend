import styled from 'styled-components';

export const CustomerText = styled.p`
  color: #626262;

  span {
    font-weight: bold;
    margin-right: 6px;
  }

  & + & {
    margin-top: 4px;
  }
`;
