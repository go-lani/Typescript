import React, { useState } from 'react'

export default function Counter() {
  // useState일떄는 타입 추론이 가능하여 생략이 가능하다.
  const [count, setCount] = useState(0);

  // 그렇다면 useState 제네릭을 사용하는 경우
  // null 값이 들어올 수도 있는 경우에 제네릭을 사용
  type Information = {
    name: string;
    description: string;
  }
  const [information, setInformation] = useState<Information | null>(null);

  const onIncrease = () => (setCount(count + 1));
  const onDecrease = () => (setCount(count - 1));
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
