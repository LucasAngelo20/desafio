import styled from "styled-components";

export const MainContainer = styled.div``;
export const Select = styled.select`
  padding: 5px 20px;
  border: none;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    border: none;
  }
`;
export const Information = styled.p`
  color: #0f2c59;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const InformationLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const InformationRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50px;
  margin: 10px 40px;
`;
export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Button = styled.button`
  padding: 5px 10px;
  background-color: #dac0a3;
  color: #fff;
  border-radius: 4px;
  margin: 0px 10px;
`;
export const DateInput = styled.input`
  padding: 5px 10px;
  background-color: #dac0a3;
  color: #fff;
  border-radius: 4px;
  margin: 0px 10px;
`;
export const DataLabel = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 10px;
  background-color: #dac0a3;
  color: #fff;
  border-radius: 4px;
  margin: 0px 10px;
`;
