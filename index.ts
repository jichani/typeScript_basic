// 1. 타입의 종류
// number
// string
// boolean
// null
// undefined
// any(기타)(잘사용하진 않는다.)

let a:number = 3;
let b:string = "love you";

// 아무 타입이나 정해주는 것도 가능하다.
let c:any = 3;
c = "asd";

// 다양한 타입을 정해주는 것도 가능하다. (Union type)
let d : number | string = "asdsd";
d = 123;

// 배열을 지정해주는 경우
let e:string[] = ["apple", "banana"];

let f:number[] = [3, 6];

// 객체를 지정해주는 경우 (?는 옵션)
let g:{name? : string} = {}

// 함수의 파라미터의 타입과 리턴 타입을 정할 수도 있다.
function addNumber (a:number, b:number):number {
  return a + b;
}

addNumber(3, 7);

// 타입을 변수에 담아서도 쓸 수 있다. (Type alias) (타입 작명은 대문자를 사용한다.)
type StringAndNumber = string | number;

let h : StringAndNumber = 123;

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john:Member = [123, true];

// object에 타입지정해야할 속성이 너무 많으면
type Members = {
  [key: string] : string,
}

let john2 : Members = { name: 'kim', age: '123'};

// class도 타입 지정 가능
class User {
  name : string;
  constructor(name : string) {
    this.name = name;
  }
}