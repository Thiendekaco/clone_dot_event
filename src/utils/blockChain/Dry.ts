import { BN } from "@polkadot/util";
import { ContractPromise } from "@polkadot/api-contract";




export const toContractAbiMessage = ( contract : ContractPromise, message : string ) =>{
    const value = contract?.abi.messages.find((mess) => mess.method === message);
    if( value) {
        return { ok : true, value};
    }

    const _messages = contract?.abi.messages
        .map((m) => m.method)
        .join(", ");

    const error = `"${message}" not found in metadata.spec.messages: [${_messages}]`;

    return { ok: false, error };
}

export const getGasLimit = async (
    api : any  ,
    userAddress : string | null,
    message : string ,
    contract : ContractPromise,
    options: any,
    args: any[]
) => {
    const abiMessage = toContractAbiMessage(contract, message);

    if (!abiMessage.ok) return abiMessage;

    const { value, gasLimit, storageDepositLimit } = options;

    const  { gasRequired } = await api.call.contractsApi.call(
        userAddress,
        contract.address,
        value ?? new BN(0),
        gasLimit ?? null,
        storageDepositLimit ?? null,
        abiMessage.value?.toU8a(args)
    );
    return { ok: true, value: gasRequired };
}