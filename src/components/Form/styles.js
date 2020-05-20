import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${props => (props.error ? '#FF3B30' : '#dfe2e6')};
  padding: 14px;
  margin-bottom: 20px;

  ::placeholder {
    color: ${props => (props.error ? '#FF3B30' : '#484848')};
  }
`;

export const FormSelect = styled.select`
  color: #484848;
  background-color: #fff;
  border: 1px solid #dfe2e6;
  width: 100%;
  border-radius: 3px;
  padding: 14px;
  margin-bottom: 20px;
  -webkit-appearance: none;
`;

export const Select = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
`;
