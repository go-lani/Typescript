import React from 'react';

type GreetingsProps = {
  name: string;
  age: number;
  mark: string;
  optional?: string;
  // 특정 함수를 props로 받아오기
  onClick: (name: string) => void; // 리턴 값은 없다는 함수를 의미
};

// React.FC를 사용하면 defaultProps가 적용안되는 이슈가 있다.
// const Greetings: React.FC<GreetingsProps> = ({ name }) => (
//   <div>Hello, {name}</div>
// )

const Greetings = ({ name, mark, age, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <>
      <div>Hello, {name}({age}){mark}</div>
      {optional && <p>{optional}</p>}
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

Greetings.defaultProps = {
  name: 'publee',
  age: 29,
  mark: '!'
}

export default Greetings;