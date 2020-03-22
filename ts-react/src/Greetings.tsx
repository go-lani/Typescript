import React from 'react';

type GreetingsProps = {
  name: string,
};

// React.FC를 사용하면 defaultProps가 적용안되는 이슈가 있다.
// const Greetings: React.FC<GreetingsProps> = ({ name }) => (
//   <div>Hello, {name}</div>
// )

const Greetings = ({ name }: GreetingsProps) => (
  <div>Hello, {name}</div>
)

Greetings.defaultProps = {
  name: 'publee'
}

export default Greetings;