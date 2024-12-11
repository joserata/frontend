// Layout.js
import React from 'react';
import Header from './Header'; // Importa tu componente Header
import Footer from './Footer'; // Importa tu componente Footer

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
