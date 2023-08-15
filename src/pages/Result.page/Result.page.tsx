import { Button, Typography, Icon } from "@subwallet/react-ui";
import { ShieldCheck } from "phosphor-react";
import { SuccessfullyStyle, ImageAvatar  } from "./Result.styles";
import { ENVIRONMENT } from "../../utils/Environment.url";
import React, { useContext, CSSProperties } from "react";
import { ConnectWalletContext } from "../../context";
import CollectionDescription from "../../component/DescriptionCollector/DescriptionCollector.component";
const Result = () =>{
    const { collection, mintedNFTs } = useContext(ConnectWalletContext);
    const stylesSpan : CSSProperties = {
        marginLeft : '5px',
        color : '#4cd9ac'
    }
    return (
        <SuccessfullyStyle>
            { collection  &&
            <>
                <ImageAvatar type={'false'} src={ENVIRONMENT.ARTZERO_IMAGE_PATTERN.replace('{{id}}', collection?.avatarImage)} />
                <Typography.Title level={4} className={'nft-title'}>
                    { collection.name.toUpperCase()}
                    { mintedNFTs && mintedNFTs[0] && <span style={stylesSpan}>#{mintedNFTs[0].tokenID}</span>}
                </Typography.Title>
                <CollectionDescription collection={collection} />
            </>
            }
            <Button schema={"primary"}
                    icon={<Icon phosphorIcon={ShieldCheck} weight={"fill"}/>}
                    ghost={true}
                    block={true}
                    style = {{width : '376px', marginTop : '10px'}}
            >
                    Successfully
            </Button>

        </SuccessfullyStyle>
    )
}

export default Result