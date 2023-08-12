import React, { Children } from "react";
import { Theme } from "../type";
import  { ThemeProvider } from "styled-components";

const themeStyle : Theme  = {
    background_color : 'black',
    color: 'white',
    backgroundColorCollection : '#1f1d1d',
    fontFamily : 'Plus Jakarta Sans'
}


export interface ThemeProviderProps  {
    children : React.ReactNode
}

export const ThemeProviderStyled = ({children} : ThemeProviderProps) : React.ReactElement<ThemeProviderProps> =>{
    return (
        <ThemeProvider theme={themeStyle}>
            {children}
        </ThemeProvider>
    )
}