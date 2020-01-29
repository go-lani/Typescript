// 정적 타입 지정(타입은 컴파일할때까지만 유효하다)
// const x: number = 100;

class Person {
  // 타입스크립트에서는 아래의 클래스 변수를 선언해줘야 constrctor에 선언할 수 있다.
  name: string;

  constructor(name: string) {
    this.name = name
  }

  sayHi() {
    console.log(`Hi! ${this.name}.`);
  }
}

export default Person;