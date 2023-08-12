
import { ContractPromise } from "@polkadot/api-contract";
import { accountContractInterface } from "../type";
import { readOnlyGasLimit , convertFormattOutputToNumber, convertFormattOutput, getEstimateGas } from "../utils/functionUtils";
import { WalletAccount } from "@subwallet/wallet-connect/types";
import BN from "bn.js";
import { askBeUpdateNftData } from "../api/clientApi";



  let contract : ContractPromise;
    export const setContract =  (_contract: ContractPromise )=>{
            contract = _contract;
        }

    export const getCurrentPhase = async (account : accountContractInterface) =>{

        const { result, output } =  await contract.query['psp34LaunchPadTraits::getCurrentPhase']( account.address, { value : 0 ,// @ts-ignore
                 gasLimit: readOnlyGasLimit(contract) } )
        if(result.isOk && output){
            return  convertFormattOutputToNumber(output);
        }
        return null;
    }


     export const  getLasPhaseId = async ( account : accountContractInterface) =>{
         if(!contract || !contract) return null;
        const { result , output } = await contract.query["psp34LaunchPadTraits::getLastPhaseId"]

            ( account.address, { value : 0 , // @ts-ignore
                gasLimit: readOnlyGasLimit(contract) } );
        if(result.isOk && output){
            return convertFormattOutputToNumber(output);
        }
        return null;

    }
    export const  getPhaseAccountLastIndex  = async ( account : accountContractInterface , phaseId : number) => {
        const { result , output } = await contract.query["psp34LaunchPadTraits::getPhaseAccountLastIndex"]
            // @ts-ignore
            ( account.address, { value : 0, gasLimit : readOnlyGasLimit(contract)}, phaseId);
        if(result.isOk && output){
            return convertFormattOutput(output)
        }
        return null;
    }
  export const  getPhaseScheduleById = async ( account: accountContractInterface, phaseId: number ) => {

        const { result , output} = await contract.query["psp34LaunchPadTraits::getPhaseScheduleById"]
            // @ts-ignore
            ( account.address, { value: 0, gasLimit : readOnlyGasLimit(contract)}, phaseId );

        if( result.isOk && output){
            // @ts-ignore
            return output.toHuman().Ok;
        }
        return null;
    }

     export const  PublicMint = async (
        account_address : string,
        phaseId : number,
        mintFee : number,
        mintAmount : number,
        collection_address : string,
        wallet : WalletAccount,
    ) =>{

         {
            if(!contract) return ;
            const { signer } = wallet;
            const value = new BN(mintFee * 10 ** 6).mul(new BN(10 ** 6)).toString();
            const gasLimit = await getEstimateGas(
                account_address,
                contract ,
                value ,
                "publicMint",
                phaseId,
                mintAmount
            )
            const txNotSign =contract.tx.publicMint(
                {gasLimit, value},
                phaseId,
                mintAmount
            );

            let unsubscribe;
            // @ts-ignore
            await txNotSign.signAndSend(account_address, { signer }, async ({ status, dispatchError }) => {
                if(!contract) return ;
                if (status.isFinalized) {
                    contract.query["psp34Traits::getLastTokenId"](account_address, {
                        value: 0,
                        gasLimit,
                    }).then(async ({ result, output }) => {
                        if (result.isOk) {
                            const lastTokenId = convertFormattOutput(output);

                            for (
                                let token_id = lastTokenId - mintAmount + 1;
                                token_id <= lastTokenId;
                                token_id++
                            ) {
                                await askBeUpdateNftData( collection_address, token_id);
                            }
                        }
                    });
                }
            }).then((unsub) => (unsubscribe = unsub))

            return unsubscribe;

     }







};


