import styled, { css } from "styled-components";

interface ButtonProps{
  selected?: boolean
}

export const MainContainer = styled.button<ButtonProps>`
  ${({ selected }) => css`margin: 0 5px;
 border: none;
 padding: 10px 20px;
 border-radius: 4px;
 cursor: pointer;
 background-color: ${selected ? '#000' : '#aaa'};
 color: ${selected ? '#aaa' : '#000'};
`}
`;
