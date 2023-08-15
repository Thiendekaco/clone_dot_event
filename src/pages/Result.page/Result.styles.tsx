import styled from "styled-components";
import {AvatarProps} from "../../component/ImageToken/ImageContract.component";



export const SuccessfullyStyle  =  styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageAvatar =  styled.img<AvatarProps>`
    margin-top: 30px;
    width :  376px ;
    height: 376px;
    object-fit: cover;
    background-color: grey;
    border-radius : 10px;
   
    
`
