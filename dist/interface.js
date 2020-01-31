"use strict";
// 인터페이스의 정의(타입을 재사용할때 사용)
// 객체에 상속되어질 수 있다.
// interface Todo {
//   id: number;
//   content: string;
//   completed: boolean;
// }
// 변수 todo의 타입으로 Todo 인터페이스를 선언하였다.
var todo;
todo = { id: 1, content: '', completed: false };
// union type(조건부)
var foo;
var bar;
foo = null;
bar = 2;
var boo;
boo = 4;
// func 타입은 Func이고 함수를 담는다.
var func = function () { };
func('', 2);
var userInfo = {
    username: 'ungmo2@gmail.com',
    password: '123456'
};
console.log(userInfo);
