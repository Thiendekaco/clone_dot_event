import { OpenSelectBoxContext  } from "../context";
import {useState, useContext, useEffect} from "react";
import {WalletAccount} from "@subwallet/wallet-connect/types";
import { WalletInfomationContext } from "../context";
import { useLocalStorage } from "../hook/useLocalStorage.hook";

export interface IsOpenSelectBoxProps {
    children : React.ReactNode;
}

const SelectBoxProvider = ({children} : IsOpenSelectBoxProps )=>{
    const [ accountIsSelected, setAccount] = useState<WalletAccount & {index : number} | undefined>(undefined);
    const [ state, setState] = useState<boolean>(false);
    const { accounts } = useContext(WalletInfomationContext);
    const [ account_address,  ] = useLocalStorage('address_account')

    useEffect(() => {
        if(accounts ){
            if(!account_address){
                setAccount({ ...accounts[0] , index : 0} );
            }else{
                const _index = accounts?.findIndex((account) => account.address === account_address);

                if( _index === - 1 ){
                    return undefined;
                }
                setAccount({ ...accounts[_index] , index : _index} );
            }

        }

    }, [ accounts ]);
    return (
        <OpenSelectBoxContext.Provider value={{accountIsSelected, setAccount, state, setState}}>
            {children}
        </OpenSelectBoxContext.Provider>
    )
   
}

export default SelectBoxProvider