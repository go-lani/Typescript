// Shape interface에는 꼭 getArea라는 함수가 존재해야한다.
// getArea의 리턴 값은 Number이다.
interface Shape {
  getArea(): number;
}

// Circle이란 클래스가 인터페이스 Shape를 구현하고 있다고 선언
class Circle implements Shape {
  // 멤버 변수
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  // 넓이를 구하는 함수
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // 멤버 변수를 생략하고, public 또는 private을 지정
  constructor(public width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

console.log('shapes', shapes);

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// 일반 객체를 interface 타입으로 설정하기
interface Person {
  name: string;
  age?: number; // ?의 의미는 설정을 해도 되고, 안해도 된다는 의미
}

interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: '이철환',
  age: 29,
};

const developer: Developer = {
  name: 'publee',
  skills: ['HTML', 'CSS', 'Javascript', 'React']
}