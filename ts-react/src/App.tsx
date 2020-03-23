import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import CounterReducer from './CounterReducer';
import ReducerSample from './ReducerSample';

function App() {
  const checkName = (name: string) => {
    alert(name);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings onClick={checkName} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <CounterReducer />
      <ReducerSample />
    </>
  );
}

export default App;
