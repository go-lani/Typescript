// 일관성 있게 사용하기 위해 type은 주로 일반 객체 형식에 타입을 붙일때 사용
// type 은 특정 타입에 별칭을 붙이는 용도로 사용한다.
// 이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있다.

type TypePerson = {
  name: string,
  age: number,
}

type TypeDeveloper = TypePerson & {
  skills: string[]
}

const typePerson: TypePerson = {
  name: '이철환',
  age: 29,
}

const typeDeveloper: TypeDeveloper = {
   name: 'publee',
   age: 29,
   skills: ['HTML', 'CSS', 'Javascript', 'React'],
}

// TypePerson의 타입을 가진 배열로 People의 Type으로 사용한다.
type People = TypePerson[];

// people의 배열에는 People의 타입을 가진 요소만 들어올 수 있다.
// 한마디로 TypePerson 객체의 필수로 필요한 name, age가 없다면 에러를 낸다.
const people: People = [typePerson, typeDeveloper];
console.log(people);