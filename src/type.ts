import {Wallet, WalletAccount} from '@subwallet/wallet-connect/types'

export interface Theme {
   background_color : string,
   color : string ,
   backgroundColorCollection : string,
   fontFamily : string
}

export interface IsOpenSelectBoxType {
   setAccount : (account : WalletAccount & {index : number}| undefined) => void;
   setState : (_state : boolean) => void;
   state: boolean,
   accountIsSelected : WalletAccount & {index : number} | undefined
}
export interface NFTCollection {
   id : string,
   index : number,
   collectionOwner : string,
   nftContractAddress : string,
   contractType : string,
   isCollectRoyaltyFee : boolean,
   royaltyFee : number,
   isActive : boolean,
   showOnChainMetadata : boolean,
   name: string,
   description: string,
   avatarImage: string,
   squareImage: string,
   headerImage: string,
   website: string,
   twitter: string,
   discord: string,
   telegram: string,
   volume: number,
   nft_count: number,
   isDoxxed: boolean,
   isDuplicationChecked: boolean
}



export interface NFTItem {
   id : string,
   nftName: string,
   description : string,
   avatar : string,
   nftContractAddress : string,
   owner : string,
   tokenID : number,
   attributes : string[],
   attributesValue : string[],
   listed_date : number,
   price : number,
   is_locked : boolean
}


export interface  WalletInFomationType {
   setWallet : (wallet ?: Wallet, walletType ?: string) => Promise<void>;
   walletType ?: string | null;
   accounts : WalletAccount[] | null;
   wallet ?: Wallet | null;
}

export interface  ConnectWalletStateInterface {
   setCurrentAddress : (address : string) => void,
   currentAddress ?: string| null ,
   setIsApiReady : (isApiReady : boolean) => void,
   isApiReady : boolean,
   currentBalance : number ;
   setCurrentBalance : (balance : number) => void,
   setCollection : (collection : NFTCollection) => void,
   collection ?: NFTCollection,
   mintedNFTs ?: NFTItem[],
   setMintedNFTs : ( _Nft : NFTItem[] | undefined ) => void;
}
export interface  accountContractInterface{
   key: string  ,
   name : string,
   address: string
}

