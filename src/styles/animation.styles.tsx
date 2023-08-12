import  {keyframes} from "styled-components";


export const fadeIn = keyframes`
    from{
        opacity : 0;
    }

    to{
        opacity : 1;
    }

`
export const slideUp = keyframes`

    from{
        top: 100%;

    }
    to{
        top : 25%;
    }

`
export const spin = keyframes`
      to {
        -webkit-transform: rotate(360deg);
      }
  
`

export const slideDown = keyframes`

    from{
        top: 0;

    }
    to{
        top : 100px;
    }

`