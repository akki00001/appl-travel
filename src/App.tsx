import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Helmet>
        <title>Astir Passage</title>
      </Helmet>

      <Header setSearchTerm={setSearchTerm} />
      <main>
        <AppRoutes searchTerm={searchTerm} />
      </main>
      <Footer />
    </>
  );
};

export default App;
