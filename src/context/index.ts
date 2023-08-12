import { createContext } from "react";
import {IsOpenSelectBoxType,
    WalletInFomationType,
    ConnectWalletStateInterface,
    NFTCollection} from "../type";





export const OpenSelectBoxContext = createContext<IsOpenSelectBoxType>({
    setAccount : () => {},
    setState: () => {},
    state : false,
    accountIsSelected : undefined
})


export const WalletInfomationContext  = createContext<WalletInFomationType>({
    walletType : 'substrate',
    setWallet : async()=> {},
    accounts : null
})

export const ConnectWalletContext = createContext<ConnectWalletStateInterface> ({
    setCurrentAddress : () => {},
    setIsApiReady : () => {},
    isApiReady : false,
    currentBalance : 0 ,
    setCurrentBalance : () => {},
    setCollection : () => {},
    setMintedNFTs : () => {}
    }
)

