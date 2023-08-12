import { styled } from "styled-components";
import Avatar from "../../component/ImageToken/ImageContract.component";
import CollectionDescription from "../../component/DescriptionCollector/DescriptionCollector.component";
import { Link } from "react-router-dom";
import { Button } from "@subwallet/react-ui";
export const WelcomeStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ButtonGroup = styled.div`
    width : 90%;
    height: 20%;
    margin-top: 10px;
`

export const ButtonLink = styled(Link)`
    text-decoration : none;
`
export const ButtonStyles = styled(Button)`
      width: 100%;
      margin-top: 20px;
      &:hover{
        opacity: 0.7;
      }
`