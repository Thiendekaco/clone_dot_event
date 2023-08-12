import { MinNFTStyled, VideoInstructionContainer, ButtonContainer, ButtonStyles } from "./MinNFT.styles";
import Avatar from "../../component/ImageToken/ImageContract.component";
import CollectionDescription from "../../component/DescriptionCollector/DescriptionCollector.component";
import VideoInstruction from "../../component/VideoInstruction/VideoInstruction.component";
import { Icon } from "@subwallet/react-ui";
import { Drop, Ticket } from "phosphor-react";
import { ENVIRONMENT } from "../../utils/Environment.url";
import React, {useContext, useEffect, useState} from "react";
import { OpenSelectBoxContext, ConnectWalletContext } from "../../context";
import { chainApiContract } from "../../api/chainApi";
import NotifyCationBox from "../../component/Notifycation/Notifycation.component";
import { getNFTsByOwnerAndCollection } from "../../api/clientApi";
import { NFTItem } from "../../type";



const MinNFT = () =>{
    const { accountIsSelected} = useContext(OpenSelectBoxContext);
    const { currentBalance, collection,
        currentAddress, setCurrentBalance,
        setMintedNFTs } = useContext(ConnectWalletContext);
    const [ isLoading, setIsLoading] = useState(true);
    const [ isShowButton, setShowButton ] = useState(false);
    const [ isNotification, setNotification ] = useState(false);

    const handleOnClick = (event : React.MouseEvent<HTMLButtonElement>) =>{
        if(!document.hasFocus()){
            event.currentTarget.focus();
        }
        navigator.clipboard.writeText( accountIsSelected?.address || '' )
        .then( ()=> {
            let balanceRequest : number | undefined;
            setIsLoading( false );
                  setTimeout( ()=>{
                      window.open( ENVIRONMENT.FAUCET_URL );
                      const myInterval = setInterval( async ()=>{
                          currentAddress && chainApiContract.subcribeBalance
                          ( currentAddress  ).then( unsub => balanceRequest = unsub );
                          if( balanceRequest !== undefined && balanceRequest > 0 ){
                              setIsLoading(true);
                              setCurrentBalance( balanceRequest );
                              clearInterval( myInterval );
                          }
                      })
               }, 1000 )
            }
        )
        .catch(( error ) => console.log( error ) )
    }

    const onMint = async () =>{
        setIsLoading(false );
        if( collection && currentAddress ){
            await chainApiContract.onMint( collection?.nftContractAddress, accountIsSelected ).then(()=>{
                    let counter = 0;
                    const checkInterVal = setInterval(async ()=>{
                        collection.nftContractAddress &&  await getNFTsByOwnerAndCollection( collection.nftContractAddress, currentAddress ).then(
                            ( rs : {ret : NFTItem[]} ) => {
                                if ( rs !== undefined && rs.ret.length > 0 ) {
                                    setMintedNFTs( rs.ret );
                                    setIsLoading( true );
                                    clearInterval( checkInterVal );
                                }else{
                                    counter++;
                                    if (counter > 10) {
                                        setIsLoading( true );
                                        clearInterval( checkInterVal );
                                    }
                                }
                            }
                        )
                    },1000 )

            }).catch( error => {
                console.log( error as Error ) ;
                setIsLoading( true );
                setNotification( true );
            });

        }
    }
    useEffect(() => {
        if( accountIsSelected?.index !== -1){
            setTimeout( ()=>{
                setShowButton( true );
            },3000)
        }
    }, [accountIsSelected]);
    useEffect(() => {
        if( isNotification ) {
            setTimeout( () => {
                setNotification( !isNotification );
            }, 1000)
        }
    }, [ isNotification ])
    return(
        <MinNFTStyled>
            {isNotification && <NotifyCationBox/>}
            {collection && <>
                <Avatar type={'false'} collection={collection}/>
                <CollectionDescription collection={collection}/>
            </>
            }
            <VideoInstructionContainer>
                <VideoInstruction />
            </VideoInstructionContainer>
            {isShowButton && <ButtonContainer>
                {
                    currentBalance <= 0 ?
                        <ButtonStyles icon={ <Icon phosphorIcon={Drop} weight={'fill'}/>}
                                loading = {!isLoading}
                                schema = {"primary"}
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleOnClick(event)}
                        >
                            Copy address & faucet
                        </ButtonStyles>
                        :
                        <ButtonStyles icon={<Icon phosphorIcon={Ticket} />}
                                loading = {!isLoading}
                                schema = {"primary"}
                                onClick={() => onMint()}
                        >
                            Get A Ticket
                        </ButtonStyles>
                }
            </ButtonContainer> }
        </MinNFTStyled>
    )
}


export default MinNFT


