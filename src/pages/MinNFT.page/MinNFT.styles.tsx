import styled from "styled-components";
import { Button, Icon } from "@subwallet/react-ui";


export const MinNFTStyled = styled.div`
    width: 100%;
    height: 100%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const VideoInstructionContainer = styled.div`
    width: 376px;
    margin-top: -12px ;
    opacity: 0.7;
    transition: opacity 0.1s ease-in-out;
   &:hover{
    opacity: 1;
   }
`
export const ButtonContainer = styled.div`
    width: 400px;
    height: 54px;
    position: absolute;
    z-index : 1;
    top: 305px;
    left: 11px;

`
export const ButtonStyles = styled(Button)`
      z-index: 2;
      width: 80%;
      margin-left: 30px;
`