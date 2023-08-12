import React from "react";
import { ButtonStyled, TextValue, IconContainer } from "./Button.styles"

export interface ButtonProps {
    textValueButton : string;
    background_color: string;
    icon : React.ReactNode;
    _onClick ?: (e: React.MouseEvent<HTMLButtonElement>)=> void;
}

function Button({icon, textValueButton, background_color, _onClick} : ButtonProps){

    return (
        <ButtonStyled  background_color={background_color} onClick={_onClick} >
            <IconContainer>
                {icon}
            </IconContainer>
           <TextValue>{textValueButton}</TextValue>
        </ ButtonStyled>
    )
}

export default Button