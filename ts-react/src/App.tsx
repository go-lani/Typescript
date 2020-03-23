import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import CounterReducer from './CounterReducer';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './ContextSample';

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
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
}

export default App;
