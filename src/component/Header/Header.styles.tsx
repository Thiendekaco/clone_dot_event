import styled from "styled-components";
import AccountItem from "@subwallet/react-ui/es/web3-block/account-item";
import { Button } from "@subwallet/react-ui";


export const HeaderContainer = styled.div`
   width : 100%;
   height : 10%;
   padding: 20px;
   display : flex;
   flex-direction : row;
   color: white;
  font-family: ${props => props.theme.fontFamily}; 
  
`
export const Logo = styled.img`
   width : 120px;
   height : 40px;
   margin-right : 7%;
`
export const CollectionAccount = styled.div`
  width: 220px;
  border: 1px solid transparent;
  border-radius: 20px;
  height: 37px;
  padding: 6px;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundColorCollection};
  display: flex;
  flex-direction: row;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: #2b2bb5;
  }
`

export const AccountBox = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    width: 80%;
    height : 20px;
    border-radius : 10px;
    border-color : transparent;
    background-color : ${props => props.theme.backgroundColorCollection}
    
`

export const AccountName = styled(AccountItem)`
    width: 80%;
    height: 100%;
    font-weight: 500;
    margin: -2.5px 0 0  -10px;
    font-size: smaller;
    background-color: transparent !important;
`

export const DivStylesQuestion = styled(Button)`
    margin-left: 120px;
`