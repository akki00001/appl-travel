import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import TirangaWrapper from './components/common/TirangaWrapper';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Helmet>
        <title>Astir Passage</title>
      </Helmet>

      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <TirangaWrapper>
          <AppRoutes searchTerm={searchTerm} />
        </TirangaWrapper>
      </main>
      <Footer />
    </>
  );
};

export default App;
