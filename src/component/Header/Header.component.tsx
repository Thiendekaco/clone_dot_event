import { HeaderContainer,
    Logo,
    CollectionAccount,
    AccountName,
    AccountBox,
    DivStylesQuestion
} from "./Header.styles"
import { CaretDown, Question } from "phosphor-react"
import { OpenSelectBoxContext, WalletInfomationContext } from "../../context";
import { useContext,  CSSProperties  } from "react";
import { ENVIRONMENT } from "../../utils/Environment.url";
import { Icon } from "@subwallet/react-ui";
import {toShort} from "@subwallet/react-ui/es/_util/address";

const Body = document.body;

const Header = () =>{
    const { state, setState, accountIsSelected} = useContext( OpenSelectBoxContext );
    const { accounts }= useContext(WalletInfomationContext)
    const stylesSpan : CSSProperties = {
        fontFamily : 'Plus Jakarta Sans',
        color: 'white',
        fontSize : 'small',
        whiteSpace: 'nowrap',
        width: '50%',
        margin: '2px 0 0 7px'
    }
    const styleIconCaretDown : CSSProperties = {
        width : "20%",
        marginTop : '-2px'
    }


    const handleOnClick = () =>{
        setState(!state)
        Body.style.overflowY  = state ? 'scroll'  : 'hidden';
    }
    const bg = require('../../assets/logo.png')
    return(
        <HeaderContainer>
            <Logo src={bg} />
            { accounts ? <CollectionAccount onClick={handleOnClick}>
                <AccountBox>
                    {accountIsSelected ? <AccountName
                        className={'selected-account-item'}
                        address={accountIsSelected?.address}
                        renderMiddleItem={() => {
                            return <>
                               <span style={{whiteSpace: 'nowrap',
                                   textOverflow: 'ellipsis', maxWidth: '10px'
                               }}>{accountIsSelected?.name}
                                   <span style={{fontWeight : 500, opacity: 0.7, fontSize: "small"}}>({toShort(accountIsSelected?.address, 0, 3)})</span> </span>
                            </>
                        }}
                        avatarSize={20}
                        avatarIdentPrefix={0}
                    /> : <span style={stylesSpan}>Select Account</span>}
                </AccountBox>
                <CaretDown size={30} color="#8a8a8a" style={styleIconCaretDown}/>
            </CollectionAccount> : <>
                <DivStylesQuestion
                    icon={<Icon phosphorIcon={Question} weight={'duotone'}/>}
                    onClick={ () => window.open( ENVIRONMENT.INSTRUCTION_URL)}
                    type = { 'ghost' }
                    size = {'xs'}
                >
                    Help
                </DivStylesQuestion>
            </>}
        </HeaderContainer>
    )
}

export default Header