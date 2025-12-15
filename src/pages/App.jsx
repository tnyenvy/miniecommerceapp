import React from 'react';
import { getSystemInfo } from "zmp-sdk";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui"; 
import { GlobalProvider } from '../state/GlobalState.jsx'; 
import Layout from '../components/layout.jsx'; 

const MyApp = () => {
  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <GlobalProvider>
          <ZMPRouter>
            <Layout />
          </ZMPRouter>
        </GlobalProvider>
      </SnackbarProvider>
    </App>
  );
};

export default MyApp;