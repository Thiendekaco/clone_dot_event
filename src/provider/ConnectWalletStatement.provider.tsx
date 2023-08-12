import React, { useEffect, useState, useContext } from "react";
import { IsOpenSelectBoxType, NFTCollection, NFTItem } from "../type";
import { OpenSelectBoxContext, ConnectWalletContext } from "../context";
import { useLocalStorage } from "../hook/useLocalStorage.hook";
import { ENVIRONMENT } from "../utils/Environment.url";
import { getCollectionByAddress, getNFTsByOwnerAndCollection } from "../api/clientApi";
import { chainApiContract } from "../api/chainApi";
export interface ConnectWalletProps {
    children : React.ReactNode
}


const ConnectWalletProvider = ({children} : ConnectWalletProps) =>{
    const { accountIsSelected } = useContext<IsOpenSelectBoxType>( OpenSelectBoxContext );
    const [ currentAddress , setCurrentAddress] = useLocalStorage('address_account');
    const collection_address = ENVIRONMENT.COLLECTION_ID;
    const [isApiReady, setIsApiReady] = useState<boolean>(false);
    const [collection, setCollection] = useState<NFTCollection| undefined>();
    const [ currentBalance, setCurrentBalance ] = useState<number>(0)
    const [ mintedNFTs, setMintedNFTs ] = useState<NFTItem[] | undefined>(undefined);

    useEffect(() => {
        collection_address && getCollectionByAddress(collection_address).then(
            (collections : {ret : NFTCollection[]} )=> {
                setCollection(collections?.ret[0])
            }
        )
    }, [ collection_address, setCollection ]);

    useEffect(() => {
        currentAddress && chainApiContract.subcribeBalance
        ( currentAddress ).then( unsub => unsub !== undefined && setCurrentBalance(unsub) )
    }, [ currentBalance, currentAddress ]);

    useEffect(() => {
        accountIsSelected && setCurrentAddress( accountIsSelected.address )
    }, [accountIsSelected]);
    useEffect(() => {
        if( currentAddress  ){
            getNFTsByOwnerAndCollection( collection_address, currentAddress )
                .then((rs: {ret: NFTItem[]}) => {
                    setMintedNFTs(rs.ret)
                });
        }
    }, [ collection_address, currentAddress ]);




    const _ConnectWalletContext = {
        setCurrentAddress ,
        currentAddress ,
        setIsApiReady,
        isApiReady ,
        currentBalance  ,
        setCurrentBalance ,
        setCollection ,
        collection,
        mintedNFTs,
        setMintedNFTs
    }

    return(
        <ConnectWalletContext.Provider value={_ConnectWalletContext}>
            { children }
        </ConnectWalletContext.Provider>
    )

}
export  default  ConnectWalletProvider


