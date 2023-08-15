
import { Icon } from "@subwallet/react-ui";
import { PlayCircle  } from "phosphor-react";
import { ENVIRONMENT } from "../../utils/Environment.url";
import { ButtonStyles } from "./VideoInstruction.styles";
import React from "react";

const VideoInstruction = ()=>{
    const HandleOnclick = ()=>{
        window.open(ENVIRONMENT.INSTRUCTION_URL)
    }

    return (
        <ButtonStyles  icon={ <Icon phosphorIcon={PlayCircle } weight={'fill'}/>}
                 schema = {"primary"}  type={'ghost'}
                 onClick={() => HandleOnclick()} >
            Video Instruction
        </ButtonStyles>
    )
}

export default VideoInstruction