import React from 'react';
import Header from './components/Header';
import AnyContext from './AnyContext';
import Basic from './components/Basic';
//import LearnReact from './components/LearnReact';

const App = () => {
  return (
    <>
      <Header />
      <AnyContext.Provider value="error">
        <Basic />
      </AnyContext.Provider>
    </>
  );
};

export default App;
