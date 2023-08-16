import { Collection, Descriptiton, SeeMore } from "./Descriptiton.styes"
import { ENVIRONMENT } from "../../utils/Environment.url"
import { Typography } from "@subwallet/react-ui";
import { NFTCollection } from "../../type";

interface CollectionProps {
    collection ?: NFTCollection;
}

const CollectionDescription = ({collection}: CollectionProps) =>{

    return(
        <Collection>
            <Descriptiton>
                {collection && <Typography.Paragraph>
                    {collection?.description},
                    <SeeMore href={window.open(`${ENVIRONMENT.ARTZERO_PORTAL}/#/collection/${collection?.nftContractAddress}?is_for_sale=false`)} target="_blank"> See more</SeeMore>
                </Typography.Paragraph> }
            </Descriptiton>
        </Collection>
    )

}

export default CollectionDescription
