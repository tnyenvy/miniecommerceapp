import React from 'react';
import { getSystemInfo } from "zmp-sdk";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui"; 
import Layout from '../components/layout.jsx'; 

const MyApp = () => {
  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <ZMPRouter>
          <Layout />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};

export default MyApp;