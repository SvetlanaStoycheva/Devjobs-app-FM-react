import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Companies from './components/Companies';
import { useGlobalContext } from './context';

function App() {
  const { theme } = useGlobalContext();
  return (
    <>
      <main className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <Header />
        <Search />
        <Companies />
      </main>
    </>
  );
}

export default App;
