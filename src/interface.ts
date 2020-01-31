// 인터페이스의 정의(타입을 재사용할때 사용)
// 객체에 상속되어질 수 있다.
// interface Todo {
//   id: number;
//   content: string;
//   completed: boolean;
// }

// type alias
// Todo라는 타입을 생성하는 방법, interface랑 똑같다.
// 객체에 상속되어질 수 없다.
type Todo = {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언하였다.
let todo: Todo;

todo = {id: 1, content: '', completed: false};

// union type(조건부)
let foo: string | null;
let bar: 1 | 2 | 3 | 4;
type Bar = 1 | 2 | 3 | 4;

foo = null;
bar = 2;

let boo: Bar;
boo = 4;

// 함수정의
type Func = (a: string, b: number) => void;

// func 타입은 Func이고 함수를 담는다.
let func: Func = function () {};

func('', 2);

// 선택적 프로퍼티
interface UserInfo {
  username: string;
  password: string;
  age?    : number;
  address?: string;
}

const userInfo: UserInfo = {
  username: 'ungmo2@gmail.com',
  password: '123456'
}

console.log(userInfo);

