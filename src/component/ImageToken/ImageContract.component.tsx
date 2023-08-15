import { Image,
    ImageContainer,
    TitleOfContract,
    ShareStyledLogo,
    HeaderContractImage
} from './ImageContract.styles';
import { useParams } from "react-router"
import { ENVIRONMENT } from "../../utils/Environment.url"
import { NFTCollection } from "../../type";
import React from "react";

export interface AvatarProps {
    type : string,
    collection ?: NFTCollection
}



const Avatar = ({ type, collection } : AvatarProps ) =>{

    const param =  useParams()['*']
    const handleOnClick = (): void=>{
        window.open(`${ENVIRONMENT.ARTZERO_PORTAL}/#/collection/${collection?.nftContractAddress}?is_for_sale=false`)
    }
    return (
        <ImageContainer type={type}>
            <HeaderContractImage>
                <TitleOfContract type={type}>
                    { collection && collection.name }
                </TitleOfContract>
                { param === 'minNft' && <ShareStyledLogo size={50} onClick={handleOnClick} color="#ffffff"/> }
            </HeaderContractImage>
            { collection && <Image type={type} src={ENVIRONMENT.ARTZERO_IMAGE_PATTERN.replace( '{{id}}', collection?.avatarImage )} /> }
        </ImageContainer>

    )
}

export default Avatar