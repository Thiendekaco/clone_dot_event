import styled from "styled-components";


export const Collection = styled.div`
    width : 376px;
    height : 195px;
    margin-top : 10px;
    background-color : ${props => props.theme.backgroundColorCollection};
    border-radius : 10px;
    padding : 15px 0 0 15px;
`
export const Descriptiton = styled.span `
    text-align: start;
    font-family : ${props => props.theme.fontFamily};
    color: ${props => props.theme.color};
    font-weight : 500;
    font-size: medium;


`
export const SeeMore = styled.a`
    text-decoration : none;
    color : #3838a9;
    transition: color 0.1s ease-in-out;
    margin-left: 5px;
    &:hover {
      color: blue;
    }
`