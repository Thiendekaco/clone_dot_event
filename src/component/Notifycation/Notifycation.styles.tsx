
import styled from "styled-components";
import { slideDown } from "../../styles/animation.styles";


export const NotifyBox = styled.div`
  display: flex;
  z-index: 1;
  top: 100px;
  left: 100px;
  flex-direction: row;
  position: absolute;
  width: 200px;
  height: 50px;
  padding: 8px 10px;
  border-radius: 10px;
  background-color: rgba(62, 59, 59, 0.7);
  border: 3px solid red;
  animation: ease-in-out 0.3s ${slideDown};
`
export  const ValueText = styled.h5`
  margin-top: 5px;
  margin-left: 10px;
  font-family: ${props => props.theme.fontFamily};  
  color: ${props => props.theme.color} ;    
  font-weight: 500;
`