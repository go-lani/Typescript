import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';

function App() {
  const checkName = (name: string) => {
    alert(name);
  }

  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form);
  }

  return (
    <>
      <Greetings onClick={checkName} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </>
  );
}

export default App;
