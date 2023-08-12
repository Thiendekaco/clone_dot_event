import {useLocalStorage} from "../hook/useLocalStorage.hook";
import {WalletInfomationContext} from "../context";
import {useState, useEffect, useCallback, useContext} from "react";
import {Wallet, WalletAccount} from "@subwallet/wallet-connect/types";
import {getWalletBySource} from "@subwallet/wallet-connect/dotsama/wallets";


export interface WalletProviderProps  {
    children : React.ReactNode;
}

export const WalletProvider = ({children} : WalletProviderProps) =>{
    const [walletType, setWalletType] = useLocalStorage('wallet-type');
    const [walletKey, setWalletKey] = useLocalStorage('wallet-key')
    const [currentWallet, setCurrentWallet] = useState<Wallet | undefined>(getWalletBySource(walletKey));
    const [accounts , setAccount] = useState<WalletAccount[] | null >(null);

    const setAccountsOfWallet = useCallback(
        async ( wallet : Wallet)=>{
            const accounts = await wallet.getAccounts();
            setAccount(accounts);
        }
    , [])


    const selectWallet  = useCallback(
        async (wallet : Wallet): Promise<void> =>{
            setCurrentWallet(wallet);
            try{
                await wallet.enable();
                setWalletKey(wallet.extensionName);
                await setAccountsOfWallet(wallet);
            }catch (e){
                console.log(e as Error)
            }
        }
    ,[setAccountsOfWallet, walletType, currentWallet])

    const WalletContext = {
        wallet : currentWallet,
        accounts : accounts,
        setWallet : async (wallet ?: Wallet, walletType ?: string) =>{
            if(!wallet) return;
            await selectWallet(wallet);
            setWalletType(walletType);
        },
        walletType
    }

    useEffect( () => {
        if(walletType  === 'substrate') {
            const wallet = getWalletBySource(walletKey)
            if (wallet && wallet?.installed) {
                new Promise(async () => {
                    await setAccountsOfWallet(wallet)
                       setCurrentWallet(wallet) })
            }
        }
    }, [setAccountsOfWallet, selectWallet, walletType]);

    return(
        <WalletInfomationContext.Provider value={WalletContext}>
            {children}
        </WalletInfomationContext.Provider>
    )
}








