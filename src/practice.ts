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