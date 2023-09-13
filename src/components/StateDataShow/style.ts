import styled from 'styled-components'

export const MainContainer = styled.div`
`
export const Select = styled.select`
padding: 5px 20px;
border: none;
font-size: 16px;
font-weight: 500;

&:focus{
  border: none;
}
`
export const Information = styled.p`
color: #0F2C59;
font-size: 16px;
font-weight: 500;
text-transform: uppercase;
`
export const InformationLabel = styled.p`
font-size: 16px;
font-weight: 500;
text-transform: uppercase;
`
export const InformationRow = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0px 10px;
`
export const InformationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`