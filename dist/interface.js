"use strict";
// Circle이란 클래스가 인터페이스 Shape를 구현하고 있다고 선언
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // 넓이를 구하는 함수
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // 멤버 변수를 생략하고, public 또는 private을 지정
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rect = new Rectangle(10, 5);
console.log('public height', rect.width);
console.log('private height', rect.height);
var shapes = [new Circle(5), new Rectangle(10, 5)];
console.log('shapes', shapes);
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
