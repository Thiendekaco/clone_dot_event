import axios from "axios";
import { ENVIRONMENT } from "../utils/Environment.url";



export interface  clientAxiosProps {
    method : string,
    options : {},
    url : string
};

const baseURL = ENVIRONMENT.ARTZERO_API_ENDPOINT;


export const client = async ({method, url, options} : clientAxiosProps) :Promise<any> =>{
    const headers = {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
    };
    const _option  = new URLSearchParams(
        Object.entries(options)
    ).toString()
    return await axios({ baseURL, url, method, data : _option, headers})
        .then(({data}) =>  data)
        .catch((error: Error) =>console.log("error FAILED @ xx>>", url, error.message));
}


export const getCollectionByAddress = async (nftCollectiontAddress : string) =>{
    return  await  client({ method :'POST',
        url :'/getCollectionByAddress',
        options : { collection_address : nftCollectiontAddress }})
}



export const askBeUpdateNftData = async (collection_address: string, token_id  : number) => {
    // @ts-ignore
    return  await  client({ method :'POST',
        url :"/updateNFT",
        options : {collection_address ,token_id}}
    )
}

export const  getNFTsByOwnerAndCollection = async (collection_address : string , owner : string) =>{
    return await client({
        method: 'POST',
        url: "/getNFTsByOwnerAndCollection",
        options: {collection_address, owner, limit: 10000, offset: 0, sort: -1}
    })
}


