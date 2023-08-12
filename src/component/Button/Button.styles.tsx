
import styled from "styled-components";

interface ButtonStyleProps {
    background_color :string
}


export const ButtonStyled = styled.button<ButtonStyleProps>`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  color: white ;
  background-color: ${props => props.background_color};
  border: transparent;
  border-radius: 10px;
  font-weight: 900;
  padding-top: 15px;
  padding-right: 30px;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  transition: opacity 0.2s ease-in-out;
  &:hover{
    opacity: 0.8;
  }
  &[disabled] {
    cursor: default;
    opacity: 1;
  }
`

export const TextValue = styled.h3`
    position : relative;
    top: -10px;
    font-weight : 300;
    font-family : ${props => props.theme.fontFamily};
   
`

export const IconContainer = styled.div`
    width: 20%;
    height: 35%;
`
