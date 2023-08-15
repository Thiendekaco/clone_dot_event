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
        transform: translateY(100%);

    }
    to{
       transform: translateY(0);
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