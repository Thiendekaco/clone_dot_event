import './App.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './component/Header/Header.component';
import SelectAccount from './component/SelectAccount/SelectAccount.component';

import { useEffect, useContext } from 'react';
import { WalletInfomationContext, ConnectWalletContext } from "./context";


const App = () =>{
    const navigate = useNavigate();
    const {accounts,wallet }= useContext( WalletInfomationContext );
    const { mintedNFTs, setMintedNFTs } = useContext ( ConnectWalletContext )
    useEffect(() => {
        if(accounts === null ){
            navigate('/welcome');
        }else{
            if(mintedNFTs && mintedNFTs.length > 0){
                navigate('/result');
            }else{
                navigate('/minNft');
            }
        }
    }, [ accounts, wallet, mintedNFTs, setMintedNFTs]);
  return(
    <>
      <div className='app_container'>
          <Header/>
          <Outlet />
      </div>
      <SelectAccount  />
      
    </>
    
  )
}

export default App;
 