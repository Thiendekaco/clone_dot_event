import { useState, useEffect } from "react";


export const useLocalStorage =  (keyItem : string): [string | null, (itemReplace ?:  string)=> void] =>{
    const [value, setValue] = useState<string  | null>(null)

    useEffect(() => {
        localStorage.getItem(keyItem) !== undefined && setValue(localStorage.getItem(keyItem));
    }, [keyItem]);
    const setStorageValue = (itemReplace ?:  string)=>{
        if( itemReplace !== JSON.parse(value as string ) && itemReplace !== undefined){
            localStorage.setItem(keyItem, JSON.stringify(itemReplace));
            setValue(JSON.stringify(itemReplace));
        }
    }

    return [ value !== undefined ? JSON.parse(value as string) : null, setStorageValue]


}
