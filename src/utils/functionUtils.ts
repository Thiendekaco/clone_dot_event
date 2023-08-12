import { Keyring }  from "@polkadot/keyring";
import { hexToU8a, isHex} from "@polkadot/util";
import { BN, BN_ONE} from "@polkadot/util";
import { askBeUpdateNftData } from "../api/clientApi";
import { ContractPromise } from "@polkadot/api-contract";
import { WalletAccount } from "@subwallet/wallet-connect/types";
import  { accountContractInterface } from "../type";
import { getGasLimit } from "./blockChain/Dry";


const MAX_CALL_WEIGHT = new BN(5_000_000_000_000).isub(BN_ONE);
const IPFS_BASE_URL = '';


    export const convertStringToPrice  = (priceString: string)  =>{
         try {

             const a = priceString.replace(/\,/g, "");
             return parseFloat(a) / 10 ** 12 ;
         } catch (error) {
             console.log(error);
             return 0;
         }
     }

    export  const  getPublicCurrentAccount =  async ()  =>{
         const keyring = new Keyring();
         const PHRASE =  "entire material egg meadow latin bargain dutch coral blood melt acoustic thought";
         keyring.addFromUri(PHRASE, {name : 'Nobody'})

         return keyring.getPairs()
             .map(({ address, meta:{ name }}) =>({
                 key : address,
                 name,
                 address
             }))[0] as accountContractInterface
     }


    export  const readOnlyGasLimit =  (contract : ContractPromise) => {
         if(!contract) return ;
         try{
             const ret = contract.api.registry.createType("WeightV2", {
                 refTime: new BN(1_000_000_000_000),
                 proofSize: MAX_CALL_WEIGHT,
             });
             return ret;
         }catch(error){
             console.log(error as Error)
         }
     }
 export const convertFormattOutput = (output : any) => {
         if(!output)  return null;
         return output.toHuman().Ok.replaceAll("," , "");
     }

 export  const convertFormattOutputToNumber =  ( output : any)  =>{
         if(! output) return null;
         return parseFloat(output.toHuman().Ok.replaceAll("," , ""));
     }

 export  const getEstimateGas = async (
         address : string,
         contract : ContractPromise,
         value : any,
         queryName : string,
         ...args: any[])=>  {
         try{
             const result = await getGasLimit(
                 contract?.api  ,
                 address,
                 queryName,
                 contract,
                 { value },
                 args
             )
             if( result.ok ){
                 return result.value;
             }

         }catch (error) {
             console.log(error as Error);
         }
     }

 export  const convertStringToNumber =  (text : any) => {
         if( !text || typeof text !== 'string') return text;
         return  parseFloat(text.replace(/,/g, ""));
     }



