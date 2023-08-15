import Avatar from "../../component/ImageToken/ImageContract.component";
import { WelcomeStyled, ButtonGroup, ButtonStyles, VideoInstructionContainer} from "./Welcome.styles";
import CollectionDescription from "../../component/DescriptionCollector/DescriptionCollector.component";
import { Wallet } from "phosphor-react";
import { Icon } from "@subwallet/react-ui";
import VideoInstruction from "../../component/VideoInstruction/VideoInstruction.component";
import {isWalletInstalled, getWalletBySource} from "@subwallet/wallet-connect/dotsama/wallets";

import { WalletInfomationContext, ConnectWalletContext } from "../../context";
import React, {useContext} from "react";

const Welcome = () =>{
    const walletContext = useContext(WalletInfomationContext);
    const { collection} = useContext(ConnectWalletContext)
    const handleConnectWallet = ()=>{

        if (isWalletInstalled('subwallet-js')) {
            const wallet = getWalletBySource('subwallet-js');
            walletContext.setWallet(wallet, 'substrate');
        }
    }

    return(
        < WelcomeStyled>
            <Avatar type={"true"} collection={collection}/>
            <CollectionDescription collection={collection} />
            <ButtonGroup >
                <ButtonStyles icon={ <Icon phosphorIcon={Wallet} weight={'fill'}/>}
                        schema = {"primary"}
                        onClick={() => handleConnectWallet()} >
                    Connect Wallet
                </ButtonStyles>
                <VideoInstructionContainer>
                    <VideoInstruction />
                </VideoInstructionContainer>
            </ButtonGroup>
        </WelcomeStyled>
    )

}

export default Welcome