import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

function App() {
  const checkName = (name: string) => {
    alert(name);
  }

  return (
    <Greetings onClick={checkName} />
  );
}

export default App;
