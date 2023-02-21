import React from 'react';
import { Routers } from '../../routers/Routers';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};
