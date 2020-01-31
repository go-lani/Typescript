"use strict";
// 정적 타입 지정(타입은 컴파일할때까지만 유효하다)
// const x: number = 100;
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHi = function () {
        console.log("Hi! " + this.name + ".");
    };
    return Person;
}());
exports.default = Person;
