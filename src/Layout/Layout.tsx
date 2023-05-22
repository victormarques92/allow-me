import React, { ReactNode } from 'react';
import { Footer, Navigation } from '../containers';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
