import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Astir Passage</title>
      </Helmet>

      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
