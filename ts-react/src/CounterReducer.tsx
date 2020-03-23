import React, {useReducer} from 'react';

type Action = {type: 'INCREASE'} | {type: 'DECREASE'};

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state + 1;
    default:
      throw new Error('unhandled action');
  }
}


export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({type: 'INCREASE'})
  }

  const onDecrease = () => {
    dispatch({type: 'DECREASE'})
  }
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>Up</button>
        <button onClick={onDecrease}>Down</button>
      </div>
    </div>
  )
}
