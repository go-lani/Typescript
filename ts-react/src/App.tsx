import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';

function App() {
  const checkName = (name: string) => {
    alert(name);
  }

  return (
    <>
      <Greetings onClick={checkName} />
      <Counter />
    </>
  );
}

export default App;
