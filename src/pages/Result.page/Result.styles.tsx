import styled from "styled-components";
import {AvatarProps} from "../../component/ImageToken/ImageContract.component";



export const SuccessfullyStyle  =  styled.div`
    width : 90%;
    margin: 30px 20px;
    text-align: center;
`
export const ImageAvatar =  styled.img<AvatarProps>`
    width :  100%;
    height: 60%;
    margin-bottom: -20px;
    object-fit: cover;
    background-color: grey;
    border-radius : 10px;
    
`
