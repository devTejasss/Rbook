import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import SplashScreen from './SplashScreen';

const Layout = ({ children }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <>
          <div>
            <header>
              <Navbar />
            </header>
          </div>
          <div className="layout">
            <Head>
              <title>REBOOK</title>
            </Head>
            <main className="main-container">{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
