import React, { useReducer } from 'react';
import { useSampleDispatch, useSampleState } from './ContextSample';

export default function ReducerSample() {
  const dispatch = useSampleDispatch();
  const state = useSampleState();

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'world' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });
  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}
