import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { AuthContextProvider, AuthProvider } from '../context/AuthContext';
import { useAuth } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  // const { currentUser } = useAuth()
  return (
   <AuthContextProvider>
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  </AuthContextProvider> 
  )
}

export default MyApp
