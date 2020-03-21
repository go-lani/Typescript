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
var shape = new Circle(3);
console.log(shape.getArea());
