import styled from "styled-components";
import { fadeIn, slideUp } from "../../styles/animation.styles";
import AccountCard from "@subwallet/react-ui/es/web3-block/account-card";

export interface SelectAccountProps {
    state : string;
}


export const SelectContainer = styled.div<SelectAccountProps>`
    background-color : rgb(31, 29, 29, 0.5) ;
    position: absolute;
    z-index: 1;
    top: 0;
    display : ${props => props.state === 'true' ? 'display' : 'none'};
    width : 100%;
    height : 100%;
    animation : ${fadeIn} 0.5s ease-in-out;
    
    
`

export const SelectBox  = styled.div<SelectAccountProps>`
    width: 380px;
    margin: auto;
    height: 550px;
    position: sticky;
    top: 100%;
    display: ${props => props.state === 'true' ? 'flex' : 'none'};
    flex-direction : column;
    border-radius : 30px 30px 0 0;
    background-color: black;
    animation : ${slideUp} 0.3s ease-in-out;

`

export const SelectBoxHeader = styled.div`
    width: 100%;
    height: 10%;
    padding : 20px 0 55px 20px;
    display : flex;
    flex-direction : row;
    border-bottom: double 3px ${props => props.theme.backgroundColorCollection};
    
`
export const SelectBoxTitile = styled.h3`
    color : ${props => props.theme.color};
    font-family : ${props => props.theme.fontFamily};
    margin-left: 20%;
    margin-top : 5px;
`
export const IconClose = styled.div`
    cursor: pointer;
`

export const SelectBoxContent = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const AccountBox = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    width: 95%;
    height : 75px;
    margin: 6px 0 0 9px;
    padding: 10px;
    border-radius : 10px;
    border-color : transparent;
    background-color : ${props => props.theme.backgroundColorCollection};
    transition: opacity 0.2s ease-in-out;
    opacity: 0.9 ;
    &:hover {
      opacity: 1;
    }
`

export const AccountName = styled(AccountCard)`
    width: 100%;
    display : flex;
    margin-top: 2px;
    font-weight: 540;
    font-size: smaller;
    flex-direction : row;
    font-family : ${props => props.theme.fontFamily};
    color: ${props => props.theme.color};
    background-color:  transparent !important;
`
export const FooterBox = styled.div`
    width: 100%;
    height: 40px;
    display: block;
    background-color: transparent;
`