// Shape interface에는 꼭 getArea라는 함수가 존재해야한다.
// getArea의 리턴 값은 Number이다.
interface Shape {
  getArea(): number;
}

// Circle이란 클래스가 인터페이스 Shape를 구현하고 있다고 선언
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  // 넓이를 구하는 함수
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

const shape = new Circle(3);

console.log(shape.getArea())