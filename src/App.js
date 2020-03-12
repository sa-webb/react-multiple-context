import React from 'react';
import Header from './components/Header';
import AnyContext from './AnyContext';
import AnotherContext from './AnotherContext';
import FirstExample from './components/First';
import SecondExample from './components/Second';

const App = () => {
  return (
    <>
      <Header />
      <AnyContext.Provider value="primary">
        <FirstExample />
      </AnyContext.Provider>
      <AnotherContext.Provider value="secondary">
        <SecondExample />
      </AnotherContext.Provider>
    </>
  );
};

export default App;
