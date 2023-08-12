import {ApiPromise, WsProvider} from '@polkadot/api';
import {ENVIRONMENT} from "../utils/Environment.url";
import { getPublicCurrentAccount, convertStringToNumber, convertStringToPrice } from "../utils/functionUtils";
import {ContractPromise} from "@polkadot/api-contract";
import launchpad_psp34_nft_standard from "../libs/launchpad_psp34_nft_standard";
import { getCurrentPhase, getPhaseScheduleById,
    getLasPhaseId, getPhaseAccountLastIndex,
    setContract, PublicMint}  from "../libs/launchpad_psp34_nft_standard_calls";
import { WalletAccount } from "@subwallet/wallet-connect/types";
import { BN } from 'bn.js';


export const fetchPublicPhaseInfoData = async () =>{
    try {
        //@ts-ignore
        const totalPhase = await getLasPhaseId(
            await  getPublicCurrentAccount()
        )
       const allPhases =  await Promise.all(
            [...new Array(totalPhase)].map( async (phases, index) =>{

                const totalCountWLAddress =   await getPhaseAccountLastIndex(
                    await getPublicCurrentAccount(),
                    index + 1
                );

                const data = await getPhaseScheduleById(
                    await getPublicCurrentAccount(),
                    index + 1
                )

                return {
                    ...data,
                    id : index + 1,
                    publicClaimedAmount: convertStringToNumber(data.publicClaimedAmount),
                    publicRemainAmount:
                        convertStringToNumber(data.publicMintingAmount) -
                        convertStringToNumber(data.publicClaimedAmount),
                    publicMintingFee: convertStringToNumber(data.publicMintingFee),
                    publicMintingAmount: convertStringToNumber(data.publicMintingAmount),
                    publicMaxMintingAmount: convertStringToNumber(data.publicMaxMintingAmount),

                    totalCountWLAddress: convertStringToNumber(totalCountWLAddress),
                    whitelistAmount: convertStringToNumber(data.whitelistAmount),

                    claimedAmount: convertStringToNumber(data.claimedAmount),
                    totalAmount: convertStringToNumber(data.totalAmount),

                    startTime: convertStringToNumber(data.startTime),
                    endTime: convertStringToNumber(data.endTime),
                }

            })
       )
        return allPhases.filter( (phase) => phase.isActive === true);
    }catch( error ){
        console.log( error as Error)
    }
}
export const fecthCurrentPhaseId  = async ( contract : ContractPromise) =>{
    try{
        setContract(contract);
        const id = await getCurrentPhase(
            await  getPublicCurrentAccount()
        )
        const publicPhases = await  fetchPublicPhaseInfoData();
        const currentPhase = publicPhases?.find((phase) => phase.id === id);
        return { id, currentPhase }
    }catch(error){
        console.log( error as Error)
    }
}



export class chainApi {
    api ?: ApiPromise;

    constructor (){
        this.api = new ApiPromise({
            provider: new WsProvider(ENVIRONMENT.CHAIN_ENDPOINT),
        });
    }

    async subcribeBalance( currentAddress : string | null | undefined ){
        if( !this.api ) return;
        try{
            await  this.api.isReady;
            // @ts-ignore
            return  this.api.query.system.account( currentAddress ).then(( { data } ) => {
                const free = convertStringToPrice( data.toHuman().free);
                const miscFrozen = convertStringToPrice( data.toHuman().miscFrozen );
                return free - miscFrozen;
            });
        }catch( error ){
            console.log( error as Error )
        }

    }

    async onMint( collection_id : string | undefined, account : WalletAccount | undefined ) {
        if(!this.api) return;

            await  this.api.isReady;
            if( !collection_id || !account ) return;
            const contractSmart =  new ContractPromise( this.api, launchpad_psp34_nft_standard.CONTRACT_ABI, collection_id );
            setContract(contractSmart);
            const { currentPhase }: any  =  await  fecthCurrentPhaseId( contractSmart );
            const { data }: any = await this.api.query.system.account( account.address );
            const balance =
                new BN(data.free).div( new BN(10 ** 6) ).toNumber() / 10 ** 6 -
                // @ts-ignore
                new BN(data.miscFrozen).div( new BN(10 ** 6) ).toNumber() / 10 ** 6;
            const mintingFee = currentPhase?.publicMintingFee / 10 ** 12;
            if (balance < 0.5) {
                return "Low balance to mint";
            }
            if ( balance < mintingFee + 0.01 ) {
                return "Not enough balance to mint";
            }
            const currentPhaseId = currentPhase ? currentPhase.id : 1;
            await  PublicMint(
                account.address,
                currentPhaseId,
                mintingFee,
                1,
                collection_id,
                account,
            )

    }

}

export const chainApiContract  = new chainApi();





