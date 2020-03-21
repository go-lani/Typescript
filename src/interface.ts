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

const rect = new Rectangle(10, 5);
console.log('public height',rect.width);
console.log('private height', rect.height); // 컴파일 에러: height의 속성을 private이므로 Rectangle 클래스 내부에서만 사용이 가능하다

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

console.log('shapes', shapes);

shapes.forEach((shape) => {
  console.log(shape.getArea());
});