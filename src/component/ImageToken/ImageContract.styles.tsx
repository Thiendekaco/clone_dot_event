import styled from "styled-components";
import { AvatarProps } from "./ImageContract.component";
import { Share } from "phosphor-react";

export const ImageContainer = styled.div<AvatarProps>`
    width : 376px;
    height : ${ props => props.type === 'true' ? '335px' : '432px' };
    text-align: ${ props => props.type === 'true' ? 'center' : 'left' };
    display: flex;
    flex-direction: column;
    margin-bottom: 13px;
    align-items: center;

`
export const TitleOfContract = styled.h3<AvatarProps>`
    font-family : ${ props => props.theme.fontFamily };
    color: ${ props => props.theme.color };
    font-weight: 600;
    margin: ${ props => props.type === 'true' ? '10px 0 26px 0px ' : '22px 0 26px 0' };
    width:  ${ props => props.type === 'true' ? '100%' : '90%' };
    text-align: ${ props => props.type === 'true' ? 'center' : 'left' };

`
export const Image =  styled.img<AvatarProps>`
    width :  ${ props => props.type === 'true' ? '262px' : '100%' };
    height:  ${ props => props.type === 'true' ? '262px' : '376px' };
    object-fit: cover;
    background-color: grey;
    border-radius : 10px;
    filter: ${ props => props.type === 'true' ? 'grayscale(0)' : 'grayscale(100%)' };
`

export const ShareStyledLogo =  styled(Share)`
  margin-top: 12px;
  padding-top: 7px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity  ease-in-out;
  position: relative;
  &:hover{
    opacity: 1;
  }
`

export const HeaderContractImage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  
`