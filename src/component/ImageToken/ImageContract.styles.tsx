import styled from "styled-components";
import { AvatarProps } from "./ImageContract.component";
import { Share } from "phosphor-react";

export const ImageContainer = styled.div<AvatarProps>`
    width : 362px;
    height : ${ props => props.type === 'true' ? '40%' : '50%' };
    text-align: ${ props => props.type === 'true' ? 'center' : 'left' };
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const TitleOfContract = styled.h3<AvatarProps>`
    font-family : ${ props => props.theme.fontFamily };
    color: ${ props => props.theme.color };
    font-weight: 600;
    margin: ${ props => props.type === 'true' ? '10px 0 30px 0px ' : '0 0 10px 0' };
    width:  ${ props => props.type === 'true' ? '100%' : '90%' };
    text-align: ${ props => props.type === 'true' ? 'center' : 'left' };

`
export const Image =  styled.img<AvatarProps>`
    width :  ${ props => props.type === 'true' ? '265px' : '100%' };
    height:  ${ props => props.type === 'true' ? '265px' : '100%' };
    object-fit: cover;
    background-color: grey;
    border-radius : 10px;
    filter: ${ props => props.type === 'true' ? 'grayscale(0)' : 'grayscale(100%)' };
`

export const ShareStyledLogo =  styled(Share)`
  padding-bottom: 25px;
  width: 10%;
  cursor: pointer;
  transition: opacity  ease-in-out;
  position: relative;
  &:hover{
    opacity: 0.7;
  }
`

export const HeaderContractImage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  
`