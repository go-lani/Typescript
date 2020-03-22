"use strict";
// 제네릭은 타입스크립트에서 함수, 클래스, interface, type alias를 사용하게 될 때 여러 종류의 타입에 대해 호환을 맞춰야되는 경우에 사용한다.
// 제네릭은 결국 타입 유추를 위한 것이다(?)
// 제네릭을 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있다.
// 매개변수느낌..??인가..
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 함수에서 제네릭 사용하는 방법
// 객체를 합치는 함수가 있다고 가정했을 경우
// 잘못된 예시(any 사용)
function badMerge(a, b) {
    return __assign(__assign({}, a), b);
}
// 객체가 어떤 모양으로 올지 몰라 any 타입을 쓰게되면 타입 유추가 깨지게 된다.
// 즉, badResult안에 어느 타입이 존재하는지 알 수 없다.
var badResult = badMerge({ foo: 1 }, { bar: 2 });
console.log(badResult);
// 올바른 예시(제네릭 사용)
function goodMerge(a, b) {
    return __assign(__assign({}, a), b);
}
// 제네릭을 사용하여 타입 유추를 가능하게 한다.
var goodResult = goodMerge({ foo: 1 }, { bar: 2 });
console.log(goodResult);
var items = {
    list: ['가', '나', '다']
};
console.log(items.list);
var fruits = {
    list: ['apple', 'grape']
};
console.log(fruits.list);
// class에서 제네릭 사용하는 방법
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "Length", {
        get: function () {
            return this.list.length;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
numberQueue.enqueue(4);
numberQueue.enqueue(5);
console.log(numberQueue.Length);
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());
var stringQueue = new Queue();
stringQueue.enqueue('A');
stringQueue.enqueue('B');
stringQueue.enqueue('C');
stringQueue.enqueue('D');
stringQueue.enqueue('E');
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());
