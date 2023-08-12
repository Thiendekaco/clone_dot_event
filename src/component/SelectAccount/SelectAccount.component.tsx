import { 
    SelectContainer, 
    SelectBox, 
    SelectBoxHeader, 
    SelectBoxTitile, 
    IconClose,
    SelectBoxContent,
    AccountBox,
    AccountName,
    FooterBox
} from "./SelectAccount.styles";
import React, {useContext, CSSProperties} from "react";
import { OpenSelectBoxContext, WalletInfomationContext } from "../../context";
import { X, Copy } from "phosphor-react";
import { MouseEvent } from "react";


const Body = document.body;

const SelectAccount = ()=>{
    const { state, setState, accountIsSelected, setAccount} = useContext(OpenSelectBoxContext);
    const { accounts } = useContext(WalletInfomationContext)
    const styleIconCopy : CSSProperties = {
        margin : "10px 20px 15px 20px",
        
    }

    const handleClose = ()=>{
        setState(!state)
        Body.style.overflowY  = state ? 'scroll'  : 'hidden';
    }

    const handleChecked = (event : MouseEvent<HTMLDivElement> ) =>{
        if(accounts === null) return ;
        const indexAccount = parseInt(event.currentTarget.getAttribute('id') ||"0");
        setAccount({...accounts[indexAccount], index : indexAccount })
        if(!document.hasFocus()){
            event.currentTarget.focus()
        }   
        navigator.clipboard.writeText(accounts[indexAccount].address || '')
        .then(()=> handleClose())
    }
    return (
        <SelectContainer state ={state.toString()}>
            <SelectBox state={state.toString()}>
                <SelectBoxHeader>
                    <IconClose onClick={handleClose}>
                        <X size={32} color="#f0f0f0"/>
                    </IconClose>
                    <SelectBoxTitile> Select Account</SelectBoxTitile>
                </SelectBoxHeader>
                <SelectBoxContent>
                    { accounts && accounts.map(((account, index) => (
                        <AccountBox key={index} id={`${index}`} onClick={ e => handleChecked(e)} >
                            <AccountName
                                address={account.address}
                                accountName={account.name || ''} avatarIdentPrefix={42}
                                addressPreLength={9}
                                isSelected={accountIsSelected?.index === index}
                                addressSufLength={9}
                                renderRightItem={(dItem : any) => (
                                    <>
                                        {dItem}
                                        <Copy size={20} style={styleIconCopy} color="#f0f0f0"/>
                                    </>
                                )}
                            />
                        </AccountBox>
                    )))}
                </SelectBoxContent>
                <FooterBox/>
            </SelectBox>
        </SelectContainer>
    )

}

export default SelectAccount