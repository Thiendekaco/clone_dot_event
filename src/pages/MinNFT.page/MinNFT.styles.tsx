import styled from "styled-components";
import { Button, Icon } from "@subwallet/react-ui";


export const MinNFTStyled = styled.div`
    width: 100%;
    height: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`
export const VideoInstructionContainer = styled.div`
    width: 90%; 
    margin-top: -10px;
`
export const ButtonContainer = styled.div`
    width: 80%;
    position: absolute;
    z-index : 1;
    top: 35%;
    left: 40px;

`
export const ButtonStyles = styled(Button)`
      z-index: 2;
      width: 80%;
      margin-left: 30px;
`