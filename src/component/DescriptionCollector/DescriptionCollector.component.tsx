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
                    <SeeMore href={ENVIRONMENT.ARTZERO_PORTAL} target="_blank"> See more</SeeMore>
                </Typography.Paragraph> }
            </Descriptiton>
        </Collection>
    )

}

export default CollectionDescription