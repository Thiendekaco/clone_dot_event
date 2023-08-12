import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Router from './router';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProviderStyled } from './provider/Theme.provider';
import SelectBoxProvider from './provider/OpenSelectBox.provider';
import { WalletProvider } from "./provider/Wallet.provider";
import ConnectWalletProvider from "./provider/ConnectWalletStatement.provider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
root.render(
  <React.StrictMode>
    <ThemeProviderStyled>
      <HashRouter>
          <WalletProvider>
            <SelectBoxProvider>
                <ConnectWalletProvider>
                      <Router />
                </ConnectWalletProvider>
            </SelectBoxProvider>
          </WalletProvider>
      </HashRouter>
    </ThemeProviderStyled>
  </React.StrictMode>
);

reportWebVitals();
