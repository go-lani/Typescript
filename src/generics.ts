// 제네릭은 타입스크립트에서 함수, 클래스, interface, type alias를 사용하게 될 때 여러 종류의 타입에 대해 호환을 맞춰야되는 경우에 사용한다.
// 제네릭은 결국 타입 유추를 위한 것이다(?)
// 제네릭을 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있다.
// 매개변수느낌..??인가..

// 함수에서 제네릭 사용하는 방법
// 객체를 합치는 함수가 있다고 가정했을 경우
// 잘못된 예시(any 사용)
function badMerge(a: any, b: any): any {
  return {
    ...a,
    ...b,
  }
}

// 객체가 어떤 모양으로 올지 몰라 any 타입을 쓰게되면 타입 유추가 깨지게 된다.
// 즉, badResult안에 어느 타입이 존재하는지 알 수 없다.
const badResult = badMerge({ foo: 1 }, { bar: 2 });
console.log(badResult);

// 올바른 예시(제네릭 사용)

function goodMerge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  }
}

// 제네릭을 사용하여 타입 유추를 가능하게 한다.
const goodResult = goodMerge({foo: 1}, {bar: 2});
console.log(goodResult);

// interface에서 제네릭 사용하는 방법
interface Items<T> {
  list: T[]
}

const items: Items<string> = {
  list: ['가', '나', '다']
}

console.log(items.list);

// type alias에서 제네릭 사용하는 방법
type fruit<T> = {
  list: T[]
}

const fruits: fruit<string> = {
  list: ['apple', 'grape']
}
console.log(fruits.list)

// class에서 제네릭 사용하는 방법
class Queue<T> {
  list: T[] = [];

  get Length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const numberQueue = new Queue<number>();

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

const stringQueue = new Queue<string>();

stringQueue.enqueue('A');
stringQueue.enqueue('B');
stringQueue.enqueue('C');
stringQueue.enqueue('D');
stringQueue.enqueue('E');
console.log(stringQueue.Length);
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());

