let count = 0;
count += 1;
// count = '문자열';

const message: string = 'hello world';
const done: boolean = true;

// 숫자 배열의 경우
const numbers: number[] = [1,2,3];

// 문자열 배열의 경우
const messages: string[] = ['하나', '둘', '셋'];

// 문자열 배열에 숫자 요소를 추가하면 에러
// messages.push(1);

// 둘 중 하나의 경우
let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;


// 특정 문자열을 지정
let color: 'red' | 'orange' | 'pink' = 'red';
color = 'pink';

// 함수
// 함수에 파라미터에 타입을 선언하지 않으면 기본적으로 any(아무 값 허용)이 설정된다.
// 함수의 리턴 값에 대한 타입도 지정해줄 수 있다.
function sum(x: number, y: number): number {
  return x + y;
}

// 값을 받는 변수가 있다면 그 함수의 리턴값으로 추론이 되어
// 할당 받는 변수의 타입을 따로 지정하지 않아도 지정된다.
const result = sum(1, 2);

function sumArray(numbers: number[]): number {
  // numbers를 숫자 요소로 이루어진 배열로 타입을 지정하게되면
  // reduce의 콜백함수의 인수도 number 타입으로 자동 추론된다.
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const total = sumArray([1,2,3,4,5]);

console.log(total);

// 함수의 리턴값이 없다면 void로 설정된다.
function returnNothing(): void {
  console.log('hello world');
}

returnNothing();

// 리턴 타입이 둘 중의 하나의 경우
function returnStringOrNumber(): string | number {
  return 'hello world'
}

returnStringOrNumber();